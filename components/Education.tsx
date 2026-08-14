"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science, Computer Science",
    institution: "University at Albany, SUNY",
    period: "2022 – 2024",
    details: "Focus on Machine Learning, AI Systems, and Data Engineering.",
  },
];

const certifications = [
  {
    name: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS (Coursera)",
    category: "GenAI",
    color: "#6366f1",
  },
  {
    name: "MLOps | Machine Learning Operations",
    issuer: "Udemy",
    category: "MLOps",
    color: "#8b5cf6",
  },
  {
    name: "LangChain & LLM App Development: ChatGPT, OpenAI, RAG, Vector DBs",
    issuer: "Udemy",
    category: "LLM",
    color: "#22d3ee",
  },
  {
    name: "Foundations of AI and Machine Learning",
    issuer: "Microsoft (Coursera)",
    category: "AI/ML",
    color: "#6366f1",
  },
  {
    name: "AI and Machine Learning Algorithms and Techniques",
    issuer: "Microsoft (Coursera)",
    category: "AI/ML",
    color: "#8b5cf6",
  },
  {
    name: "Building Intelligent Troubleshooting Agents",
    issuer: "Microsoft (Coursera)",
    category: "GenAI",
    color: "#22d3ee",
  },
  {
    name: "Microsoft Azure for AI and Machine Learning",
    issuer: "Microsoft (Coursera)",
    category: "Cloud",
    color: "#6366f1",
  },
  {
    name: "Advanced AI and Machine Learning Techniques and Capstone",
    issuer: "Microsoft (Coursera)",
    category: "AI/ML",
    color: "#8b5cf6",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = section.querySelectorAll<HTMLElement>(".fade-up");
          els.forEach((el, i) => {
            el.style.transitionDelay = `${i * 80}ms`;
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up mb-16">
          <p
            className="text-sm font-medium text-[#6366f1] uppercase tracking-widest mb-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            05. Education & Certifications
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Learning &amp; <span className="gradient-text">Growth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center">
                <GraduationCap size={16} className="text-[#a5b4fc]" />
              </div>
              <h3
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Education
              </h3>
            </div>

            {education.map((edu) => (
              <div key={edu.degree} className="gradient-border p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h4
                      className="text-base font-bold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {edu.degree}
                    </h4>
                    <p
                      className="text-sm text-[#a5b4fc] mt-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {edu.institution}
                    </p>
                  </div>
                  <span
                    className="shrink-0 text-xs text-[#8892b0] mt-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {edu.period}
                  </span>
                </div>
                <p
                  className="text-sm text-[#8892b0] mt-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/20 flex items-center justify-center">
                <Award size={16} className="text-[#c4b5fd]" />
              </div>
              <h3
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="fade-up flex items-start gap-4 p-4 rounded-xl border border-[#1e2540] bg-[#0f1220] hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5 transition-all duration-200"
                >
                  <div
                    className="shrink-0 mt-0.5 px-2 py-0.5 rounded text-xs font-medium"
                    style={{
                      backgroundColor: `${cert.color}20`,
                      color: cert.color,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {cert.category}
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium text-[#c8cfe8] leading-snug"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {cert.name}
                    </p>
                    <p
                      className="text-xs text-[#8892b0] mt-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
