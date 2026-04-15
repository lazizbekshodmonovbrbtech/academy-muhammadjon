"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#ef5d35]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[#22160f] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-base leading-relaxed text-[#6f5c50] sm:text-lg">{description}</p>
    </motion.div>
  );
}
