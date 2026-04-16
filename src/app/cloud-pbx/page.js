"use client";

import { useEffect } from "react";

export default function CloudPBX() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* CLOUD PBX HERO */}
      <section className="hero dark-section apple-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 60px 0", overflow: "hidden", background: "#000", position: "relative" }}>
        <div className="hero-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/cinematic_hero.png')", filter: "brightness(0.2) grayscale(20%)" }}></div>
        <div className="hero-overlay" style={{ background: "radial-gradient(circle at 70% 50%, rgba(0,108,210,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(123,30,185,0.1) 0%, rgba(0,0,0,0.95) 80%)" }}></div>
        
        <div className="container hero-container" style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Left Text Block */}
            <div className="hero-text-wrap" style={{ position: "relative", textAlign: "left" }}>
                <div className="badge apple-badge reveal-hero" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 16px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", marginBottom: "2rem", display: "inline-block", backdropFilter: "blur(10px)" }}>CX PLATFORM / CLOUD PBX</div>
                
                <h1 className="hero-title white-text reveal-hero" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                    Your entire phone system.<br />
                    <span style={{ background: "linear-gradient(90deg, #006CD2, #7B1EB9)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>In the cloud.</span>
                </h1>
                
                <p className="hero-subtitle white-text opacity-70 reveal-hero" style={{ fontSize: "1.25rem", maxWidth: "550px", marginBottom: "3.5rem", lineHeight: 1.6, fontWeight: 400 }}>
                    Replace aging hardware with an enterprise-grade cloud PBX that scales instantly, integrates with AI, and gives your team full control from one dashboard.
                </p>
                
                <div className="hero-cta-group reveal-hero" style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-start" }}>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse" style={{ boxShadow: "0 0 30px rgba(0,108,210,0.3)" }}>Start Free Trial</a>
                    <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
                </div>
                
                <div className="reveal-hero" style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00BA34", boxShadow: "0 0 12px rgba(0,186,52,0.8)" }}></div>
                        No hardware required. Cancel anytime.
                    </div>
                </div>
            </div>
            
            {/* Right Image Block --> */}
            <div className="hero-hardware-container reveal-hero-img" style={{ position: "relative", perspective: "2000px", zIndex: 5 }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(0,108,210,0.4) 0%, transparent 70%)", transform: "translate(-50%, -50%)", filter: "blur(100px)", zIndex: 0 }}></div>
                
                <div style={{ transform: "rotateY(-15deg) rotateX(8deg) rotateZ(1deg) scale(1.1)", transformStyle: "preserve-3d", transition: "transform 0.8s var(--ease-apple)" }}>
                    <img src="/assets/images/cloud_pbx_dashboard.png" alt="Cloud PBX Dashboard" style={{ width: "130%", maxWidth: "900px", marginLeft: "-10%", borderRadius: "24px", position: "relative", zIndex: 1, boxShadow: "-20px 40px 100px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.15)", display: "block" }} />
                    
                    <div className="reveal-up" style={{ position: "absolute", bottom: "-8%", left: "-5%", background: "rgba(25,25,30,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "1.5rem", borderRadius: "20px", boxShadow: "-30px 40px 80px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", zIndex: 2, display: "flex", alignItems: "center", gap: "15px", animation: "float 6s ease-in-out infinite", transform: "translateZ(80px)" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(0,108,210,0.15)", border: "1px solid rgba(0,108,210,0.5)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                            <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#00BA34", boxShadow: "0 0 20px rgba(0,186,52,0.8)" }}></div>
                        </div>
                        <div>
                             <div style={{ fontWeight: 800, fontSize: "1.1rem", lineHeight: 1, color: "#fff" }}>100% Uptime</div>
                             <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>System Health Optimal</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>

      {/* WHAT IT DOES --> */}
      <section className="what-it-does">
        <div className="container">
            <div className="what-split">
                <div className="reveal-up">
                    <div className="platform-eyebrow" style={{ background: "rgba(0,108,210,0.06)", borderColor: "rgba(0,108,210,0.15)", color: "var(--blue)" }}>WHAT IT DOES</div>
                    <h2 className="section-title massive-title" style={{ marginTop: "1rem" }}>Phone calls reimagined<br />for modern teams.</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--gray-medium)", marginTop: "1.5rem", lineHeight: 1.7 }}>Cloud PBX gives you the power of an enterprise phone system — call routing, IVR menus, extensions, queues, voicemail, and recording — all managed through a clean web interface with no hardware, no maintenance, and no IT headaches.</p>
                    <ul className="what-features">
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Intelligent IVR menus with natural language recognition</span></li>
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Unlimited extensions for desk, mobile, and softphone</span></li>
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Skill-based routing and ring groups</span></li>
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Call recording, transcription, and archiving</span></li>
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Real-time wallboard and manager monitoring</span></li>
                    </ul>
                </div>
                <div className="what-image-wrap reveal-up" style={{ minHeight: "400px" }}>
                    <img src="/assets/images/cloud_pbx_dashboard.png" alt="Cloud PBX Call Routing" />
                </div>
            </div>
        </div>
      </section>

      {/* KEY CAPABILITIES --> */}
      <section className="capabilities">
        <div className="container">
            <div className="text-center reveal-up">
                <h2 className="section-title massive-title">Key capabilities.</h2>
                <p className="section-subtitle mt-4">Everything you need to run a professional, scalable phone operation — from a single office to a global enterprise.</p>
            </div>
            <div className="capabilities-grid">
                <div className="capability-card reveal-up hover-pop">
                    <div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                    <h3>Intelligent IVR</h3>
                    <p>Build multi-level menus with drag-and-drop. Add natural language inputs so callers can speak their intent instead of pressing numbers.</p>
                </div>
                <div className="capability-card reveal-up hover-pop">
                    <div className="capability-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-3-3.87M9 21v-2a4 4 0 013-3.87"/><circle cx="12" cy="7" r="4"/></svg></div>
                    <h3>Skill-Based Routing</h3>
                    <p>Route calls to the right agent based on language, product knowledge, availability, and historical performance data.</p>
                </div>
                <div className="capability-card reveal-up hover-pop">
                    <div className="capability-icon" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                    <h3>Call Recording</h3>
                    <p>Record every call automatically. Tamper-proof encrypted storage with full search, playback, and AI transcription built in.</p>
                </div>
                <div className="capability-card reveal-up hover-pop">
                    <div className="capability-icon" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
                    <h3>SIP Trunking</h3>
                    <p>Connect your existing carrier or use our built-in SIP trunks with competitive per-minute rates and guaranteed quality of service.</p>
                </div>
                <div className="capability-card reveal-up hover-pop">
                    <div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div>
                    <h3>Live Wallboard</h3>
                    <p>Real-time visibility into queue lengths, agent statuses, average handle times, and call volumes — for every manager and supervisor.</p>
                </div>
                <div className="capability-card reveal-up hover-pop">
                    <div className="capability-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                    <h3>Enterprise Security</h3>
                    <p>End-to-end encryption, SOC 2 compliance, role-based access controls, and 99.99% uptime SLA on all tiers.</p>
                </div>
            </div>
        </div>
      </section>

      {/* USE CASES --> */}
      <section className="use-cases-grid-section" style={{ background: "#fafafa" }}>
        <div className="container">
            <div className="text-center reveal-up">
                <h2 className="section-title massive-title">Built for every team.</h2>
                <p className="section-subtitle mt-4">Cloud PBX adapts to your operations — whether you have 5 agents or 5,000.</p>
            </div>
            <div className="use-cases-card-grid hover-pop">
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">01</span><h4>Customer Support Centers</h4><p>Handle thousands of inbound calls with intelligent queuing, priority routing, and real-time supervisor monitoring.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">02</span><h4>Outbound Sales Teams</h4><p>Power dialers, call blending, CRM pop-ups, and automatic call logging so reps spend time selling, not dialing.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">03</span><h4>Remote & Hybrid Teams</h4><p>Give every employee a professional business number on any device — desk phone, mobile, or browser softphone.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">04</span><h4>Healthcare Practices</h4><p>HIPAA-compliant call handling, appointment routing, and after-hours voicemail with automatic transcription and follow-up.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">05</span><h4>Multi-Location Retail</h4><p>Centralized phone management across all stores with per-location routing rules and unified reporting.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">06</span><h4>Financial Services</h4><p>PCI-compliant recordings, required-phrase detection, and compliance archiving for regulated industries.</p></div>
            </div>
        </div>
      </section>

      {/* PRODUCT DEMO --> */}
      <section className="product-demo-section dark-section apple-parallax-section" style={{ padding: "10rem 0", background: "#0a0a0a", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(0,108,210,0.05) 0%, transparent 80%)" }}></div>
        <div className="container text-center reveal-up" style={{ position: "relative", zIndex: 10 }}>
            <h2 className="section-title massive-title white-text" style={{ marginBottom: "2rem" }}>See it in action.</h2>
            <p className="section-subtitle white-text opacity-70" style={{ maxWidth: "850px", margin: "0 auto" }}>A full call center admin dashboard — extension management, live monitoring, IVR builder, and call queue analytics in one view.</p>
            
            <div className="full-dashboardreveal reveal-up" style={{ position: "relative", maxWidth: "1200px", margin: "4rem auto 0 auto", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", aspectRatio: "16/9", background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <img src="/assets/images/office_interaction.png" alt="Call Center Team" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) contrast(1.1) saturate(0.8)" }} />
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.95) 100%)" }}></div>
                </div>

                <div className="apple-parallax-element" style={{ position: "absolute", bottom: "-8%", right: "-5%", width: "65%", perspective: "1500px", transformStyle: "preserve-3d", zIndex: 5 }}>
                    
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "80%", background: "rgba(0,108,210,0.4)", filter: "blur(60px)", transform: "translate(-50%, -50%)", zIndex: 0 }}></div>
                    
                    <img src="/assets/images/cloud_pbx_dashboard.png" alt="Cloud PBX Dashboard Full View" style={{ width: "100%", borderRadius: "20px", boxShadow: "-30px 50px 100px rgba(0,0,0,0.9)", border: "1px solid rgba(255,255,255,0.2)", transform: "rotateX(4deg) rotateY(-8deg) rotateZ(1deg)", position: "relative", zIndex: 1, display: "block", objectFit: "contain" }} />
                    
                    <div className="parallax-element apple-scale-up" style={{ position: "absolute", top: "20%", left: "-10%", padding: "1.25rem 1.5rem", background: "rgba(25,25,30,0.9)", backdropFilter: "blur(20px)", borderRadius: "12px", boxShadow: "-20px 30px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #006CD2", textAlign: "left", zIndex: 2, transform: "translateZ(80px) rotateY(10deg)" }}>
                        <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", lineHeight: 1 }}>Live Routing Active</div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginTop: "6px" }}>45 Agents Online</div>
                    </div>
                </div>
                
            </div>
        </div>
      </section>

      {/* PLATFORM INTEGRATION --> */}
      <section className="platform-integration">
        <div className="container text-center reveal-up">
            <h2 className="section-title massive-title">Part of the unified platform.</h2>
            <p className="section-subtitle mt-4">Cloud PBX is the infrastructure layer. Pair it with AI Agents, Intelligence, and Analytics for a complete CX system.</p>
            <div className="integration-flow">
                <div className="integration-flow-item"><div className="integration-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div><strong>Cloud PBX</strong></div>
                <div className="integration-flow-arrow">→</div>
                <div className="integration-flow-item"><div className="integration-flow-icon" style={{ background: "rgba(123,30,185,0.06)", color: "var(--purple)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="3"/></svg></div><strong>AI Voice Agent</strong></div>
                <div className="integration-flow-arrow">→</div>
                <div className="integration-flow-item"><div className="integration-flow-icon" style={{ background: "rgba(123,30,185,0.06)", color: "var(--purple)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a7 7 0 017 7c0 3-2 5-4 7l-3 4-3-4c-2-2-4-4-4-7a7 7 0 017-7z"/></svg></div><strong>AI Intelligence</strong></div>
                <div className="integration-flow-arrow">→</div>
                <div className="integration-flow-item"><div className="integration-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><strong>Analytics</strong></div>
            </div>
        </div>
      </section>

      {/* CTA --> */}
      <section className="final-cta dark-section" id="final-cta">
        <div className="cta-orb cta-orb--1"></div>
        <div className="cta-orb cta-orb--2"></div>
        <div className="container final-content">
            <h2 className="section-title giant-title white-text reveal-up">Your phone system,<br />finally modern.</h2>
            <p className="section-subtitle white-text opacity-70 mb-10 reveal-up" style={{ fontSize: "1.4rem" }}>30-day free trial. Setup in 10 minutes. No hardware required.</p>
            <div className="hero-cta-group reveal-up" style={{ justifyContent: "center", gap: "1.5rem" }}>
                <a href="#" className="btn btn-white btn-lg apple-pulse">Start Free Trial →</a>
                <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
            </div>
        </div>
      </section>
    </>
  );
}
