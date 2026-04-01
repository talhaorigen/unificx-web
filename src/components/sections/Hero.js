"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rotatorRef = useRef(null);
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Word Rotator Animation
    const words = rotatorRef.current.querySelectorAll(".word");
    if (words.length) {
      gsap.set(Array.from(words).slice(1), { opacity: 0, yPercent: 100 });
      gsap.set(words[0], { opacity: 1, yPercent: 0 });

      const wordTl = gsap.timeline({ repeat: -1 });
      words.forEach((word, i) => {
        const nextWord = words[(i + 1) % words.length];
        wordTl.to({}, { duration: 2.5 });
        wordTl.to(word, { yPercent: -100, opacity: 0, duration: 1.0, ease: "power2.inOut" });
        wordTl.fromTo(
          nextWord,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "<"
        );
      });
    }

    // Hero Parallax & Content Fade
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    const heroElements = heroRef.current.querySelectorAll(".hero-left, .hero-right");
    if (heroElements.length) {
      gsap.to(heroElements, {
        opacity: 0,
        y: -80,
        ease: "power1.in",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 30%",
          scrub: 0.8,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="hero dark-section" ref={heroRef}>
      {/* Cinematic Background Image with Parallax */}
      <div
        className="hero-bg parallax-bg"
        ref={bgRef}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=80&w=1600')",
          filter: "brightness(0.6) grayscale(20%)",
        }}
      />
      {/* Dark edge vignette focusing the center */}
      <div
        className="hero-overlay"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      <div className="container hero-container">
        <div className="hero-split">
          {/* Left focus */}
          <div className="hero-left">
            <h1 className="hero-title white-text">
              AI agents that actually
              <br />
              <span className="word-rotator" ref={rotatorRef}>
                <span className="word-spacer" style={{ visibility: "hidden", userSelect: "none" }}>
                  understand every caller.
                </span>
                <span className="word glow-text">own the call.</span>
                <span className="word glow-text">resolve instantly.</span>
                <span className="word glow-text">understand every caller.</span>
                <span className="word glow-text">handle everything.</span>
                <span className="word glow-text">never miss a call.</span>
              </span>
            </h1>
          </div>

          {/* Right Focus */}
          <div className="hero-right">
            <p className="hero-subtitle white-text opacity-70">
              AI voice, intelligence, and telephony — unified in one platform. No integrations. No
              compromises.
            </p>
            <div className="hero-cta-group" style={{ justifyContent: "flex-start" }}>
              <Link href="#" className="btn btn-glass" style={{ border: "1px solid rgba(255,255,255,0.4)" }}>
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
