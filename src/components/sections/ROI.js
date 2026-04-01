"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { val: "80%", label: "of reservations automated", delay: "0s" },
  { val: "35%", label: "reduction in no-shows", delay: "0.1s" },
  { val: "60%", label: "fewer support tickets", delay: "0.2s" },
];

export default function ROI() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Parallax Background
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Content Reveal
    const reveals = sectionRef.current.querySelectorAll(".reveal-up, .roi-card");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0, filter: "blur(12px)" },
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
  }, []);

  return (
    <section className="roi dark-section" id="roi" ref={sectionRef}>
      {/* Cinematic ROI Visualization */}
      <div
        className="roi-bg parallax-bg"
        ref={bgRef}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600')",
        }}
      />
      <div className="roi-overlay" />

      <div className="container text-center roi-content">
        <h2 className="section-title white-text reveal-up">What AI could do for your business.</h2>

        <div className="roi-stats">
          {stats.map((stat, index) => (
            <div className="roi-card" key={index} style={{ transitionDelay: stat.delay }}>
              <span className="roi-val">{stat.val}</span>
              <span className="roi-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* <div className="roi-cta reveal-up">
          <Link href="#" className="btn btn-primary btn-lg">
            Calculate your ROI
          </Link>
        </div> */}
        <div className="roi-cta reveal-up" style={{ transitionDelay: "0.3s", marginTop: "4rem" }}>
          <Link href="#" className="btn btn-white btn-lg">
            See projected impact for your industry →
          </Link>
        </div>
      </div>
    </section>
  );
}
