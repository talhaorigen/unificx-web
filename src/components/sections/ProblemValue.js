"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "24/7, every call answered",
    desc: "No hold times. No voicemail. No missed opportunities. AI answers instantly — at scale.",
  },
  {
    title: "20+ languages, zero hiring",
    desc: "All major languages supported. Accents, dialects, and context handled natively.",
  },
  {
    title: "Scales instantly, no training",
    desc: "Handles thousands of calls simultaneously without quality drop.",
  },
  {
    title: "Understands, doesn’t just route",
    desc: "Captures intent, context, and nuance — not just keywords.",
  },
  {
    title: "Takes real action in your systems",
    desc: "Books, updates, verifies, and executes workflows inside your tools.",
  },
  {
    title: "Hands off seamlessly to humans",
    desc: "Transfers context-aware calls when needed — no repetition required.",
  },
];

export default function ProblemValue() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. Content Reveal — matches app.js (REVEALS section)
    const contentElems = sectionRef.current.querySelectorAll(".reveal-up");
    contentElems.forEach((el) => {
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

    // 2. List Items Stagger — matches app.js (STAGGERED LIST REVEALS section)
    const listItems = sectionRef.current.querySelectorAll(".benefit-list li");
    gsap.fromTo(
      listItems,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefit-list",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // 3. Benefit List Hover Interactions — matches app.js line 280
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { x: 8, duration: 0.3, ease: 'power2.out' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { x: 0, duration: 0.3, ease: 'power2.out' });
        });
    });
  }, []);

  return (
    <section className="problem-value light-section py-[10rem] bg-white" id="problem" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="row-split grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-center">
          <div className="problem-content reveal-up">
            <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-[1.5rem] text-black">
              What happens when
              <br />
              AI handles your calls.
            </h2>
            <p className="section-subtitle text-[1.3rem] leading-[1.6] text-[#6e6e73] font-normal mb-6 max-w-[700px]">
              Not a chatbot. Not an IVR menu. A voice agent that listens, understands, and takes
              action — in natural conversation.
            </p>

            <ul className="benefit-list list-stagger mt-[2.5rem] flex flex-col gap-[1.5rem] list-none p-0">
              {benefits.map((benefit, index) => (
                <li key={index} className="group flex gap-[1rem] items-start cursor-default transition-all duration-300">
                  <div className="benefit-icon w-[24px] h-[24px] rounded-full bg-[#006CD2] text-white flex items-center justify-center flex-shrink-0 mt-[4px] transition-all duration-300 group-hover:scale-[1.2] group-hover:bg-[#7B1EB9]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[14px] h-[14px]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-[1.1rem] font-bold text-black mb-[2px]">{benefit.title}</strong>
                    <small className="text-[0.95rem] text-[#6e6e73]">{benefit.desc}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="problem-visual reveal-up relative h-[480px] rounded-[28px] bg-[#f5f5f7] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.05)]">
            <Image
              src="/assets/images/office_interaction.png"
              alt="Call center customer interactions"
              fill
              className="object-cover"
              style={{
                borderRadius: "24px",
              }}
            />
            <div className="visual-label absolute bottom-[1.5rem] left-[1.5rem] px-[1.2rem] py-[0.6rem] bg-white/85 backdrop-blur-[10px] rounded-[100px] text-[0.75rem] font-extrabold text-[#006CD2] uppercase tracking-[0.05em] border border-black/5">
              Real humans, supercharged by AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
