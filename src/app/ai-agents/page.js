import AgentHero from "@/components/sections/AgentHero";
import Capabilities from "@/components/sections/Capabilities";
import UseCases from "@/components/sections/UseCases";
import DemoLibrary from "@/components/sections/DemoLibrary";
import ConversationBuilder from "@/components/sections/ConversationBuilder";
import VoicePersonality from "@/components/sections/VoicePersonality";
import Omnichannel from "@/components/sections/Omnichannel";
import HumanHandoff from "@/components/sections/HumanHandoff";
import AnalyticsShowcase from "@/components/sections/AnalyticsShowcase";
import PricingAgents from "@/components/sections/PricingAgents";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "AI Agents — UnifiCX",
  description: "Voice-first, omnichannel AI that handles customer calls end-to-end.",
};

export default function AIAgentsPage() {
  return (
    <>
      <AgentHero />
      <Capabilities />
      <UseCases />
      <DemoLibrary />
      <ConversationBuilder />
      <VoicePersonality />
      <Omnichannel />
      <HumanHandoff />
      <AnalyticsShowcase />
      <PricingAgents />
      <FinalCTA 
        title="Hear your AI agent in action." 
        subtitle="30-day free trial. No credit card. Setup in 5 minutes." 
      />
    </>
  );
}

