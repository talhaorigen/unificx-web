"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PricingCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const box = sectionRef.current.querySelector(".cta-box");
    gsap.fromTo(
      box,
      { y: 60, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="pricing-cta light-section" id="pricing-cta" ref={sectionRef} style={{ background: "var(--off-white)", padding: "8rem 0", position: "relative", zIndex: 2, textAlign: "center" }}>
      <div className="container text-center">
        <div className="cta-box reveal-up">
          <h2 className="section-title">Start free. Scale when ready.</h2>
          <p className="section-subtitle mb-8" style={{ color: "var(--gray-medium)", marginBottom: "3rem" }}>
            Full access for 30 days. No credit card. Every plan includes the complete CX platform.
          </p>
          <Link href="#pricing" className="btn btn-primary btn-lg">
            See all plans →
          </Link>
        </div>
      </div>
    </section>
  );
}
