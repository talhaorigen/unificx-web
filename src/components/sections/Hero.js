"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rotatorRef = useRef(null);
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Word Rotator Animation
    const words = rotatorRef.current.querySelectorAll(".word");
    if (words.length) {
      gsap.set(Array.from(words).slice(1), { opacity: 0, yPercent: 100 });
      gsap.set(words[0], { opacity: 1, yPercent: 0 });

      const wordTl = gsap.timeline({ repeat: -1 });
      words.forEach((word, i) => {
        const nextWord = words[(i + 1) % words.length];
        wordTl.to({}, { duration: 2.5 });
        wordTl.to(word, { yPercent: -100, opacity: 0, duration: 1.0, ease: "power2.inOut" });
        wordTl.fromTo(
          nextWord,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "<"
        );
      });
    }

    // Hero Parallax & Content Fade
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    const heroElements = heroRef.current.querySelectorAll(".hero-left, .hero-right");
    if (heroElements.length) {
      gsap.to(heroElements, {
        opacity: 0,
        y: -80,
        ease: "power1.in",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 30%",
          scrub: 0.8,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative min-h-screen  flex items-center justify-center pt-[100px] overflow-hidden dark-section" ref={heroRef}>
      {/* Cinematic Background Image with Parallax */}
      <div
        className="absolute inset-x-0 -top-[10%] -bottom-[10%] w-full h-[120%] bg-cover bg-center z-[1] will-change-transform parallax-bg"
        ref={bgRef}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=80&w=1600')",
          filter: "brightness(0.6) grayscale(20%)",
        }}
      />
      {/* Dark edge vignette focusing the center */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      <div className="container p-8 lg:p-0 text-center lg:text-start relative z-[5] w-full">
        <div className="grid grid-cols-1 gap-12 text-center lg:text-start lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 items-center">
          {/* Left focus */}
          <div className="p-0 max-w-full items-center">
            <h1 className="text-[clamp(2.2rem,8vw,5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.04em] m-0 white-text">
              AI agents that actually
              <br />
              <span className="word-rotator inline-block align-middle relative overflow-hidden leading-[1.1] pr-[0.1em]" ref={rotatorRef}>
                <span className=" inline-block invisible pointer-events-none" style={{ visibility: "hidden", userSelect: "none" }}>
                  understand every caller.
                </span>
                <span className="absolute top-0 left-0 w-full opacity-0 bg-gradient-to-r from-[#006CD2] via-[#7B1EB9] to-[#006CD2] bg-clip-text text-transparent bg-[length:300%_auto] will-change-transform will-change-opacity animate-[textGradientShift_8s_linear_infinite] drop-shadow-[0_0_10px_rgba(123,30,185,0.3)]">own the call.</span>
                <span className="absolute top-0 left-0 w-full opacity-0 bg-gradient-to-r from-[#006CD2] via-[#7B1EB9] to-[#006CD2] bg-clip-text text-transparent bg-[length:300%_auto] will-change-transform will-change-opacity animate-[textGradientShift_8s_linear_infinite] drop-shadow-[0_0_10px_rgba(123,30,185,0.3)]">resolve instantly.</span>
                <span className="absolute top-0 left-0 w-full opacity-0 bg-gradient-to-r from-[#006CD2] via-[#7B1EB9] to-[#006CD2] bg-clip-text text-transparent bg-[length:300%_auto] will-change-transform will-change-opacity animate-[textGradientShift_8s_linear_infinite] drop-shadow-[0_0_10px_rgba(123,30,185,0.3)]">understand every caller.</span>
                <span className="absolute top-0 left-0 w-full opacity-0 bg-gradient-to-r from-[#006CD2] via-[#7B1EB9] to-[#006CD2] bg-clip-text text-transparent bg-[length:300%_auto] will-change-transform will-change-opacity animate-[textGradientShift_8s_linear_infinite] drop-shadow-[0_0_10px_rgba(123,30,185,0.3)]">handle everything.</span>
                <span className="absolute top-0 left-0 w-full opacity-0 bg-gradient-to-r from-[#006CD2] via-[#7B1EB9] to-[#006CD2] bg-clip-text text-transparent bg-[length:300%_auto] will-change-transform will-change-opacity animate-[textGradientShift_8s_linear_infinite] drop-shadow-[0_0_10px_rgba(123,30,185,0.3)]">never miss a call.</span>
              </span>
            </h1>
          </div>

          {/* Right Focus */}
          <div className="p-0 max-w-full items-center lg:items-start flex flex-col justify-center lg:max-w-[480px] lg:pl-8">
            <p className="text-[1.25rem] leading-[1.6] mb-10 text-[rgba(255,255,255,0.9)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] font-normal white-text opacity-70">
              AI voice, intelligence, and telephony — unified in one platform. No integrations. No
              compromises.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 flex-col lg:flex-row">
              <Link href="#" className=" w-full md:w-auto inline-flex items-center justify-center px-[1.8rem] py-[0.8rem] text-[0.95rem] font-bold rounded-[100px] transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] whitespace-nowrap cursor-pointer font-[var(--font-nunito)] border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]" >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
