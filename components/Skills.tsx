"use client";

import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    color: "#22d3ee",
    bgColor: "#22d3ee15",
    skills: ["Python", "R", "SQL", "Java", "C#", "JavaScript"],
  },
  {
    title: "AI/ML & LLMs",
    color: "#6366f1",
    bgColor: "#6366f115",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost",
      "Hugging Face Transformers",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Prompt Engineering",
      "LoRA / PEFT",
      "GPT-4",
      "LLaMA",
      "Falcon",
      "Claude",
    ],
  },
  {
    title: "Data & Visualization",
    color: "#8b5cf6",
    bgColor: "#8b5cf615",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI"],
  },
  {
    title: "Cloud & MLOps",
    color: "#f59e0b",
    bgColor: "#f59e0b15",
    skills: [
      "AWS (EC2, S3, SageMaker, Cognito, ECS Fargate)",
      "Azure (VMs, CUDA)",
      "GCP (GKE, BigQuery, Vertex AI, Cloud Functions)",
      "MLflow",
      "Kubeflow",
      "Airflow",
      "Prometheus",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    title: "Other",
    color: "#10b981",
    bgColor: "#10b98115",
    skills: [
      "Pinecone",
      "Apache Spark",
      "Kafka",
      "Snowflake",
      "A/B Testing",
      "NLP / NER",
      "SHAP / LIME",
    ],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-[#0f1220] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up mb-16">
          <p
            className="text-sm font-medium text-[#6366f1] uppercase tracking-widest mb-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            02. Technical Skills
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </div>

        {/* Category Cards */}
        <div className="space-y-8">
          {skillCategories.map(({ title, color, bgColor, skills }) => (
            <div
              key={title}
              className="fade-up gradient-border p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <h3
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "var(--font-heading)", color }}
                >
                  {title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      backgroundColor: bgColor,
                      borderColor: `${color}40`,
                      color: color === "#f59e0b" ? "#fcd34d" : color === "#10b981" ? "#6ee7b7" : color,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
