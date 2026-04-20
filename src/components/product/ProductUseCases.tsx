'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";

interface UseCase {
  title: string;
  desc: string;
}

interface Props {
  title: React.ReactNode;
  subtitle?: string;
  cases: UseCase[];
}

export default function ProductUseCases({ title, subtitle, cases }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-32 lg:py-44 bg-section-alt">
      <div ref={parallaxRef} className="max-w-[980px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.08] tracking-[-0.03em] mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            {title}
          </h2>
          {subtitle && (
            <p data-speed="0.04" className={`text-[16px] text-muted-foreground/70 max-w-[480px] mx-auto leading-[1.8] reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <div key={i} className={`group p-7 rounded-xl border border-border/50 bg-background hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.04)] hover:border-border hover-lift transition-all duration-500 reveal-scale stagger-${Math.min(i + 2, 8)} ${isVisible ? "reveal-visible" : ""}`}>
              <div className="text-[32px] font-extrabold gradient-text leading-none mb-5 tracking-tight">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[15px] font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{c.title}</h3>
              <p className="text-[13px] text-muted-foreground/70 leading-[1.7]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
