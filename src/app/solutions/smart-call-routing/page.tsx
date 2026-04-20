'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { GitFork, Brain, Users, Clock, BarChart3, Zap } from "lucide-react";

export default function SmartCallRouting() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Solutions · Smart Call Routing"
        title={<>Intent-Based<br /><span className="gradient-text">Call Distribution</span></>}
        description="AI understands caller intent in seconds and routes to the perfect agent, department, or automated resolution."
        stat1={{ value: "40%", label: "Fewer Transfers" }}
        stat2={{ value: "95%", label: "Routing Accuracy" }}
      />
      <ProductFeatureGrid
        label="Routing Intelligence"
        title={<>Beyond Simple<br />IVR Menus</>}
        subtitle="Replace rigid phone trees with AI that understands what customers need — in their own words."
        features={[
          { icon: GitFork, title: "Intent Detection", desc: "AI identifies caller intent from natural speech — no menu navigation needed." },
          { icon: Brain, title: "Skill-Based Routing", desc: "Matches callers with agents who have the right expertise and availability." },
          { icon: Users, title: "Queue Optimization", desc: "Intelligent queue management that minimizes wait times and balances load." },
          { icon: Clock, title: "Priority Routing", desc: "VIP customers, urgent issues, and high-value opportunities get instant attention." },
          { icon: BarChart3, title: "Performance Analytics", desc: "Track routing effectiveness, transfer rates, and resolution outcomes." },
          { icon: Zap, title: "Instant Routing", desc: "Callers reach the right destination in seconds, not minutes." },
        ]}
      />
      <ProductSplitSection
        label="How It Works"
        title={<>Understand Intent,<br />Route Perfectly</>}
        description="AI listens to the first few seconds of a call, determines intent, and routes accordingly — no prompts required."
        bullets={[
          "Natural language intent classification in real-time",
          "Context-aware routing using CRM and account data",
          "Automatic overflow and after-hours routing rules",
          "Continuous learning from routing outcomes",
        ]}
        dark
        reversed
      />
      <ProductCTA
        title={<>Route Smarter,<br />Resolve Faster</>}
        subtitle="Eliminate frustrating transfers and reduce resolution time by 40%."
      />
      <Footer />
    </div>
  );
}
