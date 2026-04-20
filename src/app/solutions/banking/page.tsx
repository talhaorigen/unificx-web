'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { Landmark, Shield, CreditCard, TrendingUp, Lock, FileText } from "lucide-react";

export default function Banking() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Industry · Banking & Finance"
        title={<>Secure Financial<br /><span className="gradient-text">Support at Scale</span></>}
        description="PCI DSS compliant AI that handles balance inquiries, transaction disputes, loan applications, and account management."
        stat1={{ value: "PCI DSS", label: "Compliant" }}
        stat2={{ value: "75%", label: "Automated" }}
      />
      <ProductFeatureGrid
        label="Banking Solutions"
        title={<>AI That Speaks<br />Finance</>}
        subtitle="Purpose-built for financial services with enterprise-grade security at every layer."
        features={[
          { icon: Landmark, title: "Account Services", desc: "Balance checks, statement requests, and account updates via natural conversation." },
          { icon: Shield, title: "Fraud Alerts", desc: "Instant verification calls for suspicious transactions with real-time blocking." },
          { icon: CreditCard, title: "Card Management", desc: "Activate cards, report lost/stolen, set spending limits — all automated." },
          { icon: TrendingUp, title: "Loan Applications", desc: "Pre-qualification, document collection, and status updates handled by AI." },
          { icon: Lock, title: "Multi-Layer Security", desc: "Voice biometrics + MFA + encryption for the highest security standard." },
          { icon: FileText, title: "Regulatory Compliance", desc: "Built for SOX, PCI DSS, GDPR, and financial services regulations." },
        ]}
      />
      <ProductSplitSection
        label="Security"
        title={<>Bank-Grade<br />Infrastructure</>}
        description="Every call is encrypted, every transaction is logged, and every interaction meets the strictest financial compliance standards."
        bullets={[
          "SOC 2 Type II certified infrastructure",
          "Real-time fraud detection and prevention",
          "Complete audit trails for regulatory compliance",
          "Data residency controls for geographic requirements",
        ]}
        reversed
      />
      <ProductCTA
        title={<>Modernize Your<br />Banking CX</>}
        subtitle="Serve more customers with fewer agents while exceeding compliance requirements."
      />
      <Footer />
    </div>
  );
}
