"use client";

import { useEffect } from "react";

export default function AIAgents() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* 1. HERO — AI AGENTS (REDESIGNED PREMIUM LAYOUT) */}
      <section className="hero dark-section apple-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 60px 0", overflow: "hidden", background: "#000", position: "relative" }}>
        <div className="hero-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/cinematic_hero.png')", filter: "brightness(0.2) grayscale(20%)" }}></div>
        <div className="hero-overlay" style={{ background: "radial-gradient(circle at 70% 50%, rgba(0,108,210,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(123,30,185,0.1) 0%, rgba(0,0,0,0.95) 80%)" }}></div>
        
        <div className="container hero-container" style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Left Text Block */}
            <div className="hero-text-wrap" style={{ position: "relative", textAlign: "left" }}>
                <div className="badge apple-badge reveal-hero" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 16px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", marginBottom: "2rem", display: "inline-block", backdropFilter: "blur(10px)" }}>UNIFICX / AI AGENTS</div>
                
                <h1 className="hero-title white-text reveal-hero" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                    AI agents that handle calls like your <br />
                    <span style={{ background: "linear-gradient(90deg, #006CD2, #7B1EB9)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>best employee.</span>
                </h1>
                
                <p className="hero-subtitle white-text opacity-70 reveal-hero" style={{ fontSize: "1.25rem", maxWidth: "550px", marginBottom: "3.5rem", lineHeight: 1.6, fontWeight: 400 }}>
                    Voice-first, omnichannel AI that answers every call, understands what callers need, takes real action in your systems, and hands off to humans seamlessly.
                </p>
                
                <div className="hero-cta-group reveal-hero" style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-start" }}>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse" style={{ boxShadow: "0 0 30px rgba(0,108,210,0.3)" }}>Start Free Trial</a>
                    <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
                </div>
                
                <div className="reveal-hero" style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00BA34", boxShadow: "0 0 12px rgba(0,186,52,0.8)" }}></div>
                        No credit card required. Cancel anytime.
                    </div>
                </div>
            </div>
            
            {/* Right Image Block */}
            <div className="hero-hardware-container reveal-hero-img" style={{ position: "relative", perspective: "2000px", zIndex: 5 }}>
                {/* Background glow */}
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(0,108,210,0.4) 0%, transparent 70%)", transform: "translate(-50%, -50%)", filter: "blur(100px)", zIndex: 0 }}></div>
                
                <div style={{ transform: "rotateY(-15deg) rotateX(8deg) rotateZ(1deg) scale(1.1)", transformStyle: "preserve-3d", transition: "transform 0.8s var(--ease-apple)" }}>
                    <img src="/assets/images/agent_dashboard_hero.png" alt="AI Agent Dashboard" style={{ width: "130%", maxWidth: "900px", marginLeft: "-10%", borderRadius: "24px", position: "relative", zIndex: 1, boxShadow: "-20px 40px 100px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.15)", display: "block" }} />
                    
                    {/* Animated interactive badge floating out */}
                    <div className="reveal-up" style={{ position: "absolute", bottom: "-8%", left: "-5%", background: "rgba(25,25,30,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "1.5rem", borderRadius: "20px", boxShadow: "-30px 40px 80px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", zIndex: 2, display: "flex", alignItems: "center", gap: "15px", animation: "float 6s ease-in-out infinite", transform: "translateZ(80px)" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(0,108,210,0.15)", border: "1px solid rgba(0,108,210,0.5)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                            {/* inner pulsing dot */}
                            <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#00BA34", boxShadow: "0 0 20px rgba(0,186,52,0.8)" }}></div>
                        </div>
                        <div>
                             <div style={{ fontWeight: 800, fontSize: "1.1rem", lineHeight: 1, color: "#fff" }}>Active Call</div>
                             <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Resolving "Booking Issue"</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>

      {/* 2. AI UNDERSTANDING (BENTO GRID) */}
      <section className="understanding light-section" style={{ padding: "12rem 0", background: "#fafafa" }}>
        <div className="container">
            <div className="text-center mb-10 reveal-up">
                <h2 className="section-title massive-title" style={{ letterSpacing: "-0.05em" }}>Real understanding. <br /><span className="gradient-text">Zero scripts.</span></h2>
                <p className="section-subtitle mt-4">Powered by our custom LLM architecture, designed specifically for rapid, multi-turn voice conversations.</p>
            </div>
            
            <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
                {/* Big Box Left */}
                <div className="bento-box bento-large glass-card reveal-up hover-pop" style={{ gridColumn: "span 2", padding: "4rem", background: "#fff", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                        <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>Intent Understanding</h3>
                        <p style={{ fontSize: "1.25rem", color: "#666", lineHeight: 1.6, maxWidth: "80%" }}>Understands meaning, not just keywords. "Change my Thursday appt to noon" triggers the right workflow. Deep contextual memory.</p>
                    </div>
                    <div style={{ marginTop: "3rem", background: "#f5f5f7", borderRadius: "20px", padding: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifySpace: "center", flexShrink: 0 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                        <div style={{ fontWeight: 600, fontSize: "1.1rem", color: "#000" }}>Live Entity Extraction Demo →</div>
                    </div>
                </div>
                
                {/* Box Top Right */}
                <div className="bento-box glass-card reveal-up hover-pop" style={{ padding: "3rem", background: "#fff", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
                    <div className="icon-wrap" style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(123,30,185,0.05)", color: "#7B1EB9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>20+ Languages</h3>
                    <p style={{ color: "#666", fontSize: "1.05rem" }}>Automatically detects language from the first word. Switches mid-call flawlessly.</p>
                </div>
                
                {/* Box Bottom Row 1 --> */}
                <div className="bento-box glass-card reveal-up hover-pop" style={{ padding: "3rem", background: "#fff", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
                    <div className="icon-wrap" style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(0,108,210,0.05)", color: "#006CD2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>Real Action</h3>
                    <p style={{ color: "#666", fontSize: "1.05rem" }}>Books calendars, processes Stripe, updates Salesforce right on the call.</p>
                </div>
                
                {/* Box Bottom Row 2 --> */}
                <div className="bento-box glass-card reveal-up hover-pop" style={{ padding: "3rem", background: "#fff", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
                    <div className="icon-wrap" style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(123,30,185,0.05)", color: "#7B1EB9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>Multi-Turn</h3>
                    <p style={{ color: "#666", fontSize: "1.05rem" }}>Handles interruptions, corrections, and changing topics gracefully.</p>
                </div>
                
                {/* Box Bottom Row 3 --> */}
                <div className="bento-box glass-card reveal-up hover-pop" style={{ padding: "3rem", background: "#fff", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
                     <div className="icon-wrap" style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(0,0,0,0.05)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>Guardrails</h3>
                    <p style={{ color: "#666", fontSize: "1.05rem" }}>Strict boundaries, compliance scripts, and native PII redaction.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. USE CASES (SCROLLING PILLS) */}
      <section className="use-cases-mini" style={{ padding: "10rem 0", background: "#fff", overflow: "hidden" }}>
        <div className="container text-center mb-10 reveal-up">
            <h2 className="section-title">Automate every workflow.</h2>
        </div>
        
        {/* Infinite Auto Scroll Row 1 */}
        <div className="marquee-wrapper" style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", overflow: "hidden", padding: "1rem 0" }}>
            <div className="marquee-track" style={{ display: "flex", gap: "1.5rem", width: "max-content" }} id="marquee1">
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "#f5f5f7", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>Booking & Reservations</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "rgba(0,108,210,0.05)", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#006CD2" }}>Billing & Payments</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "#f5f5f7", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>FAQ Handling</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "rgba(123,30,185,0.05)", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#7B1EB9" }}>Troubleshooting</div>
                {/* Duplicates for loop */}
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "#f5f5f7", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>Booking & Reservations</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "rgba(0,108,210,0.05)", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#006CD2" }}>Billing & Payments</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "#f5f5f7", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>FAQ Handling</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "rgba(123,30,185,0.05)", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#7B1EB9" }}>Troubleshooting</div>
            </div>
        </div>
        
        {/* Infinite Auto Scroll Row 2 (Reverse) */}
        <div className="marquee-wrapper" style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", overflow: "hidden", padding: "1rem 0", marginTop: "1rem" }}>
            <div className="marquee-track" style={{ display: "flex", gap: "1.5rem", width: "max-content", justifyContent: "flex-end" }} id="marquee2">
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "rgba(123,30,185,0.05)", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#7B1EB9" }}>Order Management</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "#f5f5f7", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>Customer Auth</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "rgba(0,108,210,0.05)", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#006CD2" }}>Smart Call Routing</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "#f5f5f7", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>Account Management</div>
                {/* Duplicates for loop */}
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "rgba(123,30,185,0.05)", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#7B1EB9" }}>Order Management</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "#f5f5f7", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>Customer Auth</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "rgba(0,108,210,0.05)", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#006CD2" }}>Smart Call Routing</div>
                <div className="use-case-pill" style={{ padding: "1.5rem 3rem", background: "#f5f5f7", borderRadius: "100px", fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>Account Management</div>
            </div>
        </div>
      </section>

      {/* 4. DEMO LIBRARY */}
      <section className="demo-library dark-section" style={{ padding: "12rem 0", background: "#000", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: "100%", background: "radial-gradient(circle at 50% 100%, rgba(123,30,185,0.3) 0%, transparent 60%)", zIndex: 0, filter: "blur(60px)" }}></div>
        <div className="container reveal-up" style={{ position: "relative", zIndex: 2 }}>
            <h2 className="section-title massive-title white-text mb-10">Hear the difference.</h2>
            <div className="demo-player-container glass-card hover-pop" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "40px", padding: "6rem 3rem", maxWidth: "1000px", margin: "0 auto", backdropFilter: "blur(40px)", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}>
                <div className="play-icon apple-pulse" style={{ width: "120px", height: "120px", borderRadius: "50%", background: "#fff", color: "#0a0e17", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 3.5rem", cursor: "pointer", transition: "all 0.4s var(--ease-apple)" }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "6px" }}><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
                    {/* Badges */}
                    <span className="badge" style={{ background: "rgba(255,255,255,0.15)", padding: "12px 24px", borderRadius: "30px", color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer", transition: "background 0.3s" }}>Reservation</span>
                    <span className="badge" style={{ background: "rgba(255,255,255,0.05)", padding: "12px 24px", borderRadius: "30px", color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>Order Status</span>
                    <span className="badge" style={{ background: "rgba(255,255,255,0.05)", padding: "12px 24px", borderRadius: "30px", color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>Technical Support</span>
                    <span className="badge" style={{ background: "rgba(255,255,255,0.05)", padding: "12px 24px", borderRadius: "30px", color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>Medical Appt</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", fontWeight: 600 }}>English & Spanish native audio active.</p>
            </div>
        </div>
      </section>

      {/* 5. CONVERSATION BUILDER (STICKY PANEL 1) */}
      <section className="apple-sticky-section" style={{ background: "#fafafa", position: "relative" }}>
        <div className="container conversation-builder-container" style={{ display: "flex", alignItems: "flex-start", gap: "6rem" }}>
            
            <div className="sticky-content reveal-up" style={{ flex: 1, padding: "15vh 0", position: "sticky", top: "10vh", height: "90vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div className="section-label" style={{ fontWeight: 800, color: "var(--blue)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1.5rem" }}>CONVERSATION BUILDER</div>
                <h2 className="section-title massive-title" style={{ marginBottom: "2rem" }}>Design visually. <br />Code zero.</h2>
                <p className="section-subtitle mb-8" style={{ lineHeight: 1.6, color: "#555", fontSize: "1.25rem", marginLeft: 0 }}>Drag-and-drop conversation flow builder. Define greetings, intent collection, actions, and escalation paths — all without writing code.</p>
                <ul className="bullet-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "16px", fontWeight: 600, fontSize: "1.15rem", color: "#111" }}><div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0,108,210,0.1)", color: "#006CD2", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div> Pre-built industry templates.</li>
                    <li style={{ display: "flex", alignItems: "center", gap: "16px", fontWeight: 600, fontSize: "1.15rem", color: "#111" }}><div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0,108,210,0.1)", color: "#006CD2", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div> Conditional logic nodes.</li>
                    <li style={{ display: "flex", alignItems: "center", gap: "16px", fontWeight: 600, fontSize: "1.15rem", color: "#111" }}><div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0,108,210,0.1)", color: "#006CD2", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div> Test and simulate instantly.</li>
                </ul>
            </div>

            <div className="sticky-visual reveal-up" style={{ flex: 1.2, padding: "15vh 0" }}>
                <div style={{ background: "linear-gradient(135deg, #f0f0f5, #e0e0e8)", padding: "2rem", borderRadius: "40px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)" }}>
                    <img src="/assets/images/flow_builder_ui.png" alt="Conversation Flow Builder" className="apple-mouse-parallax" style={{ width: "100%", borderRadius: "24px", boxShadow: "0 40px 100px rgba(0,0,0,0.15)" }} />
                </div>
            </div>
        </div>
      </section>

      {/* 6. VOICE & PERSONALITY (STICKY PANEL 2) */}
      <section className="apple-sticky-section dark-section" style={{ background: "#0a0a0a", position: "relative" }}>
        <div className="container brand-voice-container" style={{ display: "flex", alignItems: "flex-start", gap: "6rem", flexDirection: "row-reverse" }}>
            
            <div className="sticky-content reveal-up" style={{ flex: 1, padding: "15vh 0", position: "sticky", top: "10vh", height: "90vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div className="section-label" style={{ fontWeight: 800, color: "var(--purple)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1.5rem" }}>VOICE & PERSONALITY</div>
                <h2 className="section-title massive-title white-text" style={{ marginBottom: "2rem" }}>Your brand voice. <br />Not a robot.</h2>
                <p className="section-subtitle mb-8" style={{ lineHeight: 1.6, color: "rgba(255,255,255,0.7)", fontSize: "1.25rem", marginLeft: 0 }}>Choose from premium AI voice models or clone a custom brand voice. Adjust tone, pace, warmth, and filler words to sound exactly like your company.</p>
                <ul className="bullet-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "16px", fontWeight: 600, fontSize: "1.15rem", color: "#fff" }}><div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(123,30,185,0.2)", color: "#d080ff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div> Custom voice cloning.</li>
                    <li style={{ display: "flex", alignItems: "center", gap: "16px", fontWeight: 600, fontSize: "1.15rem", color: "#fff" }}><div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(123,30,185,0.2)", color: "#d080ff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div> Emotional tone tuning.</li>
                    <li style={{ display: "flex", alignItems: "center", gap: "16px", fontWeight: 600, fontSize: "1.15rem", color: "#fff" }}><div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(123,30,185,0.2)", color: "#d080ff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div> Powered by ElevenLabs.</li>
                </ul>
            </div>

            <div className="sticky-visual reveal-up" style={{ flex: 1.2, padding: "15vh 0" }}>
                <div style={{ background: "radial-gradient(circle at center, rgba(123,30,185,0.2), transparent 70%)", padding: "2rem", borderRadius: "40px" }}>
                    <img src="/assets/images/voice_selector_ui.png" alt="Voice Selector UI" className="apple-mouse-parallax" style={{ width: "100%", borderRadius: "24px", boxShadow: "0 40px 100px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
            </div>
        </div>
      </section>

      {/* 7. OMNICHANNEL */}
      <section className="omnichannel light-section" style={{ padding: "12rem 0", background: "#fff" }}>
        <div className="container text-center mb-10 reveal-up" style={{ maxWidth: "800px" }}>
            <div className="section-label" style={{ fontWeight: 800, color: "var(--blue)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1.5rem" }}>OMNICHANNEL</div>
            <h2 className="section-title massive-title">Build once. Deploy everywhere.</h2>
            <p className="section-subtitle mt-4">One core AI logic across Voice, WhatsApp, SMS, and Web Chat.</p>
        </div>
        
        <div className="container">
            <div className="omni-grid bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
                {/* Render 4 cards */}
                <div className="bento-box glass-card reveal-up text-center hover-pop" style={{ padding: "3rem 2rem", background: "#f9f9f9", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.03)" }}>
                    <div className="icon-wrap" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#fff", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <h4 style={{ fontWeight: 800, fontSize: "1.5rem" }}>Voice</h4>
                </div>
                <div className="bento-box glass-card reveal-up text-center hover-pop" style={{ padding: "3rem 2rem", background: "#f9f9f9", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.03)" }}>
                    <div className="icon-wrap" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#25D366", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem", boxShadow: "0 20px 40px rgba(37,211,102,0.3)" }}>
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    </div>
                    <h4 style={{ fontWeight: 800, fontSize: "1.5rem" }}>WhatsApp</h4>
                </div>
                <div className="bento-box glass-card reveal-up text-center hover-pop" style={{ padding: "3rem 2rem", background: "#f9f9f9", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.03)" }}>
                    <div className="icon-wrap" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#fff", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <h4 style={{ fontWeight: 800, fontSize: "1.5rem" }}>SMS</h4>
                </div>
                <div className="bento-box glass-card reveal-up text-center hover-pop" style={{ padding: "3rem 2rem", background: "#f9f9f9", borderRadius: "32px", border: "1px solid rgba(0,0,0,0.03)" }}>
                     <div className="icon-wrap" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#006CD2", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem", boxShadow: "0 20px 40px rgba(0,108,210,0.3)" }}>
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20.94c1.5 0 2.75-.41 3.82-1.07l4.13.92-.93-3.88a7.86 7.86 0 0 0 1.93-5.2c0-4.42-4-8-9-8s-9 3.58-9 8 4 8 9 8z"/></svg>
                    </div>
                    <h4 style={{ fontWeight: 800, fontSize: "1.5rem" }}>Web Chat</h4>
                </div>
            </div>
        </div>
      </section>

      {/* 8. SEAMLESS HUMAN HANDOFF */}
      <section className="handoff dark-section apple-parallax-section" style={{ padding: "10rem 0", background: "#0a0a0a", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(123,30,185,0.05) 0%, transparent 80%)" }}></div>
        <div className="container text-center reveal-up" style={{ position: "relative", zIndex: 10 }}>
            <h2 className="section-title massive-title white-text" style={{ marginBottom: "2rem" }}>Seamless Handoff.</h2>
            <p className="section-subtitle white-text opacity-70" style={{ maxWidth: "850px", margin: "0 auto" }}>Zero latency internal transfers. Transcript & sentiment sent instantly to your human team.</p>
            
            {/* Redesigned Composite Showcase Container --> */}
            <div className="full-handoffreveal reveal-up" style={{ position: "relative", maxWidth: "1200px", margin: "4rem auto 0 auto", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", aspectRatio: "16/9", background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                
                {/* 1. Human / Contextual Background Layer --> */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <img src="/assets/images/office_interaction.png" alt="Support Team Handoff" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) contrast(1.1) saturate(0.8)" }} />
                    {/* Vignette Overlay --> */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.95) 100%)" }}></div>
                </div>

                {/* 2. Handoff Diagram Overlay (Scaled Down & Angled) --> */}
                <div className="apple-parallax-element" style={{ position: "absolute", bottom: "-8%", right: "-5%", width: "65%", perspective: "1500px", transformStyle: "preserve-3d", zIndex: 5 }}>
                    
                    {/* Handoff Shadow & Glow --> */}
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "80%", background: "rgba(123,30,185,0.4)", filter: "blur(60px)", transform: "translate(-50%, -50%)", zIndex: 0 }}></div>
                    
                    <img src="/assets/images/handoff_diagram.png" alt="AI to Human Handoff Flow" style={{ width: "100%", borderRadius: "20px", boxShadow: "-30px 50px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.2)", transform: "rotateX(5deg) rotateY(-8deg) rotateZ(1deg)", position: "relative", zIndex: 1, display: "block", objectFit: "contain" }} />
                    
                    {/* Parallax floating badges tied to the handoff --> */}
                    <div className="parallax-element apple-scale-up" style={{ position: "absolute", top: "20%", left: "-10%", padding: "1.25rem 1.5rem", background: "rgba(25,25,30,0.9)", backdropFilter: "blur(20px)", borderRadius: "12px", boxShadow: "-20px 30px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #7B1EB9", textAlign: "left", zIndex: 2, transform: "translateZ(80px) rotateY(10deg)" }}>
                        <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", lineHeight: 1 }}>Context Sync</div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginTop: "6px" }}>Live transcript & sentiment transferred</div>
                    </div>
                </div>
                
            </div>
        </div>
      </section>

      {/* 9. ANALYTICS DASHBOARD */}
      <section className="analytics-showcase light-section" style={{ padding: "12rem 0 0 0", background: "#fff", overflow: "hidden" }}>
        <div className="container text-center reveal-up">
            <h2 className="section-title massive-title" style={{ marginBottom: "2rem" }}>See everything.</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px", margin: "0 auto 5rem auto" }}>Real-time dashboard showing every active call, resolution rates, handle times, CSAT, and top intents.</p>
            
            <div className="dashboard-mockup" style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(0,108,210,0.15) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }}></div>
                <img src="/assets/images/analytics_dashboard_ui_agents.png" alt="AI Analytics Dashboard Mockup" className="apple-scale-up" style={{ width: "100%", maxWidth: "1200px", borderTopLeftRadius: "40px", borderTopRightRadius: "40px", boxShadow: "0 -30px 100px rgba(0,0,0,0.1)", display: "block", margin: "0 auto", position: "relative", zIndex: 1, border: "1px solid rgba(0,0,0,0.05)", borderBottom: "none" }} />
            </div>
        </div>
      </section>

      {/* 10. PRICING --> */}
      <section className="pricing-agents light-section" id="pricing" style={{ padding: "12rem 0", background: "#fdfdfd", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="container">
            <h2 className="section-title giant-title text-center mb-10 reveal-up">Pricing.</h2>
            <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3rem", maxWidth: "900px", margin: "0 auto", paddingTop: "48px" }}>
                {/* Starter --> */}
                <div className="pricing-card reveal-up hover-pop" style={{ background: "#fff", padding: "4rem 3rem", borderRadius: "40px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 20px 60px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2.5rem" }}>Starter</h3>
                    <ul className="apple-list" style={{ marginBottom: "4rem", display: "flex", flexDirection: "column", gap: "1.25rem", flexGrow: 1, padding: 0, listStyle: "none" }}>
                        <li style={{ fontWeight: 600, fontSize: "1.1rem", color: "#444", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>Industry templates in 5 min</li>
                        <li style={{ fontWeight: 600, fontSize: "1.1rem", color: "#444", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>Google/HubSpot integrations</li>
                        <li style={{ fontWeight: 600, fontSize: "1.1rem", color: "#444", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>Basic analytics</li>
                        <li style={{ fontWeight: 600, fontSize: "1.1rem", color: "#444", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>Full CX Platform</li>
                    </ul>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse" style={{ width: "100%" }}>Start Free Trial</a>
                </div>
                
                {/* Enterprise --> */}
                <div className="pricing-card reveal-up hover-pop" style={{ background: "#0a0a0a", color: "#fff", padding: "4rem 3rem", borderRadius: "40px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 100px rgba(0,108,210,0.2)", display: "flex", flexDirection: "column", transform: "scale(1.05)" }}>
                    <div className="badge" style={{ background: "#fff", color: "#000", alignSelf: "flex-start", padding: "6px 12px", borderRadius: "20px", fontWeight: 800, fontSize: "0.75rem", marginBottom: "1rem" }}>RECOMMENDED</div>
                    <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem", color:"#fff" }}>Enterprise</h3>
                    <ul className="apple-list" style={{ marginBottom: "4rem", display: "flex", flexDirection: "column", gap: "1.25rem", flexGrow: 1, padding: 0, listStyle: "none" }}>
                        <li style={{ fontWeight: 600, fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>Custom flow design</li>
                        <li style={{ fontWeight: 600, fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>Any custom CRM integration</li>
                        <li style={{ fontWeight: 600, fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>Voice cloning</li>
                        <li style={{ fontWeight: 600, fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>Priority 24/7 support</li>
                    </ul>
                    <a href="#" className="btn btn-white btn-lg" style={{ width: "100%" }}>Talk to Sales</a>
                </div>
            </div>
        </div>
      </section>

      {/* 11. FINAL CTA --> */}
      <section className="final-cta dark-section" id="final-cta">
        <div className="cta-orb cta-orb--1"></div>
        <div className="cta-orb cta-orb--2"></div>
        <div className="container final-content">
            <h2 className="section-title giant-title white-text reveal-up">Hear it. Believe it.</h2>
            <p className="section-subtitle white-text opacity-70 mb-10 reveal-up" style={{ fontSize: "1.5rem" }}>30-day free trial. Setup in 5 minutes.</p>
            <div className="hero-cta-group reveal-up" style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
                <a href="#" className="btn btn-white btn-lg apple-pulse">Start Free Trial →</a>
            </div>
        </div>
      </section>
    </>
  );
}
