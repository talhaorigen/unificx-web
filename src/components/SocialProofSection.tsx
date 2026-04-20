'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = ["Microsoft", "Salesforce", "Amazon", "Shopify", "Stripe", "Zendesk", "HubSpot", "ServiceNow", "Twilio", "Genesys"];

export default function SocialProofSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-background overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8 mb-8">
        <p className={`text-center text-[12px] text-muted-foreground/50 font-semibold tracking-[0.15em] uppercase reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          Trusted by innovative teams worldwide
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="logo-ticker">
          {[...logos, ...logos].map((name, i) => (
            <span key={i} className="inline-flex items-center justify-center px-14 text-muted-foreground/25 font-extrabold text-[17px] whitespace-nowrap tracking-wider uppercase">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
