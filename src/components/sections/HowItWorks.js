"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Sign up & choose a template",
    desc: "Pick from industry-specific AI agent templates. No setup required.",
    delay: "0s",
  },
  {
    num: "02",
    title: "Customize your agent",
    desc: "Set tone, flows, integrations. Connect CRM or calendar.",
    delay: "0.1s",
  },
  {
    num: "03",
    title: "Go live in minutes",
    desc: "Test your AI agent instantly and go live with your team.",
    delay: "0.2s",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Header Reveal
    const header = sectionRef.current.querySelectorAll(".reveal-up, .text-center");
    header.forEach((el) => {
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

    // Staggered Grid Reveal
    const cards = gsap.utils.toArray(gridRef.current.children);
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
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="how-it-works light-section" id="howItWorks" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title center-text reveal-up">
          Live in minutes.
          <br />
          Not months.
        </h2>

        <div className="text-center mb-10 reveal-up" style={{ marginBottom: "3rem" }}>
          <Image
            src="/assets/images/workflow_builder.png"
            alt="Workflow automation interface"
            width={800}
            height={500}
            style={{
              maxWidth: "800px",
              width: "100%",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
              margin: "0 auto",
            }}
          />
        </div>
        <div className="steps-grid" ref={gridRef}>
          {steps.map((step, index) => (
            <div className="step-card" key={index} style={{ transitionDelay: step.delay }}>
              <span className="step-num">Step {step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
