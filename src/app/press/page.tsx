'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Newspaper, Download, ArrowRight } from "lucide-react";

const releases = [
  { date: "Apr 8, 2026", title: "UnifiCX Launches Multi-Agent Orchestration for Enterprise", summary: "New capability enables multiple AI agents to collaborate on complex customer interactions in real-time." },
  { date: "Mar 22, 2026", title: "UnifiCX Raises $85M Series C to Accelerate Global Expansion", summary: "Funding led by Insight Partners will fuel expansion into APAC and EMEA markets." },
  { date: "Mar 1, 2026", title: "UnifiCX Named Leader in Gartner Magic Quadrant for CCaaS", summary: "Recognized for completeness of vision and ability to execute in AI-powered contact center solutions." },
  { date: "Feb 14, 2026", title: "UnifiCX Partners with Salesforce for Deep CRM Integration", summary: "Native integration delivers real-time customer context to AI agents during every interaction." },
];

export default function Press() {
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
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">Press</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            Newsroom
          </h1>
          <p className="text-[18px] text-primary-foreground/45 max-w-[520px] mx-auto leading-[1.75] font-medium">
            The latest news, announcements, and media resources from UnifiCX.
          </p>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center gap-2 border border-primary-foreground/15 text-primary-foreground/80 font-semibold px-7 py-3 rounded-full text-[14px] hover:bg-primary-foreground/8 transition-all backdrop-blur-sm">
              <Download className="w-4 h-4" /> Press Kit
            </a>
          </div>
        </div>
      </section>
      

      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[900px] mx-auto px-8">
          <div className="space-y-4">
            {releases.map((r, i) => (
              <a key={i} href="#" className={`group flex items-start gap-6 p-7 rounded-2xl border border-border/80 bg-background hover-lift hover:border-border transition-all duration-500 reveal-hidden stagger-${Math.min(i + 1, 8)} ${isVisible ? "reveal-visible" : ""}`}>
                <span className="text-[13px] text-muted-foreground/50 font-medium w-28 shrink-0 pt-1">{r.date}</span>
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold text-foreground group-hover:text-primary transition-colors mb-2">{r.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{r.summary}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
