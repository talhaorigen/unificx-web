"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  { title: "Booking & Reservations", delay: "0s" },
  { title: "Billing & Payments", delay: "0.1s" },
  { title: "FAQ Handling", delay: "0.2s" },
  { title: "Troubleshooting", delay: "0.3s" },
  { title: "Order Management", delay: "0s" },
  { title: "Customer Auth", delay: "0.1s" },
  { title: "Smart Call Routing", delay: "0.2s" },
  { title: "Account Management", delay: "0.3s" },
];

export default function UseCases() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll(".reveal-up");
    gsap.fromTo(
      reveals,
      { y: 40, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".use-case-grid"),
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      className="use-cases-mini"
      id="use-cases"
      ref={sectionRef}
      style={{ padding: "10rem 0", background: "var(--off-white)" }}
    >
      <div className="container">
        <div className="text-center mb-10 reveal-up">
          <h2 className="section-title">What your AI agent can handle.</h2>
        </div>
        <div
          className="use-case-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}
        >
          {USE_CASES.map((useCase, index) => (
            <div
              className="mini-card reveal-up"
              key={index}
              style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "24px",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s var(--ease-apple)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                minHeight: "180px",
                transitionDelay: useCase.delay,
              }}
            >
              <h4
                style={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  margin: 0,
                  fontFamily: "var(--font-nunito), sans-serif",
                }}
              >
                {useCase.title}
              </h4>
              <Link
                href="#"
                style={{
                  color: "var(--blue)",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                }}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
