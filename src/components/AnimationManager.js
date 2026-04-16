"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationManager() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    // ─── INIT ANIMATIONS ───
    const initAnimations = () => {
      // 1. GLOBAL REVEAL ANIMATIONS
      const reveals = gsap.utils.toArray('.reveal-up');
      reveals.forEach(el => {
        gsap.fromTo(el, 
          { y: 60, opacity: 0, filter: 'blur(12px)' },
          {
            y: 0, opacity: 1, filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 2. STAGGERED GRID REVEALS
      const grids = gsap.utils.toArray('.demo-grid, .steps-grid, .pricing-grid, .trust-grid, .ind-grid, .comms-split, .capabilities-grid, .use-cases-card-grid');
      grids.forEach(grid => {
        const cards = gsap.utils.toArray(grid.children);
        if (cards.length === 0) return;
        gsap.fromTo(cards, 
          { y: 60, opacity: 0, filter: 'blur(12px)' },
          {
            y: 0, opacity: 1, filter: 'blur(0px)',
            stagger: 0.15,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: grid,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 3. STAGGERED LIST REVEALS
      const staggers = gsap.utils.toArray('.list-stagger');
      staggers.forEach(list => {
        const children = gsap.utils.toArray(list.children);
        if (children.length === 0) return;
        gsap.fromTo(children, 
          { x: -30, opacity: 0 },
          {
            x: 0, opacity: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: list,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 4. HERO REVEALS
      const heroReveals = gsap.utils.toArray('.reveal-hero');
      if (heroReveals.length) {
        gsap.fromTo(heroReveals, 
          { y: 40, opacity: 0, scale: 0.95, filter: 'blur(10px)' },
          { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
        );
      }

      const heroImg = document.querySelector('.reveal-hero-img');
      if (heroImg) {
        gsap.fromTo(heroImg, 
          { y: 100, opacity: 0, rotationX: 10, scale: 0.9 },
          { y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.6 }
        );
      }

      // 5. PARALLAX EFFECTS
      const parallaxItems = gsap.utils.toArray('.parallax-bg');
      parallaxItems.forEach(item => {
        const parent = item.parentElement;
        gsap.to(item, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: parent,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      // 7. COUNTERS
      const counters = document.querySelectorAll('.counter');
      counters.forEach(el => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            const target = parseFloat(el.dataset.target);
            gsap.to({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                el.textContent = Math.round(this.targets()[0].val);
              }
            });
          }
        });
      });

      // 8. FINAL CTA ORBS
      const orbs = document.querySelectorAll('.cta-orb');
      if (orbs.length) {
        gsap.to('.cta-orb--1', { yPercent: -40, xPercent: 10, rotation: 25, scale: 1.1, scrollTrigger: { trigger: '.final-cta', start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
        gsap.to('.cta-orb--2', { yPercent: 40, xPercent: -10, rotation: -25, scale: 1.2, scrollTrigger: { trigger: '.final-cta', start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
      }

      // 9. WORD ROTATOR (for homepage)
      const heroWords = gsap.utils.toArray('.word-rotator .word');
      if (heroWords.length) {
        // Clear previous animations if any
        gsap.set(heroWords, { opacity: 0, yPercent: 100 });
        gsap.set(heroWords[0], { opacity: 1, yPercent: 0 });

        const wordTl = gsap.timeline({ repeat: -1, delay: 2.5 });
        heroWords.forEach((word, i) => {
          const nextWord = heroWords[(i + 1) % heroWords.length];
          wordTl.to({}, { duration: 2.8 });
          wordTl.to(word, { yPercent: -100, opacity: 0, duration: 0.9, ease: 'power2.inOut' });
          wordTl.fromTo(nextWord,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
            '<'
          );
        });
      }
    };

    // Kill old triggers before re-initializing
    const killTriggers = () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

    const timer = setTimeout(() => {
      killTriggers();
      initAnimations();
      ScrollTrigger.refresh();
    }, 300); // Wait for page transition and rendering

    return () => {
      clearTimeout(timer);
      killTriggers();
    };
  }, [pathname]);

  return null;
}
