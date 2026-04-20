'use client';

import { useRef } from "react";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const infraPoints = [
  "Zero-latency human handoff",
  "Native conversation intelligence",
  "Single unified system",
  "Built-in voice, messaging, and routing",
  "Enterprise-grade reliability",
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative py-20 sm:py-36 lg:py-52 overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 overflow-hidden">
        <img data-gsap-bg data-gsap-clip-reveal src="/assets/problem-bg.jpg" alt="Infrastructure" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover will-change-transform" style={{ transform: "scale(1.15)" }} />
        <div className="absolute inset-0 bg-foreground/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/40" />
      </div>

      <div ref={parallaxRef} className="relative max-w-[680px] mx-auto px-5 sm:px-6 lg:px-8">
        <span data-speed="0.04" className={`text-[11px] font-bold text-primary-foreground/25 tracking-[0.2em] uppercase block mb-6 sm:mb-8 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Built Different
        </span>
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-primary-foreground leading-[1.08] tracking-[-0.03em] mb-6 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
          We own the full stack.<br />
          <span className="gradient-text">That changes everything.</span>
        </h2>
        <p data-speed="0.05" className={`text-[17px] text-primary-foreground/40 mb-16 leading-[1.8] max-w-lg reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
          Most AI voice companies rely on third-party telephony. We built it from the ground up — giving you better quality, lower latency, and full control.
        </p>

        <ul className="space-y-6">
          {infraPoints.map((point, i) => (
            <li key={i} className={`flex items-center gap-4 reveal-left stagger-${Math.min(i + 3, 8)} ${isVisible ? "reveal-visible" : ""}`}>
              <div className="w-5 h-5 rounded-full border border-primary/40 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              </div>
              <span className="text-primary-foreground/65 font-medium text-[15px]">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
