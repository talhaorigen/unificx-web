'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "Step 01", title: "Sign up & choose a template", desc: "Pick from industry-specific AI agent templates. No setup required." },
  { num: "Step 02", title: "Customize your agent", desc: "Set tone, flows, integrations. Connect CRM or calendar." },
  { num: "Step 03", title: "Go live in minutes", desc: "Deploy instantly and monitor from real-time dashboard." },
];

export default function PlatformSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 sm:py-36 lg:py-48 bg-section-alt overflow-hidden">
      <div ref={parallaxRef} className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-foreground text-center leading-[1.08] tracking-[-0.03em] mb-12 sm:mb-20 lg:mb-24 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Live in minutes.<br />Not months.
        </h2>

        <div className="grid md:grid-cols-3 gap-5 max-w-[900px] mx-auto" data-gsap-stagger-cards>
          {steps.map((s, i) => (
            <div key={i} className={`p-6 sm:p-8 lg:p-10 rounded-2xl bg-background border border-border/60 hover-lift reveal-scale stagger-${i + 2} ${isVisible ? "reveal-visible" : ""}`}>
              <span className="text-[11px] font-extrabold text-primary tracking-[0.18em]">{s.num}</span>
              <h3 className="text-[18px] font-extrabold text-foreground mt-6 mb-3 leading-tight">{s.title}</h3>
              <p className="text-muted-foreground/70 text-[14px] leading-[1.75]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
