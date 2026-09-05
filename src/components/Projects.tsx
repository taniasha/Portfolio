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
    <section id="work" className="py-24 border-t border-borderline bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1.5px] bg-primary/40" />
            <span className="text-xs uppercase tracking-widest font-semibold text-muted">
              Featured Work
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4">
            Selected Projects
          </h2>
          <p className="text-base text-muted leading-relaxed">
            A showcase of full stack web applications built with a focus on UI polish, performant architectures, and clean Tailwind CSS design.
          </p>
        </motion.div>

        {/* Project Grid */}
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
              className="group bg-surface rounded-2xl border border-borderline overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-accentSoft/40">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-${project.id}-link`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-primary rounded-full text-xs font-semibold shadow-md hover:bg-background transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View Project
                    <svg
                      width="14"
                      height="14"
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
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-1">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-primary mb-2.5 group-hover:text-neutral-800">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-borderline/50">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium bg-background text-muted rounded-md border border-borderline/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
