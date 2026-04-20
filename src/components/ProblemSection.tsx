'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const benefits = [
  { title: "24/7, every call answered", desc: "No hold times. No voicemail. No missed opportunities. AI answers instantly — at scale." },
  { title: "20+ languages, zero hiring", desc: "All major languages supported. Accents, dialects, and context handled natively." },
  { title: "Scales instantly, no training", desc: "Handles thousands of calls simultaneously without quality drop." },
  { title: "Understands, doesn't just route", desc: "Captures intent, context, and nuance — not just keywords." },
  { title: "Takes real action in your systems", desc: "Books, updates, verifies, and executes workflows inside your tools." },
  { title: "Hands off seamlessly to humans", desc: "Transfers context-aware calls when needed — no repetition required." },
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 sm:py-36 lg:py-48 bg-section-alt">
      <div ref={parallaxRef} className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h2 data-speed="0.06" className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-foreground leading-[1.08] tracking-[-0.03em] mb-6 reveal-left ${isVisible ? "reveal-visible" : ""}`}>
              What happens when<br />AI handles your calls.
            </h2>
            <p data-speed="0.04" className={`text-[17px] text-muted-foreground/70 mb-10 leading-[1.8] reveal-left stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
              Not a chatbot. Not an IVR menu. A voice agent that listens, understands, and takes action — in natural conversation.
            </p>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div key={i} className={`flex items-start gap-4 reveal-left stagger-${Math.min(i + 3, 8)} ${isVisible ? "reveal-visible" : ""}`}>
                  <div className="w-6 h-6 rounded-full gradient-bg shrink-0 mt-0.5 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-[15px]">{b.title}</h3>
                    <p className="text-[13px] text-muted-foreground/70 mt-1 leading-[1.7]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`reveal-right stagger-3 ${isVisible ? "reveal-visible" : ""}`}>
            <div className="relative p-3 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-border/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover-lift overflow-hidden">
              <img data-gsap-parallax="20" data-gsap-zoom src="/assets/screenshot-dashboard.png" alt="UnifiCX Dashboard" loading="lazy" width={1920} height={1080} className="w-full aspect-[4/3] object-cover rounded-xl will-change-transform" />
            </div>
            <p className="text-center text-[12px] text-muted-foreground/50 mt-6 font-medium tracking-wide">Real humans, supercharged by AI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
