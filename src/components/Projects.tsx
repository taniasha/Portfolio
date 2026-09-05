"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/types/project";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-black relative overflow-hidden text-white border-t border-white/5">
      {/* Subtle grid background overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Ambient background lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 -left-24 w-96 h-96 rounded-full bg-pink-600/10 blur-[120px]"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-400"
            >
              <path d="M12 3l1.912 5.885h6.188l-5.007 3.638 1.912 5.885-5.005-3.637-5.006 3.637 1.912-5.885-5.007-3.638h6.188z" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-400">
              Featured Work
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-white mb-3">
            Selected Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Explore my recent full-stack web applications featuring high-performance architectures,
            modern APIs, responsive design, and live deployments.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              id={`project-${project.id}`}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/30"
            >
              {/* Shine sweep hover effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden z-20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-shine" />
              </div>

              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-950">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10">
                {/* Category Badge */}
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-purple-400 mb-1 block">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-gray-800/80">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium bg-gray-800/60 text-gray-300 rounded-full border border-gray-700/60 transition-colors group-hover:border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dual Action Buttons: Source Code & Live Demo */}
                <div className="flex items-center gap-2.5 pt-2">
                  {/* Source Code / GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-${project.id}-source`}
                    className="flex-1 py-2.5 px-3 bg-gray-900/90 text-gray-300 text-xs sm:text-sm font-medium rounded-xl flex items-center justify-center gap-1.5 hover:bg-gray-800 hover:text-white border border-gray-800 hover:border-purple-500/60 transition-all duration-300"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Code</span>
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-${project.id}-link`}
                    className="flex-1 py-2.5 px-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:from-purple-500 hover:to-pink-500 border border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  >
                    <span>Live Demo</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
