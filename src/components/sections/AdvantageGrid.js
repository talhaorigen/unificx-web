"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Customer Calls",
    desc: "Inbound/outbound. CSAT, complaint detection, compliance. See what customers call about and how agents respond.",
    color: "var(--blue)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Internal Meetings",
    desc: "Team check-ins, training calls, 1:1s. Discussion topics, action items, who speaks most.",
    color: "var(--purple)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
        <circle cx="12" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Vendor Negotiations",
    desc: "Supplier and partner calls. Track commitments, pricing discussions, deliverable agreements.",
    color: "var(--blue)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function AdvantageGrid() {
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

    // Grid Cards Reveal
    const cards = sectionRef.current.querySelectorAll(".feature-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".advantage-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="advantage light-section" id="advantage" ref={sectionRef} style={{ padding: "10rem 0", background: "var(--off-white)", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
      <div className="container">
        <div className="text-center mb-10 reveal-up">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 tracking-[-0.04em] text-[var(--black)] leading-[1.05]">
            Competitors only analyze the calls their AI handles.{" "}
            <span style={{ display: "block", color: "var(--blue)" }}>
              We analyze EVERY call because we own the phone system.
            </span>
          </h2>
        </div>

        <div className="advantage-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
          {features.map((feature, index) => (
            <div
              className="feature-card reveal-up"
              key={index}
              style={{
                background: "#fff",
                padding: "4rem 3rem",
                borderRadius: "40px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "all 0.4s var(--ease-apple)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div
                className="icon-wrap mb-6"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "20px",
                  background: feature.color === "var(--blue)" ? "rgba(0,108,210,0.1)" : "rgba(123,30,185,0.1)",
                  color: feature.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>{feature.title}</h3>
              <p style={{ color: "var(--gray-medium)", lineHeight: "1.6" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
