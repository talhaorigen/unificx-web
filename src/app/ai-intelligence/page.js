import IntelHero from "@/components/sections/IntelHero";
import AdvantageGrid from "@/components/sections/AdvantageGrid";
import IntelligenceModules from "@/components/sections/IntelligenceModules";
import AnalyticsDeepDive from "@/components/sections/AnalyticsDeepDive";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "AI Intelligence — UnifiCX",
  description: "Understand every conversation. Not just AI calls — every call.",
};

export default function AIIntelligencePage() {
  return (
    <>
      <IntelHero />
      <AdvantageGrid />
      <IntelligenceModules />
      <AnalyticsDeepDive />
      <FinalCTA 
        title="Start analyzing every conversation." 
        subtitle="30-day free trial. No credit card. See intelligence in action." 
        variant="gradient"
      />
    </>
  );
}

