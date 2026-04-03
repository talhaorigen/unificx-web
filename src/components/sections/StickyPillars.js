"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "AI Agents",
    desc: "Voice AI that handles customer calls — booking, billing, troubleshooting, FAQs, routing. Always on. Always learning.",
    img: "/assets/images/pillars_dashboard.png",
  },
  {
    title: "AI Intelligence",
    desc: "Analyze every conversation — sentiment, intent, outcomes. Identify trends, opportunities, and gaps.",
    img: "/assets/images/pillars_dashboard.png",
  },
  {
    title: "CX Platform",
    desc: "Complete communications — phone, video, messaging — in one unified system.",
   img: "/assets/images/pillars_dashboard.png",
  },
];

export default function StickyPillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const pillarItems = gsap.utils.toArray(".pillar-item");
    
    pillarItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    // Crossfade effect when activeIndex changes
    if (visualRef.current) {
      gsap.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  return (
    <section className="pillars light-section" id="pillars" ref={sectionRef}>
      <div className="container pillars-container">
        {/* Pinned Left Content */}
        <div className="pillars-left">
          <div className="sticky-content">
            <h2 className="section-title massive-title">
              Three pillars.
              <br />
              One platform.
            </h2>
            <div className="pillars-visual-container">
              <Image
                ref={visualRef}
                src={pillars[activeIndex].img}
                alt={pillars[activeIndex].title}
                className="pillars-visual"
                width={800}
                height={500}
                sizes="(max-width: 1024px) 100vw, 800px"
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Scrolling Right Content */}
        <div className="pillars-right">
          {pillars.map((pillar, index) => (
            <div
              className={`pillar-item ${activeIndex === index ? "is-active" : ""}`}
              key={index}
            >
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
