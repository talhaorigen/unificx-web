'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LifeBuoy, Search, MessageSquare, Phone, FileText, ArrowRight } from "lucide-react";

const categories = [
  { icon: MessageSquare, title: "Getting Started", count: "12 articles", desc: "Account setup, first agent, and basic configuration." },
  { icon: Phone, title: "Voice & Calling", count: "18 articles", desc: "Call routing, recording, voicemail, and SIP configuration." },
  { icon: LifeBuoy, title: "Troubleshooting", count: "24 articles", desc: "Common issues, error codes, and resolution guides." },
  { icon: FileText, title: "Billing & Account", count: "9 articles", desc: "Plans, invoices, payment methods, and account management." },
];

export default function HelpCenter() {
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
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">Help Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            How Can We <span className="gradient-text">Help?</span>
          </h1>
          {/* Search */}
          <div className="max-w-[500px] mx-auto mt-10">
            <div className="flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-6 py-4 backdrop-blur-md">
              <Search className="w-5 h-5 text-primary-foreground/40" />
              <input type="text" placeholder="Search for help articles..." className="bg-transparent text-primary-foreground text-[15px] placeholder:text-primary-foreground/30 outline-none w-full" />
            </div>
          </div>
        </div>
      </section>
      

      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[900px] mx-auto px-8">
          <div className="space-y-4">
            {categories.map((cat, i) => (
              <a key={i} href="#" className={`group flex items-center gap-6 p-7 rounded-2xl border border-border/80 bg-background hover-lift hover:border-border transition-all duration-500 reveal-hidden stagger-${Math.min(i + 1, 8)} ${isVisible ? "reveal-visible" : ""}`}>
                <div className="p-3 rounded-xl gradient-bg-subtle shrink-0">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-[17px] font-bold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                    <span className="text-[11px] text-muted-foreground/50 font-medium">{cat.count}</span>
                  </div>
                  <p className="text-[14px] text-muted-foreground">{cat.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <a href="/contact" className="gradient-bg text-primary-foreground font-bold px-8 py-3.5 rounded-full text-[15px] hover:opacity-90 transition-all inline-block">
              Contact Support
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
