"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AnalyticsDeepDive() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Header Reveal
    const header = sectionRef.current.querySelector(".container");
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

    // Dashboard Reveal with Perspective Shift
    const mockup = sectionRef.current.querySelector(".full-dashboardreveal img");
    gsap.fromTo(
      mockup,
      { y: 100, opacity: 0, rotateX: 5, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mockup,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Parallax elements
    const parallaxElements = sectionRef.current.querySelectorAll(".parallax-element");
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-scroll-speed")) || 1;
      gsap.to(el, {
        y: speed * 50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="analytics-deep-dive light-section" id="deep-dive" ref={sectionRef} style={{ padding: "10rem 0 5rem 0", background: "var(--off-white)", overflow: "hidden" }}>
        <div className="container text-center reveal-up">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 tracking-[-0.04em] text-[var(--black)] leading-[1.05] mb-6">See the full picture.</h2>
            <p className="section-subtitle mb-10" style={{ maxWidth: "800px", margin: "0 auto 5rem auto" }}>Intelligence analytics dashboard preview including sentiment timeline, topic distribution, agent leaderboard, volume heatmap, and live transcript with highlights.</p>
            
            <div className="full-dashboardreveal reveal-up" style={{ position: "relative", perspective: "2000px" }}>
                 {/* Full dashboard mockup */}
                <Image 
                    src="/assets/images/analytics_deep_dive.png" 
                    alt="Full Analytics Dashboard Preview" 
                    width={1300}
                    height={800}
                    style={{ width: "100%", maxWidth: "1300px", margin: "0 auto", borderRadius: "32px", boxShadow: "0 60px 150px rgba(0,0,0,0.15)", border: "1px solid rgba(0,0,0,0.1)", transform: "rotateX(5deg)" }}
                />
                
                {/* Parallax floating elements (data points) */}
                <div className="parallax-element" style={{ position: "absolute", top: "15%", right: "5%", padding: "1.5rem", background: "#fff", borderRadius: "16px", boxShadow: "0 15px 30px rgba(0,0,0,0.1)", borderLeft: "4px solid var(--blue)", textAlign: "left", zIndex: 2 }} data-scroll-speed="2">
                    <div style={{ fontWeight: 800, fontfamily: "var(--font-nunito), sans-serif", fontSize: "1.1rem" }}>Trend Alert</div>
                    <div style={{ fontSize: "0.85rem", color: "#444", margintop: "5px" }}>Billing complaints +47%</div>
                </div>
                
                <div className="parallax-element" style={{ position: "absolute", bottom: "20%", left: "5%", padding: "1.5rem", background: "#fff", borderRadius: "16px", boxShadow: "0 15px 30px rgba(0,0,0,0.1)", borderLeft: "4px solid #00BA34", textAlign: "left", zIndex: 2 }} data-scroll-speed="-1">
                    <div style={{ fontWeight: 800, fontfamily: "var(--font-nunito), sans-serif", fontSize: "1.1rem" }}>High CSAT</div>
                    <div style={{ fontSize: "0.85rem", color: "#444", margintop: "5px" }}>Agent "Sarah L." resolved 12 cases</div>
                </div>
            </div>
        </div>
    </section>
  );
}
