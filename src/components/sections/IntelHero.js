"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function IntelHero() {
  const sectionRef = useRef(null);
  const mockupRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Content Reveal
    const content = sectionRef.current.querySelector(".hero-left");
    gsap.fromTo(
      content.children,
      { y: 60, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Mockup Reveal
    if (mockupRef.current) {
      gsap.fromTo(
        mockupRef.current,
        { scale: 0.9, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mockupRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Floating Sentiment Badge
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section className="hero light-section" id="intel-hero" ref={sectionRef} style={{ paddingTop: "160px", paddingBottom: "100px", background: "#fff", overflow: "hidden" }}>
      <div className="container hero-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4rem" }}>
        <div className="hero-left reveal-up" style={{ flex: 1.1, textAlign: "left" }}>
          <div
            className="badge"
            style={{
              background: "rgba(0,108,210,0.08)",
              border: "1px solid rgba(0,108,210,0.15)",
              color: "var(--blue)",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.85rem",
              fontWeight: 800,
              marginBottom: "2rem",
              display: "inline-block",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            UNIFICX / AI INTELLIGENCE
          </div>
          <h1 className="massive-title" style={{ marginBottom: "1.5rem", color: "var(--black)" }}>
            Understand every conversation in your organization.
          </h1>
          <p
            className="section-subtitle"
            style={{
              marginLeft: 0,
              textAlign: "left",
              marginBottom: "3.5rem",
              color: "var(--gray-medium)",
              fontSize: "1.4rem",
              maxWidth: "600px",
            }}
          >
            Not just AI calls — every call. Customer service, internal meetings, vendor
            negotiations. Real-time sentiment, topic categorization, employee performance, trend
            detection, and custom analytics modules.
          </p>

          <div className="hero-cta-group" style={{ justifyContent: "flex-start", gap: "1.5rem" }}>
            <Link href="#" className="btn btn-primary btn-lg">
              Start Free Trial →
            </Link>
            <Link href="#" className="btn btn-ghost btn-lg" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
              Talk to Sales
            </Link>
          </div>
        </div>

        <div className="hero-right reveal-up" style={{ flex: 1.4, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "-10%",
              right: "-10%",
              width: "120%",
              height: "120%",
              background: "radial-gradient(circle, rgba(123,30,185,0.05) 0%, transparent 70%)",
              filter: "blur(80px)",
              zIndex: 0,
            }}
          ></div>
          <div ref={mockupRef}>
            <Image
              src="/assets/images/intelligence_hero_dashboard.png"
              alt="UnifiCX AI Intelligence Dashboard"
              width={1000}
              height={700}
              style={{
                width: "100%",
                borderRadius: "24px",
                boxShadow: "0 40px 120px rgba(0,0,0,0.12)",
                position: "relative",
                zIndex: 1,
                border: "1px solid rgba(0,0,0,0.05)",
              }}
              priority
            />
          </div>

          {/* Animated data badge */}
          <div
            ref={badgeRef}
            className="reveal-up"
            style={{
              position: "absolute",
              bottom: "10%",
              left: "-5%",
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#00BA34",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.1rem", lineHeight: 1 }}>Positive Sentiment</div>
              <div style={{ fontSize: "0.85rem", color: "#666", marginTop: "4px" }}>
                Real-time detection active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
