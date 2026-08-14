"use client";

import { useEffect, useRef } from "react";
import { Mail, ArrowDown } from "lucide-react";

// Brand icons not in this lucide-react version
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Animate children in on mount
    const children = Array.from(el.querySelectorAll<HTMLElement>(".hero-anim"));
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(28px)";
      child.style.transition = `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          child.style.opacity = "1";
          child.style.transform = "translateY(0)";
        });
      });
    });
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#6366f1]/8 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#22d3ee]/4 blur-[160px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="hero-anim inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[#a5b4fc] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="hero-anim text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-white">Shreya Reddy</span>
          <br />
          <span className="gradient-text">Lethakula</span>
        </h1>

        {/* Title / Tagline */}
        <p
          className="hero-anim text-lg sm:text-xl font-medium text-[#a5b4fc] mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          AI/ML Engineer&nbsp;&nbsp;•&nbsp;&nbsp;Data Engineer&nbsp;&nbsp;•&nbsp;&nbsp;GenAI Systems Builder
        </p>

        {/* Subheading */}
        <p
          className="hero-anim text-base sm:text-lg text-[#8892b0] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Building production-grade LLM, RAG, and multi-agent AI systems that
          turn data into decisions.
        </p>

        {/* CTA Buttons */}
        <div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => handleScroll("projects")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:opacity-90 hover:shadow-lg hover:shadow-[#6366f1]/30 transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm border border-[#6366f1]/50 text-[#a5b4fc] hover:bg-[#6366f1]/10 hover:border-[#6366f1] transition-all duration-200 text-center"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Download Resume
          </a>
          <button
            onClick={() => handleScroll("contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm border border-[#1e2540] text-[#8892b0] hover:text-white hover:border-[#8892b0]/50 hover:bg-white/5 transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="hero-anim flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/shreyareddyml17/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group p-3 rounded-xl border border-[#1e2540] bg-[#0f1220] hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 transition-all duration-200"
          >
            <span className="text-[#8892b0] group-hover:text-[#a5b4fc] transition-colors">
              <LinkedinIcon size={20} />
            </span>
          </a>
          <a
            href="mailto:shreyaai774@gmail.com"
            aria-label="Email"
            className="group p-3 rounded-xl border border-[#1e2540] bg-[#0f1220] hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 transition-all duration-200"
          >
            <Mail
              size={20}
              className="text-[#8892b0] group-hover:text-[#a5b4fc] transition-colors"
            />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group p-3 rounded-xl border border-[#1e2540] bg-[#0f1220] hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 transition-all duration-200"
          >
            <span className="text-[#8892b0] group-hover:text-[#a5b4fc] transition-colors">
              <GithubIcon size={20} />
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#8892b0] hover:text-[#a5b4fc] transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
