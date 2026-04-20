'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { ShieldCheck, Fingerprint, Lock, Eye, UserCheck, Zap } from "lucide-react";

export default function CustomerAuthentication() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Solutions · Authentication"
        title={<>Secure Identity<br /><span className="gradient-text">Verification</span></>}
        description="AI-powered authentication that verifies customer identity through voice biometrics, OTP, and knowledge-based questions."
        stat1={{ value: "99.7%", label: "Accuracy" }}
        stat2={{ value: "<10s", label: "Verification" }}
      />
      <ProductFeatureGrid
        label="Security Features"
        title={<>Multi-Factor<br />Authentication</>}
        subtitle="Enterprise-grade identity verification that's both secure and frictionless."
        features={[
          { icon: ShieldCheck, title: "Voice Biometrics", desc: "Verify identity through unique voice patterns — no passwords needed." },
          { icon: Fingerprint, title: "Multi-Factor Auth", desc: "Combine voice, OTP, and knowledge-based verification for maximum security." },
          { icon: Lock, title: "Fraud Prevention", desc: "AI detects spoofing attempts and flags suspicious authentication patterns." },
          { icon: Eye, title: "Real-Time Monitoring", desc: "Live dashboard tracking all verification attempts and success rates." },
          { icon: UserCheck, title: "Adaptive Security", desc: "Risk-based authentication that adjusts verification level based on context." },
          { icon: Zap, title: "Instant Verification", desc: "Authenticate customers in under 10 seconds without lengthy security questions." },
        ]}
      />
      <ProductSplitSection
        label="Compliance"
        title={<>Built for<br />Regulated Industries</>}
        description="SOC 2, HIPAA, PCI DSS compliant authentication that meets the strictest regulatory requirements."
        bullets={[
          "Full audit trails for every verification event",
          "Configurable security policies per department",
          "Automated compliance reporting",
          "Data residency controls for GDPR compliance",
        ]}
        reversed
      />
      <ProductCTA
        title={<>Secure Your<br />Customer Interactions</>}
        subtitle="Deploy AI-powered authentication that customers actually appreciate."
      />
      <Footer />
    </div>
  );
}
