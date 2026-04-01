"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Infrastructure() {
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

    // Scrub Title Animation
    const title = sectionRef.current.querySelector(".scrub-title");
    if (title) {
      gsap.fromTo(
        title,
        { backgroundPosition: "200% center" },
        {
          backgroundPosition: "0% center",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }

    // Content Reveal
    const reveals = sectionRef.current.querySelectorAll(".reveal-up, .list-stagger li");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="infrastructure dark-section" id="infrastructure" ref={sectionRef}>
      <div
        className="infra-bg parallax-bg"
        ref={bgRef}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600')",
        }}
      />
      <div className="infra-overlay" />

      <div className="container infra-content">
        <h2 className="section-title giant-title gradient-text scrub-title">
          We own the full stack.
          <br />
          That changes everything.
        </h2>
        <p className="infra-desc reveal-up">
          Most AI voice companies rely on third-party telephony. We built it from the ground up —
          giving you better quality, lower latency, and full control.
        </p>

        <ul className="infra-list list-stagger">
          <li>Zero-latency human handoff</li>
          <li>Native conversation intelligence</li>
          <li>Single unified system</li>
          <li>Built-in voice, messaging, and routing</li>
          <li>Enterprise-grade reliability</li>
        </ul>
      </div>
    </section>
  );
}
