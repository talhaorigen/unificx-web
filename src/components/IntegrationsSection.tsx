'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";

const pricingTiers = [
  { tier: "Small Teams", users: "2–25 users", desc: "Includes voice, chat, AI agents, analytics", cta: "Learn More", featured: false },
  { tier: "Growing Business", users: "25–100 users", desc: "Advanced analytics, integrations, automation", cta: "Get Started", featured: true },
  { tier: "Enterprise", users: "100+ users", desc: "Custom AI agents, security, dedicated support", cta: "Contact Sales", featured: false },
];

export default function IntegrationsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 sm:py-36 lg:py-48 bg-background">
      <div ref={parallaxRef} className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-foreground text-center leading-[1.08] tracking-[-0.03em] mb-12 sm:mb-20 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Simple, predictable pricing.
        </h2>

        <div className="grid md:grid-cols-3 gap-5 max-w-[820px] mx-auto" data-gsap-stagger-cards>
          {pricingTiers.map((p, i) => (
            <div
              key={i}
              className={`p-6 sm:p-8 lg:p-10 rounded-2xl border text-center hover-lift reveal-scale stagger-${i + 2} ${
                p.featured
                  ? "bg-foreground text-primary-foreground border-foreground shadow-[0_30px_60px_-15px_hsl(var(--foreground)/0.3)] relative z-10 scale-[1.03]"
                  : "bg-background text-foreground border-border/50"
              } ${isVisible ? "reveal-visible" : ""}`}
            >
              <h3 className="text-[18px] font-extrabold mb-2">{p.tier}</h3>
              <p className={`text-[13px] mb-8 ${p.featured ? "text-primary-foreground/40" : "text-muted-foreground/60"}`}>{p.users}</p>
              <div className={`w-full h-px mb-8 ${p.featured ? "bg-primary-foreground/8" : "bg-border/50"}`} />
              <p className={`text-[14px] mb-10 leading-[1.7] ${p.featured ? "text-primary-foreground/50" : "text-muted-foreground/70"}`}>{p.desc}</p>
              <a href="#" className={`inline-block font-bold text-[14px] px-7 py-3 rounded-full transition-all duration-300 ${
                p.featured ? "gradient-bg text-primary-foreground hover:opacity-90 shadow-lg" : "border border-border/60 text-foreground hover:bg-secondary"
              }`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
