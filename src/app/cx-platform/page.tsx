'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductCTA from "@/components/product/ProductCTA";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Phone, Brain, MessageSquare, Hash, BarChart3, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const modules = [
  { icon: Phone, tag: "Infrastructure", title: "Cloud PBX", desc: "Enterprise-grade cloud phone system with IVR, call routing, and real-time monitoring.", link: "/cloud-pbx", image: "/assets/screenshot-phone-numbers.png" },
  { icon: Brain, tag: "AI Automation", title: "AI Voice Agents", desc: "Voice-first AI that answers every call, understands intent, and takes real action.", link: "/ai-agents", image: "/assets/screenshot-voice-agents.png" },
  { icon: MessageSquare, tag: "AI Automation", title: "AI Chat Agents", desc: "Intelligent chat agents across WhatsApp, SMS, and web — 24/7 automated.", link: "/ai-chat-agents", image: "/assets/screenshot-chat-agents.png" },
  { icon: Hash, tag: "Numbers", title: "Smart Numbers", desc: "Virtual phone numbers in 100+ countries with intelligent routing.", link: "/smart-numbers", image: "/assets/screenshot-phone-numbers.png" },
  { icon: BarChart3, tag: "Quality", title: "Call Evaluation", desc: "AI scores every call on empathy, compliance, resolution, and clarity.", link: "/call-evaluation", image: "/assets/screenshot-analytics.png" },
  { icon: Sparkles, tag: "Intelligence", title: "Analytics", desc: "Real-time dashboards tracking volume, sentiment, performance, and anomalies.", link: "/cx-analytics", image: "/assets/screenshot-analytics.png" },
];

function ModulesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div ref={parallaxRef} className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-foreground leading-[1.08] tracking-[-0.025em] mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            Six modules. <span className="gradient-text">One platform.</span>
          </h2>
          <p data-speed="0.04" className={`text-[17px] text-muted-foreground max-w-xl mx-auto leading-[1.7] reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
            Each module is powerful standalone. Together, they create a customer experience engine that learns and improves with every conversation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <Link href={m.link} key={i} className={`group rounded-2xl border border-border/80 bg-background hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:border-border hover-lift overflow-hidden transition-all duration-500 reveal-scale stagger-${Math.min(i + 2, 8)} ${isVisible ? "reveal-visible" : ""}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={m.image} alt={m.title} loading="lazy" width={1440} height={900} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-lg gradient-bg-subtle">
                    <m.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground tracking-[0.15em] uppercase">{m.tag}</span>
                </div>
                <h3 className="text-[18px] font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{m.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-[1.6] mb-3">{m.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary group-hover:gap-2.5 transition-all duration-300">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-foreground" />
      <div ref={parallaxRef} className="relative max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span data-speed="0.04" className={`text-[11px] font-bold text-primary-foreground/30 tracking-[0.2em] uppercase block mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>Platform Architecture</span>
            <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-primary-foreground leading-[1.08] tracking-[-0.025em] mb-6 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
              How everything <span className="gradient-text">connects.</span>
            </h2>
            <p className={`text-[16px] text-primary-foreground/45 leading-[1.75] reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
              UnifiCX is not a collection of tools — it's a single, unified intelligence layer that connects every part of your voice communication stack.
            </p>
          </div>
          <div className={`reveal-scale stagger-3 ${isVisible ? "reveal-visible" : ""}`}>
            <div className="rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
              <img src="/assets/screenshot-dashboard.png" alt="Platform Architecture" loading="lazy" width={1440} height={900} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const integrations = ["Salesforce", "HubSpot", "Zendesk", "Stripe", "Shopify", "Google Calendar", "Microsoft Teams", "Slack", "ServiceNow", "Freshdesk", "Zoho CRM", "Intercom"];

function IntegrationsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-section-alt overflow-hidden">
      <div ref={parallaxRef} className="max-w-[1200px] mx-auto px-8 text-center">
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.1] tracking-[-0.02em] mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Connects to everything you <span className="gradient-text">already use.</span>
        </h2>
        <p data-speed="0.04" className={`text-[17px] text-muted-foreground max-w-lg mx-auto leading-[1.7] mb-16 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
          200+ native integrations with CRM, helpdesk, e-commerce, and payment platforms.
        </p>
        <div className={`flex flex-wrap justify-center gap-3 reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
          {integrations.map((name) => (
            <span key={name} className="px-5 py-2.5 rounded-full border border-border/80 bg-background text-foreground font-semibold text-[13px] hover-lift transition-all duration-300 hover:border-primary/30">
              {name}
            </span>
          ))}
          <span className="px-5 py-2.5 rounded-full gradient-bg text-primary-foreground font-bold text-[13px]">+ 200 more</span>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { value: "99%", label: "Uptime SLA" },
    { value: "200+", label: "Integrations" },
    { value: "100+", label: "Countries" },
    { value: "40%", label: "Cost Reduction" },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className={`text-center reveal-scale stagger-${i + 1} ${isVisible ? "reveal-visible" : ""}`}>
              <div className="text-4xl lg:text-[56px] font-extrabold gradient-text mb-2 tracking-tight">{s.value}</div>
              <div className="text-[13px] text-muted-foreground font-semibold uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CXPlatform() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="UNIFICX / CX PLATFORM"
        title={<>One platform. <span className="gradient-text">Every voice.</span></>}
        description="Cloud PBX, AI Voice & Chat agents, Smart Numbers, Call Evaluation, and deep Analytics — unified into a single system."
        heroImage="/assets/screenshot-dashboard.png"
      />
      <ArchitectureSection />
      <ModulesSection />
      <IntegrationsSection />
      <StatsSection />
      <ProductCTA
        title={<>Ready to unify your <span className="gradient-text">customer experience?</span></>}
        subtitle="Start with any module. Scale to the full platform. 30-day free trial."
      />
      <Footer />
    </div>
  );
}
