'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { GraduationCap, CalendarCheck, FileText, Users, Globe, Bell } from "lucide-react";

export default function Education() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Industry · Education"
        title={<>Student Support<br /><span className="gradient-text">Reimagined</span></>}
        description="AI-powered communication for enrollment, admissions, financial aid, and student services — supporting students 24/7."
        stat1={{ value: "40%", label: "Call Reduction" }}
        stat2={{ value: "24/7", label: "Student Support" }}
      />
      <ProductFeatureGrid
        label="Education Solutions"
        title={<>Built for Modern<br />Institutions</>}
        subtitle="From community colleges to universities, automate the communications that overwhelm your staff."
        features={[
          { icon: GraduationCap, title: "Admissions Support", desc: "Application status, requirements, and deadline information — instantly." },
          { icon: CalendarCheck, title: "Enrollment Assistance", desc: "Course registration, schedule changes, and waitlist management." },
          { icon: FileText, title: "Financial Aid", desc: "FAFSA inquiries, scholarship info, and payment plan assistance." },
          { icon: Users, title: "Student Services", desc: "Housing, dining, parking, and campus resource information." },
          { icon: Globe, title: "Multilingual Support", desc: "Serve international students in their preferred language." },
          { icon: Bell, title: "Proactive Outreach", desc: "Automated reminders for deadlines, events, and important dates." },
        ]}
      />
      <ProductSplitSection
        label="Impact"
        title={<>Support More Students<br />With Less Staff</>}
        description="Peak enrollment periods no longer mean overwhelmed phone lines and frustrated students."
        bullets={[
          "Handle 10x call volume during enrollment periods",
          "Reduce average wait times from 15 minutes to seconds",
          "Improve student satisfaction and retention rates",
          "Free staff to focus on high-touch advising",
        ]}
        reversed
      />
      <ProductCTA
        title={<>Modernize Your<br />Student Experience</>}
        subtitle="Deploy AI-powered student support in weeks, not semesters."
      />
      <Footer />
    </div>
  );
}
