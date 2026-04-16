"use client";

import { useEffect } from "react";

export default function CallEvaluation() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* CALL EVALUATION HERO --> */}
      <section className="hero dark-section apple-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 60px 0", overflow: "hidden", background: "#000", position: "relative" }}>
        <div className="hero-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/cinematic_hero.png')", filter: "brightness(0.2) grayscale(20%)" }}></div>
        <div className="hero-overlay" style={{ background: "radial-gradient(circle at 70% 50%, rgba(255,159,10,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(123,30,185,0.1) 0%, rgba(0,0,0,0.95) 80%)" }}></div>
        
        <div className="container hero-container" style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Left Text Block --> */}
            <div className="hero-text-wrap" style={{ position: "relative", textAlign: "left" }}>
                <div className="badge apple-badge reveal-hero" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 16px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", marginBottom: "2rem", display: "inline-block", backdropFilter: "blur(10px)" }}>CX PLATFORM / CALL EVALUATION</div>
                
                <h1 className="hero-title white-text reveal-hero" style={{ fontSize: "clamp(3rem, 5vw, 4.3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                    Score every call.<br />
                    <span style={{ background: "linear-gradient(90deg, #FF9F0A, #7B1EB9)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Automatically.</span>
                </h1>
                
                <p className="hero-subtitle white-text opacity-70 reveal-hero" style={{ fontSize: "1.25rem", maxWidth: "550px", marginBottom: "3.5rem", lineHeight: 1.6, fontWeight: 400 }}>
                    AI evaluates 100% of calls across empathy, compliance, resolution speed, and clarity. No more random sampling — every call gets a quality score, every agent gets actionable coaching.
                </p>
                
                <div className="hero-cta-group reveal-hero" style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-start" }}>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse" style={{ boxShadow: "0 0 30px rgba(255,159,10,0.3)", background: "#FF9F0A", borderColor: "#FF9F0A", color: "#fff" }}>Start Free Trial</a>
                    <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
                </div>
                
            </div>
            
            {/* Right Image Block --> */}
            <div className="hero-hardware-container reveal-hero-img" style={{ position: "relative", perspective: "2000px", zIndex: 5 }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(255,159,10,0.4) 0%, transparent 70%)", transform: "translate(-50%, -50%)", filter: "blur(100px)", zIndex: 0 }}></div>
                
                <div style={{ transform: "rotateY(-15deg) rotateX(8deg) rotateZ(1deg) scale(1.1)", transformStyle: "preserve-3d", transition: "transform 0.8s var(--ease-apple)" }}>
                    <img src="/assets/images/call_evaluation_ui.png" alt="Call Evaluation UX" style={{ width: "130%", maxWidth: "900px", marginLeft: "-10%", borderRadius: "24px", position: "relative", zIndex: 1, boxShadow: "-20px 40px 100px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.15)", display: "block" }} />
                    
                    <div className="reveal-up" style={{ position: "absolute", bottom: "5%", left: "-5%", background: "rgba(25,25,30,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "1.2rem", borderRadius: "16px", boxShadow: "0 30px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #FF9F0A", zIndex: 2, display: "flex", alignItems: "center", gap: "15px", animation: "float 6s ease-in-out infinite", transform: "translateZ(80px)" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,159,10,0.15)", border: "1px solid rgba(255,159,10,0.5)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", color: "#FF9F0A" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <div>
                             <div style={{ fontWeight: 800, fontSize: "1rem", lineHeight: 1, color: "#fff" }}>100% Calibrated</div>
                             <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Empathy Score: 94/100</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>

      <section className="what-it-does">
        <div className="container">
            <div className="what-split what-split--reverse">
                <div className="reveal-up">
                    <div className="platform-eyebrow" style={{ background: "rgba(255,159,10,0.06)", borderColor: "rgba(255,159,10,0.15)", color: "#FF9F0A" }}>WHAT IT DOES</div>
                    <h2 className="section-title massive-title" style={{ marginTop: "1rem" }}>From listening to<br />every call manually —<br />to AI doing it instantly.</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--gray-medium)", marginTop: "1.5rem", lineHeight: 1.7 }}>Call Evaluation uses advanced NLP to analyze every call transcript in real-time. It scores agent performance across multiple dimensions, flags compliance violations, and builds coaching reports — turning weeks of QA work into seconds.</p>
                    <ul className="what-features">
                        <li><div className="what-feature-check" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>100% call coverage — not random 2% sampling</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Radar scoring: empathy, compliance, resolution, clarity, speed</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Transcript highlighting with emotion labels</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Auto-generated coaching summaries for managers</span></li>
                    </ul>
                </div>
                <div className="what-image-wrap reveal-up" style={{ minHeight: "400px" }}>
                    <img src="/assets/images/call_evaluation_ui.png" alt="Call Evaluation Scoring" />
                </div>
            </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
            <div className="text-center reveal-up"><h2 className="section-title massive-title">Key capabilities.</h2></div>
            <div className="capabilities-grid">
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div><h3>AI Quality Scoring</h3><p>Every call gets a multi-dimensional quality score. Empathy, compliance, resolution, speed, and clarity — scored from 0–100 with full justification.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><h3>Transcript Analysis</h3><p>Full call transcripts with highlighted key phrases, emotion labels (frustrated, satisfied, confused), and critical moment flagging.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3>Compliance Detection</h3><p>Required-phrase detection, script adherence tracking, and PCI/HIPAA violation alerts with immediate supervisor notification.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-3-3.87M9 21v-2a4 4 0 013-3.87"/><circle cx="12" cy="7" r="4"/></svg></div><h3>Agent Leaderboard</h3><p>Rank agents by quality scores, track improvement trends, and identify top performers and coaching opportunities at a glance.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3>Coaching Reports</h3><p>AI-generated coaching summaries per agent with specific call examples, improvement areas, and recommended talk tracks.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><h3>Trend Analytics</h3><p>Track quality trends over time by team, skill group, campaign, or individual agent — with anomaly detection and alert triggers.</p></div>
            </div>
        </div>
      </section>

      <section className="use-cases-grid-section" style={{ background: "#fafafa" }}>
        <div className="container">
            <div className="text-center reveal-up"><h2 className="section-title massive-title">Use cases.</h2></div>
            <div className="use-cases-card-grid hover-pop">
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">01</span><h4>QA Automation</h4><p>Replace manual call listening with AI that evaluates every single call against your custom quality scorecard.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">02</span><h4>Compliance Auditing</h4><p>Ensure every agent follows required scripts, disclosure statements, and regulatory phrases on every call.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">03</span><h4>Agent Coaching</h4><p>Give managers specific call examples and data-driven coaching recommendations instead of subjective feedback.</p></div>
            </div>
        </div>
      </section>

      {/* PRODUCT DEMO SECTION --> */}
      <section className="evaluation-showcase dark-section apple-parallax-section" style={{ padding: "10rem 0", background: "#0a0a0a", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(255,159,10,0.05) 0%, transparent 80%)" }}></div>
        <div className="container text-center reveal-up" style={{ position: "relative", zIndex: 10 }}>
            <h2 className="section-title massive-title white-text" style={{ marginBottom: "2rem" }}>See the scoring engine.</h2>
            <p className="section-subtitle white-text opacity-70" style={{ maxWidth: "850px", margin: "0 auto" }}>Split-screen transcript analysis with radar-chart performance scoring, emotion detection, and automatic coaching insights.</p>
            
            <div className="full-dashboardreveal reveal-up" style={{ position: "relative", maxWidth: "1200px", margin: "4rem auto 0 auto", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", aspectRatio: "16/9", background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <img src="/assets/images/office_interaction.png" alt="Call Evaluation Ops" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) contrast(1.1) saturate(0.8)" }} />
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.95) 100%)" }}></div>
                </div>

                <div className="apple-parallax-element" style={{ position: "absolute", bottom: "-8%", right: "-5%", width: "85%", perspective: "1500px", transformStyle: "preserve-3d", zIndex: 5 }}>
                    
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "80%", background: "rgba(255,159,10,0.3)", filter: "blur(60px)", transform: "translate(-50%, -50%)", zIndex: 0 }}></div>
                    
                    <img src="/assets/images/call_evaluation_ui.png" alt="Call Evaluation Full View" style={{ width: "100%", borderRadius: "20px", boxShadow: "-30px 50px 100px rgba(0,0,0,0.9)", border: "1px solid rgba(255,255,255,0.2)", transform: "rotateX(5deg) rotateY(-8deg) rotateZ(1deg)", position: "relative", zIndex: 1, display: "block", objectFit: "contain" }} />
                    
                </div>
                
            </div>
        </div>
      </section>

      <section className="final-cta dark-section" id="final-cta">
        <div className="cta-orb cta-orb--1"></div><div className="cta-orb cta-orb--2"></div>
        <div className="container final-content">
            <h2 className="section-title giant-title white-text reveal-up">Every call scored.<br />Every agent coached.</h2>
            <p className="section-subtitle white-text opacity-70 mb-10 reveal-up" style={{ fontSize: "1.4rem" }}>30-day free trial. No credit card required.</p>
            <div className="hero-cta-group reveal-up" style={{ justifyContent: "center", gap: "1.5rem" }}>
                <a href="#" className="btn btn-white btn-lg apple-pulse">Start Free Trial →</a>
                <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
            </div>
        </div>
      </section>
    </>
  );
}
