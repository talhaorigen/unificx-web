'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { Radio, Wifi, Settings, CreditCard, BarChart3, Zap } from "lucide-react";

export default function Telecom() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Industry · Telecom"
        title={<>Telecom Support<br /><span className="gradient-text">That Scales</span></>}
        description="AI that handles service activation, technical troubleshooting, billing inquiries, and plan changes — at massive scale."
        stat1={{ value: "55%", label: "AHT Reduction" }}
        stat2={{ value: "M+", label: "Calls/Month" }}
      />
      <ProductFeatureGrid
        label="Telecom Solutions"
        title={<>Built for Telecom<br />Complexity</>}
        subtitle="Handle the unique challenges of telecom support — technical issues, account changes, and high call volumes."
        features={[
          { icon: Radio, title: "Service Activation", desc: "New line activations, SIM swaps, and device setup — fully automated." },
          { icon: Wifi, title: "Tech Support", desc: "Network troubleshooting, speed tests, and connectivity diagnosis." },
          { icon: Settings, title: "Account Management", desc: "Plan changes, add-ons, data usage alerts, and roaming activation." },
          { icon: CreditCard, title: "Billing Support", desc: "Bill explanations, payment processing, and dispute resolution." },
          { icon: BarChart3, title: "Outage Notifications", desc: "Proactive outage alerts and estimated restoration times." },
          { icon: Zap, title: "Instant Resolution", desc: "Resolve common issues in seconds without IVR navigation." },
        ]}
      />
      <ProductSplitSection
        label="Scale"
        title={<>Millions of Calls,<br />Zero Compromise</>}
        description="Purpose-built infrastructure that handles telecom-scale call volumes without degradation."
        bullets={[
          "Elastic scaling for millions of concurrent interactions",
          "99.99% uptime SLA for mission-critical operations",
          "Real-time network status integration for outage awareness",
          "Multi-language support for diverse subscriber bases",
        ]}
        dark
        reversed
      />
      <ProductCTA
        title={<>Transform Your<br />Telecom CX</>}
        subtitle="Reduce costs and improve NPS with AI-powered subscriber support."
      />
      <Footer />
    </div>
  );
}
