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
    <section className="ai-demo light-section py-[10rem] overflow-hidden" id="demo" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="reveal-up text-center mb-8">
          <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.04em] mb-[1.5rem] text-black">
            Your AI agent, in action.
          </h2>
          <p className="section-subtitle text-[1.3rem] leading-[1.6] text-[#6e6e73] max-w-[700px] mx-auto font-normal">
            Don’t take our word for it — listen for yourself. Real AI conversations. No scripts. No
            cherry-picking. This is what your callers will experience.
          </p>
        </div>

        <div className="demo-grid grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] mt-[5rem]" ref={gridRef}>
          {demos.map((demo, index) => (
            <div
              className="demo-card group bg-white/40 backdrop-blur-[20px] rounded-[40px] flex flex-col overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/40 hover:translate-y-[-12px] hover:scale-[1.01] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:border-white hover:bg-white/60"
              key={index}
              style={{ transitionDelay: `${demo.delay}s` }}
            >
              <div className="demo-img-wrapper relative aspect-[16/9] overflow-hidden bg-black">
                <Image
                    src={demo.img}
                    alt={demo.title}
                    className="demo-parallax-img w-full h-full object-cover opacity-90 transition-transform duration-1200 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] group-hover:opacity-100"
                    width={600}
                    height={338}
                />
                <div className="demo-play-overlay absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center z-[2]">
                  <div className="demo-play-btn w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] scale-[0.8] group-hover:scale-[1] transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="#006CD2" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="demo-body p-[2.5rem_3rem] text-left flex justify-between items-center gap-[2rem]">
                <h3 className="text-[1.5rem] font-bold m-0 text-black leading-[1.2] tracking-[-0.01em]">{demo.title}</h3>
                <div className="audio-visual flex items-center gap-[4px] h-[24px]">
                  <div className="bar w-[4px] h-full bg-[#006CD2] rounded-[10px] animate-wave origin-bottom" style={{ animationDelay: '0s', height: '100%' }}></div>
                  <div className="bar w-[4px] h-full bg-[#006CD2] rounded-[10px] animate-wave origin-bottom" style={{ animationDelay: '0.1s', height: '60%' }}></div>
                  <div className="bar w-[4px] h-full bg-[#006CD2] rounded-[10px] animate-wave origin-bottom" style={{ animationDelay: '0.2s', height: '80%' }}></div>
                  <div className="bar w-[4px] h-full bg-[#006CD2] rounded-[10px] animate-wave origin-bottom" style={{ animationDelay: '0.3s', height: '40%' }}></div>
                  <div className="bar w-[4px] h-full bg-[#006CD2] rounded-[10px] animate-wave origin-bottom" style={{ animationDelay: '0.4s', height: '70%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
          50% { transform: scaleY(1.3); opacity: 1; }
        }
        .animate-wave {
          animation: wave 1.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
