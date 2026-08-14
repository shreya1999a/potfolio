"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0b14]/90 backdrop-blur-md border-b border-[#1e2540] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading font-bold text-lg tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="gradient-text">SRL</span>
          <span className="text-[#8892b0] text-sm font-normal ml-2 hidden sm:inline">
            / AI·ML Engineer
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white bg-[#6366f1]/20 text-[#a5b4fc]"
                      : "text-[#8892b0] hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm font-medium rounded-md border border-[#6366f1] text-[#a5b4fc] hover:bg-[#6366f1]/10 transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-[#8892b0] hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1220]/95 backdrop-blur-md border-b border-[#1e2540]">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-[#8892b0] hover:text-white hover:bg-white/5 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2.5 text-sm font-medium text-[#a5b4fc] border border-[#6366f1]/50 rounded-md text-center hover:bg-[#6366f1]/10 transition-colors"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
