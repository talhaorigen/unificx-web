"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    tier: "Small Teams",
    users: "2–25 users",
    desc: "Includes voice, chat, AI agents, analytics",
    cta: "Learn More",
    featured: false,
    delay: "0s",
  },
  {
    tier: "Growing Business",
    users: "25–100 users",
    desc: "Advanced analytics, integrations, automation",
    cta: "Get Started",
    featured: true,
    delay: "0.1s",
  },
  {
    tier: "Enterprise",
    users: "100+ users",
    desc: "Custom AI agents, security, dedicated support",
    cta: "Contact Sales",
    featured: false,
    delay: "0.2s",
  },
];

export default function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
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

    const cards = sectionRef.current.querySelectorAll(".pricing-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="pricing light-section" id="pricing" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title text-center mb-8">Simple, predictable pricing.</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
              key={index}
              style={{ transitionDelay: plan.delay }}
            >
              <h3 className="pricing-tier">{plan.tier}</h3>
              <p className="pricing-users">{plan.users}</p>
              <div className="pricing-divider" />
              <p className="pricing-desc">{plan.desc}</p>
              <Link
                href="#"
                className={`btn mt-4 ${plan.featured ? "btn-primary" : "btn-ghost"}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
