'use client';

import { useScrollAnimation, useCountUp, useTextParallax } from "@/hooks/useScrollAnimation";

const metrics = [
  { value: 0, suffix: "s", label: "Hold Time" },
  { value: 38, suffix: "s", label: "Avg Handle Time" },
  { value: 94, suffix: "%", label: "Satisfaction Score" },
  { value: 60, suffix: "%", label: "Cost Reduction" },
];

export default function MetricsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 sm:py-36 lg:py-48 bg-background">
      <div ref={parallaxRef} className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {metrics.map((m, i) => (
            <MetricCard key={i} metric={m} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, isVisible, index }: { metric: (typeof metrics)[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(metric.value, 2000, isVisible);

  return (
    <div data-gsap-counter data-gsap-tilt className={`text-center p-6 sm:p-10 lg:p-14 rounded-2xl bg-section-alt border border-border/50 hover-lift reveal-scale stagger-${index + 1} ${isVisible ? "reveal-visible" : ""}`}>
      <div className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold gradient-text leading-none mb-2 sm:mb-3">
        {count}{metric.suffix}
      </div>
      <div className="text-muted-foreground/60 font-semibold text-[11px] sm:text-[13px] tracking-wide">{metric.label}</div>
    </div>
  );
}
