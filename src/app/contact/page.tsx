"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        {/* Ambient Radial Lights */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-purple-600/20 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-pink-600/20 blur-[130px]"
        />

        <div className="w-full max-w-xl mx-auto relative z-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Contact Me
            </h1>
            <p className="text-xs sm:text-sm text-gray-400">
              Have a project, role, or collaboration in mind? Reach out anytime!
            </p>
          </motion.div>

          {/* THE SINGLE ALL-IN-ONE CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="group relative bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-950/90 border border-gray-800 hover:border-purple-500/50 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-purple-950/20 transition-all duration-500"
          >
            {/* Top Card Header: Profile Info */}
            <div className="flex items-center gap-4 pb-6 border-b border-gray-800/80">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 p-[1.5px] shadow-lg shrink-0">
                <div className="w-full h-full bg-black rounded-xl flex items-center justify-center font-black text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  TS
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    Tania Sharma
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-semibold text-purple-300">
                    Full Stack
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Contact Rows */}
            <div className="divide-y divide-gray-800/70 py-2">
              {/* Email Row */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/row">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center shrink-0 text-pink-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">
                      Email
                    </span>
                    <a
                      href="mailto:taniaasharma28@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors break-all"
                    >
                      taniaasharma28@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Number Row */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/row">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center shrink-0 text-emerald-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">
                      Contact Number
                    </span>
                    <a
                      href="tel:+916284253975"
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      +91 6284253975
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub Row */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/row">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center shrink-0 text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">
                      GitHub
                    </span>
                    <a
                      href="https://github.com/taniasha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors"
                    >
                      github.com/taniasha
                    </a>
                  </div>
                </div>

                <div className="pl-13 sm:pl-0">
                  <a
                    href="https://github.com/taniasha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-xs font-semibold text-gray-200 transition-all hover:text-white"
                  >
                    <span>View</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* LinkedIn Row */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/row">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center shrink-0 text-blue-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.991V9h3.114v1.561h.044c.434-.823 1.492-1.69 3.072-1.69 3.286 0 3.892 2.162 3.892 4.974v6.607zM5.337 7.433a1.806 1.806 0 110-3.612 1.806 1.806 0 010 3.612zm1.596 13.019H3.741V9h3.192v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">
                      LinkedIn
                    </span>
                    <a
                      href="https://www.linkedin.com/in/tania-sharma-web-developer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      tania-sharma-web-developer
                    </a>
                  </div>
                </div>

                <div className="pl-13 sm:pl-0">
                  <a
                    href="https://www.linkedin.com/in/tania-sharma-web-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-xs font-semibold text-blue-300 transition-all hover:text-white"
                  >
                    <span>Connect</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Card Footer Note */}
            <div className="pt-5 mt-2 border-t border-gray-800/80 text-center">
              <span className="inline-flex items-center gap-2 text-xs text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                India · Available for Remote &amp; On-Site Opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
