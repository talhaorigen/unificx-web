"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Reliable redundancy",
    desc: "Multi-region failover, zero downtime",
    delay: "0s",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    title: "Powered by AWS",
    desc: "Secure, scalable infrastructure",
    delay: "0.1s",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "99.99% uptime",
    desc: "Enterprise-grade reliability",
    delay: "0.2s",
  },
];

export default function TrustGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".trust-item");
    gsap.fromTo(
      items,
      { y: 40, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="trust light-section" id="trust" ref={sectionRef}>
      <div className="container text-center">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div
              className="trust-item reveal-up"
              key={index}
              style={{ transitionDelay: item.delay }}
            >
              <div className="trust-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
