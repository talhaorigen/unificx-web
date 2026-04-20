'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductCTA from "@/components/product/ProductCTA";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Target, Heart, Lightbulb, Globe, Users, Award } from "lucide-react";

const stats = [
  { value: "2019", label: "Founded" },
  { value: "200+", label: "Team Members" },
  { value: "50+", label: "Countries" },
  { value: "10M+", label: "Calls Handled" },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="About UnifiCX"
        title={<>Building the Future<br />of <span className="gradient-text">Customer Experience</span></>}
        description="We believe every business deserves AI-powered customer communication that's natural, reliable, and transformative."
      />

      {/* Stats */}
      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[48px] font-extrabold gradient-text leading-none mb-2">{s.value}</div>
                <div className="text-[13px] font-semibold text-muted-foreground/60 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductFeatureGrid
        label="Our Values"
        title={<>What Drives Us</>}
        subtitle="The principles behind every product decision, every customer interaction, and every hire we make."
        features={[
          { icon: Target, title: "Customer Obsession", desc: "Every feature starts with a real customer problem. We build what matters." },
          { icon: Heart, title: "Human-First AI", desc: "AI should enhance human capabilities, not replace the human touch." },
          { icon: Lightbulb, title: "Relentless Innovation", desc: "We push boundaries in NLP, voice synthesis, and real-time analytics." },
          { icon: Globe, title: "Global by Default", desc: "Built for businesses worldwide, supporting 30+ languages from day one." },
          { icon: Users, title: "Radical Transparency", desc: "Open communication with our team, customers, and partners." },
          { icon: Award, title: "Excellence Always", desc: "99.99% uptime, enterprise security, and exceptional support standards." },
        ]}
      />

      <ProductCTA
        title={<>Join Our Mission</>}
        subtitle="We're building the future of customer experience. Come build with us."
      />
      <Footer />
    </div>
  );
}
