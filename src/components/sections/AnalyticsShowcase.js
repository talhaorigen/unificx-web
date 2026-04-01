"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AnalyticsShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Content Reveal
    const content = sectionRef.current.querySelector(".container");
    gsap.fromTo(
      content,
      { y: 60, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
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

    // Mockup Reveal with Perspective Shift
    const mockup = sectionRef.current.querySelector(".dashboard-mockup img");
    gsap.fromTo(
      mockup,
      { y: 100, opacity: 0, rotateX: 5, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mockup,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="analytics-showcase light-section" id="analytics" ref={sectionRef} style={{ padding: "10rem 0 0 0", background: "#fff", overflow: "hidden" }}>
        <div className="container text-center reveal-up">
            <div className="section-label" style={{ fontWeight: 800, color: "var(--blue)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1.5rem" }}>ANALYTICS DASHBOARD</div>
            <h2 className="section-title" style={{ marginBottom: "2rem" }}>See everything your AI is doing.</h2>
            <p className="section-subtitle" style={{ maxWidth: "900px", margin: "0 auto 5rem auto", fontSize: "1.25rem" }}>Real-time dashboard showing every active call, resolution rates, average handle time, CSAT scores, top intents, escalation reasons, and language distribution. Export reports. Set alerts.</p>
            
            <div className="dashboard-mockup" style={{ marginTop: "2rem", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "80%", height: "100%", background: "radial-gradient(circle, rgba(0,108,210,0.05) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }}></div>
                <Image 
                    src="/assets/images/analytics_dashboard_ui_agents.png" 
                    alt="AI Analytics Dashboard Mockup" 
                    width={1400}
                    height={800}
                    style={{ width: "100%", maxWidth: "1200px", borderTopLeftRadius: "40px", borderTopRightRadius: "40px", boxShadow: "0 -30px 100px rgba(0,0,0,0.2)", display: "block", margin: "0 auto", position: "relative", zIndex: 1, border: "1px solid rgba(0,0,0,0.05)", borderBottom: "none" }}
                    priority
                />
            </div>
        </div>
    </section>
  );
}
