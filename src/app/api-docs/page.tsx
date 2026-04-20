'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Terminal, Key, Webhook, BookOpen, ArrowRight } from "lucide-react";

const sections = [
  { icon: Terminal, title: "REST API", desc: "Complete CRUD operations for agents, calls, and analytics.", link: "#" },
  { icon: Webhook, title: "Webhooks", desc: "Real-time event notifications for call events, agent status, and more.", link: "#" },
  { icon: Key, title: "Authentication", desc: "API key management, OAuth 2.0, and JWT token authentication.", link: "#" },
  { icon: Code2, title: "SDKs", desc: "Official SDKs for JavaScript, Python, Go, Ruby, and Java.", link: "#" },
  { icon: BookOpen, title: "Quickstart", desc: "Get your first API call working in under 5 minutes.", link: "#" },
];

export default function APIDocs() {
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
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">API Reference</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            Build With <span className="gradient-text">Our API</span>
          </h1>
          <p className="text-[18px] text-primary-foreground/45 max-w-[520px] mx-auto leading-[1.75] font-medium">
            Everything you need to integrate UnifiCX into your stack.
          </p>
        </div>
      </section>
      

      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[900px] mx-auto px-8">
          {/* Code Preview */}
          <div className={`rounded-2xl bg-foreground border border-primary-foreground/10 p-8 mb-12 reveal-scale ${isVisible ? "reveal-visible" : ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <pre className="text-[13px] text-primary-foreground/70 font-mono overflow-x-auto">
{`curl -X POST https://api.unificx.com/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Support Agent",
    "language": "en",
    "voice": "professional-female",
    "knowledge_base": "kb_abc123"
  }'`}
            </pre>
          </div>

          <div className="space-y-4">
            {sections.map((s, i) => (
              <a key={i} href={s.link} className={`group flex items-center gap-6 p-6 rounded-2xl border border-border/80 bg-background hover-lift hover:border-border transition-all duration-500 reveal-hidden stagger-${Math.min(i + 1, 8)} ${isVisible ? "reveal-visible" : ""}`}>
                <div className="p-3 rounded-xl gradient-bg-subtle shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-[14px] text-muted-foreground">{s.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
