"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("bishupandit07@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactItems = [
    {
      id: "name",
      title: "Name",
      value: "Tania Sharma",
      subtitle: "Full Stack Developer · Frontend Specialist",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      badge: "Developer",
    },
    {
      id: "email",
      title: "Email",
      value: "bishupandit07@gmail.com",
      subtitle: "Available for full-time roles & projects",
      link: "mailto:bishupandit07@gmail.com",
      actionText: "Send Email",
      isCopyable: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      badge: "Primary Contact",
    },
    {
      id: "phone",
      title: "Contact Number",
      value: "+91 98765 43210",
      subtitle: "Click to call directly",
      link: "tel:+919876543210",
      actionText: "Call / WhatsApp",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      badge: "Phone",
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/taniasha",
      subtitle: "Explore repositories, code, and contributions",
      link: "https://github.com/taniasha",
      actionText: "Visit GitHub",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      badge: "Source Code",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "tania-sharma-web-developer",
      subtitle: "Connect professionally and view full background",
      link: "https://www.linkedin.com/in/tania-sharma-web-developer/",
      actionText: "View Profile",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
          <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.991V9h3.114v1.561h.044c.434-.823 1.492-1.69 3.072-1.69 3.286 0 3.892 2.162 3.892 4.974v6.607zM5.337 7.433a1.806 1.806 0 110-3.612 1.806 1.806 0 010 3.612zm1.596 13.019H3.741V9h3.192v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      ),
      badge: "Professional",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden text-white border-t border-white/5">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-t from-purple-600/15 via-pink-600/10 to-transparent blur-[140px]"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Interested in working together or have any questions? Here are the best ways to reach me directly.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className={`bg-gradient-to-br from-gray-900/90 to-gray-900/50 border border-gray-800 hover:border-purple-500/50 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20 hover:-translate-y-1 flex flex-col justify-between ${
                item.id === "email" ? "md:col-span-2 lg:col-span-1 border-purple-500/30" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-800/60 px-2.5 py-1 rounded-full border border-gray-700/60">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  {item.title}
                </p>
                <p className="text-lg font-bold text-white break-words mb-2 group-hover:text-purple-300 transition-colors">
                  {item.value}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {item.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-gray-800/80 flex items-center gap-2">
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex-1 py-2.5 px-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 hover:from-purple-600/50 hover:to-pink-600/50 border border-purple-500/40 hover:border-purple-400 text-xs sm:text-sm font-semibold text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  >
                    <span>{item.actionText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}

                {item.isCopyable && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="py-2.5 px-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-xs font-medium text-gray-200 rounded-xl transition-all"
                    title="Copy Email"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                )}

                {!item.link && (
                  <div className="text-xs text-purple-300/80 font-medium py-1">
                    India · Open to Remote &amp; Relocation
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
