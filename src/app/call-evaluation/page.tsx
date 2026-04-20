'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductUseCases from "@/components/product/ProductUseCases";
import ProductShowcase from "@/components/product/ProductShowcase";
import ProductCTA from "@/components/product/ProductCTA";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import { Star, FileText, ShieldCheck, Trophy, BookOpen, TrendingUp } from "lucide-react";

export default function CallEvaluation() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="CX PLATFORM / CALL EVALUATION"
        title={<>Score every call. <span className="gradient-text">Automatically.</span></>}
        description="AI evaluates 100% of calls across empathy, compliance, resolution speed, and clarity. Every call gets a quality score, every agent gets actionable coaching."
        heroImage="/assets/screenshot-analytics.png"
        stat1={{ value: "100%", label: "Call Coverage" }}
        stat2={{ value: "94/100", label: "Avg Empathy Score" }}
      />

      <ProductSplitSection
        label="What it does"
        title={<>From listening manually — to <span className="gradient-text">AI doing it instantly.</span></>}
        description="Call Evaluation uses advanced NLP to analyze every transcript in real-time. It scores performance, flags compliance violations, and builds coaching reports."
        bullets={[
          "100% call coverage — not random 2% sampling",
          "Radar scoring: empathy, compliance, resolution, clarity, speed",
          "Transcript highlighting with emotion labels",
          "Auto-generated coaching summaries for managers",
        ]}
        image="/assets/screenshot-analytics.png"
        reversed
      />

      <ProductFeatureGrid
        title={<>Key <span className="gradient-text">capabilities.</span></>}
        features={[
          { icon: Star, title: "AI Quality Scoring", desc: "Multi-dimensional scoring 0–100 with full justification per dimension." },
          { icon: FileText, title: "Transcript Analysis", desc: "Full transcripts with highlighted key phrases, emotion labels, and critical moments." },
          { icon: ShieldCheck, title: "Compliance Detection", desc: "Required-phrase detection, script adherence, and PCI/HIPAA violation alerts." },
          { icon: Trophy, title: "Agent Leaderboard", desc: "Rank agents by quality, track improvement trends, identify top performers." },
          { icon: BookOpen, title: "Coaching Reports", desc: "AI-generated coaching summaries with specific call examples and improvements." },
          { icon: TrendingUp, title: "Trend Analytics", desc: "Quality trends by team, campaign, or individual — with anomaly detection." },
        ]}
      />

      <ProductUseCases
        title={<>Use <span className="gradient-text">cases.</span></>}
        cases={[
          { title: "QA Automation", desc: "Replace manual call listening with AI that evaluates every call against your scorecard." },
          { title: "Compliance Auditing", desc: "Ensure every agent follows required scripts and regulatory phrases." },
          { title: "Agent Coaching", desc: "Data-driven coaching recommendations instead of subjective feedback." },
        ]}
      />

      <ProductShowcase
        title={<>See the scoring <span className="gradient-text">engine.</span></>}
        description="Split-screen transcript analysis with radar-chart scoring, emotion detection, and coaching insights."
        image="/assets/screenshot-dashboard.png"
        badges={[
          { label: "Empathy", value: "94/100" },
          { label: "Compliance", value: "98/100" },
          { label: "Resolution", value: "91/100" },
        ]}
      />

      <ProductCTA
        title={<>Every call scored. Every agent <span className="gradient-text">coached.</span></>}
        subtitle="30-day free trial. No credit card required."
      />
      <Footer />
    </div>
  );
}
