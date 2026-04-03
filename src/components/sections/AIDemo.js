"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const demos = [
  {
    title: "Hotel Reservation",
    img: "/assets/images/hotel_reservation_demo.png",
    delay: 0,
  },
  {
    title: "Appointment Booking",
    img: "/assets/images/appointment_booking_demo.png",
    delay: 0.1,
  },
  {
    title: "Order Status Check",
    img: "/assets/images/order_status_demo.png",
    delay: 0.2,
  },
  {
    title: "Billing Inquiry",
    img: "/assets/images/billing_inquiry_demo.png",
    delay: 0.3,
  },
];

export default function AIDemo() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // 1. Header Reveal — matches app.js (REVEALS section or SECTION TITLES section)
    const headerTitle = sectionRef.current.querySelector(".section-title");
    const headerSubtitle = sectionRef.current.querySelector(".section-subtitle");

    gsap.fromTo(
      [headerTitle, headerSubtitle],
      { y: 50, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerTitle,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );

    // 2. Staggered Grid Reveal — matches app.js (STAGGERED GRID REVEALS section)
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

    // 3. Image Parallax — matches app.js (IMAGE PARALLAX section)
    const parallaxImages = gsap.utils.toArray(".demo-parallax-img");
    parallaxImages.forEach((img) => {
      gsap.to(img, {
        yPercent: 30, // Or 20, as per 'universal parallax' vs 'image parallax' sections in app.js
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // 4. Micro-parallax for Cards — matches app.js (MICRO-PARALLAX FOR CARDS section)
    cards.forEach((card) => {
      gsap.to(card, {
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section className="ai-demo light-section" id="demo" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-8 reveal-up">
          <h2 className="section-title">Your AI agent, in action.</h2>
          <p className="section-subtitle">
            Don’t take our word for it — listen for yourself. Real AI conversations. No scripts. No
            cherry-picking. This is what your callers will experience.
          </p>
        </div>

        <div className="demo-grid" ref={gridRef}>
          {demos.map((demo, index) => (
            <div
              className="demo-card reveal-up"
              key={index}
              style={{ transitionDelay: `${demo.delay}s` }}
            >
              <div className="demo-img-wrapper">
                <Image
                  src={demo.img}
                  alt={demo.title}
                  className="demo-parallax-img"
                  width={600}
                  height={338}
                  style={{ width: "100%", height: "auto" }}
                  priority={index === 0}
                />
                <div className="demo-play-overlay">
                  <div className="demo-play-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="demo-body">
                <h3>{demo.title}</h3>
                <div className="audio-visual">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
