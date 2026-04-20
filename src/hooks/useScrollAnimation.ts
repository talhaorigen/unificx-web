'use client';

import { useEffect, useRef, useState, useCallback } from "react";

export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function useCountUp(end: number, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isVisible]);
  return count;
}

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const viewH = window.innerHeight;
    if (rect.bottom < -200 || rect.top > viewH + 200) return;
    const scrollProgress = (rect.top - viewH / 2) / viewH;
    const y = scrollProgress * speed * 100;
    el.style.transform = `translate3d(0, ${y}px, 0)`;
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return ref;
}

export function useParallaxImage(speed = 0.15) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const progress = (rect.top / viewH - 0.5) * 2;
      el.style.transform = `translate3d(0, ${progress * speed * 100}px, 0) scale(1.08)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}

/**
 * Multi-element parallax: each child with [data-parallax-speed] gets its own transform
 */
export function useTextParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const elements = container.querySelectorAll<HTMLElement>("[data-speed]");
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.05");
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        if (rect.bottom < -100 || rect.top > viewH + 100) return;
        const progress = (rect.top - viewH * 0.5) / viewH;
        el.style.transform = `translate3d(0, ${progress * speed * 120}px, 0)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return containerRef;
}
