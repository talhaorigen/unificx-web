'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { CreditCard, Shield, RefreshCw, FileText, Zap, Lock } from "lucide-react";

export default function BillingPayments() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Solutions · Billing & Payments"
        title={<>Handle Billing<br /><span className="gradient-text">Without Agents</span></>}
        description="AI-powered payment processing, refund handling, and subscription management — secure, instant, and conversational."
        stat1={{ value: "70%", label: "Faster Resolution" }}
        stat2={{ value: "99.9%", label: "Uptime" }}
      />
      <ProductFeatureGrid
        label="Capabilities"
        title={<>Secure Payment<br />Automation</>}
        subtitle="PCI-compliant AI that handles sensitive billing inquiries with confidence."
        features={[
          { icon: CreditCard, title: "Payment Processing", desc: "Collect payments, process refunds, and update billing info through natural conversation." },
          { icon: Shield, title: "PCI Compliant", desc: "Enterprise-grade security ensures every transaction meets the highest compliance standards." },
          { icon: RefreshCw, title: "Subscription Management", desc: "Upgrades, downgrades, cancellations — all handled without human intervention." },
          { icon: FileText, title: "Invoice Inquiries", desc: "Customers get instant answers about charges, due dates, and payment history." },
          { icon: Zap, title: "Instant Refunds", desc: "Process refunds in seconds based on your custom rules and approval workflows." },
          { icon: Lock, title: "Fraud Detection", desc: "AI flags suspicious activity and escalates high-risk transactions automatically." },
        ]}
      />
      <ProductSplitSection
        label="Integration"
        title={<>Works With Your<br />Payment Stack</>}
        description="Seamlessly connects to Stripe, Square, QuickBooks, and your existing billing infrastructure."
        bullets={[
          "Direct integration with major payment gateways",
          "Real-time account balance lookups",
          "Automated dunning and payment retry logic",
          "Custom escalation rules for high-value disputes",
        ]}
        reversed
      />
      <ProductCTA
        title={<>Streamline Your<br />Billing Operations</>}
        subtitle="Reduce billing call volume by 70% while improving customer satisfaction."
      />
      <Footer />
    </div>
  );
}
