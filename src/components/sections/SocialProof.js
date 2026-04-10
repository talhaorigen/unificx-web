


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll(".reveal-up");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0, filter: "blur(12px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16 border-b border-[var(--gray-light)] flex items-center justify-center" ref={sectionRef}>
      <div className="container">
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--gray-medium)] text-center mb-10 opacity-60 will-change-transform will-change-opacity">Trusted by leading companies</p>
        <div className="w-full flex justify-center  will-change-transform will-change-opacity">
          <div className="flex items-center flex-wrap justify-center gap-12 lg:gap-16 opacity-35">
            <span className="text-[1.3rem] font-extrabold tracking-[-0.02em] text-[var(--black)]">Microsoft</span>
            <span className="text-[1.3rem] font-extrabold tracking-[-0.02em] text-[var(--black)]">Salesforce</span>
            <span className="text-[1.3rem] font-extrabold tracking-[-0.02em] text-[var(--black)]">Amazon</span>
            <span className="text-[1.3rem] font-extrabold tracking-[-0.02em] text-[var(--black)]">Shopify</span>
            <span className="text-[1.3rem] font-extrabold tracking-[-0.02em] text-[var(--black)]">Stripe</span>
            <span className="text-[1.3rem] font-extrabold tracking-[-0.02em] text-[var(--black)]">Zendesk</span>
          </div>
        </div>
      </div>
    </section>
  );
}
