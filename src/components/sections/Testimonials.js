"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "VP of CX, Global Hotels",
    quote:
      "UnifiCX cut our costs by 40% while actually improving customer satisfaction. The AI is indistinguishable from humans.",
    company: "HOTELS.COM",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "David Chen",
    role: "Director of Support, TechFlow",
    quote:
      "The voice quality is game-changing. We reached 80% autonomous resolution in just two weeks of deployment.",
    company: "TECHFLOW",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Maria Lopez",
    role: "COO, FinanceHub",
    quote:
      "From 45-minute wait times to instant pickup. Our customers love the speed and accuracy of the UnifiCX voice agents.",
    company: "FINANCEHUB",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const trackWidth = track.scrollWidth;
      // We need to loop half the width because we duplicated the items
      const loopWidth = trackWidth / 2;
      
      const animation = gsap.to(track, {
        x: -loopWidth,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      track.addEventListener("mouseenter", () => gsap.to(animation, { timeScale: 0, duration: 0.5 }));
      track.addEventListener("mouseleave", () => gsap.to(animation, { timeScale: 1, duration: 0.5 }));
    }
  }, []);

  return (
    <section className="testimonials light-section overflow-hidden" id="testimonials">
      <div className="container" style={{ marginBottom: "2rem" }}>
        <h2 className="section-title text-center mb-8">Trusted by the best CX leaders.</h2>
      </div>
      <div className="testimonial-track-container">
        <div className="testimonial-track" ref={trackRef}>
          {[...reviews, ...reviews].map((review, index) => (
            <div className="test-card" key={index}>
              <div className="test-user">
                <Image
                  src={review.img}
                  alt={review.name}
                  className="test-avatar"
                  width={48}
                  height={48}
                />
                <div className="test-meta">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
              <p className="test-quote">"{review.quote}"</p>
              <div className="test-logo">{review.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
