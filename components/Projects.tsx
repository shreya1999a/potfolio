"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "BookNest",
    subtitle: "Library Management Analytics Platform",
    description:
      "Full-stack platform for library management with smart book retrieval and data analytics. Features MongoDB aggregation pipelines for efficient search, A/B-tested recommendation features, and role-based authentication for admins and users.",
    tags: ["React.js", "Node.js", "MongoDB", "AWS EC2", "AWS S3", "A/B Testing"],
    github: "https://github.com/",
    demo: null,
    accentColor: "#6366f1",
  },
  {
    title: "Investire",
    subtitle: "Startup–Investor Intelligence Platform",
    description:
      "Intelligence platform connecting startups with investors. A/B-tested navigation and dashboards, deep analytics on funding trends, investor behavior, and user engagement metrics. Full-stack with cloud deployment.",
    tags: ["React.js", "Node.js", "MongoDB", "AWS", "A/B Testing", "Analytics"],
    github: "https://github.com/",
    demo: null,
    accentColor: "#8b5cf6",
  },
  {
    title: "Cyber Breach Predictor",
    subtitle: "ML for Cybersecurity Risk",
    description:
      "ML pipeline predicting cyber hacking breaches using classification models. Includes feature engineering, anomaly detection, model explainability, and a React.js dashboard for interactive risk visualization.",
    tags: [
      "Python",
      "Scikit-learn",
      "React.js",
      "Feature Engineering",
      "Anomaly Detection",
      "NLP",
    ],
    github: "https://github.com/",
    demo: null,
    accentColor: "#22d3ee",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = section.querySelectorAll<HTMLElement>(".project-card");
          cards.forEach((card, i) => {
            card.style.transitionDelay = `${i * 120}ms`;
            card.classList.add("visible");
          });
          const headers = section.querySelectorAll<HTMLElement>(".fade-up");
          headers.forEach((el, i) => {
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
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-[#0f1220] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#6366f1]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up mb-16">
          <p
            className="text-sm font-medium text-[#6366f1] uppercase tracking-widest mb-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            04. Featured Projects
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p
            className="mt-3 text-[#8892b0] max-w-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            A selection of production-ready projects spanning ML systems, full-stack
            apps, and data platforms.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card fade-up gradient-border flex flex-col group hover:scale-[1.01] transition-transform duration-300"
              style={{ minHeight: "320px" }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 rounded-t-xl"
                style={{
                  background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + links */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold"
                    style={{
                      backgroundColor: `${project.accentColor}20`,
                      color: project.accentColor,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {project.title.charAt(0)}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-1.5 rounded-md text-[#8892b0] hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="p-1.5 rounded-md text-[#8892b0] hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs font-medium mb-3"
                  style={{ color: project.accentColor, fontFamily: "var(--font-mono)" }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-sm text-[#8892b0] leading-relaxed flex-1 mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs text-[#8892b0] bg-white/5"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
