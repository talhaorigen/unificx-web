'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Shield, Cloud, Zap } from "lucide-react";

const trustItems = [
  { icon: Shield, title: "Reliable redundancy", desc: "Multi-region failover, zero downtime" },
  { icon: Cloud, title: "Powered by AWS", desc: "Secure, scalable infrastructure" },
  { icon: Zap, title: "99.99% uptime", desc: "Enterprise-grade reliability" },
];

export default function TrustInfraSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-16 sm:py-32 lg:py-40 bg-background">
      <div ref={parallaxRef} className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-5 text-center" data-gsap-stagger-cards>
          {trustItems.map((t, i) => (
            <div key={i} className={`p-8 lg:p-10 reveal-scale stagger-${i + 1} ${isVisible ? "reveal-visible" : ""}`}>
              <div className="inline-flex p-3.5 rounded-2xl gradient-bg-subtle mb-6">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-[16px] mb-2">{t.title}</h3>
              <p className="text-[13px] text-muted-foreground/60 leading-[1.7]">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
