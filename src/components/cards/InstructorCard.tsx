"use client";

import { motion } from "framer-motion";

type InstructorCardProps = {
  name: string;
  role: string;
  image: string;
};

export function InstructorCard({ name, role, image }: InstructorCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white p-4 shadow-soft"
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#22160f]">{name}</h3>
      <p className="text-sm text-[#7d685c]">{role}</p>
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#1f1712]/75 via-transparent to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="pointer-events-auto flex gap-3">
          {["X", "in", "ig"].map((icon) => (
            <button
              key={icon}
              className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1f1712]"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
