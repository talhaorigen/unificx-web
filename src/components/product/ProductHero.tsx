'use client';

import { useEffect, useRef, useState } from "react";

interface ProductHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  heroImage?: string;
  stat1?: { value: string; label: string };
  stat2?: { value: string; label: string };
  stat3?: { value: string; label: string };
}

export default function ProductHero({ badge, title, description, heroImage, stat1, stat2, stat3 }: ProductHeroProps) {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroEase = { transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" };
  const transitionStyles = {
    badge: { ...heroEase, transitionDuration: "1400ms" },
    title: { ...heroEase, transitionDuration: "1600ms" },
    description: { ...heroEase, transitionDuration: "1600ms" },
    cta: { ...heroEase, transitionDuration: "1600ms" },
    stats: { ...heroEase, transitionDuration: "1800ms" },
    image: { ...heroEase, transitionDuration: "2000ms" },
  };

  useEffect(() => { setTimeout(() => setLoaded(true), 60); }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(var(--gradient-start)) 0%, transparent 70%)", animation: "orb-drift 20s ease-in-out infinite alternate" }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(var(--gradient-end)) 0%, transparent 70%)", animation: "orb-drift 24s ease-in-out infinite alternate-reverse" }} />

      {/* Content */}
      <div className="relative z-10 max-w-[780px] mx-auto px-6 lg:px-8 w-full text-center pt-40 pb-16">
        {/* Badge */}
        <div style={transitionStyles.badge} className={`transition-all ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-[11px] font-semibold text-primary-foreground/25 tracking-[0.25em] uppercase mb-8">{badge}</span>
        </div>

        {/* Title */}
        <h1 style={transitionStyles.title} className={`text-[clamp(2.2rem,5.5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-primary-foreground mb-6 max-w-[700px] mx-auto transition-all delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {title}
        </h1>

        {/* Description */}
        <p style={transitionStyles.description} className={`text-[clamp(15px,1.3vw,18px)] text-primary-foreground/35 max-w-[480px] mx-auto mb-12 leading-[1.8] font-medium transition-all delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {description}
        </p>

        {/* CTAs */}
        <div style={transitionStyles.cta} className={`flex flex-wrap items-center justify-center gap-3 mb-16 transition-all delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a href="#" className="gradient-bg text-primary-foreground font-bold px-8 py-3.5 rounded-full text-[14px] hover:scale-[1.03] transition-all duration-500 shadow-[0_6px_30px_hsl(var(--gradient-start)/0.3)]">
            Start Free Trial
          </a>
          <a href="#" className="border border-primary-foreground/[0.08] text-primary-foreground/50 font-semibold px-8 py-3.5 rounded-full text-[14px] hover:bg-primary-foreground/[0.05] hover:text-primary-foreground/70 transition-all duration-500">
            Watch Demo
          </a>
        </div>

        {/* Stats */}
        {(stat1 || stat2 || stat3) && (
          <div style={transitionStyles.stats} className={`flex items-center justify-center gap-0 transition-all delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[stat1, stat2, stat3].filter(Boolean).map((stat, i, arr) => (
              <div key={i} className="flex items-center">
                <div className="text-center px-8 lg:px-12">
                  <div className="text-[28px] lg:text-[32px] font-extrabold text-primary-foreground tracking-tight leading-none mb-1">{stat!.value}</div>
                  <div className="text-[10px] text-primary-foreground/18 font-semibold tracking-[0.18em] uppercase">{stat!.label}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px h-10 bg-primary-foreground/[0.06]" />}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hero Image */}
      {heroImage && (
        <div style={transitionStyles.image} className={`relative z-10 w-full max-w-[800px] mx-auto px-6 pb-20 transition-all delay-500 ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-[0.95]"}`}>
          <div className="relative p-3 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden">
            <img data-gsap-parallax="25" data-gsap-zoom src={heroImage} alt="Product interface" loading="eager" className="w-full block rounded-xl will-change-transform" />
          </div>
        </div>
      )}

      {/* Subtle bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/10 z-20" />
    </section>
  );
}
