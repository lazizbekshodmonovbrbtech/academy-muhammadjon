"use client";

import { motion, useScroll } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

type NavbarProps = {
  onApply: () => void;
};

const menu = [
  { label: "Courses", href: "#courses" },
  { label: "Programs", href: "#featured" },
  { label: "Instructors", href: "#instructors" },
  { label: "Partners", href: "#partners" },
  { label: "About", href: "#about" }
];

export function Navbar({ onApply }: NavbarProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 14));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-10">
      <motion.div
        animate={{
          backdropFilter: scrolled ? "blur(18px)" : "blur(8px)",
          backgroundColor: scrolled ? "rgba(255, 250, 247, 0.86)" : "rgba(255, 250, 247, 0.58)"
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/65 px-4 shadow-[0_18px_30px_-28px_rgba(26,16,7,0.8)] md:px-6"
      >
        <a href="#" className="inline-flex items-center gap-2">
          <span className="rounded-xl bg-[#fff2ea] p-2 text-[#e85f33]">
            <GraduationCap size={16} strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold tracking-[0.12em] text-[#271b14]">ELEVATE</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium text-[#4f3b30] transition hover:text-[#241811]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#eb6338] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden px-4 md:inline-flex">
            Log in
          </Button>
          <Button onClick={onApply} className="px-5">
            Apply Now
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
