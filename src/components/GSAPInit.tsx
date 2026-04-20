'use client';

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPInit() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const timer = setTimeout(() => {
      const vw = window.innerWidth;
      const parallaxMult = vw <= 640 ? 0.25 : vw <= 1024 ? 0.5 : 1;

      const ctx = gsap.context(() => {
        // ─── Image parallax ───
        gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.gsapParallax || "30") * parallaxMult;
          if (speed === 0) return;
          gsap.fromTo(el, { y: speed }, {
            y: -speed, ease: "none",
            scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: 0.8 },
          });
        });

        // ─── Image zoom on scroll ───
        gsap.utils.toArray<HTMLElement>("[data-gsap-zoom]").forEach((el) => {
          gsap.fromTo(el, { scale: 1.06 }, {
            scale: 1, ease: "none",
            scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "center center", scrub: 0.6 },
          });
        });

        // ─── Background parallax ───
        if (parallaxMult > 0.25) {
          gsap.utils.toArray<HTMLElement>("[data-gsap-bg]").forEach((el) => {
            gsap.fromTo(el, { yPercent: -5 * parallaxMult }, {
              yPercent: 5 * parallaxMult, ease: "none",
              scrollTrigger: { trigger: el.closest("section") || el.parentElement || el, start: "top bottom", end: "bottom top", scrub: 0.5 },
            });
          });
        }

        // ─── Hero parallax layers ───
        gsap.utils.toArray<HTMLElement>("[data-gsap-hero-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.gsapHeroParallax || "0.4") * parallaxMult;
          gsap.to(el, {
            yPercent: speed * 30, ease: "none",
            scrollTrigger: { trigger: el.closest("section") || el, start: "top top", end: "bottom top", scrub: true },
          });
        });

        // ─── Clip-path image reveals ───
        gsap.utils.toArray<HTMLElement>("[data-gsap-clip-reveal]").forEach((el) => {
          gsap.fromTo(el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)", ease: "power3.out", duration: 1.2,
              scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
            }
          );
        });

        // ─── Line-by-line text reveal ───
        gsap.utils.toArray<HTMLElement>("[data-gsap-text-reveal]").forEach((el) => {
          const lines = el.querySelectorAll<HTMLElement>(".line-reveal");
          if (lines.length === 0) return;
          gsap.fromTo(lines,
            { y: 80, opacity: 0, rotateX: 10 },
            {
              y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" },
            }
          );
        });

        // ─── 3D card tilt on hover ───
        gsap.utils.toArray<HTMLElement>("[data-gsap-tilt]").forEach((el) => {
          el.style.transformStyle = "preserve-3d";
          el.style.transition = "transform 0.3s ease-out";

          el.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            el.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) scale3d(1.02, 1.02, 1.02)`;
          });
          el.addEventListener("mouseleave", () => {
            el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
          });
        });

        // ─── Staggered card entrance ───
        gsap.utils.toArray<HTMLElement>("[data-gsap-stagger-cards]").forEach((container) => {
          const cards = container.children;
          gsap.fromTo(cards,
            { y: 60, opacity: 0, scale: 0.95 },
            {
              y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: { trigger: container, start: "top 82%", toggleActions: "play none none none" },
            }
          );
        });
      });

      ScrollTrigger.refresh();
      initialized.current = true;

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

