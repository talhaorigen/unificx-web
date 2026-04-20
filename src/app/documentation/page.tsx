'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileCode, ArrowRight, BookOpen, Settings, Shield, Zap, Users, Globe } from "lucide-react";

const docs = [
  { icon: Zap, title: "Quick Start Guide", desc: "Get up and running with UnifiCX in under 10 minutes." },
  { icon: Settings, title: "Platform Configuration", desc: "Configure agents, workflows, integrations, and settings." },
  { icon: BookOpen, title: "Agent Training", desc: "Train your AI agents with knowledge bases and conversation flows." },
  { icon: Shield, title: "Security & Compliance", desc: "Encryption, access controls, and compliance documentation." },
  { icon: Users, title: "Team Management", desc: "User roles, permissions, and organization settings." },
  { icon: Globe, title: "Multi-Language Setup", desc: "Configure agents for multilingual customer support." },
];

export default function Documentation() {
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
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            Platform <span className="gradient-text">Docs</span>
          </h1>
          <p className="text-[18px] text-primary-foreground/45 max-w-[520px] mx-auto leading-[1.75] font-medium">
            Comprehensive guides and setup documentation for every feature.
          </p>
        </div>
      </section>
      

      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((doc, i) => (
              <a key={i} href="#" className={`group block rounded-2xl border border-border/80 bg-background p-8 hover-lift hover:border-border transition-all duration-500 reveal-scale stagger-${Math.min(i + 1, 8)} ${isVisible ? "reveal-visible" : ""}`}>
                <div className="p-3 rounded-xl gradient-bg-subtle inline-flex mb-5">
                  <doc.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-[17px] font-bold text-foreground group-hover:text-primary transition-colors mb-2">{doc.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{doc.desc}</p>
                <div className="flex items-center gap-2 text-primary text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-all">
                  Read docs <ArrowRight className="w-3.5 h-3.5" />
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
