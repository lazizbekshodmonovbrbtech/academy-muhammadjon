"use client";

import { animate, motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  icon: LucideIcon;
};

export function StatCard({ value, suffix = "", label, icon: Icon }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.25,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v))
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-3xl p-6"
    >
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold text-[#1f1712] sm:text-4xl">
          {count.toLocaleString()}
          {suffix}
        </p>
        <span className="rounded-full bg-[#fff1e9] p-2.5 text-[#d96b44]/90">
          <Icon size={18} strokeWidth={1.8} />
        </span>
      </div>
      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#8c7669]">{label}</p>
    </motion.div>
  );
}
