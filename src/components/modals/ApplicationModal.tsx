"use client";

import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";
import { Modal } from "@/components/ui/Modal";
import { motion } from "framer-motion";
import { Mail, MessageSquareText, Phone, UserRound } from "lucide-react";
import { useState } from "react";

type ApplicationModalProps = {
  open: boolean;
  onClose: () => void;
};

const courses = [
  "Product Design Systems",
  "AI Automation for Creators",
  "Growth Marketing Lab",
  "Modern Frontend Mastery"
];

export function ApplicationModal({ open, onClose }: ApplicationModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [level, setLevel] = useState("Beginner");
  const [message, setMessage] = useState("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ea6034]">Apply now</p>
        <h3 className="mt-3 text-2xl font-semibold text-[#20140f] md:text-3xl">Start your application in 1 minute.</h3>
        <p className="mt-3 text-sm text-[#775f54]">
          Tell us where you are right now and we will help you choose the best path.
        </p>
      </div>

      <motion.form
        onSubmit={onSubmit}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.06, delayChildren: 0.08 }
          }
        }}
        className="grid gap-4"
      >
        {[
          <InputField
            key="fullName"
            label="Full Name"
            placeholder="Your full name"
            icon={<UserRound size={16} strokeWidth={1.8} />}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />,
          <InputField
            key="phone"
            label="Phone Number"
            placeholder="+1 555 123 4567"
            icon={<Phone size={16} strokeWidth={1.8} />}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />,
          <InputField
            key="email"
            label="Email"
            type="email"
            placeholder="you@email.com"
            icon={<Mail size={16} strokeWidth={1.8} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        ].map((field, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 }
            }}
          >
            {field}
          </motion.div>
        ))}

        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
          <label className="block space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#715d52]">Select Course</span>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="h-12 w-full rounded-2xl border border-[#efd8cc] bg-white/70 px-4 text-sm text-[#2c1f17] outline-none transition focus:border-[#f78f69] focus:shadow-[0_0_0_4px_rgba(255,143,105,0.18)]"
            >
              {courses.map((course) => (
                <option key={course}>{course}</option>
              ))}
            </select>
          </label>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
          <label className="block space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#715d52]">Experience Level</span>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="h-12 w-full rounded-2xl border border-[#efd8cc] bg-white/70 px-4 text-sm text-[#2c1f17] outline-none transition focus:border-[#f78f69] focus:shadow-[0_0_0_4px_rgba(255,143,105,0.18)]"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </label>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
          <InputField
            textarea
            label="Message (optional)"
            placeholder="Share your goals or what you want to achieve..."
            icon={<MessageSquareText size={16} strokeWidth={1.8} />}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          className="mt-2 flex flex-wrap justify-end gap-3"
        >
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Submit Application</Button>
        </motion.div>
      </motion.form>
    </Modal>
  );
}
