'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { Wrench, GitFork, Eye, CheckCircle, Cpu, ArrowRight } from "lucide-react";

export default function Troubleshooting() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Solutions · Troubleshooting"
        title={<>Guided Diagnosis,<br /><span className="gradient-text">Instant Resolution</span></>}
        description="AI walks customers through step-by-step troubleshooting — resolving technical issues without escalation."
        stat1={{ value: "65%", label: "Self-Resolution" }}
        stat2={{ value: "4min", label: "Avg Resolution" }}
      />
      <ProductFeatureGrid
        label="Capabilities"
        title={<>Smart Diagnostics<br />at Scale</>}
        subtitle="From connectivity issues to product defects, AI handles the first line of technical support."
        features={[
          { icon: Wrench, title: "Step-by-Step Guidance", desc: "Walks customers through fixes with clear, conversational instructions." },
          { icon: GitFork, title: "Decision Trees", desc: "Dynamic troubleshooting flows that adapt based on customer responses." },
          { icon: Eye, title: "Remote Diagnostics", desc: "Collects device info, error codes, and logs to accelerate resolution." },
          { icon: CheckCircle, title: "Resolution Verification", desc: "Confirms the issue is fixed before ending the interaction." },
          { icon: Cpu, title: "System Integration", desc: "Checks account status, outages, and known issues in real-time." },
          { icon: ArrowRight, title: "Smart Escalation", desc: "Hands off to the right specialist with full context when needed." },
        ]}
      />
      <ProductSplitSection
        label="Results"
        title={<>Resolve Before<br />They Escalate</>}
        description="Most technical issues follow patterns. AI learns those patterns and resolves them instantly."
        bullets={[
          "65% of issues resolved without human agents",
          "Average handle time reduced from 12 to 4 minutes",
          "Full conversation history passed on escalation",
          "Continuous learning from resolution outcomes",
        ]}
        reversed
      />
      <ProductCTA
        title={<>Fix Issues Faster<br />With AI Support</>}
        subtitle="Deploy intelligent troubleshooting in days, not months."
      />
      <Footer />
    </div>
  );
}
