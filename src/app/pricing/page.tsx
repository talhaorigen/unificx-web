'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductCTA from "@/components/product/ProductCTA";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, annual: 24 },
    desc: "For small teams getting started with cloud communications.",
    features: ["Cloud PBX with 5 extensions", "Basic IVR menus", "Call recording (30 days)", "Standard support", "1 Smart Number included"],
  },
  {
    name: "Professional",
    price: { monthly: 79, annual: 65 },
    desc: "For growing teams that need AI automation and analytics.",
    features: ["Everything in Starter", "AI Voice Agents", "AI Chat Agents", "Call Evaluation", "CX Analytics dashboard", "20 Smart Numbers", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 0, annual: 0 },
    desc: "For large organizations with custom requirements.",
    features: ["Everything in Professional", "AI Intelligence suite", "Unlimited Smart Numbers", "Custom integrations", "Dedicated account manager", "99.99% uptime SLA", "SSO & SAML"],
    custom: true,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="PRICING"
        title={<>Simple pricing. <span className="gradient-text">No surprises.</span></>}
        description="Start free for 30 days. Pick the plan that fits your team. Scale as you grow."
      />

      <section ref={ref} className="py-28 lg:py-40 bg-background -mt-8">
        <div ref={parallaxRef} className="max-w-[1200px] mx-auto px-8">
          {/* Toggle */}
          <div className={`flex items-center justify-center gap-4 mb-16 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            <span className={`text-[14px] font-semibold ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className="relative w-14 h-7 rounded-full gradient-bg p-0.5 transition-all">
              <div className={`w-6 h-6 rounded-full bg-primary-foreground shadow-md transition-transform duration-300 ${annual ? "translate-x-7" : "translate-x-0"}`} />
            </button>
            <span className={`text-[14px] font-semibold ${annual ? "text-foreground" : "text-muted-foreground"}`}>Annual <span className="text-primary text-[12px] font-bold">Save 20%</span></span>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`relative p-8 rounded-2xl border transition-all duration-500 hover-lift reveal-scale stagger-${i + 2} ${isVisible ? "reveal-visible" : ""} ${plan.popular ? "border-primary/40 bg-background shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]" : "border-border/80 bg-background"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-primary-foreground text-[11px] font-bold tracking-wider uppercase">Most Popular</div>
                )}
                <h3 className="text-[22px] font-extrabold text-foreground mb-2">{plan.name}</h3>
                <p className="text-[14px] text-muted-foreground mb-6 leading-relaxed">{plan.desc}</p>
                
                {plan.custom ? (
                  <div className="mb-8">
                    <span className="text-3xl font-extrabold text-foreground">Custom</span>
                  </div>
                ) : (
                  <div className="mb-8">
                    <span className="text-4xl font-extrabold text-foreground">${annual ? plan.price.annual : plan.price.monthly}</span>
                    <span className="text-muted-foreground text-[14px] font-medium"> /user/mo</span>
                  </div>
                )}

                <a href="#" className={`block text-center font-bold py-3.5 rounded-full text-[14px] mb-8 transition-all duration-500 ${plan.popular ? "gradient-bg text-primary-foreground shadow-[0_8px_30px_hsl(var(--gradient-start)/0.3)] hover:shadow-[0_12px_40px_hsl(var(--gradient-start)/0.4)] hover:scale-[1.02]" : "border border-border text-foreground hover:bg-secondary"}`}>
                  {plan.custom ? "Talk to Sales" : "Start Free Trial"}
                </a>

                <ul className="space-y-3.5">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full gradient-bg-subtle flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] text-foreground/75 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA
        title={<>Questions? <span className="gradient-text">Let's talk.</span></>}
        subtitle="Our team can help you find the right plan for your organization."
      />
      <Footer />
    </div>
  );
}
