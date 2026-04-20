'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

interface Props {
  title: React.ReactNode;
  subtitle?: string;
  steps: string[];
}

export default function ProductPlatformFlow({ title, subtitle, steps }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-32 lg:py-44 bg-section-alt">
      <div ref={parallaxRef} className="max-w-[880px] mx-auto px-6 lg:px-8 text-center">
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-[1.08] tracking-[-0.03em] mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          {title}
        </h2>
        {subtitle && (
          <p data-speed="0.04" className={`text-[16px] text-muted-foreground/70 max-w-lg mx-auto leading-[1.8] mb-14 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
            {subtitle}
          </p>
        )}

        <div className={`flex flex-wrap items-center justify-center gap-3 reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="px-5 py-2.5 rounded-lg border border-border/50 bg-background font-bold text-foreground text-[13px]">
                {step}
              </div>
              {i < steps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
