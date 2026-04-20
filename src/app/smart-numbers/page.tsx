'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductUseCases from "@/components/product/ProductUseCases";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductShowcase from "@/components/product/ProductShowcase";
import ProductCTA from "@/components/product/ProductCTA";
import { Globe, GitFork, Brain, Repeat, BarChart3, Shield } from "lucide-react";

export default function SmartNumbers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="CX PLATFORM / SMART NUMBERS"
        title={<>One number strategy. <span className="gradient-text">Global reach.</span></>}
        description="Provision local, toll-free, and mobile numbers in 100+ countries instantly. Route intelligently by time, geography, and caller intent."
        heroImage="/assets/screenshot-phone-numbers.png"
        stat1={{ value: "100+", label: "Countries" }}
        stat2={{ value: "12ms", label: "Latency" }}
      />

      <ProductSplitSection
        label="What it does"
        title={<>Numbers that work as <span className="gradient-text">hard as you do.</span></>}
        description="Smart Numbers turns your phone numbers into intelligent routing hubs. Each number can have its own IVR, language, AI agent, analytics, and business rules."
        bullets={[
          "Provision numbers in 100+ countries in seconds",
          "Time-based and geo-based routing per number",
          "Attach AI agents to specific numbers",
          "Failover and round-robin distribution",
          "Per-number analytics and cost tracking",
        ]}
        image="/assets/screenshot-phone-numbers.png"
        reversed
      />

      <ProductFeatureGrid
        title={<>Key <span className="gradient-text">capabilities.</span></>}
        features={[
          { icon: Globe, title: "Global Coverage", desc: "Local, toll-free, and mobile numbers across 100+ countries with local presence." },
          { icon: GitFork, title: "Intelligent Routing", desc: "Route by time-of-day, geography, or custom business rules." },
          { icon: Brain, title: "AI Agent Binding", desc: "Attach AI voice agents to any number — different products, languages, brands." },
          { icon: Repeat, title: "Number Porting", desc: "Port existing numbers from any carrier with zero downtime." },
          { icon: BarChart3, title: "Per-Number Analytics", desc: "Track volume, answer rates, peak hours, and cost-per-call independently." },
          { icon: Shield, title: "Failover Protection", desc: "Automatic failover ensures calls are never lost during outages." },
        ]}
      />

      <ProductUseCases
        title={<>Use <span className="gradient-text">cases.</span></>}
        cases={[
          { title: "Global Sales Presence", desc: "Local numbers in every country — even if your team is in one location." },
          { title: "Marketing Campaign Tracking", desc: "Unique numbers per campaign to attribute calls to marketing spend." },
          { title: "Multi-Brand Operations", desc: "Dedicated numbers per brand, each with its own AI personality and routing." },
        ]}
      />

      <ProductShowcase
        title={<>Numbers management <span className="gradient-text">portal.</span></>}
        description="Provision, configure, and monitor all numbers with real-time status and routing controls."
        image="/assets/screenshot-dashboard.png"
        badges={[
          { label: "Active Numbers", value: "847" },
          { label: "Countries", value: "42" },
          { label: "Routes", value: "1,204" },
        ]}
      />

      <ProductCTA
        title={<>Go global in <span className="gradient-text">minutes.</span></>}
        subtitle="Start with one number. Scale to hundreds. 30-day free trial."
      />
      <Footer />
    </div>
  );
}
