"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AgentHero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Parallax Background
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Dashboard Entrance Animation
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        {
          rotateY: -30,
          rotateX: 20,
          scale: 0.8,
          opacity: 0,
          z: -500,
        },
        {
          rotateY: -10,
          rotateX: 10,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 2.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Header Content Reveal
    const contentElems = heroRef.current.querySelectorAll(".hero-left > *");
    gsap.fromTo(
      contentElems,
      { y: 60, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="hero dark-section" ref={heroRef}>
      <div
        className="hero-bg parallax-bg"
        ref={bgRef}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600')",
          filter: "brightness(0.4) grayscale(10%)",
        }}
      />
      <div
        className="hero-overlay"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      <div
        className="container hero-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4rem",
          padding: "120px 0",
        }}
      >
        <div className="hero-left" style={{ flex: 1, textAlign: "left" }}>
          <div
            className="badge"
            style={{
              background: "rgba(0,108,210,0.2)",
              border: "1px solid rgba(0,108,210,0.4)",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: 700,
              marginBottom: "2rem",
              display: "inline-block",
            }}
          >
            UNIFICX / AI AGENTS PAGE
          </div>
          <h1
            className="hero-title white-text"
            style={{ fontSize: "4.5rem", lineHeight: 1.1, marginBottom: "1.5rem" }}
          >
            AI agents that handle calls like your <span className="glow-text">best employee.</span>
          </h1>
          <p
            className="hero-subtitle white-text opacity-70"
            style={{ fontSize: "1.25rem", maxWidth: "600px", marginBottom: "3rem", lineHeight: 1.6 }}
          >
            Voice-first, omnichannel AI that answers every call, understands what callers need,
            takes real action in your systems, and hands off to humans seamlessly — on a telephony
            platform you own. Not a chatbot with a phone number. A genuine AI voice agent.
          </p>

          <div className="hero-cta-group" style={{ justifyContent: "flex-start", gap: "1.5rem" }}>
            <Link href="#" className="btn btn-primary btn-lg">
              Start Free Trial →
            </Link>
            <Link href="#" className="btn btn-glass btn-lg">
              Talk to Sales
            </Link>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", marginTop: "1.5rem" }}>
            No credit card required. Full platform access. Cancel anytime.
          </p>
        </div>

        <div className="hero-right reveal-up" ref={rightRef} style={{ flex: 1.2, perspective: "2000px" }}>
          <Image
            src="/assets/images/agent_dashboard_hero.png"
            alt="AI Agent Dashboard"
            width={800}
            height={500}
            style={{
              width: "100%",
              borderRadius: "24px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
