import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreya Reddy Lethakula | AI/ML Engineer",
  description:
    "AI/ML Engineer & Data Engineer — building production-grade LLM, RAG, and multi-agent AI systems that turn data into decisions.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Data Engineer",
    "LLM",
    "RAG",
    "LangChain",
    "GenAI",
    "Machine Learning",
    "Shreya Reddy Lethakula",
  ],
  authors: [{ name: "Shreya Reddy Lethakula" }],
  openGraph: {
    title: "Shreya Reddy Lethakula | AI/ML Engineer",
    description:
      "Building production-grade LLM, RAG, and multi-agent AI systems that turn data into decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
