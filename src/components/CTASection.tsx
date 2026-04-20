'use client';

import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const rect = bgRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const progress = rect.top / viewH;
      const orbs = bgRef.current.querySelectorAll<HTMLDivElement>(".cta-orb");
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 15;
        orb.style.transform = `translate3d(0, ${progress * speed}px, 0)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="relative py-20 sm:py-36 lg:py-52 overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 bg-foreground">
        <div className="cta-orb absolute top-[-20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-30 blur-[120px] will-change-transform" style={{ background: "hsl(var(--gradient-start))" }} />
        <div className="cta-orb absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-25 blur-[100px] will-change-transform" style={{ background: "hsl(var(--gradient-end))" }} />
        <div className="cta-orb absolute top-[30%] left-[50%] w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] will-change-transform" style={{ background: "hsl(var(--gradient-start))" }} />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-primary-foreground/8" style={{
            width: `${3 + Math.random() * 5}px`, height: `${3 + Math.random() * 5}px`,
            left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            animation: `particle-float ${6 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }} />
        ))}
      </div>

      <div className="relative max-w-[680px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <span className={`text-[11px] font-bold text-primary-foreground/25 tracking-[0.2em] uppercase block mb-8 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Get Started Today
        </span>
        <h2 className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-primary-foreground leading-[1.08] tracking-[-0.03em] mb-6 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
          Ready to put AI<br />to work?
        </h2>
        <p className={`text-[17px] text-primary-foreground/40 max-w-md mx-auto mb-14 leading-[1.8] reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
          Your AI agent could be handling calls in minutes — not months.
        </p>
        <div className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 reveal-hidden stagger-3 ${isVisible ? "reveal-visible" : ""}`}>
          <a href="#" className="bg-primary-foreground text-foreground font-bold px-8 py-4 rounded-full text-[15px] hover:opacity-90 transition-all shadow-xl hover:-translate-y-0.5 active:scale-[0.98]">
            Start Free Trial
          </a>
          <a href="#" className="border border-primary-foreground/15 text-primary-foreground font-semibold px-8 py-4 rounded-full text-[15px] hover:bg-primary-foreground/10 transition-all backdrop-blur-sm active:scale-[0.98]">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
