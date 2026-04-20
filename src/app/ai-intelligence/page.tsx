'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductShowcase from "@/components/product/ProductShowcase";
import ProductCTA from "@/components/product/ProductCTA";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Activity, Tag, Users, TrendingUp, ShieldCheck, Headphones } from "lucide-react";

function CallTypesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();
  const types = [
    { title: "Customer Calls", desc: "AI tracks CSAT, detects complaints proactively, ensures compliance, and shows what customers are actually calling about." },
    { title: "Internal Meetings", desc: "Automatically summarizes check-ins, extracts action items, tracks topics, and monitors engagement metrics." },
    { title: "Vendor Negotiations", desc: "Surface key commitments, price objections, and SLA promises during B2B calls across your organization." },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-section-alt">
      <div ref={parallaxRef} className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-3xl mb-14">
          <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-foreground leading-[1.08] tracking-[-0.025em] mb-6 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            We analyze <span className="gradient-text">EVERY</span> call.<br />Not just the AI ones.
          </h2>
          <p data-speed="0.04" className={`text-[17px] text-muted-foreground leading-[1.7] reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
            Because we own the phone system layer, we ingest, analyze, and map 100% of your voice data.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {types.map((t, i) => (
            <div key={i} className={`group p-8 rounded-2xl border border-border/80 bg-background hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:border-border hover-lift transition-all duration-500 reveal-scale stagger-${i + 2} ${isVisible ? "reveal-visible" : ""}`}>
              <h3 className="text-[18px] font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{t.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-[1.7]">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AIIntelligence() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="UNIFICX / AI INTELLIGENCE"
        title={<>Understand every conversation. <span className="gradient-text">In real-time.</span></>}
        description="Real-time sentiment, topic categorization, and anomaly detection across every call — not just AI ones."
        heroImage="/assets/screenshot-analytics.png"
        stat1={{ value: "10M+", label: "Calls analyzed monthly" }}
      />

      <CallTypesSection />

      <ProductFeatureGrid
        label="Core Modules"
        title={<>A module for <span className="gradient-text">every insight.</span></>}
        features={[
          { icon: Activity, title: "Real-Time Sentiment", desc: "Live scoring during calls with trend lines and immediate manager alerts." },
          { icon: Tag, title: "Topic Categorization", desc: "AI auto-labels every conversation. Accurate volume distribution across all topics." },
          { icon: Users, title: "Employee Performance", desc: "Per-agent insights including calls handled, sentiment, resolution rates, and compliance." },
          { icon: TrendingUp, title: "Trend Detection", desc: "Anomaly alerts: 'Billing complaints +47% this week'. Resolve before it escalates." },
          { icon: ShieldCheck, title: "Compliance Recording", desc: "Tamper-proof encrypted recordings with exact phrase detection and PII redaction." },
          { icon: Headphones, title: "Call Monitoring", desc: "Listen, whisper, and barge into live calls. Real-time coaching during conversations." },
        ]}
      />

      <ProductShowcase
        title={<>See the <span className="gradient-text">full picture.</span></>}
        description="Intelligence analytics dashboard with timeline forecasting, sentiment aggregation, and KPI leaderboards."
        image="/assets/screenshot-dashboard.png"
        badges={[
          { label: "Trend Alert", value: "Billing +47%" },
          { label: "High CSAT", value: "Agent Sarah L." },
          { label: "Compliance", value: "99.2%" },
        ]}
      />

      <ProductCTA
        title={<>Start analyzing <span className="gradient-text">every conversation.</span></>}
        subtitle="30-day free trial. Setup in 5 minutes."
      />
      <Footer />
    </div>
  );
}
