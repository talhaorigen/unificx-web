'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Sparkles } from "lucide-react";

const teamFeatures = [
  "Calls from phone, desktop, or browser",
  "Video meetings & screen sharing",
  "Internal messaging & collaboration",
  "Smart call routing",
  "Workflow automation",
];

const customerFeatures = [
  "AI answers instantly",
  "Queue management & callbacks",
  "Call monitoring & insights",
  "Omnichannel experience",
  "Automated follow-ups",
];

export default function IndustriesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 sm:py-36 lg:py-48 bg-section-alt">
      <div ref={parallaxRef} className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-foreground leading-[1.08] tracking-[-0.03em] mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            Business communications<br />meets customer engagement.
          </h2>
          <p data-speed="0.04" className={`text-[17px] text-muted-foreground/60 max-w-[480px] mx-auto leading-[1.8] reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
            One platform for your team AND your customers. No more disjointed systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-[820px] mx-auto">
          <div data-gsap-tilt className={`p-6 sm:p-10 lg:p-12 rounded-2xl bg-background border border-border/50 hover-lift reveal-left stagger-3 ${isVisible ? "reveal-visible" : ""}`}>
            <div className="p-3 rounded-xl gradient-bg-subtle inline-flex mb-8">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-[18px] font-extrabold text-foreground mb-6">For Your Team</h3>
            <ul className="space-y-4">
              {teamFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground/70 text-[14px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div data-gsap-tilt className={`p-6 sm:p-10 lg:p-12 rounded-2xl bg-background border border-border/50 hover-lift reveal-right stagger-4 ${isVisible ? "reveal-visible" : ""}`}>
            <div className="p-3 rounded-xl gradient-bg-subtle inline-flex mb-8">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-[18px] font-extrabold text-foreground mb-6">For Your Customers</h3>
            <ul className="space-y-4">
              {customerFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground/70 text-[14px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
