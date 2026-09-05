"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface EducationItem {
  id: string;
  type: "University" | "Schooling";
  levelBadge: string;
  degree: string;
  institution?: string;
  location?: string;
  duration: string;
  grade?: string;
  description?: string;
  highlights?: string[];
  gradient?: string;
}

const educationData: EducationItem[] = [
  {
    id: "university",
    type: "University",
    levelBadge: "Higher Education",
    degree: "Bachelor of Technology (B.Tech) ",
    institution: "DAV University",
    location: "India",
    duration: "2022-2026",
    grade: "8.5 CGP",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "senior-secondary",
    type: "Schooling",
    levelBadge: "(XII)",
    degree:"Senior Secondary (12th) — CBSE",
    institution: "Auckland Public School",
    location: "India",
    duration: "2021-2022",
    grade: "92%",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "secondary",
    type: "Schooling",
    levelBadge: "Secondary (X)",
    degree: "High School Matriculation (Class X) - CBSE",
    institution: "Auckland Public School",
    location: "India",
    duration: "2019-2020",
    grade: "91%",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-black relative overflow-hidden text-white border-t border-white/5"
    >
      {/* Background ambient grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Ambient radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-pink-600/10 blur-[140px]"
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
            Academic Background
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Education &amp; Qualifications
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            My educational journey covering university studies in Computer Science and foundational schooling.
          </p>
        </motion.div>

        {/* Education Timeline / Cards */}
        <div className="space-y-8 relative">
          {/* Vertical subtle accent line for timeline aesthetic on larger screens */}
          <div className="hidden md:block absolute left-[31px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent pointer-events-none" />

          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: EASE }}
              className="relative flex flex-col md:flex-row items-start gap-6 group"
            >
              {/* Timeline Icon Node */}
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 items-center justify-center flex-shrink-0 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 z-10">
                {item.type === "University" ? (
                  /* Graduation Cap Icon */
                  <svg
                    className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 14v7"
                    />
                  </svg>
                ) : (
                  /* School / Book Icon */
                  <svg
                    className="w-7 h-7 text-pink-400 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                )}
              </div>

              {/* Main Card */}
              <div className="flex-1 w-full bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/90 rounded-2xl p-6 sm:p-7 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20">
                {/* Header Row: Level Badge & Duration */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white shadow-sm`}
                    >
                      {item.levelBadge}
                    </span>
                    <span className="text-xs font-medium text-gray-400 bg-gray-800/80 px-2.5 py-0.5 rounded-full border border-gray-700/50">
                      {item.grade}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-purple-300 font-medium bg-purple-950/40 border border-purple-800/40 px-3 py-1 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-pink-400/90 mb-3 flex items-center gap-1.5">
                  <span>{item.institution}</span>
                  {item.location && (
                    <>
                      <span className="text-gray-600">·</span>
                      <span className="text-gray-400 text-xs">{item.location}</span>
                    </>
                  )}
                </p>

                {/* Description */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                {/* Key Highlights / Coursework */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-gray-800/70">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-2">
                      Key Highlights &amp; Focus:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
