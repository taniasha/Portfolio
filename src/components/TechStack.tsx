"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", color: "text-cyan-400" },
      { name: "Next.js", color: "text-white" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Tailwind CSS", color: "text-teal-400" },
      { name: "Framer Motion", color: "text-pink-400" },
      { name: "HTML5 & CSS3", color: "text-orange-400" },
      { name: "Bootstrap", color: "text-purple-400" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", color: "text-emerald-400" },
      { name: "Express.js", color: "text-gray-300" },
      { name: "MongoDB Atlas", color: "text-green-500" },
      { name: "Mongoose", color: "text-red-400" },
      { name: "REST APIs", color: "text-blue-400" },
      { name: "JWT Auth", color: "text-purple-400" },
    ],
  },
  {
    title: "Cloud & Dev Tools",
    skills: [
      { name: "Git", color: "text-orange-500" },
      { name: "GitHub", color: "text-white" },
      { name: "Netlify", color: "text-cyan-400" },
      { name: "Vercel", color: "text-white" },
      { name: "Render", color: "text-emerald-300" },
      { name: "Postman", color: "text-orange-400" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden text-white border-t border-white/5">
      {/* Background ambient grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Ambient radial lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px]"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-widest font-semibold text-purple-400 mb-2">
            Skills &amp; Technologies
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            My Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            The core frameworks, libraries, and tools I use to build modern full-stack web applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: EASE }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20"
            >
              <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group px-3.5 py-2.5 rounded-xl bg-gray-950/70 border border-gray-800 hover:border-purple-500/50 hover:bg-purple-950/20 transition-all duration-300 flex items-center gap-2.5 cursor-default hover:shadow-md hover:shadow-purple-500/10"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
