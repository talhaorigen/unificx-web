'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";

interface Props {
  title: React.ReactNode;
  subtitle?: string;
}

export default function ProductCTA({ title, subtitle }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute top-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(var(--gradient-start)) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-30%] right-[-10%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(var(--gradient-end)) 0%, transparent 70%)" }} />

      <div ref={parallaxRef} className="relative max-w-[600px] mx-auto px-6 lg:px-8 text-center">
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-primary-foreground leading-[1.08] tracking-[-0.03em] mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          {title}
        </h2>
        {subtitle && (
          <p data-speed="0.04" className={`text-[16px] text-primary-foreground/30 mb-12 leading-[1.8] reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
            {subtitle}
          </p>
        )}
        <div className={`flex flex-wrap items-center justify-center gap-3 reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
          <a href="#" className="gradient-bg text-primary-foreground font-bold px-8 py-3.5 rounded-full text-[14px] hover:opacity-90 transition-all shadow-[0_6px_30px_hsl(var(--gradient-start)/0.3)] hover:scale-[1.02] duration-500">
            Start Free Trial
          </a>
          <a href="#" className="border border-primary-foreground/8 text-primary-foreground/50 font-semibold px-8 py-3.5 rounded-full text-[14px] hover:bg-primary-foreground/5 transition-all duration-500">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
