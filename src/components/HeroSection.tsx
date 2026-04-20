'use client';

import { useState, useEffect, useRef } from "react";

const rotatingWords = ["own the call.", "resolve instantly.", "understand callers.", "handle everything.", "never miss a call."];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const heroTransition = { transitionDuration: "1200ms" };

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Ambient orbs */}
      <div className="hero-orb hero-orb--blue" />
      <div className="hero-orb hero-orb--purple" />

      {/* BG image with GSAP parallax */}
      <div ref={bgRef} data-gsap-hero-parallax="0.5" className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.1)" }}>
        <img src="/assets/hero-bg.jpg" alt="Professional call center" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-primary-foreground/10" style={{
            width: `${2 + Math.random() * 4}px`, height: `${2 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
            animation: `particle-float ${6 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }} />
        ))}
      </div>

      {/* Content */}
      <div className="relative w-full max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div style={heroTransition} className={`transition-all ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div style={heroTransition} className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-md mb-6 sm:mb-10 transition-all delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold text-primary-foreground/60 tracking-[0.2em] uppercase">
                AI-Powered CX Platform
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[72px] font-extrabold leading-[1.08] tracking-[-0.03em] text-primary-foreground mb-4 sm:mb-6">
              AI agents that
              <br />
              actually
            </h1>
            <div className="h-[1.1em] text-[36px] sm:text-5xl lg:text-[72px] font-extrabold">
              <span className={`gradient-text transition-all duration-500 inline-block ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                {rotatingWords[wordIndex]}
              </span>
            </div>
          </div>

          {/* Right */}
          <div style={heroTransition} className={`transition-all delay-500 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <p className="text-[16px] sm:text-[20px] text-primary-foreground/70 max-w-[420px] mb-8 sm:mb-10 leading-[1.75]">
              AI voice, intelligence, and telephony — unified in one platform. No integrations. No compromises.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
              <a href="#" className="gradient-bg text-primary-foreground font-bold px-8 py-4 rounded-full text-[15px] hover:opacity-90 transition-all shadow-[0_8px_30px_hsl(var(--gradient-start)/0.4)] hover:shadow-[0_12px_40px_hsl(var(--gradient-start)/0.5)] hover:-translate-y-0.5 active:scale-[0.98] text-center">
                Start Free Trial
              </a>
              <a href="#" className="border border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-4 rounded-full text-[15px] hover:bg-primary-foreground/10 transition-all backdrop-blur-sm active:scale-[0.98] text-center">
                Request a Demo
              </a>
            </div>
            <p className="text-primary-foreground/35 text-[13px] tracking-wide text-center sm:text-left">
              No credit card required &nbsp;·&nbsp; Live in minutes
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
