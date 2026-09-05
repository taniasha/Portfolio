"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-borderline py-3.5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a
          href="#"
          id="nav-logo"
          className="font-serif text-2xl font-bold tracking-tight text-primary hover:opacity-75 transition-opacity"
        >
          Tania<span className="text-primary font-serif">.</span>
        </a>

        <div className="flex items-center gap-5 sm:gap-7">
          <a
            href="#work"
            id="nav-work"
            className="text-sm font-medium text-muted hover:text-primary transition-colors relative group py-1"
          >
            Work
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#about"
            id="nav-about"
            className="text-sm font-medium text-muted hover:text-primary transition-colors relative group py-1"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/taniasha"
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
            aria-label="View on GitHub"
            className="text-muted hover:text-primary transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            href="mailto:hello@tania.dev"
            id="nav-contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium text-background bg-primary rounded-full hover:bg-neutral-800 hover:-translate-y-0.5 transition-all shadow-sm"
          >
            Get in Touch
          </a>
        </div>
      </nav>
    </header>
  );
}
