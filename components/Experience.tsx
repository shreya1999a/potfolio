"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "GenAI/ML Data Engineer",
    company: "Cortracker Inc",
    location: "Irving, TX",
    period: "Jan 2025 – Present",
    current: true,
    bullets: [
      "Designed and deployed Retrieval-Augmented Generation (RAG) pipelines integrating GPT-4, Claude, LLaMA, and Falcon via LangChain, with Hugging Face Transformers for embeddings and Pinecone vector search to power clinical knowledge retrieval and automated NER for diagnoses, medications, and procedures from EHR data.",
      "Built a multi-agent GenAI system with LangGraph to orchestrate patient risk stratification, readmission prediction, and disease progression forecasting workflows on top of Random Forest, XGBoost, and Keras/TensorFlow Neural Network models, using SHAP/LIME to explain model outputs for clinical stakeholders.",
      "Fine-tuned domain-specific LLMs using LoRA/PEFT techniques on Azure CUDA VMs for clinical note summarization and HIPAA-compliant PHI de-identification, improving accuracy while reducing manual documentation time.",
      "Deployed LLM and ML models to production on AWS SageMaker and ECS Fargate with Cognito-based authentication, and on GCP Vertex AI/GKE with BigQuery and Cloud Functions for scalable fine-tuning, data processing, and inference; monitored deployments with Prometheus for real-time performance and latency tracking.",
      "Automated ETL/streaming pipelines with Kafka, Spark, and Databricks for real-time multi-source healthcare data, and used Snowflake for centralized data warehousing; integrated FHIR standards for interoperability.",
      "Built Power BI dashboards for patient risk scores and treatment outcomes, and conducted A/B testing of AI-powered patient engagement tools, measuring improvements in communication and appointment adherence.",
    ],
    tags: [
      "LangChain", "LangGraph", "GPT-4", "RAG", "Pinecone",
      "LoRA/PEFT", "AWS SageMaker", "GCP Vertex AI", "Kafka", "Spark", "Databricks", "Snowflake",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = section.querySelectorAll<HTMLElement>(".fade-up");
          els.forEach((el, i) => {
            el.style.transitionDelay = `${i * 120}ms`;
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
    <section id="experience" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#6366f1]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="fade-up mb-16">
          <p
            className="text-sm font-medium text-[#6366f1] uppercase tracking-widest mb-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            03. Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Work <span className="gradient-text">History</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#8b5cf6] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="fade-up relative pl-16 md:pl-20">
                <div className="absolute left-4 md:left-6 top-1 w-5 h-5 flex items-center justify-center">
                  <div className="relative w-4 h-4">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-[#6366f1] animate-ping opacity-30" />
                    )}
                    <span className="relative block w-4 h-4 rounded-full border-2 border-[#6366f1] bg-[#0a0b14]" />
                  </div>
                </div>

                <div className="gradient-border p-6 sm:p-8 hover:glow-blue transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-[#a5b4fc] font-medium text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {exp.company}
                        <span className="text-[#8892b0] font-normal"> · {exp.location}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {exp.current && (
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#22d3ee]/15 text-[#22d3ee] border border-[#22d3ee]/30"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          Current
                        </span>
                      )}
                      <span
                        className="text-sm text-[#8892b0]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex gap-3 text-sm text-[#c8cfe8] leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#6366f1]/10 text-[#a5b4fc] border border-[#6366f1]/20"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
