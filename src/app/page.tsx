"use client";

import { CourseCard } from "@/components/cards/CourseCard";
import { InstructorCard } from "@/components/cards/InstructorCard";
import { Navbar } from "@/components/layout/Navbar";
import { ApplicationModal } from "@/components/modals/ApplicationModal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, BriefcaseBusiness, Rocket, Users } from "lucide-react";
import { useEffect, useState } from "react";

const courseFilters = ["All", "Design", "AI", "Business", "Development"];

const courses = [
  {
    title: "Product Design Systems",
    instructor: "Ava Chen",
    rating: "4.9",
    level: "Intermediate",
    duration: "8 weeks",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI Automation for Creators",
    instructor: "Noah Ibrahim",
    rating: "4.8",
    level: "Advanced",
    duration: "10 weeks",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Growth Marketing Lab",
    instructor: "Sofia Park",
    rating: "4.7",
    level: "Beginner",
    duration: "6 weeks",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Modern Frontend Mastery",
    instructor: "Liam Walker",
    rating: "4.9",
    level: "Intermediate",
    duration: "12 weeks",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  }
];

const featured = [
  {
    title: "Build a Startup-Ready Portfolio",
    tag: "Featured Path",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "From Junior to Senior Designer",
    tag: "Career Accelerator",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "AI Product Builder Bootcamp",
    tag: "New Cohort",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
  }
];

const testimonials = [
  {
    name: "Maya Thompson",
    role: "Product Designer @ Notion",
    quote:
      "I doubled my salary in under 8 months. The mentorship and project feedback felt unbelievably personalized.",
    salary: "$74k -> $138k",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Daniel Cruz",
    role: "Frontend Engineer @ Stripe",
    quote:
      "Every module was practical. I built production-grade projects and got offers from two global companies.",
    salary: "$66k -> $124k",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Aisha Rahman",
    role: "Growth Lead @ Canva",
    quote:
      "The instructors helped me shape my strategy thinking. I landed leadership roles much earlier than expected.",
    salary: "$58k -> $120k",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
  }
];

const instructors = [
  {
    name: "Elena Rossi",
    role: "Former Design Director, Airbnb",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Marcus Lee",
    role: "Staff Engineer, Figma",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Sara Kim",
    role: "Head of Growth, Linear",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80"
  }
];

const processSteps = [
  { title: "Discover", text: "Pick your goal and learning track in minutes.", icon: BookOpen },
  { title: "Learn", text: "Study with cinematic lessons and live sessions.", icon: Users },
  { title: "Build", text: "Ship portfolio-grade projects with mentor feedback.", icon: Rocket },
  { title: "Launch", text: "Get interview prep and direct hiring network access.", icon: BriefcaseBusiness }
];

