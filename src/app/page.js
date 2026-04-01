import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import AIDemo from "@/components/sections/AIDemo";
import ProblemValue from "@/components/sections/ProblemValue";
import StickyPillars from "@/components/sections/StickyPillars";
import HowItWorks from "@/components/sections/HowItWorks";
import Infrastructure from "@/components/sections/Infrastructure";
import Metrics from "@/components/sections/Metrics";
import BusinessComms from "@/components/sections/BusinessComms";
import Pricing from "@/components/sections/Pricing";
import ROI from "@/components/sections/ROI";
import Testimonials from "@/components/sections/Testimonials";
import TrustGrid from "@/components/sections/TrustGrid";
import FinalCTA from "@/components/sections/FinalCTA";
import PricingCTA from "@/components/sections/PricingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <AIDemo />
      <ProblemValue />
      <StickyPillars />
      <HowItWorks />
      <Infrastructure />
      <Metrics />
      <BusinessComms />
      <Pricing />
      <ROI />
      <Testimonials />
      <TrustGrid />
      <PricingCTA />
      <FinalCTA />
    </>
  );
}
