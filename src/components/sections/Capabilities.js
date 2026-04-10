"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Intent Understanding",
    desc: 'Understands meaning, not just keywords. "Change my Thursday appt to noon" and "Can you reschedule me?" trigger the same workflow. Contextual memory.',
    accent: "#006CD2",
    bg: "rgba(0,108,210,0.1)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "20+ Languages Native",
    desc: "Language detected from caller's first sentence. Switches mid-call. English, French, Arabic, Spanish, Mandarin, Portuguese, German, and more.",
    accent: "#7B1EB9",
    bg: "rgba(123,30,185,0.1)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Real Action in Systems",
    desc: "Books to your calendar. Processes payments via Stripe. Updates orders in Shopify. Cases up in Salesforce. Verifies identity. Sends SMS. All within the call.",
    accent: "#006CD2",
    bg: "rgba(0,108,210,0.1)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Multi-Turn Conversations",
    desc: "Handles interruptions, corrections, clarifications. Maintains context across the entire call, even when topics change.",
    accent: "#7B1EB9",
    bg: "rgba(123,30,185,0.1)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Learning & Improvement",
    desc: "Every call feeds back. See which questions AI couldn't answer, watch those human handoffs, improve logic on real data.",
    accent: "#006CD2",
    bg: "rgba(0,108,210,0.1)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Guardrails & Compliance",
    desc: 'Set strict AI boundaries. "What the AI didn\'t catch or hear". Tell it it must escalate. Compliance scripts it must follow. PII redaction natively.',
    accent: "#7B1EB9",
    bg: "rgba(123,30,185,0.1)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];


export default function Capabilities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Header Reveal
    const header = sectionRef.current.querySelector(".text-center");
    gsap.fromTo(
      header,
      { y: 60, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Staggered Grid Reveal
    const cards = sectionRef.current.querySelectorAll(".feature-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".understanding-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="understanding light-section" id="capabilities" ref={sectionRef} style={{ padding: "10rem 0", background: "#fff" }}>
      <div className="container">
        <div className="text-center mb-10 reveal-up">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 tracking-[-0.04em] text-[var(--black)] leading-[1.05]">
            More than speech recognition.
            <span style={{ display: "block", background: "linear-gradient(135deg, #006CD2 0%, #7B1EB9 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real understanding.
            </span>
          </h2>
        </div>

        <div className="understanding-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
          {features.map((feature, index) => (
            <div
              className="feature-card glass-card reveal-up"
              key={index}
              style={{ padding: "3rem", borderRadius: "32px", background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.05)", transition: "all 0.4s var(--ease-apple)" }}
            >
              <div
                className="icon-wrap"
                style={{ width: "56px", height: "56px", borderRadius: "16px", background: feature.bg, color: feature.accent, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}
              >
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem" }}>{feature.title}</h3>
              <p style={{ color: "#666", fontSize: "1.1rem", lineHeight: 1.6 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
