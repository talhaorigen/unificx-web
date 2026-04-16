"use client";

import { useEffect } from "react";

export default function SmartNumbers() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* SMART NUMBERS HERO --> */}
      <section className="hero dark-section apple-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 60px 0", overflow: "hidden", background: "#000", position: "relative" }}>
        <div className="hero-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/cinematic_hero.png')", filter: "brightness(0.2) grayscale(20%)" }}></div>
        <div className="hero-overlay" style={{ background: "radial-gradient(circle at 70% 50%, rgba(0,186,52,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(0,108,210,0.1) 0%, rgba(0,0,0,0.95) 80%)" }}></div>
        
        <div className="container hero-container" style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Left Text Block --> */}
            <div className="hero-text-wrap" style={{ position: "relative", textAlign: "left" }}>
                <div className="badge apple-badge reveal-hero" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 16px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", marginBottom: "2rem", display: "inline-block", backdropFilter: "blur(10px)" }}>CX PLATFORM / SMART NUMBERS</div>
                
                <h1 className="hero-title white-text reveal-hero" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                    One number strategy.<br />
                    <span style={{ background: "linear-gradient(90deg, #00BA34, #006CD2)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Global reach.</span>
                </h1>
                
                <p className="hero-subtitle white-text opacity-70 reveal-hero" style={{ fontSize: "1.25rem", maxWidth: "550px", marginBottom: "3.5rem", lineHeight: 1.6, fontWeight: 400 }}>
                    Provision local, toll-free, and mobile numbers in 100+ countries instantly. Route intelligently by time, geography, and caller intent — all from one dashboard.
                </p>
                
                <div className="hero-cta-group reveal-hero" style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-start" }}>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse" style={{ boxShadow: "0 0 30px rgba(0,186,52,0.3)", background: "#00BA34", borderColor: "#00BA34", color: "#fff" }}>Start Free Trial</a>
                    <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
                </div>
                
            </div>
            
            {/* Right Image Block --> */}
            <div className="hero-hardware-container reveal-hero-img" style={{ position: "relative", perspective: "2000px", zIndex: 5 }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(0,186,52,0.4) 0%, transparent 70%)", transform: "translate(-50%, -50%)", filter: "blur(100px)", zIndex: 0 }}></div>
                
                <div style={{ transform: "rotateY(-15deg) rotateX(8deg) rotateZ(1deg) scale(1.1)", transformStyle: "preserve-3d", transition: "transform 0.8s var(--ease-apple)" }}>
                    <img src="/assets/images/smart_numbers_dashboard.png" alt="Smart Numbers Dashboard" style={{ width: "130%", maxWidth: "900px", marginLeft: "-10%", borderRadius: "24px", position: "relative", zIndex: 1, boxShadow: "-20px 40px 100px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.15)", display: "block" }} />
                    
                    <div className="reveal-up" style={{ position: "absolute", bottom: "-5%", left: "15%", background: "rgba(25,25,30,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "1.2rem", borderRadius: "16px", boxShadow: "0 30px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #00BA34", zIndex: 2, display: "flex", alignItems: "center", gap: "15px", animation: "float 6s ease-in-out infinite", transform: "translateZ(80px)" }}>
                        <div>
                             <div style={{ fontWeight: 800, fontSize: "1rem", lineHeight: 1, color: "#fff" }}>Global Route Active</div>
                             <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Latency: 12ms</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>

      <section className="what-it-does">
        <div className="container">
            <div className="what-split">
                <div className="reveal-up">
                    <div className="platform-eyebrow" style={{ background: "rgba(0,186,52,0.06)", borderColor: "rgba(0,186,52,0.15)", color: "#00BA34" }}>WHAT IT DOES</div>
                    <h2 className="section-title massive-title" style={{ marginTop: "1rem" }}>Numbers that work<br />as hard as you do.</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--gray-medium)", marginTop: "1.5rem", lineHeight: 1.7 }}>Smart Numbers turns your phone numbers from simple endpoints into intelligent routing hubs. Each number can have its own IVR, language, AI agent, analytics, and business rules — so callers always reach the right place, instantly.</p>
                    <ul className="what-features">
                        <li><div className="what-feature-check" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Provision numbers in 100+ countries in seconds</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Time-based and geo-based routing rules per number</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Attach AI agents to specific numbers automatically</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Call forwarding, failover, and round-robin distribution</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Per-number analytics and cost tracking</span></li>
                    </ul>
                </div>
                <div className="what-image-wrap reveal-up" style={{ minHeight: "400px" }}>
                    <img src="/assets/images/smart_numbers_dashboard.png" alt="Smart Numbers Portal" />
                </div>
            </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
            <div className="text-center reveal-up">
                <h2 className="section-title massive-title">Key capabilities.</h2>
            </div>
            <div className="capabilities-grid">
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div><h3>Global Coverage</h3><p>Local, toll-free, and mobile numbers across 100+ countries. Give every market a local presence without physical offices.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><h3>Intelligent Routing</h3><p>Route by time-of-day, day-of-week, caller geography, or custom business rules. Calls always reach the right destination.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="3"/></svg></div><h3>AI Agent Binding</h3><p>Attach a specific AI voice agent to any number. Different products, different languages, different brands — all automated.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div><h3>Number Porting</h3><p>Port your existing numbers from any carrier with zero downtime. We handle the entire process end-to-end.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><h3>Per-Number Analytics</h3><p>Track call volume, answer rates, peak hours, and cost-per-call for every number independently.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3>Failover Protection</h3><p>Automatic failover routing ensures calls are never lost — even during outages or maintenance windows.</p></div>
            </div>
        </div>
      </section>

      <section className="use-cases-grid-section" style={{ background: "#fafafa" }}>
        <div className="container">
            <div className="text-center reveal-up"><h2 className="section-title massive-title">Use cases.</h2></div>
            <div className="use-cases-card-grid hover-pop">
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">01</span><h4>Global Sales Presence</h4><p>Give prospects in every country a local number to call — even if your entire team is in one location.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">02</span><h4>Marketing Campaign Tracking</h4><p>Assign unique numbers to campaigns, channels, and ads to attribute calls directly to marketing spend.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">03</span><h4>Multi-Brand Operations</h4><p>Run separate brands with dedicated numbers, each with its own AI personality, IVR, and routing logic.</p></div>
            </div>
        </div>
      </section>

      {/* PRODUCT DEMO SECTION --> */}
      <section className="numbers-showcase dark-section apple-parallax-section" style={{ padding: "10rem 0", background: "#0a0a0a", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(0,186,52,0.05) 0%, transparent 80%)" }}></div>
        <div className="container text-center reveal-up" style={{ position: "relative", zIndex: 10 }}>
            <h2 className="section-title massive-title white-text" style={{ marginBottom: "2rem" }}>Numbers management portal.</h2>
            <p className="section-subtitle white-text opacity-70" style={{ maxWidth: "850px", margin: "0 auto" }}>Provision, configure, and monitor all your numbers from one streamlined interface with real-time status and routing controls.</p>
            
            <div className="full-dashboardreveal reveal-up" style={{ position: "relative", maxWidth: "1200px", margin: "4rem auto 0 auto", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", aspectRatio: "16/9", background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <img src="/assets/images/cinematic_hero.png" alt="Smart Numbers Operations" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5) contrast(1.1) saturate(0.8)" }} />
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.9) 100%)" }}></div>
                </div>

                <div className="apple-parallax-element" style={{ position: "absolute", bottom: "-5%", right: "5%", width: "90%", perspective: "1500px", transformStyle: "preserve-3d", zIndex: 5 }}>
                    
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "80%", background: "rgba(0,186,52,0.3)", filter: "blur(60px)", transform: "translate(-50%, -50%)", zIndex: 0 }}></div>
                    
                    <img src="/assets/images/smart_numbers_dashboard.png" alt="Smart Numbers Dashboard Full View" style={{ width: "100%", borderRadius: "20px", boxShadow: "0 50px 100px rgba(0,0,0,0.9)", border: "1px solid rgba(255,255,255,0.2)", transform: "rotateX(6deg)", position: "relative", zIndex: 1, display: "block", objectFit: "contain" }} />
                    
                </div>
                
            </div>
        </div>
      </section>

      <section className="final-cta dark-section" id="final-cta">
        <div className="cta-orb cta-orb--1"></div><div className="cta-orb cta-orb--2"></div>
        <div className="container final-content">
            <h2 className="section-title giant-title white-text reveal-up">Go global in minutes.</h2>
            <p className="section-subtitle white-text opacity-70 mb-10 reveal-up" style={{ fontSize: "1.4rem" }}>Start with one number. Scale to hundreds. 30-day free trial.</p>
            <div className="hero-cta-group reveal-up" style={{ justifyContent: "center", gap: "1.5rem" }}>
                <a href="#" className="btn btn-white btn-lg apple-pulse">Start Free Trial →</a>
                <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
            </div>
        </div>
      </section>
    </>
  );
}
