'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Scale, Shield, FileText, Globe } from "lucide-react";

const policies = [
  { icon: Shield, title: "Privacy Policy", desc: "How we collect, use, and protect your personal information.", updated: "Mar 2026" },
  { icon: FileText, title: "Terms of Service", desc: "The terms and conditions governing your use of UnifiCX services.", updated: "Mar 2026" },
  { icon: Globe, title: "GDPR Compliance", desc: "Our commitment to data protection under the EU General Data Protection Regulation.", updated: "Feb 2026" },
  { icon: Scale, title: "Acceptable Use Policy", desc: "Guidelines for appropriate use of UnifiCX platform and services.", updated: "Jan 2026" },
];

export default function Legal() {
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
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            Legal & <span className="gradient-text">Compliance</span>
          </h1>
          <p className="text-[18px] text-primary-foreground/45 max-w-[520px] mx-auto leading-[1.75] font-medium">
            Transparency, privacy, and trust — the foundation of everything we build.
          </p>
        </div>
      </section>
      

      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[900px] mx-auto px-8 space-y-4">
          {policies.map((p, i) => (
            <a key={i} href="#" className={`group flex items-center gap-6 p-7 rounded-2xl border border-border/80 bg-background hover-lift hover:border-border transition-all duration-500 reveal-hidden stagger-${Math.min(i + 1, 8)} ${isVisible ? "reveal-visible" : ""}`}>
              <div className="p-3 rounded-xl gradient-bg-subtle shrink-0">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-[14px] text-muted-foreground">{p.desc}</p>
              </div>
              <span className="text-[12px] text-muted-foreground/40 shrink-0">Updated {p.updated}</span>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
