'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

interface Props {
  label?: string;
  title: React.ReactNode;
  description: string;
  bullets?: string[];
  dark?: boolean;
  reversed?: boolean;
  image?: string;
  children?: React.ReactNode;
}

export default function ProductSplitSection({ label, title, description, bullets, dark, reversed, image, children }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  const textContent = (
    <div className="max-w-[440px]">
      {label && (
        <span data-speed="0.04" className={`text-[11px] font-bold tracking-[0.2em] uppercase block mb-6 reveal-hidden ${isVisible ? "reveal-visible" : ""} ${dark ? "text-primary-foreground/25" : "text-primary"}`}>
          {label}
        </span>
      )}
      <h2 data-speed="0.08" className={`text-2xl sm:text-3xl lg:text-[38px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-5 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""} ${dark ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <p className={`text-[15px] mb-10 leading-[1.8] reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""} ${dark ? "text-primary-foreground/35" : "text-muted-foreground/70"}`}>
        {description}
      </p>
      {bullets && (
        <ul className="space-y-4">
          {bullets.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 reveal-left stagger-${Math.min(i + 3, 8)} ${isVisible ? "reveal-visible" : ""}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${dark ? "bg-primary/15" : "gradient-bg-subtle"}`}>
                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              </div>
              <span className={`font-medium text-[14px] leading-[1.7] ${dark ? "text-primary-foreground/50" : "text-foreground/60"}`}>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const visual = (
    <div className={`reveal-scale stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
      {image ? (
        <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] max-w-[480px] overflow-hidden">
          <img data-gsap-parallax="15" data-gsap-zoom src={image} alt="" loading="lazy" className="w-full block rounded-xl will-change-transform" />
        </div>
      ) : children ? children : (
        <div className={`rounded-xl aspect-[4/3] max-w-[480px] ${dark ? "bg-primary-foreground/3 border border-primary-foreground/6" : "bg-section-alt border border-border/50"} flex items-center justify-center`}>
          <div className="w-14 h-14 rounded-full gradient-bg opacity-15" />
        </div>
      )}
    </div>
  );

  return (
    <section ref={ref} className={`relative py-32 lg:py-44 overflow-hidden ${dark ? "" : "bg-background"}`}>
      {dark && <div className="absolute inset-0 bg-foreground" />}
      <div ref={parallaxRef} className="relative max-w-[980px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {reversed ? <>{textContent}{visual}</> : <>{visual}{textContent}</>}
        </div>
      </div>
    </section>
  );
}
