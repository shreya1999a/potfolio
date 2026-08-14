"use client";

import { useEffect, useRef } from "react";
import { Brain, Database, Cloud, Layers } from "lucide-react";

const highlights = [
  { icon: Brain, label: "LLM & GenAI Systems", color: "#6366f1" },
  { icon: Layers, label: "RAG & Multi-Agent Pipelines", color: "#8b5cf6" },
  { icon: Database, label: "Data Engineering", color: "#22d3ee" },
  { icon: Cloud, label: "AWS · GCP · Azure MLOps", color: "#6366f1" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#6366f1]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="fade-up mb-16">
          <p
            className="text-sm font-medium text-[#6366f1] uppercase tracking-widest mb-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            01. About Me
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Turning Data into{" "}
            <span className="gradient-text">Intelligence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-5">
            <p
              className="fade-up text-[#c8cfe8] leading-relaxed text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I&apos;m a Data Scientist and ML Engineer with 2+ years of experience
              building and deploying LLM applications, RAG pipelines, and
              production ML systems across AWS, GCP, and Azure. I specialise in
              end-to-end delivery—from raw data ingestion to scalable inference
              APIs.
            </p>
            <p
              className="fade-up text-[#c8cfe8] leading-relaxed text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              My work centres on multi-agent GenAI orchestration with
              LangChain/LangGraph, fine-tuning domain-specific LLMs with
              LoRA/PEFT, and rigorous MLOps practices—CI/CD, MLflow experiment
              tracking, Docker/Kubernetes deployment—so models actually make it
              to production.
            </p>
            <p
              className="fade-up text-[#c8cfe8] leading-relaxed text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I hold an MS in Computer Science from the University at Albany,
              SUNY (2024) and care deeply about translating complex technical
              results into clear business impact.
            </p>
          </div>

          {/* Highlight cards */}
          <div ref={cardsRef} className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, color }, i) => (
              <div
                key={label}
                className="fade-up gradient-border p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <p
                  className="text-sm font-medium text-[#c8cfe8] leading-snug"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
