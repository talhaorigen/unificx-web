"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const omniItems = [
  { 
    title: "Voice", 
    desc: "Phone calls — inbound and outbound. Your AI answers on your business number.", 
    bg: "#fff",
    accent: "#000",
    shadow: "0 15px 30px rgba(0,0,0,0.05)",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> 
  },
  { 
    title: "WhatsApp", 
    desc: "WhatsApp Business API. Rich media, quick replies, location sharing.", 
    bg: "#25D366",
    accent: "#fff",
    shadow: "0 15px 30px rgba(37,211,102,0.2)",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> 
  },
  { 
    title: "SMS", 
    desc: "Two-way SMS. Appointment confirmations, follow-ups, proactive outreach.", 
    bg: "#fff",
    accent: "#000",
    shadow: "0 15px 30px rgba(0,0,0,0.05)",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> 
  },
  { 
    title: "Web Chat", 
    desc: "Embed on your website. General / sales knowledge, real-time resolution.", 
    bg: "#006CD2",
    accent: "#fff",
    shadow: "0 15px 30px rgba(0,108,210,0.2)",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 9h8m-8 4h6m4-9a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 5v-5H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h16z"/></svg> 
  }
];

export default function Omnichannel() {
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
    const cards = sectionRef.current.querySelectorAll(".omni-card");
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
          trigger: ".omni-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="omnichannel light-section" id="omnichannel" ref={sectionRef} style={{ padding: "10rem 0", background: "#fff" }}>
      <div className="container">
        <div className="text-center mb-10 reveal-up">
          <div className="section-label" style={{ fontWeight: 800, color: "var(--blue)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1.5rem" }}>OMNICHANNEL / ONE LOGIC, EVERY CHANNEL</div>
          <h2 className="section-title">Build your AI agent once — deploy everywhere.</h2>
          <p className="section-subtitle" style={{ maxWidth: "800px", margin: "0 auto" }}>Build your AI agent once — deploy across voice, WhatsApp, SMS, and Web Chat. Same logic, same knowledge base, same personality.</p>
        </div>

        <div className="omni-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2.5rem" }}>
          {omniItems.map((item, index) => (
            <div
              className="omni-card reveal-up"
              key={index}
              style={{ textAlign: "center", padding: "4rem 2rem", background: "rgba(0,0,0,0.02)", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.05)", transition: "all 0.3s var(--ease-apple)" }}
            >
              <div
                className="icon-wrap"
                style={{ width: "72px", height: "72px", borderRadius: "50%", background: item.bg, boxShadow: item.shadow, color: item.accent, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2.5rem" }}
              >
                {item.icon}
              </div>
              <h4 style={{ fontWeight: 800, fontSize: "1.5rem", fontFamily: "var(--font-nunito), sans-serif" }}>{item.title}</h4>
              <p style={{ color: "#666", fontSize: "1.1rem", marginTop: "1.25rem", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
