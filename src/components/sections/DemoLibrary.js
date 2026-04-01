"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const badges = [
  "Reservation", "Order Status", "Hotel Booking", 
  "Technical Support", "Trouble Diagnosis", 
  "Medical Appointment", "Pizza Ordering", "Pharmacy Refill"
];

export default function DemoLibrary() {
  const sectionRef = useRef(null);
  const playButtonRef = useRef(null);

  useEffect(() => {
    // Header Reveal
    const headerItems = sectionRef.current.querySelectorAll(".reveal-up, .demo-player-container");
    headerItems.forEach((el) => {
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

    // Sub-items staggered reveal (badges)
    const badgeElems = sectionRef.current.querySelectorAll(".badge");
    gsap.fromTo(badgeElems, 
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, opacity: 1, 
        stagger: 0.05, 
        duration: 0.8, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".demo-player-container",
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );

    // Play button pulse hover effect
    const playBtn = playButtonRef.current;
    if (playBtn) {
        gsap.to(playBtn, {
            boxShadow: "0 0 40px rgba(255,255,255,0.3)",
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });
    }

  }, []);

  return (
    <section className="demo-library dark-section" id="demo-library" ref={sectionRef} style={{ padding: "10rem 0", background: "#0a0e17", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="cta-orb cta-orb--1" style={{ opacity: 0.1 }}></div>
        <div className="container reveal-up" style={{ position: "relative", zIndex: 2 }}>
            <h2 className="section-title white-text mb-10">Hear the difference yourself.</h2>
            <div className="demo-player-container" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "40px", padding: "6rem 3rem", maxWidth: "1000px", margin: "0 auto", backdropFilter: "blur(20px)" }}>
                <div 
                    ref={playButtonRef}
                    className="play-icon" 
                    style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#fff", color: "#0a0e17", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 3rem", cursor: "pointer", transition: "all 0.3s var(--ease-apple)", transformOrigin: "center" }}
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <h3 className="white-text" style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2.5rem" }}>Interactive Demo Player</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
                    {badges.map((badge, i) => (
                        <span key={i} className="badge" style={{ background: "rgba(255,255,255,0.1)", padding: "8px 18px", borderRadius: "30px", color: "#fff", fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>{badge}</span>
                    ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", fontWeight: 600 }}>Languages: English, Spanish, Spanish & French...</p>
            </div>
        </div>
    </section>
  );
}
