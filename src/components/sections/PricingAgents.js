"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { color } from "framer-motion";

export default function PricingAgents() {
  const headingRef = useRef(null);
  const starterRef = useRef(null);
  const enterpriseRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation 1 — reveal-up for heading
    gsap.fromTo(headingRef.current,
      { y: 60, opacity: 0, filter: 'blur(12px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 90%', toggleActions: 'play none none none' }
      }
    );

    // Animation 1 — reveal-up for Starter card
    gsap.fromTo(starterRef.current,
      { y: 60, opacity: 0, filter: 'blur(12px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: starterRef.current, start: 'top 90%', toggleActions: 'play none none none' }
      }
    );

    // Animation 1 — reveal-up for Enterprise card (0.1s delay)
    gsap.fromTo(enterpriseRef.current,
      { y: 60, opacity: 0, filter: 'blur(12px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: enterpriseRef.current, start: 'top 90%', toggleActions: 'play none none none' }
      }
    );

    // Animation 2 — micro-parallax on both cards
    [starterRef.current, enterpriseRef.current].forEach(card => {
      gsap.to(card, {
        y: -15, ease: 'none',
        scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    });

    // Cleanup
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className='pricing-agents light-section' id='pricing' style={{ padding: '10rem 0', background: 'var(--off-white)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className='container'>
        <h2 className='section-title text-center mb-10 reveal-up' ref={headingRef}>AI Agent Pricing</h2>
        <div className="pricing-card-container">

          {/* Starter */}
          <div className='pricing-card reveal-up' ref={starterRef} style={{ background: '#fff', padding: '5rem 4rem', borderRadius: '40px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '2.5rem', fontFamily: "'Nunito', sans-serif" }}>Starter</h3>
            <ul className='apple-list' >
              <li className="card-one">Industry templates — live in 5 min</li>
              <li className="card-one">Google, HubSpot, Zoho integrations</li>
              <li className="card-one">WhatsApp & SMS channels built in</li>
              <li className="card-one">Basic analytics dashboard</li>
              <li className="card-one">Standard premium voice library</li>
              <li className="card-one">Full CX Platform included</li>
              <li className="card-one">Email support</li>
            </ul>
            <a href='#' className='btn btn-primary btn-lg' style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '1.25rem' }}>Start Free Trial →</a>
          </div>

          {/* Enterprise */}
          <div className='pricing-card pricing-card--featured reveal-up' ref={enterpriseRef} style={{ transitionDelay: '0.1s', background: 'linear-gradient(145deg, #0a0e17 0%, #151b2b 100%)', color: '#fff', padding: '5rem 4rem', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 100px rgba(0,108,210,0.2)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color:"#fff", fontSize: '2.5rem', fontWeight: '900', marginBottom: '2.5rem', fontFamily: "'Nunito', sans-serif" }}>Enterprise</h3>
            <ul className='apple-list' >
              <li className="card-two">Custom conversation design design</li>
              <li className="card-two">Any CRM/ERP/PMS integration</li>
              <li className="card-two">Harness AI logic module</li>
              <li className="card-two">Custom brand voice (cloned)</li>
              <li className="card-two">Advanced custom analytics</li>
              <li className="card-two">Dedicated account engineer</li>
              <li className="card-two">Priority 24/7 support</li>
            </ul>
            <a href='#' className='btn btn-white btn-lg' style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '1.25rem' }}>Talk to Sales →</a>
          </div>

        </div>
      </div>
    </section>
  );
}
