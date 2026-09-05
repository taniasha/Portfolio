"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React & Next.js ",
  "Frontend Craftsman",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-black text-white"
    >
      {/* Background ambient grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Glowing radial gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] animate-pulse-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-600/15 blur-[120px] animate-pulse-slow"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text / Info Column */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gray-900/80 border border-purple-500/30 backdrop-blur-md mb-6 shadow-sm shadow-purple-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-purple-200">
                Full Stack Developer · Open to Work
              </span>
            </motion.div>

            {/* Intro text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <p className="text-xs sm:text-sm font-light text-gray-400 mb-1">
                Hello, I&apos;m
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
                  Tania Sharma
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="h-8 sm:h-10 flex items-center justify-center lg:justify-start mb-4"
            >
              <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-300">
                A{" "}
              </span>
              <span className="text-base sm:text-lg lg:text-xl font-semibold ml-1.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-5 sm:h-6 ml-1 bg-pink-500 animate-pulse" />
            </motion.div>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="text-gray-400 text-sm sm:text-base leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0"
            >
              Passionate software engineer crafting responsive, high-performance web applications.
              Specializing in the <span className="text-gray-200 font-medium">MERN stack, Next.js, and modern UI engineering</span>.
              Blending aesthetic polish with clean, scalable code to bring digital ideas to life.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="#work"
                id="hero-cta-work"
                className="group px-7 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <Link
                href="/contact"
                id="hero-cta-contact"
                className="px-7 py-3.5 border-2 border-purple-500/70 hover:border-purple-400 rounded-full flex items-center gap-2 text-sm font-semibold text-gray-200 transition-all duration-300 hover:bg-purple-950/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-sm hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
              </Link>
            </motion.div>

            {/* Social Icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3.5"
            >
              <a
                href="https://github.com/taniasha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 bg-gray-900/90 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-purple-950/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/tania-sharma-web-developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 bg-gray-900/90 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-purple-950/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.991V9h3.114v1.561h.044c.434-.823 1.492-1.69 3.072-1.69 3.286 0 3.892 2.162 3.892 4.974v6.607zM5.337 7.433a1.806 1.806 0 110-3.612 1.806 1.806 0 010 3.612zm1.596 13.019H3.741V9h3.192v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
              </a>

              <a
                href="mailto:bishupandit07@gmail.com"
                aria-label="Send Email"
                className="p-3 bg-gray-900/90 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-purple-950/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Visual / Glowing Aura Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="w-full lg:w-2/5 flex justify-center items-center relative"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 blur-2xl opacity-40 animate-pulse-slow"></div>

              {/* Ambient radial blur blobs */}
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-600/30 rounded-full blur-3xl animate-pulse-slow"></div>

              {/* Rotating dashed ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-purple-500/30 rounded-full animate-rotate-slow pointer-events-none"></div>

              {/* Floating accent badge: React */}
              <div className="absolute -top-4 -left-4 z-20 px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-purple-500/40 backdrop-blur-md shadow-lg shadow-purple-500/20 text-xs font-semibold text-purple-300 animate-float flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                React & Next.js
              </div>

              {/* Floating accent badge: Node & Mongo */}
              <div className="absolute -bottom-4 -right-4 z-20 px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-pink-500/40 backdrop-blur-md shadow-lg shadow-pink-500/20 text-xs font-semibold text-pink-300 animate-float flex items-center gap-1.5" style={{ animationDelay: "1.5s" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                MERN Stack
              </div>

              {/* Main Avatar / Portrait Frame */}
              <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden border-2 border-purple-500/40 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative shadow-2xl flex flex-col items-center justify-center p-5 text-center group">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-pink-500/10 to-transparent pointer-events-none" />

                {/* Developer Avatar Artwork */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 p-[2px] mb-3 shadow-xl">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-white bg-clip-text text-transparent">
                      TS
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-base font-bold text-white tracking-wide mb-0.5">
                    Tania Sharma
                  </p>
                  <p className="text-[11px] text-purple-300 font-medium">
                    Crafting Clean Code &amp; Modern UI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