const partners = ["Google", "Shopify", "Notion", "Stripe", "Canva", "Remote", "Figma", "Meta"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  const filteredCourses =
    activeFilter === "All" ? courses : courses.filter((course) => course.category === activeFilter);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative">
      <Navbar onApply={() => setApplicationOpen(true)} />
      <ApplicationModal open={applicationOpen} onClose={() => setApplicationOpen(false)} />

      <section id="about" className="noise relative isolate min-h-screen overflow-hidden bg-hero-radial px-6 pb-16 pt-28 md:px-12 lg:px-16">
        <motion.div
          aria-hidden
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -z-20 bg-[linear-gradient(130deg,rgba(255,171,132,0.2),rgba(255,255,255,0.08),rgba(255,121,75,0.14))] bg-[length:180%_180%]"
        />
        <motion.div style={{ y: heroY }} className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex rounded-full border border-[#ffd8c4] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e95c2f]"
              >
                Next generation learning
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="mt-8 max-w-3xl text-5xl font-semibold italic leading-[1.04] sm:text-6xl lg:text-7xl"
              >
                Learn Skills That <span className="headline-gradient">Actually Change Your Life</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-8 max-w-xl text-lg leading-relaxed text-[#6e5a4f]"
              >
                Stop collecting random courses. Build real-world skills, get mentored by experts, and
                create a career trajectory you are proud of.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button variant="secondary" className="px-8 py-4">
                  Start Learning
                </Button>
                <Button onClick={() => setApplicationOpen(true)} className="px-8 py-4">
                  Apply Now
                </Button>
              </motion.div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              {[
                { label: "Learners", value: "10,000+", position: "top-0 left-0" },
                { label: "Courses", value: "120+", position: "top-24 right-0" },
                { label: "Success Rate", value: "85%", position: "bottom-2 left-20" }
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6 + idx, repeat: Infinity, ease: "easeInOut" }}
                  className={`glass absolute w-44 rounded-2xl p-4 ${item.position}`}
                >
                  <p className="text-2xl font-semibold text-[#20140f]">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8f786b]">{item.label}</p>
                </motion.div>
              ))}
              <div className="glass ml-auto mt-14 rounded-[28px] p-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1300&q=80"
                  alt="Students collaborating"
                  className="h-[420px] w-full rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="Trusted Outcomes"
          title="Proof that learning should create measurable life change."
          description="Every metric reflects progress tied to employment, confidence, and career mobility."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value={10000} suffix="+" label="Students" icon={Users} />
          <StatCard value={120} suffix="+" label="Courses" icon={BookOpen} />
          <StatCard value={50} suffix="+" label="Mentors" icon={BriefcaseBusiness} />
          <StatCard value={85} suffix="%" label="Employment" icon={Rocket} />
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="Programs"
          title="Cohort-based courses designed for high-impact outcomes."
          description="Every path combines structured lessons, live mentorship, and project-based proof of work."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {courseFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeFilter === filter ? "text-[#e75a2f]" : "text-[#6f5c50]"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.span
                  layoutId="active-filter"
                  className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-[#e75a2f]"
                />
              )}
            </button>
          ))}
        </div>
        <motion.div
          layout
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          transition={{ staggerChildren: 0.08 }}
        >
          {filteredCourses.map((course) => (
            <motion.div key={course.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="Featured Tracks"
          title="Immersive learning journeys for ambitious builders."
          description="Swipe through premium pathways blending mentorship, portfolio projects, and direct hiring outcomes."
        />
        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3">
          {featured.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className="group relative min-w-[320px] snap-start overflow-hidden rounded-[28px] md:min-w-[520px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c120b]/75 via-[#1c120b]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block rounded-full bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[#6e4b3c]">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="instructors" className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="Top Instructors"
          title="Learn directly from people who built iconic products."
          description="From design leaders to senior engineers, every mentor brings practical systems and high standards."
          centered
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.name} {...instructor} />
          ))}
        </div>
      </section>

      <section id="partners" className="overflow-hidden py-20">
        <div className="mb-8 px-6 text-center md:px-12 lg:px-16">
          <SectionHeading
            eyebrow="Hiring Partners"
            title="Trusted by fast-growing teams worldwide."
            description="Our learners get hired by product-led companies that value practical skill and execution."
            centered
          />
        </div>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex w-[200%] gap-5"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="flex h-16 min-w-52 items-center justify-center rounded-2xl border border-white/70 bg-white/75 px-6 text-sm font-semibold tracking-[0.12em] text-[#7f6a5e] blur-[0.3px] transition hover:blur-none"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="Student Stories"
          title="Real career outcomes from motivated learners."
          description="A premium learning experience should produce visible transformation, not just content completion."
        />
        <div
          className="mt-10"
          onMouseEnter={() => setActiveTestimonial((prev) => prev)}
          onFocus={() => setActiveTestimonial((prev) => prev)}
        >
          <motion.article
            key={testimonials[activeTestimonial].name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="glass grid gap-8 rounded-[32px] p-6 md:grid-cols-[220px_1fr] md:p-10"
          >
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="h-56 w-full rounded-2xl object-cover md:h-full"
            />
            <div>
              <p className="text-xl leading-relaxed text-[#32251d] md:text-2xl">
                &quot;{testimonials[activeTestimonial].quote}&quot;
              </p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-[#1f1712]">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="mt-1 text-sm text-[#7a665b]">{testimonials[activeTestimonial].role}</p>
                <p className="mt-4 inline-flex rounded-full bg-[#fff1e7] px-4 py-2 text-sm font-semibold text-[#dc5429]">
                  {testimonials[activeTestimonial].salary}
                </p>
              </div>
            </div>
          </motion.article>
          <div className="mt-6 flex gap-2">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2.5 rounded-full transition ${
                  idx === activeTestimonial ? "w-10 bg-[#e75a2f]" : "w-3 bg-[#f1c7b4]"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="Learning Process"
          title="A four-step framework built for momentum."
          description="Simple process, premium execution. Every phase is optimized to help you move from learning to earning."
          centered
        />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0e7] text-sm font-semibold text-[#d64c1f]">
                  {index + 1}
                </span>
                <span className="rounded-full bg-white/70 p-2 text-[#d96b44]/90">
                  <step.icon size={16} strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#20140f]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#7d685c]">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-r from-[#f25d2f] via-[#ff835a] to-[#ff9c7a] px-8 py-16 text-center text-white shadow-soft md:px-16"
        >
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            You are one focused year away from an entirely different career.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/90">
            Join a global community of ambitious learners who choose depth, mentorship, and outcomes
            over passive content.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0.2)", "0 0 36px rgba(255,255,255,0.55)", "0 0 0px rgba(255,255,255,0.2)"] }}
            transition={{ duration: 3, repeat: Infinity }}
            onClick={() => setApplicationOpen(true)}
            className="mt-10 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-[#d34b20] shadow-[0_20px_40px_-18px_rgba(255,255,255,0.95)]"
          >
            Apply For The Next Cohort
          </motion.button>
        </motion.div>
      </section>

      <footer className="border-t border-[#f2ded3] px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-xl font-semibold text-[#1e1410]">Elevate</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#7b665b]">
              Premium online education for ambitious professionals who care about craft, growth, and
              real outcomes.
            </p>
          </div>
          {[
            ["Platform", "Courses", "Mentorship", "Community", "Pricing"],
            ["Company", "About", "Careers", "Press", "Contact"],
            ["Resources", "Blog", "Guides", "Scholarships", "Help Center"]
          ].map((column) => (
            <div key={column[0]}>
              <p className="text-sm font-semibold text-[#2b1d15]">{column[0]}</p>
              <ul className="mt-4 space-y-3 text-sm text-[#7d685c]">
                {column.slice(1).map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-[#1f1712]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
