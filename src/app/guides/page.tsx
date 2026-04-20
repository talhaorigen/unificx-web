'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { BookMarked, ArrowRight } from "lucide-react";

const guides = [
  { title: "Getting Started with AI Agents", desc: "Deploy your first AI voice agent in under 30 minutes with this step-by-step guide.", tag: "Beginner", time: "15 min" },
  { title: "Building Custom Conversation Flows", desc: "Design multi-step workflows that handle complex customer scenarios.", tag: "Intermediate", time: "25 min" },
  { title: "Integrating with Your CRM", desc: "Connect Salesforce, HubSpot, or custom CRMs for personalized interactions.", tag: "Integration", time: "20 min" },
  { title: "Training AI on Your Knowledge Base", desc: "Import your docs, FAQs, and policies to build domain-specific AI expertise.", tag: "Setup", time: "10 min" },
  { title: "Advanced Analytics & Reporting", desc: "Unlock insights from every customer interaction with our analytics suite.", tag: "Analytics", time: "15 min" },
  { title: "Multi-Language Configuration", desc: "Configure AI agents to serve customers in 30+ languages seamlessly.", tag: "Advanced", time: "12 min" },
];

export default function Guides() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 bg-foreground" />
        <div className="hero-orb hero-orb--blue" />
        <div className="hero-orb hero-orb--purple" />
        <div className="relative max-w-[1100px] mx-auto px-8 w-full text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-md mb-10">
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">Guides & Tutorials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            Learn by <span className="gradient-text">Doing</span>
          </h1>
          <p className="text-[18px] text-primary-foreground/45 max-w-[520px] mx-auto leading-[1.75] font-medium">
            Step-by-step walkthroughs to help you get the most out of UnifiCX.
          </p>
        </div>
      </section>
      

      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="space-y-4">
            {guides.map((guide, i) => (
              <a key={i} href="#" className={`group flex items-center gap-6 p-6 rounded-2xl border border-border/80 bg-background hover-lift hover:border-border hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 reveal-hidden stagger-${Math.min(i + 1, 8)} ${isVisible ? "reveal-visible" : ""}`}>
                <div className="p-3 rounded-xl gradient-bg-subtle shrink-0">
                  <BookMarked className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-[17px] font-bold text-foreground group-hover:text-primary transition-colors">{guide.title}</h3>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{guide.tag}</span>
                  </div>
                  <p className="text-[14px] text-muted-foreground">{guide.desc}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[12px] text-muted-foreground/60">{guide.time}</span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
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
