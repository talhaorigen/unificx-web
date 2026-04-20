'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface Props {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  features: Feature[];
  dark?: boolean;
  columns?: 2 | 3;
}

export default function ProductFeatureGrid({ label, title, subtitle, features, dark, columns = 3 }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className={`py-32 lg:py-44 ${dark ? "relative overflow-hidden" : "bg-background"}`}>
      {dark && <div className="absolute inset-0 bg-foreground" />}
      <div ref={parallaxRef} className={`relative max-w-[980px] mx-auto px-6 lg:px-8 ${dark ? "z-10" : ""}`}>
        <div className="max-w-xl mb-16 lg:mb-20">
          {label && (
            <span data-speed="0.04" className={`text-[11px] font-bold tracking-[0.2em] uppercase block mb-4 reveal-hidden ${isVisible ? "reveal-visible" : ""} ${dark ? "text-primary-foreground/25" : "text-primary"}`}>
              {label}
            </span>
          )}
          <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-5 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""} ${dark ? "text-primary-foreground" : "text-foreground"}`}>
            {title}
          </h2>
          {subtitle && (
            <p data-speed="0.04" className={`text-[16px] leading-[1.8] reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""} ${dark ? "text-primary-foreground/35" : "text-muted-foreground/70"}`}>
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-4`}>
          {features.map((f, i) => (
            <div key={i} className={`group p-7 rounded-xl border hover-lift reveal-scale stagger-${Math.min(i + 3, 8)} ${isVisible ? "reveal-visible" : ""} ${dark ? "border-primary-foreground/6 bg-primary-foreground/[0.02] hover:bg-primary-foreground/[0.05]" : "border-border/50 bg-background hover:border-border hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.04)]"} transition-all duration-500`}>
              <div className={`p-2.5 rounded-lg inline-flex mb-5 ${dark ? "bg-primary/12" : "gradient-bg-subtle"}`}>
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className={`text-[15px] font-bold mb-2 ${dark ? "text-primary-foreground" : "text-foreground"}`}>{f.title}</h3>
              <p className={`text-[13px] leading-[1.7] ${dark ? "text-primary-foreground/35" : "text-muted-foreground/70"}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
