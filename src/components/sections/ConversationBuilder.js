"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  "Drag-and-drop flow editor — visual, no code.",
  "Pre-built templates for every industry.",
  "Design variables and conditional logic.",
  "CRM actions (API) in flow nodes.",
  "Test and simulate calls before going live.",
  "Version history — roll back any change."
];

export default function ConversationBuilder() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Content Reveal
    const content = sectionRef.current.querySelector(".split-content");
    gsap.fromTo(
      content,
      { x: -50, opacity: 0, filter: "blur(12px)" },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Bullet Stagger
    const bulletItems = sectionRef.current.querySelectorAll(".bullet-list li");
    gsap.fromTo(
      bulletItems,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".bullet-list",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Image Reveal with Floating Hover
    const imgWrap = sectionRef.current.querySelector(".split-image");
    gsap.fromTo(
      imgWrap,
      { x: 50, opacity: 0, filter: "blur(15px)", scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgWrap,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Gentle float on the image
    gsap.to(imageRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

  }, []);

  return (
    <section className="split-section light-section" id="builder" ref={sectionRef} style={{ padding: "10rem 0", overflow: "hidden", background: "#fff" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6rem" }}>
            <div className="split-content reveal-up" style={{ flex: 1 }}>
                <div className="section-label" style={{ fontWeight: 800, color: "var(--blue)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1.5rem" }}>CONVERSATION BUILDER</div>
                <h2 className="section-title" style={{ marginBottom: "2rem" }}>Design conversations visually.</h2>
                <p className="section-subtitle mb-8" style={{ lineHeight: 1.6, color: "#555", fontSize: "1.25rem" }}>Drag-and-drop conversation flow builder. Define greetings, intent collection, actions, logic, and escalation paths — all without writing code. Templates give you a head start.</p>
                <ul className="bullet-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {bullets.map((text, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", fontWeight: 700, color: "#222", fontSize: "1.1rem" }}>
                            <svg style={{ flexShrink: 0, color: "#006CD2", marginTop: "4px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="split-image reveal-up" style={{ flex: 1.4, position: "relative" }}>
                <div style={{ position: "absolute", top: "10%", left: "10%", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(123,30,185,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
                <div ref={imageRef}>
                    <Image 
                        src="/assets/images/flow_builder_ui.png" 
                        alt="Conversation Flow Builder" 
                        width={900}
                        height={600}
                        style={{ width: "100%", height: "auto", borderRadius: "24px", position: "relative", zIndex: 1, boxShadow: "0 40px 100px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.05)" }}
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
