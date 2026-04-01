"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessComms() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Header Reveal
    const header = sectionRef.current.querySelector(".comms-header");
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

    // Panels Reveal
    const panels = sectionRef.current.querySelectorAll(".comms-panel");
    gsap.fromTo(
      panels,
      { y: 60, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".comms-split"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="business-comms light-section" id="businessComms" ref={sectionRef}>
      <div className="container">
        <div className="text-center comms-header reveal-up">
          <h2 className="section-title">
            Business communications
            <br />
            meets customer engagement.
          </h2>
          <p className="section-subtitle">
            One platform for your team AND your customers. No more disjointed systems.
          </p>
        </div>

        <div className="comms-split">
          <div className="comms-panel reveal-up">
            <div className="panel-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="panel-title">For Your Team</h3>
            <ul className="apple-list">
              <li>Calls from phone, desktop, or browser</li>
              <li>Video meetings & screen sharing</li>
              <li>Internal messaging & collaboration</li>
              <li>Smart call routing</li>
              <li>Workflow automation</li>
            </ul>
          </div>

          <div className="comms-panel reveal-up" style={{ transitionDelay: "0.1s" }}>
            <div className="panel-icon icon-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="panel-title">For Your Customers</h3>
            <ul className="apple-list">
              <li>AI answers instantly</li>
              <li>Queue management & callbacks</li>
              <li>Call monitoring & insights</li>
              <li>Omnichannel experience</li>
              <li>Automated follow-ups</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
