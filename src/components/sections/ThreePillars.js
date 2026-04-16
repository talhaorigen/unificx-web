"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ThreePillars = () => {
  const scrollContainerRef = useRef(null);
  const stickyContainerRef = useRef(null);
  const labelRef = useRef(null);
  const progressDotsRef = useRef([]);
  const visualRefs = useRef([]);
  const itemRefs = useRef([]);

  const pillarLabels = ['AI Agents', 'AI Intelligence', 'CX Platform'];

  useEffect(() => {
    const pillarItems = itemRefs.current;
    const pillarImages = visualRefs.current;
    const pillarDots = progressDotsRef.current;
    const pillarLabel = labelRef.current;

    if (!pillarItems.length || !pillarImages.length) return;

    const setActivePillar = (index) => {
      // ── Text items: fade dim/bright ──
      pillarItems.forEach((item, i) => {
        if (item) item.classList.toggle('is-active', i === index);
      });

      // ── Images: crossfade ──
      pillarImages.forEach((img, i) => {
        if (img) {
          gsap.to(img, {
            opacity: i === index ? 1 : 0,
            duration: 0.55,
            ease: 'power2.inOut'
          });
        }
      });

      // ── Progress dots ──
      pillarDots.forEach((dot, i) => {
        if (dot) dot.classList.toggle('is-active', i === index);
      });

      // ── Active label ──
      if (pillarLabel) {
        gsap.to(pillarLabel, {
          opacity: 0, y: -8, duration: 0.2, ease: 'power2.in',
          onComplete: () => {
            pillarLabel.textContent = pillarLabels[index];
            gsap.to(pillarLabel, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
          }
        });
      }
    };

    // Wire up ScrollTrigger for each pillar item
    const triggers = pillarItems.map((item, i) => {
      return ScrollTrigger.create({
        trigger: item,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActivePillar(i),
        onEnterBack: () => setActivePillar(i),
      });
    });

    // Pin the visual container smoothly on desktop
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      ScrollTrigger.create({
        trigger: scrollContainerRef.current,
        start: 'top 15%',
        end: 'bottom bottom',
        pin: stickyContainerRef.current
      });
    });

    // Set first pillar active immediately
    setActivePillar(0);

    return () => {
      triggers.forEach(t => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <section className="pillars light-section" id="pillars">
      <div className="container">
        {/* Section Title */}
        <div className="pillars-header reveal-up">
          <span className="section-eyebrow">The Platform</span>
          <h2 className="section-title massive-title">Three pillars.<br />One platform.</h2>
        </div>

        <div className="pillars-container">
          {/* LEFT: Scrolling pillar text */}
          <div className="pillars-scroll" ref={scrollContainerRef}>

            <div className="pillar-item" data-pillar="0" ref={el => itemRefs.current[0] = el}>
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">AI Agents</h3>
              <p className="pillar-desc">Voice AI that handles customer calls — booking, billing, troubleshooting, FAQs, routing. Always on. Always learning. No hold times, no missed calls.</p>
              <a href="ai-agents.html" className="pillar-link">Explore AI Agents <span className="material-symbols-rounded" style={{ fontSize: 'inherit' }}>arrow_forward</span></a>
            </div>

            <div className="pillar-item" data-pillar="1" ref={el => itemRefs.current[1] = el}>
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">AI Intelligence</h3>
              <p className="pillar-desc">Analyze every conversation — sentiment, intent, outcomes. Surface hidden trends, spot coaching opportunities, and make decisions backed by real data.</p>
              <a href="ai-intelligence.html" className="pillar-link">Explore AI Intelligence <span className="material-symbols-rounded" style={{ fontSize: 'inherit' }}>arrow_forward</span></a>
            </div>

            <div className="pillar-item" data-pillar="2" ref={el => itemRefs.current[2] = el}>
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">CX Platform</h3>
              <p className="pillar-desc">Complete communications — phone, video, messaging — unified in one system. Built for teams that need clarity, control, and collaboration at scale.</p>
              <a href="cx-platform.html" className="pillar-link">Explore CX Platform <span className="material-symbols-rounded" style={{ fontSize: 'inherit' }}>arrow_forward</span></a>
            </div>

          </div>{/* /.pillars-scroll */}

          {/* RIGHT: Sticky image panel */}
          <div className="pillars-sticky" ref={stickyContainerRef}>
            {/* Progress dots */}
            <div className="pillars-progress">
              <div className="pillars-dot is-active" data-index="0" ref={el => progressDotsRef.current[0] = el}></div>
              <div className="pillars-dot" data-index="1" ref={el => progressDotsRef.current[1] = el}></div>
              <div className="pillars-dot" data-index="2" ref={el => progressDotsRef.current[2] = el}></div>
            </div>

            {/* Stacked images — first is visible, others opacity:0 */}
            <div className="pillars-visual-container">
              <img src="/assets/images/chat_agent_ui.png" alt="AI Agents" className="pillars-visual" data-index="0" ref={el => visualRefs.current[0] = el} />
              <img src="/assets/images/intelligence_hero_dashboard.png" alt="AI Intelligence" className="pillars-visual" data-index="1" style={{ opacity: 0 }} ref={el => visualRefs.current[1] = el} />
              <img src="/assets/images/cx_analytics_overview.png" alt="CX Platform" className="pillars-visual" data-index="2" style={{ opacity: 0 }} ref={el => visualRefs.current[2] = el} />
            </div>

            {/* Active pillar label */}
            <div className="pillars-active-label">
              <span className="pillars-active-text" id="pillarActiveLabel" ref={labelRef}>AI Agents</span>
            </div>
          </div>{/* /.pillars-sticky */}

        </div>{/* /.pillars-container */}
      </div>
    </section>
  );
};

export default ThreePillars;
