"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactLinks = [
  {
    IconComponent: Mail,
    label: "Email",
    value: "shreyaai774@gmail.com",
    href: "mailto:shreyaai774@gmail.com",
    color: "#6366f1",
  },
  {
    IconComponent: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/shreyareddyml17",
    href: "https://www.linkedin.com/in/shreyareddyml17/",
    color: "#0ea5e9",
  },
  {
    IconComponent: GithubIcon,
    label: "GitHub",
    value: "github.com/shreya",
    href: "https://github.com/",
    color: "#8b5cf6",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = section.querySelectorAll<HTMLElement>(".fade-up");
          els.forEach((el, i) => {
            el.style.transitionDelay = `${i * 100}ms`;
            el.classList.add("visible");
          });
          observer.unobserve(section);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (wire up to a real service like Resend/Formspree)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-[#0f1220] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#6366f1]/6 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up mb-16 text-center">
          <p
            className="text-sm font-medium text-[#6366f1] uppercase tracking-widest mb-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            06. Contact
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p
            className="text-[#8892b0] max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Have a project, role, or collaboration in mind? I&apos;d love to hear
            from you. Drop a message below or reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="fade-up">
              <h3
                className="text-base font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Reach me at
              </h3>
              <div className="space-y-3">
                {contactLinks.map(({ IconComponent, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#1e2540] bg-[#0a0b14] hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5 transition-all duration-200 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <IconComponent size={16} style={{ color }} />
                    </div>
                    <div>
                      <p
                        className="text-xs text-[#8892b0]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm text-[#c8cfe8] group-hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-up">
            {submitted ? (
              <div className="gradient-border p-8 flex flex-col items-center justify-center text-center h-full min-h-[320px]">
                <CheckCircle size={40} className="text-[#22d3ee] mb-4" />
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-sm text-[#8892b0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="gradient-border p-6 sm:p-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-[#8892b0] mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0b14] border border-[#1e2540] text-white placeholder-[#8892b0] text-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]/40 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-[#8892b0] mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0b14] border border-[#1e2540] text-white placeholder-[#8892b0] text-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]/40 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-[#8892b0] mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0b14] border border-[#1e2540] text-white placeholder-[#8892b0] text-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]/40 transition-colors resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:opacity-90 hover:shadow-lg hover:shadow-[#6366f1]/30 disabled:opacity-60 transition-all duration-200 cursor-pointer"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
