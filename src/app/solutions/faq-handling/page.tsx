'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { HelpCircle, Search, Brain, Zap, MessageSquare, BarChart3 } from "lucide-react";

export default function FAQHandling() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Solutions · FAQ Handling"
        title={<>Instant Answers,<br /><span className="gradient-text">Zero Wait Time</span></>}
        description="AI that understands questions in context and delivers accurate answers — freeing your team for complex issues."
        stat1={{ value: "92%", label: "First-Call Resolution" }}
        stat2={{ value: "<2s", label: "Answer Time" }}
      />
      <ProductFeatureGrid
        label="Features"
        title={<>Knowledge That<br />Never Sleeps</>}
        subtitle="Train your AI on your entire knowledge base and watch it handle the repetitive questions your team dreads."
        features={[
          { icon: HelpCircle, title: "Natural Language Understanding", desc: "Understands questions however they're phrased — no rigid menus or scripts." },
          { icon: Search, title: "Knowledge Base Search", desc: "Instantly searches your docs, FAQs, and policies to find the right answer." },
          { icon: Brain, title: "Context-Aware Responses", desc: "Remembers conversation context and provides relevant follow-up information." },
          { icon: Zap, title: "Instant Deflection", desc: "Resolve 80%+ of common inquiries without involving a human agent." },
          { icon: MessageSquare, title: "Multi-Channel", desc: "Same intelligent answers across voice, chat, SMS, and WhatsApp." },
          { icon: BarChart3, title: "Gap Analysis", desc: "Identifies what customers ask that isn't in your knowledge base." },
        ]}
      />
      <ProductSplitSection
        label="How It Works"
        title={<>Train Once,<br />Answer Forever</>}
        description="Upload your FAQs, product docs, and support articles. AI learns your business and starts answering immediately."
        bullets={[
          "Import from Zendesk, Confluence, Notion, or any URL",
          "Automatic knowledge updates when docs change",
          "Confidence scoring with human handoff for uncertainty",
          "Continuous learning from every interaction",
        ]}
        dark
        reversed
      />
      <ProductCTA
        title={<>Deflect More,<br />Resolve Faster</>}
        subtitle="Let AI handle the FAQ calls so your team can focus on what matters."
      />
      <Footer />
    </div>
  );
}
