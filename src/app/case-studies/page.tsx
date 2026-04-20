'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { ArrowRight, TrendingUp } from "lucide-react";

const studies = [
  { industry: "Healthcare", company: "Regional Health System", metric: "60%", metricLabel: "Call Volume Reduction", summary: "200-clinic network automated patient scheduling and follow-ups, reducing phone burden on staff." },
  { industry: "Financial Services", company: "Digital Bank", metric: "75%", metricLabel: "Cost Reduction", summary: "Automated balance inquiries, card management, and fraud alerts for 2M+ customers." },
  { industry: "E-Commerce", company: "Fashion Retailer", metric: "3x", metricLabel: "CSAT Improvement", summary: "AI agents handle order tracking, returns, and sizing questions across voice and chat." },
  { industry: "Telecom", company: "Mobile Network Operator", metric: "55%", metricLabel: "AHT Reduction", summary: "Service activation, tech support, and billing inquiries automated at scale." },
  { industry: "Education", company: "State University", metric: "40%", metricLabel: "Call Reduction", summary: "Enrollment, financial aid, and student services automated during peak periods." },
  { industry: "Insurance", company: "Auto Insurance Provider", metric: "80%", metricLabel: "After-Hours Coverage", summary: "Claims intake, policy inquiries, and payment processing handled 24/7 by AI." },
];

export default function CaseStudies() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 bg-foreground" />
        <div className="hero-orb hero-orb--blue" />
        <div className="hero-orb hero-orb--purple" />
        <div className="relative max-w-[1100px] mx-auto px-8 w-full text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-md mb-10">
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            Real Results From<br /><span className="gradient-text">Real Customers</span>
          </h1>
          <p className="text-[18px] text-primary-foreground/45 max-w-[520px] mx-auto leading-[1.75] font-medium">
            See how companies across industries are transforming their customer experience with AI.
          </p>
        </div>
      </section>
      

      <section ref={ref} className="py-20 bg-background">
        <div ref={parallaxRef} className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {studies.map((study, i) => (
              <a key={i} href="#" className={`group block reveal-scale stagger-${Math.min(i + 1, 8)} ${isVisible ? "reveal-visible" : ""}`}>
                <div className="rounded-2xl border border-border/80 bg-background p-8 hover-lift hover:border-border hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold text-primary tracking-[0.15em] uppercase">{study.industry}</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[48px] font-extrabold gradient-text leading-none">{study.metric}</span>
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-[13px] font-bold text-muted-foreground/60 uppercase tracking-wide mb-4">{study.metricLabel}</p>
                  <p className="text-[15px] font-semibold text-foreground mb-2">{study.company}</p>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{study.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
