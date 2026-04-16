"use client";

import { useEffect } from "react";
import ThreePillars from "@/components/sections/ThreePillars";
import TrustedSection from "@/components/sections/TrustedSection";
import LogoMarquee from "@/components/sections/LogoMarquee";

export default function Home() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* 1. HERO — CINEMATIC FULL SCREEN */}
      <section className="hero" id="hero">
        {/* Ambient Gradient Orbs */}
        <div className="hero-orb hero-orb--blue"></div>
        <div className="hero-orb hero-orb--purple"></div>
        {/* Background Image */}
        <div className="hero-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/hero-bg-real.png')" }}></div>
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="hero-split">
            {/* Left: Main Headline */}
            <div className="hero-left">
              <div className="hero-eyebrow">AI-Powered CX Platform</div>
              <h1 className="hero-title">
                AI agents that<br />actually
                <span className="word-rotator">
                  <span className="word glow-text">own the call.</span>
                  <span className="word glow-text">resolve instantly.</span>
                  <span className="word glow-text">understand callers.</span>
                  <span className="word glow-text">handle everything.</span>
                  <span className="word glow-text">never miss a call.</span>
                </span>
              </h1>
            </div>

            {/* Right: Subtitle + CTA */}
            <div className="hero-right">
              <p className="hero-subtitle">AI voice, intelligence, and telephony — unified in one platform. No integrations. No compromises.</p>
              <div className="hero-cta-group">
                <a href="#" className="btn btn-primary btn-lg">Start Free Trial</a>
                <a href="#" className="btn btn-ghost--light btn-lg">Request a Demo</a>
              </div>
              <div className="hero-trust">No credit card required &nbsp;·&nbsp; Live in minutes</div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero-scroll-hint">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      <LogoMarquee />

      {/* 2. AI DEMO SECTION */}
      <section className="ai-demo light-section" id="demo">
        <div className="container">
          <div className="text-center mb-8 reveal-up">
            <h2 className="section-title">Your AI agent, in action.</h2>
            <p className="section-subtitle">Don’t take our word for it — listen for yourself. Real AI conversations. No scripts. No cherry-picking. This is what your callers will experience.</p>
          </div>
          
          <div className="demo-grid">
            {/* 1. HOTEL */}
            <div className="demo-card reveal-up hover-pop">
              <div className="demo-img-wrapper">
                <img src="/assets/images/demo_hotel_real.png" alt="Hotel Reservation" className="demo-parallax-img" />
                <div className="demo-play-overlay">
                  <div className="demo-play-btn">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
              <div className="demo-body">
                <h3>Hotel Reservation</h3>
                <div className="audio-visual">
                  <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                </div>
              </div>
            </div>

            {/* 2. APPOINTMENT */}
            <div className="demo-card reveal-up hover-pop" style={{ transitionDelay: "0.1s" }}>
              <div className="demo-img-wrapper">
                <img src="/assets/images/demo_appointment_real.png" alt="Appointment Booking" className="demo-parallax-img" />
                <div className="demo-play-overlay">
                  <div className="demo-play-btn">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
              <div className="demo-body">
                <h3>Appointment Booking</h3>
                <div className="audio-visual">
                  <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                </div>
              </div>
            </div>

            {/* 3. ORDER STATUS */}
            <div className="demo-card reveal-up hover-pop" style={{ transitionDelay: "0.2s" }}>
              <div className="demo-img-wrapper">
                <img src="/assets/images/demo_order_real.png" alt="Order Status Check" className="demo-parallax-img" />
                <div className="demo-play-overlay">
                  <div className="demo-play-btn">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
              <div className="demo-body">
                <h3>Order Status Check</h3>
                <div className="audio-visual">
                  <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                </div>
              </div>
            </div>

            {/* 4. BILLING */}
            <div className="demo-card reveal-up hover-pop" style={{ transitionDelay: "0.3s" }}>
              <div className="demo-img-wrapper">
                <img src="/assets/images/demo_billing_real.png" alt="Billing Inquiry" className="demo-parallax-img" />
                <div className="demo-play-overlay">
                  <div className="demo-play-btn">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
              <div className="demo-body">
                <h3>Billing Inquiry</h3>
                <div className="audio-visual">
                  <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM / VALUE SECTION */}
      <section className="problem-value light-section" id="problem">
        <div className="container row-split">
          <div className="problem-content reveal-up">
            <h2 className="section-title">What happens when<br />AI handles your calls.</h2>
            <p className="section-subtitle mb-6">Not a chatbot. Not an IVR menu. A voice agent that listens, understands, and takes action — in natural conversation.</p>
            
            <ul className="benefit-list list-stagger">
              <li>
                <div className="benefit-icon"><span className="material-symbols-rounded" style={{ fontSize: "14px", color: "white !important", background: "none", WebkitTextFillColor: "white" }}>check</span></div>
                <div><strong>24/7, every call answered</strong><small>No hold times. No voicemail. No missed opportunities. AI answers instantly — at scale.</small></div>
              </li>
              <li>
                <div className="benefit-icon"><span className="material-symbols-rounded" style={{ fontSize: "14px", color: "white !important", background: "none", WebkitTextFillColor: "white" }}>check</span></div>
                <div><strong>20+ languages, zero hiring</strong><small>All major languages supported. Accents, dialects, and context handled natively.</small></div>
              </li>
              <li>
                <div className="benefit-icon"><span className="material-symbols-rounded" style={{ fontSize: "14px", color: "white !important", background: "none", WebkitTextFillColor: "white" }}>check</span></div>
                <div><strong>Scales instantly, no training</strong><small>Handles thousands of calls simultaneously without quality drop.</small></div>
              </li>
              <li>
                <div className="benefit-icon"><span className="material-symbols-rounded" style={{ fontSize: "14px", color: "white !important", background: "none", WebkitTextFillColor: "white" }}>check</span></div>
                <div><strong>Understands, doesn’t just route</strong><small>Captures intent, context, and nuance — not just keywords.</small></div>
              </li>
              <li>
                <div className="benefit-icon"><span className="material-symbols-rounded" style={{ fontSize: "14px", color: "white !important", background: "none", WebkitTextFillColor: "white" }}>check</span></div>
                <div><strong>Takes real action in your systems</strong><small>Books, updates, verifies, and executes workflows inside your tools.</small></div>
              </li>
              <li>
                <div className="benefit-icon"><span className="material-symbols-rounded" style={{ fontSize: "14px", color: "white !important", background: "none", WebkitTextFillColor: "white" }}>check</span></div>
                <div><strong>Hands off seamlessly to humans</strong><small>Transfers context-aware calls when needed — no repetition required.</small></div>
              </li>
            </ul>
          </div>
          <div className="problem-visual reveal-up">
            <img src="/assets/images/office_interaction.png" alt="Call center customer interactions" style={{ width: "100%", height: "auto", borderRadius: "24px", boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }} />
            <div className="visual-label mt-4">Real humans, supercharged by AI</div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT PILLARS (Sticky Scroll) */}
      <ThreePillars />


      {/* 5. HOW IT WORKS (Timeline / Steps) */}
      <section className="how-it-works light-section" id="howItWorks">
        <div className="container">
          <h2 className="section-title center-text reveal-up">Live in minutes.<br />Not months.</h2>
          
          <div className="text-center mb-10 reveal-up" style={{ marginBottom: "3rem" }}>
            <img src="/assets/images/workflow_builder.png" alt="Workflow automation interface" style={{ maxWidth: "800px", width: "100%", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", margin: "0 auto" }} />
          </div>
          <div className="steps-grid">
            <div className="step-card reveal-up hover-pop">
              <span className="step-num">Step 01</span>
              <h3>Sign up & choose a template</h3>
              <p>Pick from industry-specific AI agent templates. No setup required.</p>
            </div>
            <div className="step-card reveal-up hover-pop" style={{ transitionDelay: "0.1s" }}>
              <span className="step-num">Step 02</span>
              <h3>Customize your agent</h3>
              <p>Set tone, flows, integrations. Connect CRM or calendar.</p>
            </div>
            <div className="step-card reveal-up hover-pop" style={{ transitionDelay: "0.2s" }}>
              <span className="step-num">Step 03</span>
              <h3>Go live in minutes</h3>
              <p>Deploy instantly and monitor from real-time dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VOICE INFRASTRUCTURE (Dark Mode Reveal) */}
      <section className="infrastructure dark-section" id="infrastructure">
        <div className="infra-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/infra_real.png')" }}></div>
        <div className="infra-overlay"></div>

        <div className="container infra-content">
          <div className="section-eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>Built Different</div>
          <h2 className="infra-title scrub-title">We own the full stack.<br /><span className="gradient-text">That changes everything.</span></h2>
          <p className="infra-desc reveal-up">Most AI voice companies rely on third-party telephony. We built it from the ground up — giving you better quality, lower latency, and full control.</p>

          <ul className="infra-list list-stagger">
            <li>Zero-latency human handoff</li>
            <li>Native conversation intelligence</li>
            <li>Single unified system</li>
            <li>Built-in voice, messaging, and routing</li>
            <li>Enterprise-grade reliability</li>
          </ul>
        </div>
      </section>

      {/* 7. PERFORMANCE METRICS (Fast Counting) */}
      <section className="metrics light-section focus-section" id="metrics">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-box reveal-up hover-pop">
              <div className="metric-val">
                <span className="counter" data-target="0">0</span>s
              </div>
              <div className="metric-label">Hold Time</div>
            </div>
            <div className="metric-box reveal-up hover-pop" style={{ transitionDelay: "0.1s" }}>
              <div className="metric-val">
                <span className="counter" data-target="38">0</span>s
              </div>
              <div className="metric-label">Avg Handle Time</div>
            </div>
            <div className="metric-box reveal-up hover-pop" style={{ transitionDelay: "0.2s" }}>
              <div className="metric-val">
                <span className="counter" data-target="94">0</span>%
              </div>
              <div className="metric-label">Satisfaction Score</div>
            </div>
            <div className="metric-box reveal-up hover-pop" style={{ transitionDelay: "0.3s" }}>
              <div className="metric-val">
                <span className="counter" data-target="60">0</span>%
              </div>
              <div className="metric-label">Cost Reduction</div>
            </div>
          </div>
          <div className="text-center mt-10 reveal-up" style={{ marginTop: "4rem" }}>
            <img src="/assets/images/metrics_analytics.png" alt="Analytics Dashboard" style={{ maxWidth: "800px", width: "100%", borderRadius: "24px", boxShadow: "0 30px 60px rgba(0,0,0,0.08)", margin: "0 auto" }} />
          </div>
        </div>
      </section>

      {/* 8. BUSINESS COMMUNICATIONS (Split Feature) */}
      <section className="business-comms light-section" id="businessComms">
        <div className="container">
          <div className="text-center comms-header reveal-up">
            <h2 className="section-title">Business communications<br />meets customer engagement.</h2>
            <p className="section-subtitle">One platform for your team AND your customers. No more disjointed systems.</p>
          </div>
          
          <div className="comms-split">
            <div className="comms-panel reveal-up hover-pop">
              <div className="panel-icon hover-pop"><span className="material-symbols-rounded" style={{ fontSize: "28px" }}>magic_button</span></div>
              <h3 className="panel-title hover-pop">For Your Team</h3>
              <ul className="apple-list">
                <li>Calls from phone, desktop, or browser</li>
                <li>Video meetings & screen sharing</li>
                <li>Internal messaging & collaboration</li>
                <li>Smart call routing</li>
                <li>Workflow automation</li>
              </ul>
            </div>
            
            <div className="comms-panel reveal-up hover-pop" style={{ transitionDelay: "0.1s" }}>
              <div className="panel-icon hover-pop"><span className="material-symbols-rounded" style={{ fontSize: "28px" }}>magic_button</span></div>
              <h3 className="panel-title hover-pop">For Your Customers</h3>
              <ul className="apple-list">
                <li>AI answers instantly</li>
                <li>Queue management & callbacks</li>
                <li>Call monitoring & insights</li>
                <li>Omnichannel experience</li>
                <li>Automated follow-ups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICING SEGMENTS (Clean Cards) */}
      <section className="pricing light-section" id="pricing">
        <div className="container">
          <h2 className="section-title text-center mb-8 reveal-up">Simple, predictable pricing.</h2>
          <div className="pricing-grid">
            <div className="pricing-card reveal-up hover-pop">
              <h3 className="pricing-tier">Small Teams</h3>
              <p className="pricing-users">2–25 users</p>
              <div className="pricing-divider"></div>
              <p className="pricing-desc">Includes voice, chat, AI agents, analytics</p>
              <a href="#" className="btn btn-ghost mt-4">Learn More</a>
            </div>
            
            <div className="pricing-card pricing-card--featured reveal-up hover-pop" style={{ transitionDelay: "0.1s" }}>
              <h3 className="pricing-tier">Growing Business</h3>
              <p className="pricing-users">25–100 users</p>
              <div className="pricing-divider"></div>
              <p className="pricing-desc">Advanced analytics, integrations, automation</p>
              <a href="#" className="btn btn-primary mt-4">Get Started</a>
            </div>
            
            <div className="pricing-card reveal-up hover-pop" style={{ transitionDelay: "0.2s" }}>
              <h3 className="pricing-tier">Enterprise</h3>
              <p className="pricing-users">100+ users</p>
              <div className="pricing-divider"></div>
              <p className="pricing-desc">Custom AI agents, security, dedicated support</p>
              <a href="#" className="btn btn-ghost mt-4">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ROI / IMPACT (Cinematic Background) */}
      <section className="roi dark-section" id="roi">
        {/* Cinematic ROI Visualization */}
        <div className="roi-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/roi_real.png')" }}></div>
        <div className="roi-overlay"></div>
        
        <div className="container text-center roi-content">
          <h2 className="section-title white-text reveal-up">What AI could do for your business.</h2>
          
          <div className="roi-stats">
            <div className="roi-card reveal-up hover-pop">
              <span className="roi-val">80%</span>
              <span className="roi-label">of reservations automated</span>
            </div>
            <div className="roi-card reveal-up hover-pop" style={{ transitionDelay: "0.1s" }}>
              <span className="roi-val">35%</span>
              <span className="roi-label">reduction in no-shows</span>
            </div>
            <div className="roi-card reveal-up hover-pop" style={{ transitionDelay: "0.2s" }}>
              <span className="roi-val">60%</span>
              <span className="roi-label">fewer support tickets</span>
            </div>
          </div>
          
          <div className="roi-cta reveal-up" style={{ transitionDelay: "0.3s", marginTop: "4rem" }}>
            <a href="#" className="btn btn-white btn-lg">See projected impact for your industry →</a>
          </div>
        </div>
      </section>

      <TrustedSection />

      {/* 12. TRUST / INFRASTRUCTURE */}
      <section className="trust light-section" id="trust">
        <div className="container text-center">
          <div className="trust-grid">
            <div className="trust-item reveal-up">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Reliable redundancy</h3>
              <p>Multi-region failover, zero downtime</p>
            </div>
            <div className="trust-item reveal-up" style={{ transitionDelay: "0.1s" }}>
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              </div>
              <h3>Powered by AWS</h3>
              <p>Secure, scalable infrastructure</p>
            </div>
            <div className="trust-item reveal-up" style={{ transitionDelay: "0.2s" }}>
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h3>99.99% uptime</h3>
              <p>Enterprise-grade reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. PRICING CTA */}
      <section className="pricing-cta light-section" id="pricing-cta">
        <div className="container text-center">
          <div className="cta-box reveal-up hover-pop">
            <h2 className="section-title">Start free. Scale when ready.</h2>
            <p className="section-subtitle mb-8">Full access for 30 days. No credit card. Every plan includes the complete CX platform.</p>
            <a href="#pricing" className="btn btn-primary btn-lg">See all plans →</a>
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="final-cta" id="final-cta">
        <div className="cta-orb cta-orb--1"></div>
        <div className="cta-orb cta-orb--2"></div>
        <div className="cta-orb cta-orb--3"></div>

        <div className="container final-content">
          <div className="section-eyebrow" style={{ color: "rgba(255,255,255,0.4)", margin: "0 auto 1.5rem" }}>Get Started Today</div>
          <h2 className="section-title white-text reveal-up">Ready to put AI<br />to work?</h2>
          <p className="section-subtitle white-text opacity-70 reveal-up" style={{ maxWidth: "500px", margin: "1rem auto 2.5rem" }}>Your AI agent could be handling calls in minutes — not months.</p>
          <div className="hero-cta-group reveal-up" style={{ justifyContent: "center" }}>
            <a href="#" className="btn btn-white btn-lg">Start Free Trial</a>
            <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
          </div>
        </div>
      </section>
    </>
  );
}
