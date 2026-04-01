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
    <section className="social-proof light-section" ref={sectionRef}>
      <div className="container">
        <p className="social-label reveal-up">Trusted by leading companies</p>
        <div className="logo-grid-scroll reveal-up">
          <div className="logo-track">
            <span>Microsoft</span>
            <span>Salesforce</span>
            <span>Amazon</span>
            <span>Shopify</span>
            <span>Stripe</span>
            <span>Zendesk</span>
          </div>
        </div>
      </div>
    </section>
  );
}
