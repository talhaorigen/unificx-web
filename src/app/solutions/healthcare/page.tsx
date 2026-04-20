'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { HeartPulse, CalendarCheck, Shield, Phone, FileText, Clock } from "lucide-react";

export default function Healthcare() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Industry · Healthcare"
        title={<>Patient-Centric<br /><span className="gradient-text">Communication</span></>}
        description="HIPAA-compliant AI that handles scheduling, follow-ups, prescription inquiries, and patient communication at scale."
        stat1={{ value: "HIPAA", label: "Compliant" }}
        stat2={{ value: "60%", label: "Call Reduction" }}
      />
      <ProductFeatureGrid
        label="Healthcare Solutions"
        title={<>Purpose-Built for<br />Healthcare</>}
        subtitle="From small clinics to large health systems, automate patient communication while maintaining compliance."
        features={[
          { icon: CalendarCheck, title: "Patient Scheduling", desc: "Automated appointment booking, rescheduling, and waitlist management." },
          { icon: HeartPulse, title: "Follow-Up Calls", desc: "Post-visit check-ins, medication reminders, and care plan adherence." },
          { icon: Shield, title: "HIPAA Compliant", desc: "End-to-end encryption, BAA agreements, and full audit trails." },
          { icon: Phone, title: "After-Hours Triage", desc: "AI handles after-hours calls, routing urgent cases to on-call providers." },
          { icon: FileText, title: "Insurance Verification", desc: "Automated eligibility checks and pre-authorization assistance." },
          { icon: Clock, title: "Wait Time Updates", desc: "Proactive notifications about clinic wait times and delays." },
        ]}
      />
      <ProductSplitSection
        label="Compliance First"
        title={<>Built for the<br />Strictest Standards</>}
        description="Every interaction is encrypted, logged, and compliant with HIPAA, HITECH, and state-level healthcare regulations."
        bullets={[
          "BAA agreements with enterprise SLA guarantees",
          "PHI handling with end-to-end encryption",
          "Complete audit trails for regulatory review",
          "Role-based access controls for staff",
        ]}
        dark
        reversed
      />
      <ProductCTA
        title={<>Transform Patient<br />Communication</>}
        subtitle="Reduce phone burden on staff while improving patient satisfaction."
      />
      <Footer />
    </div>
  );
}
