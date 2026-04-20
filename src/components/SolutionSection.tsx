'use client';

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "AI Agents",
    desc: "Voice AI that handles customer calls — booking, billing, troubleshooting, FAQs, routing. Always on. Always learning. No hold times, no missed calls.",
    link: "Explore AI Agents",
    image: "/assets/screenshot-voice-agents.png",
    label: "AI AGENTS",
  },
  {
    num: "02",
    title: "AI Intelligence",
    desc: "Analyze every conversation — sentiment, intent, outcomes. Surface hidden trends, spot coaching opportunities, and make decisions backed by real data.",
    link: "Explore AI Intelligence",
    image: "/assets/screenshot-analytics.png",
    label: "AI INTELLIGENCE",
  },
  {
    num: "03",
    title: "CX Platform",
    desc: "Complete communications — phone, video, messaging — unified in one system. Built for teams that need clarity, control, and collaboration at scale.",
    link: "Explore CX Platform",
    image: "/assets/screenshot-dashboard.png",
    label: "CX PLATFORM",
  },
];

export default function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const pillarsEls = sectionRef.current.querySelectorAll("[data-pillar]");
      let closest = 0;
      let minDist = Infinity;
      pillarsEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight / 2;
        const dist = Math.abs(center - viewCenter);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="bg-background">
      <div ref={sectionRef} className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={parallaxRef} className="pt-20 sm:pt-36 lg:pt-48 pb-12 sm:pb-20">
          <span data-speed="0.06" className={`text-[11px] font-bold text-primary tracking-[0.2em] uppercase block mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            The Platform
          </span>
          <h2 data-speed="0.1" className={`text-3xl sm:text-4xl lg:text-[56px] font-extrabold text-foreground leading-[1.05] tracking-[-0.03em] reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
            Three pillars.<br />One platform.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 pb-20 lg:pb-36">
          <div className="space-y-0">
            {pillars.map((p, i) => (
              <div key={i} data-pillar className="min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center py-10 lg:py-20">
                <div className={`transition-all duration-700 ease-out ${activeIndex === i ? "opacity-100 translate-y-0" : "opacity-30 translate-y-6"}`}>
                  <span className="text-[13px] font-extrabold text-primary tracking-[0.15em] block mb-5">{p.num}</span>
                  <h3 className="text-[28px] lg:text-[40px] font-extrabold text-foreground leading-[1.1] tracking-[-0.02em] mb-5">{p.title}</h3>
                  <p className="text-muted-foreground/70 text-[16px] leading-[1.8] mb-8 max-w-md">{p.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[14px] font-bold text-primary hover:gap-3 transition-all duration-300">
                    {p.link} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-[50%] -translate-y-1/2">
              <div className="flex gap-2 mb-8">
                {pillars.map((_, i) => (
                  <div key={i} className={`h-[2px] rounded-full transition-all duration-500 ${activeIndex === i ? "w-10 bg-primary" : "w-6 bg-border"}`} />
                ))}
              </div>
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-border/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] aspect-[4/3] overflow-hidden">
                {pillars.map((p, i) => (
                  <img key={i} src={p.image} alt={p.title} loading="lazy" width={1280} height={896}
                    data-gsap-zoom
                    className={`absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover rounded-xl transition-all duration-700 ease-out ${activeIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  />
                ))}
              </div>
              <div className="mt-5">
                <span className="text-[11px] font-bold text-primary tracking-[0.2em] uppercase">{pillars[activeIndex].label}</span>
              </div>
            </div>
          </div>

          <div className="lg:hidden space-y-8">
            {pillars.map((p, i) => (
              <div key={i} className="p-2.5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-border/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)]">
                <img src={p.image} alt={p.title} loading="lazy" width={1280} height={896} className="w-full aspect-[4/3] object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
