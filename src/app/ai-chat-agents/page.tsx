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
import { MessageSquare, Globe, Smartphone, Zap, AlertTriangle, Plug } from "lucide-react";

export default function AIChatAgents() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="CX PLATFORM / AI CHAT AGENTS"
        title={<>Chat automation that <span className="gradient-text">never sleeps.</span></>}
        description="Deploy intelligent AI agents across WhatsApp, SMS, and web chat that understand intent, take action in your systems, and hand off to humans the instant it matters."
        heroImage="/assets/screenshot-chat-agents.png"
        stat1={{ value: "87%", label: "Resolution Rate" }}
        stat2={{ value: "24/7", label: "Always Active" }}
      />

      <ProductSplitSection
        label="What it does"
        title={<>One AI brain.<br /><span className="gradient-text">Every chat channel.</span></>}
        description="AI Chat Agents use the same conversational intelligence engine as our voice agents — understanding context, intent, and emotion across WhatsApp, SMS, and web widgets simultaneously."
        bullets={[
          "Handles bookings, FAQs, billing, and support without human intervention",
          "Real-time sentiment tracking with escalation triggers",
          "Instant human handoff with full context and transcript",
          "20+ language detection and auto-response",
          "CRM and calendar integration for real actions",
        ]}
        image="/assets/screenshot-chat-agents.png"
        reversed
      />

      <ProductFeatureGrid
        title={<>Key <span className="gradient-text">capabilities.</span></>}
        subtitle="Everything needed to automate text-based customer conversations at scale."
        features={[
          { icon: MessageSquare, title: "WhatsApp Business", desc: "Certified WhatsApp Business API integration. Send proactive messages, handle inquiries at scale." },
          { icon: Globe, title: "Web Chat Widget", desc: "Embed a fully branded chat widget that auto-escalates to a human with full conversation history." },
          { icon: Smartphone, title: "SMS Automation", desc: "Two-way SMS conversations with AI-driven responses, appointment reminders, and follow-ups." },
          { icon: Zap, title: "20+ Languages", desc: "Detects language from the first message and responds natively — no configuration needed." },
          { icon: AlertTriangle, title: "Sentiment Escalation", desc: "When frustration rises, the AI instantly alerts a human and transfers with full context." },
          { icon: Plug, title: "Integration Actions", desc: "Books appointments, processes orders, updates CRM, and validates accounts from the chat." },
        ]}
      />

      <ProductUseCases
        title={<>Every chat use case, <span className="gradient-text">automated.</span></>}
        cases={[
          { title: "Appointment Booking", desc: "Customers book, reschedule, or cancel via WhatsApp — calendar synced in real time." },
          { title: "Order Tracking", desc: "Automatic order status updates, delivery notifications, and return initiations." },
          { title: "Lead Qualification", desc: "Qualify inbound leads with AI chat, score intent, push hot leads into your CRM." },
          { title: "Customer Onboarding", desc: "Guide new customers through setup and documentation via conversation." },
          { title: "Payment Collection", desc: "Payment reminders, confirmations, and dispute resolution with PCI compliance." },
          { title: "Technical Support", desc: "Troubleshoot through guided AI conversation, escalate complex cases to Tier 2." },
        ]}
      />

      <ProductShowcase
        title={<>Live chat <span className="gradient-text">command center.</span></>}
        description="Manage all chat sessions from one unified inbox with real-time sentiment and handoff controls."
        image="/assets/screenshot-analytics.png"
        badges={[
          { label: "Active Sessions", value: "127" },
          { label: "Avg Response", value: "1.2s" },
          { label: "Satisfaction", value: "94%" },
        ]}
      />

      <ProductPlatformFlow
        title={<>Unified with <span className="gradient-text">voice.</span></>}
        subtitle="Chat and voice share the same AI brain. Context carries across channels automatically."
        steps={["AI Chat", "AI Voice", "AI Intelligence", "Analytics"]}
      />

      <ProductCTA
        title={<>Chat smarter. Respond <span className="gradient-text">faster.</span></>}
        subtitle="30-day free trial. No credit card required."
      />
      <Footer />
    </div>
  );
}
