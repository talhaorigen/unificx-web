'use client';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import AIVisualSection from "@/components/AIVisualSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PlatformSection from "@/components/PlatformSection";
import FeaturesSection from "@/components/FeaturesSection";
import MetricsSection from "@/components/MetricsSection";
import IndustriesSection from "@/components/IndustriesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TrustSection from "@/components/TrustSection";
import TrustInfraSection from "@/components/TrustInfraSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <AIVisualSection />
      <ProblemSection />
      <SolutionSection />
      <PlatformSection />
      <FeaturesSection />
      <MetricsSection />
      <IndustriesSection />
      <IntegrationsSection />
      <TrustSection />
      <TrustInfraSection />
      <CTASection />
      <Footer />
    </div>
  );
}
