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
import { Phone, GitFork, Disc3, Cable, Monitor, ShieldCheck } from "lucide-react";

export default function CloudPBX() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="CX PLATFORM / CLOUD PBX"
        title={<>Your entire phone system. <span className="gradient-text">In the cloud.</span></>}
        description="Replace aging hardware with an enterprise-grade cloud PBX that scales instantly, integrates with AI, and gives your team full control."
        heroImage="/assets/screenshot-phone-numbers.png"
        stat1={{ value: "99.99%", label: "Uptime SLA" }}
        stat2={{ value: "0", label: "Hardware needed" }}
      />

      <ProductSplitSection
        label="What it does"
        title={<>Phone calls reimagined for <span className="gradient-text">modern teams.</span></>}
        description="Cloud PBX gives you the power of an enterprise phone system — call routing, IVR menus, extensions, queues, voicemail, and recording — all managed through a clean web interface."
        bullets={[
          "Intelligent IVR menus with natural language recognition",
          "Unlimited extensions for desk, mobile, and softphone",
          "Skill-based routing and ring groups",
          "Call recording, transcription, and archiving",
          "Real-time wallboard and manager monitoring",
        ]}
        image="/assets/screenshot-dashboard.png"
        reversed
      />

      <ProductFeatureGrid
        title={<>Key <span className="gradient-text">capabilities.</span></>}
        subtitle="Everything you need to run a professional, scalable phone operation."
        features={[
          { icon: Phone, title: "Intelligent IVR", desc: "Build multi-level menus with drag-and-drop. Natural language inputs for callers." },
          { icon: GitFork, title: "Skill-Based Routing", desc: "Route calls based on language, product knowledge, availability, and performance." },
          { icon: Disc3, title: "Call Recording", desc: "Tamper-proof encrypted storage with full search, playback, and AI transcription." },
          { icon: Cable, title: "SIP Trunking", desc: "Connect existing carriers or use our built-in SIP trunks with competitive rates." },
          { icon: Monitor, title: "Live Wallboard", desc: "Real-time visibility into queues, agent statuses, handle times, and volumes." },
          { icon: ShieldCheck, title: "Enterprise Security", desc: "E2E encryption, SOC 2, role-based access, and 99.99% uptime SLA." },
        ]}
      />

      <ProductUseCases
        title={<>Built for <span className="gradient-text">every team.</span></>}
        subtitle="Whether you have 5 agents or 5,000."
        cases={[
          { title: "Customer Support Centers", desc: "Intelligent queuing, priority routing, and real-time supervisor monitoring." },
          { title: "Outbound Sales Teams", desc: "Power dialers, CRM pop-ups, and automatic call logging." },
          { title: "Remote & Hybrid Teams", desc: "Professional business number on any device — desk, mobile, or browser." },
          { title: "Healthcare Practices", desc: "HIPAA-compliant handling, appointment routing, and voicemail transcription." },
          { title: "Multi-Location Retail", desc: "Centralized management with per-location routing and unified reporting." },
          { title: "Financial Services", desc: "PCI-compliant recordings and compliance archiving for regulated industries." },
        ]}
      />

      <ProductShowcase
        title={<>See it in <span className="gradient-text">action.</span></>}
        description="Full call center admin — extension management, live monitoring, IVR builder, and queue analytics."
        image="/assets/screenshot-phone-numbers.png"
        badges={[
          { label: "Live Routing", value: "Active" },
          { label: "Agents Online", value: "45" },
          { label: "Avg Wait", value: "12s" },
        ]}
      />

      <ProductPlatformFlow
        title={<>Part of the <span className="gradient-text">unified platform.</span></>}
        subtitle="Cloud PBX is the infrastructure layer. Pair it with AI Agents, Intelligence, and Analytics."
        steps={["Cloud PBX", "AI Voice Agent", "AI Intelligence", "Analytics"]}
      />

      <ProductCTA
        title={<>Your phone system, finally <span className="gradient-text">modern.</span></>}
        subtitle="30-day free trial. Setup in 10 minutes. No hardware required."
      />
      <Footer />
    </div>
  );
}
