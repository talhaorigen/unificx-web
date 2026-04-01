"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA({ 
  title = "Ready to put AI to work?", 
  subtitle = "Your AI agent could be handling calls in minutes — not months.",
  ctaText = "Start Free Trial",
  variant = "dark" 
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reveal animations
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

    if (variant === "dark") {
      // Orb float animations only for dark variant
      gsap.to(".cta-orb--1", {
        x: "10%",
        y: "10%",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".cta-orb--2", {
        x: "-10%",
        y: "-5%",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".cta-orb--3", {
        x: "5%",
        y: "-10%",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [variant]);

  const isGradient = variant === "gradient";

  return (
    <section 
      className={`final-cta dark-section ${isGradient ? "reveal-up" : ""}`} 
      id="final-cta" 
      ref={sectionRef}
      style={isGradient ? { background: "var(--gradient)", padding: "10rem 0" } : {}}
    >
      {isGradient ? (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)", opacity: 0.5 }} />
      ) : (
        <>
          <div className="cta-orb cta-orb--1" />
          <div className="cta-orb cta-orb--2" />
          <div className="cta-orb cta-orb--3" />
        </>
      )}

      <div className="container final-content text-center" style={{ position: "relative", zIndex: 2 }}>
        <h2 className="section-title giant-title white-text reveal-up">
          {title}
        </h2>
        <p className="section-subtitle white-text opacity-70 mb-8 reveal-up" style={{ fontSize: "1.5rem" }}>
          {subtitle}
        </p>
        <div className="hero-cta-group reveal-up" style={{ justifyContent: "center", gap: "2rem" }}>
          <Link href="#" className="btn btn-white btn-lg">
            {ctaText}
          </Link>
          <Link href="#" className="btn btn-glass btn-lg">
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
