"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    label: "Sentiment",
    title: "Real-Time Sentiment",
    desc: "Live scoring during calls. Positive, netral, negative — with trend over call duration. Alert when score drops sharply.",
    color: "#00BA34",
    delay: "0s",
  },
  {
    label: "Categories",
    title: "Topic Categorization",
    desc: "AI auto-labels every call. See distribution across billing, booking, complaints, support, sales. No manual tagging.",
    color: "var(--blue)",
    delay: "0.1s",
  },
  {
    label: "Performance",
    title: "Employee Performance",
    desc: "Per-agent: calls handled, avg sentiment, resolution rate, talk-to-listen ratio, compliance adherence. Coach with data.",
    color: "var(--purple)",
    delay: "0.2s",
  },
  {
    label: "Trends",
    title: "Trend Detection",
    desc: "Anomaly alerts: “Billing complaints +47% this week”. Know before customers escalate to social media.",
    color: "#FF9F0A",
    delay: "0s",
  },
  {
    label: "Security",
    title: "Compliance Recording",
    desc: "Tamper-proof encrypted recordings with search. Required phrase detection. PCI, HIPAA-aware flagging.",
    color: "#000",
    delay: "0.1s",
  },
  {
    label: "Custom",
    title: "Custom Modules",
    desc: "Custom intelligence layers: price mention detection, competitor mentions, phrase tracking, custom scoring.",
    color: "var(--blue)",
    delay: "0.2s",
  },
];

export default function IntelligenceModules() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Header Reveal
    const header = sectionRef.current.querySelector(".section-title");
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

    // Grid Modules Reveal
    const cards = sectionRef.current.querySelectorAll(".module-card");
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
          trigger: ".modules-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="modules light-section" id="modules" ref={sectionRef} style={{ padding: "10rem 0", background: "#fff" }}>
      <div className="container">
        <div className="text-center mb-10 reveal-up">
          <h2 className="section-title">A module for every insight.</h2>
        </div>

        <div className="modules-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
          {modules.map((module, index) => (
            <div
              className="module-card reveal-up"
              key={index}
              style={{
                padding: "3rem",
                borderRadius: "32px",
                background: "rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "all 0.4s var(--ease-apple)",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  color: module.color,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                  letterSpacing: "1px",
                }}
              >
                {module.label}
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>{module.title}</h3>
              <p style={{ color: "#666", lineHeight: "1.6", fontSize: "1.05rem" }}>{module.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
