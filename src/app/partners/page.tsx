'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductCTA from "@/components/product/ProductCTA";
import { Handshake, TrendingUp, Award, Headphones, Globe, Zap } from "lucide-react";

export default function Partners() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Partners"
        title={<>Grow With <span className="gradient-text">UnifiCX</span></>}
        description="Join our partner ecosystem and help businesses transform their customer experience with AI."
        stat1={{ value: "500+", label: "Partners" }}
        stat2={{ value: "50+", label: "Countries" }}
      />
      <ProductFeatureGrid
        label="Partner Benefits"
        title={<>Why Partner<br />With Us</>}
        subtitle="Revenue sharing, training, co-marketing, and dedicated support to grow your practice."
        features={[
          { icon: TrendingUp, title: "Revenue Sharing", desc: "Earn competitive commissions on every deal you bring to UnifiCX." },
          { icon: Award, title: "Certification Program", desc: "Get certified and listed in our partner directory for lead generation." },
          { icon: Headphones, title: "Dedicated Support", desc: "Priority access to our partner success team and technical resources." },
          { icon: Globe, title: "Co-Marketing", desc: "Joint campaigns, case studies, and event sponsorship opportunities." },
          { icon: Handshake, title: "Deal Registration", desc: "Protect your pipeline with our deal registration program." },
          { icon: Zap, title: "Early Access", desc: "Preview new features and products before general availability." },
        ]}
      />
      <ProductCTA
        title={<>Become a Partner</>}
        subtitle="Apply today and start growing with the leading AI-powered CX platform."
      />
      <Footer />
    </div>
  );
}
