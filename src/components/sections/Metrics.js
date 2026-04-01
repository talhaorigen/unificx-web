"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Hold Time", target: 0, suffix: "s" },
  { label: "Avg Handle Time", target: 38, suffix: "s" },
  { label: "Satisfaction Score", target: 94, suffix: "%" },
  { label: "Cost Reduction", target: 60, suffix: "%" },
];

export default function Metrics() {
  const gridRef = useRef(null);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".metric-box");
    boxes.forEach((box) => {
      const counter = box.querySelector(".counter");
      const target = parseInt(counter.getAttribute("data-target"));
      
      gsap.fromTo(
        box,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.to(counter, {
        innerText: target,
        snap: { innerText: 1 },
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section className="metrics light-section focus-section" id="metrics">
      <div className="container">
        <div className="metrics-grid" ref={gridRef}>
          {metrics.map((metric, index) => (
            <div
              className="metric-box"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="metric-val">
                <span className="counter" data-target={metric.target}>
                  0
                </span>
                {metric.suffix}
              </div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
