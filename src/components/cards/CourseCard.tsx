"use client";

import { motion } from "framer-motion";
import { Clock3, Signal, Star } from "lucide-react";

type CourseCardProps = {
  image: string;
  title: string;
  instructor: string;
  rating: string;
  level: string;
  duration: string;
};

export function CourseCard({ image, title, instructor, rating, level, duration }: CourseCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="glass group rounded-3xl p-4"
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-1 pb-1 pt-5">
        <h3 className="text-lg font-semibold text-[#22160f]">{title}</h3>
        <p className="mt-2 text-sm text-[#7d685c]">{instructor}</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-[#6f5c50]">
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/70 px-2.5 py-2">
            <Star size={14} strokeWidth={1.8} className="text-[#cf724e]" />
            {rating}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/70 px-2.5 py-2">
            <Clock3 size={14} strokeWidth={1.8} className="text-[#cf724e]" />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#fff1e8] px-2.5 py-2 font-medium text-[#d94d1f]">
            <Signal size={14} strokeWidth={1.8} />
            {level}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
