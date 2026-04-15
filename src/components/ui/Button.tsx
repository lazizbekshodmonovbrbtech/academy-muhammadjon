"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children?: ReactNode;
};

export function Button({ variant = "primary", icon, className = "", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9c7a]/70";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-[#f05b2d] via-[#ff7f55] to-[#ff9a79] text-white shadow-[0_18px_30px_-20px_rgba(240,91,45,0.85)] hover:shadow-[0_26px_40px_-20px_rgba(240,91,45,0.8)]",
    secondary:
      "border border-[#f3cfbf] bg-white/85 text-[#2a1c14] hover:border-[#eaad90] hover:bg-white",
    ghost: "text-[#4b372d] hover:bg-white/70"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </motion.button>
  );
}
