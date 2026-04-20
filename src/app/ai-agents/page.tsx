'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductUseCases from "@/components/product/ProductUseCases";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductShowcase from "@/components/product/ProductShowcase";
import ProductPlatformFlow from "@/components/product/ProductPlatformFlow";
import ProductCTA from "@/components/product/ProductCTA";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Brain, Globe, Zap, MessageSquare, Shield, Phone, MessageCircle, Smartphone, Monitor } from "lucide-react";
import { useState } from "react";

/* ── Audio Section ── */
const audioTabs = ["Reservation", "Order Status", "Technical Support", "Medical Appt"];

function AudioSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-section-alt">
      <div ref={parallaxRef} className="max-w-[900px] mx-auto px-8 text-center">
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-foreground leading-[1.08] tracking-[-0.025em] mb-14 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Hear the <span className="gradient-text">difference.</span>
        </h2>

        <div className={`flex flex-wrap justify-center gap-2 mb-10 reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
          {audioTabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-500 ${activeTab === i ? "gradient-bg text-primary-foreground shadow-lg shadow-primary/20" : "border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
            >{tab}</button>
          ))}
        </div>

        <div className={`rounded-2xl border border-border bg-background p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] reveal-scale stagger-3 ${isVisible ? "reveal-visible" : ""}`}>
          <div className="flex items-center justify-center gap-[3px] mb-5">
            {[...Array(50)].map((_, j) => (
              <div key={j} className="w-[2.5px] rounded-full bg-primary/40" style={{
                height: `${4 + Math.sin(j * 0.4 + activeTab * 2.5) * 20 + Math.cos(j * 0.25) * 10}px`,
                transition: "height 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              }} />
            ))}
          </div>
          <p className="text-[13px] text-muted-foreground/60">Click tabs to hear different AI conversation demos</p>
        </div>
      </div>
    </section>
  );
}

/* ── Omnichannel ── */
const channels = [
  { icon: Phone, label: "Voice", desc: "Inbound & outbound calls" },
  { icon: MessageCircle, label: "WhatsApp", desc: "Business API integration" },
  { icon: Smartphone, label: "SMS", desc: "Two-way messaging" },
  { icon: Monitor, label: "Web Chat", desc: "Branded widget" },
];

function OmnichannelSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div ref={parallaxRef} className="max-w-[1200px] mx-auto px-8 text-center">
        <span data-speed="0.04" className={`text-[11px] font-bold text-primary tracking-[0.2em] uppercase block mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>Omnichannel</span>
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[56px] font-extrabold text-foreground leading-[1.05] tracking-[-0.03em] mb-6 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
          Build once. Deploy <span className="gradient-text">everywhere.</span>
        </h2>
        <p data-speed="0.04" className={`text-[17px] text-muted-foreground max-w-lg mx-auto leading-[1.7] mb-16 reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
          One core AI logic across every channel your customers use.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {channels.map((ch, i) => (
            <div key={i} className={`p-7 rounded-2xl border border-border/80 bg-background hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:border-border hover-lift transition-all duration-500 reveal-scale stagger-${i + 3} ${isVisible ? "reveal-visible" : ""}`}>
              <div className="p-3.5 rounded-xl gradient-bg-subtle inline-flex mb-4">
                <ch.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-[16px] mb-1">{ch.label}</h3>
              <p className="text-[12px] text-muted-foreground">{ch.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Workflow Ticker ── */
const workflows = ["Booking & Reservations", "Billing & Payments", "FAQ Handling", "Troubleshooting", "Order Management", "Customer Auth", "Smart Call Routing", "Account Management"];

function WorkflowTicker() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-background overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 mb-10">
        <h2 className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground text-center leading-[1.1] tracking-[-0.02em] reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Automate every <span className="gradient-text">workflow.</span>
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="logo-ticker">
          {[...workflows, ...workflows].map((w, i) => (
            <span key={i} className="inline-flex items-center justify-center px-7 py-3 mx-2 rounded-full border border-border/80 bg-background text-foreground font-semibold text-[14px] whitespace-nowrap hover-lift cursor-pointer transition-all duration-300 hover:border-primary/30 hover:text-primary">
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AIAgents() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="UNIFICX / AI AGENTS"
        title={<>AI agents that handle calls like your <span className="gradient-text">best employee.</span></>}
        description="Voice-first AI that answers every call, understands what callers need, takes real action in your systems, and hands off to humans seamlessly."
        heroImage="/assets/screenshot-voice-agents.png"
      />

      <ProductFeatureGrid
        label="What it does"
        title={<>Real understanding.<br /><span className="gradient-text">Zero scripts.</span></>}
        subtitle="Powered by our custom LLM architecture, designed specifically for rapid, multi-turn voice conversations."
        features={[
          { icon: Brain, title: "Intent Understanding", desc: "Understands meaning, not just keywords. Deep contextual memory across multi-turn conversations." },
          { icon: Globe, title: "20+ Languages", desc: "Automatically detects language from the first word. Switches mid-call flawlessly." },
          { icon: Zap, title: "Real Action", desc: "Books calendars, processes Stripe, updates Salesforce right on the call." },
          { icon: MessageSquare, title: "Multi-Turn", desc: "Handles interruptions, corrections, and topic changes gracefully." },
          { icon: Shield, title: "Guardrails", desc: "Strict boundaries, compliance scripts, and native PII redaction." },
          { icon: Phone, title: "Seamless Handoff", desc: "Zero latency transfers with full transcript and sentiment to human agents." },
        ]}
      />

      <WorkflowTicker />
      <AudioSection />

      <ProductSplitSection
        dark
        label="Conversation Builder"
        title={<>Design visually.<br /><span className="gradient-text">Code zero.</span></>}
        description="Drag-and-drop conversation flow builder. Define greetings, intent collection, actions, and escalation paths — all without writing code."
        bullets={["Pre-built industry templates", "Conditional logic nodes", "Test and simulate instantly"]}
        image="/assets/screenshot-voice-agents.png"
      />

      <ProductSplitSection
        dark
        reversed
        label="Voice & Personality"
        title={<>Your brand voice.<br /><span className="gradient-text">Not a robot.</span></>}
        description="Choose from premium AI voice models or clone a custom brand voice. Adjust tone, pace, warmth, and filler words to sound exactly like your company."
        bullets={["Custom voice cloning", "Emotional tone tuning", "Powered by ElevenLabs"]}
        image="/assets/screenshot-analytics.png"
      />

      <OmnichannelSection />

      <ProductShowcase
        title={<>Agent analytics <span className="gradient-text">dashboard.</span></>}
        description="Resolution rates, CSAT, sentiment trends, call volumes — all in real-time with drill-down to individual conversations."
        image="/assets/screenshot-analytics.png"
        badges={[
          { label: "Resolution Rate", value: "94%" },
          { label: "Avg Handle Time", value: "2m 15s" },
          { label: "CSAT Score", value: "4.8/5" },
        ]}
      />

      <ProductPlatformFlow
        title={<>Part of the <span className="gradient-text">unified platform.</span></>}
        subtitle="AI Agents is the automation layer. Pair it with Cloud PBX, Intelligence, and Analytics for a complete CX system."
        steps={["Cloud PBX", "AI Voice Agent", "AI Intelligence", "Analytics"]}
      />

      <ProductCTA
        title={<>AI agents that <span className="gradient-text">never sleep.</span></>}
        subtitle="30-day free trial. No credit card required."
      />
      <Footer />
    </div>
  );
}
