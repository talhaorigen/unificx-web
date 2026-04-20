'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    initials: "SJ", name: "Sarah Jenkins", role: "VP of CX, Global Hotels",
    quote: "UnifiCX cut our costs by 40% while actually improving customer satisfaction. The AI is indistinguishable from humans.",
    logo: "HOTELS.COM",
  },
  {
    initials: "DC", name: "David Chen", role: "Director of Support, TechFlow",
    quote: "The voice quality is game-changing. We reached 80% autonomous resolution in just two weeks of deployment.",
    logo: "TECHFLOW",
  },
  {
    initials: "ML", name: "Maria Lopez", role: "COO, FinanceHub",
    quote: "From 45-minute wait times to instant pickup. Our customers love the speed and accuracy of the UnifiCX voice agents.",
    logo: "FINANCEHUB",
  },
];

export default function TrustSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 sm:py-36 lg:py-48 bg-section-alt overflow-hidden">
      <div ref={parallaxRef} className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-foreground text-center leading-[1.08] tracking-[-0.03em] mb-20 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Trusted by the best CX leaders.
        </h2>

        <div className="grid md:grid-cols-3 gap-5" data-gsap-stagger-cards>
          {testimonials.map((t, i) => (
            <div key={i} data-gsap-tilt className={`p-6 sm:p-8 lg:p-10 rounded-2xl bg-background border border-border/50 hover-lift reveal-scale stagger-${i + 1} ${isVisible ? "reveal-visible" : ""}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-full bg-section-alt flex items-center justify-center text-muted-foreground/60 font-bold text-[12px]">{t.initials}</div>
                <div>
                  <div className="font-bold text-foreground text-[14px]">{t.name}</div>
                  <div className="text-[12px] text-muted-foreground/60">{t.role}</div>
                </div>
              </div>
              <p className="text-foreground/80 leading-[1.75] text-[15px] mb-8">"{t.quote}"</p>
              <div className="text-[10px] font-extrabold text-muted-foreground/25 tracking-[0.18em]">{t.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
