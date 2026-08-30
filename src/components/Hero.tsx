"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

const techStack = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript / TypeScript",
  "HTML5 & CSS3",
  "Node.js",
  "REST APIs",
  "Git & GitHub",
];

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16">
      {/* Subtle background ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#E8DFD3]/40 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#DFE5E8]/30 to-transparent blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow / Current Status */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-borderline shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-muted">
              Full Stack Intern · 6+ Months Experience
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="italic font-normal text-primary underline decoration-primary/20 decoration-wavy underline-offset-8">
              Tania.
            </span>
          </motion.h1>

          {/* Subtitle / Honest Story */}
          <motion.p
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-muted leading-relaxed mb-4 font-normal"
          >
            I&apos;m a passionate fresher and developer currently 6+ months into my software internship, with a strong focus on{" "}
            <strong className="text-primary font-medium">
              Frontend Development 
            </strong>
            .
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base text-subtle leading-relaxed mb-8 max-w-2xl"
          >
            Every day I&apos;m turning designs into clean, responsive React components, building full stack projects, and learning best practices in real-world web development.
          </motion.p>

          {/* Tech stack pills */}
          <motion.div
            variants={fadeUp}
            custom={0.38}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mb-10"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-accentSoft/60 text-primary/80 rounded-full border border-borderline/60"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div
            variants={fadeUp}
            custom={0.45}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              id="hero-cta-work"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-background bg-primary rounded-full hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              See My Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>

            <a
              href="mailto:hello@tania.dev"
              id="hero-cta-contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary bg-surface/80 hover:bg-surface border border-borderline rounded-full hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
