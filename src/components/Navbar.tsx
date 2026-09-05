"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div
        className={`max-w-5xl mx-auto rounded-full backdrop-blur-xl transition-all duration-300 border border-white/10 px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg ${
          scrolled ? "bg-black/85 shadow-purple-950/20" : "bg-black/60"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-2 font-bold text-white tracking-wide group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 p-[1.5px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              TS
            </div>
          </div>
          <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Tania Sharma
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <a
            href="#"
            className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            About
          </a>
          <a
            href="#work"
            className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            Work
          </a>
          <a
            href="#skills"
            className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            Contact
          </a>
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/taniasha"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="w-9 h-9 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/30 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            id="nav-contact"
            className="text-xs sm:text-sm font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 hover:from-purple-600/50 hover:to-pink-600/50 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-gray-300 hover:text-white p-1"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
          >
            About
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 text-sm text-purple-300 font-semibold hover:text-white rounded-lg hover:bg-white/5"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center text-xs font-semibold text-white py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
