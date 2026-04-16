"use client";

import { useEffect } from "react";

export default function CXAnalytics() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* CX ANALYTICS HERO */}
      <section className="hero dark-section apple-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 60px 0", overflow: "hidden", background: "#000", position: "relative" }}>
        <div className="hero-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/cinematic_hero.png')", filter: "brightness(0.2) grayscale(20%)" }}></div>
        <div className="hero-overlay" style={{ background: "radial-gradient(circle at 70% 50%, rgba(0,108,210,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(123,30,185,0.1) 0%, rgba(0,0,0,0.95) 80%)" }}></div>
        
        <div className="container hero-container" style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Left Text Block */}
            <div className="hero-text-wrap" style={{ position: "relative", textAlign: "left" }}>
                <div className="badge apple-badge reveal-hero" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 16px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", marginBottom: "2rem", display: "inline-block", backdropFilter: "blur(10px)" }}>CX PLATFORM / ANALYTICS</div>
                
                <h1 className="hero-title white-text reveal-hero" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                    See everything.<br />
                    <span style={{ background: "linear-gradient(90deg, #006CD2, #7B1EB9)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Miss nothing.</span>
                </h1>
                
                <p className="hero-subtitle white-text opacity-70 reveal-hero" style={{ fontSize: "1.25rem", maxWidth: "550px", marginBottom: "3.5rem", lineHeight: 1.6, fontWeight: 400 }}>
                    Real-time dashboards that aggregate data from every module — call volume, sentiment trends, agent performance, CSAT scores, topic distribution, and anomaly alerts — all in one unified view.
                </p>
                
                <div className="hero-cta-group reveal-hero" style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-start" }}>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse" style={{ boxShadow: "0 0 30px rgba(0,108,210,0.3)" }}>Start Free Trial</a>
                    <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
                </div>
                
            </div>
            
            {/* Right Image Block --> */}
            <div className="hero-hardware-container reveal-hero-img" style={{ position: "relative", perspective: "2000px", zIndex: 5 }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(0,108,210,0.4) 0%, transparent 70%)", transform: "translate(-50%, -50%)", filter: "blur(100px)", zIndex: 0 }}></div>
                
                <div style={{ transform: "rotateY(-15deg) rotateX(8deg) rotateZ(1deg) scale(1.1)", transformStyle: "preserve-3d", transition: "transform 0.8s var(--ease-apple)" }}>
                    <img src="/assets/images/cx_analytics_overview.png" alt="CX Analytics Dashboard" style={{ width: "130%", maxWidth: "900px", marginLeft: "-10%", borderRadius: "24px", position: "relative", zIndex: 1, boxShadow: "-20px 40px 100px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.15)", display: "block" }} />
                    
                    <div className="reveal-up" style={{ position: "absolute", bottom: "5%", left: "-5%", background: "rgba(25,25,30,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "1.5rem", borderRadius: "20px", boxShadow: "-30px 40px 80px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", zIndex: 2, display: "flex", alignItems: "center", gap: "15px", animation: "float 6s ease-in-out infinite", transform: "translateZ(80px)" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(123,30,185,0.15)", border: "1px solid rgba(123,30,185,0.5)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B1EB9" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        </div>
                        <div>
                             <div style={{ fontWeight: 800, fontSize: "1.1rem", lineHeight: 1, color: "#fff" }}>Sentiment +14%</div>
                             <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Global Trend Upward</div>
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
                    <div className="platform-eyebrow" style={{ background: "rgba(0,108,210,0.06)", borderColor: "rgba(0,108,210,0.15)", color: "var(--blue)" }}>WHAT IT DOES</div>
                    <h2 className="section-title massive-title" style={{ marginTop: "1rem" }}>Data from every call.<br />Insights in seconds.</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--gray-medium)", marginTop: "1.5rem", lineHeight: 1.7 }}>CX Analytics aggregates data from Cloud PBX, AI Agents, Call Evaluation, and Smart Numbers into a single, unified intelligence layer. See patterns, spot problems, and measure impact — all in real-time.</p>
                    <ul className="what-features">
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Live call volume heatmaps and queue metrics</span></li>
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Sentiment trend lines across all channels</span></li>
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>CSAT score tracking with NPS comparison</span></li>
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Agent leaderboards with performance benchmarking</span></li>
                        <li><div className="what-feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Custom report builder with scheduled delivery</span></li>
                    </ul>
                </div>
                <div className="what-image-wrap reveal-up" style={{ minHeight: "400px" }}>
                    <img src="/assets/images/cx_analytics_overview.png" alt="Analytics Suite" />
                </div>
            </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
            <div className="text-center reveal-up"><h2 className="section-title massive-title">Key capabilities.</h2></div>
            <div className="capabilities-grid">
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div><h3>Live Wallboard</h3><p>Real-time grid view of every active queue, agent status, and call in progress — designed for operations centers and TV dashboards.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><h3>Sentiment Analytics</h3><p>Track positive, neutral, and negative sentiment trends across all calls over time — with drill-down to individual conversations.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><h3>Topic Intelligence</h3><p>AI auto-categorizes every conversation by topic. See distributions across billing, support, sales, complaints in real-time.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><h3>Anomaly Alerts</h3><p>Get instant alerts when metrics deviate from baselines. "Billing complaints +47% this week" — flagged before it escalates.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg></div><h3>Custom Reports</h3><p>Build custom dashboards combining any metrics. Schedule automated email delivery to stakeholders — daily, weekly, or monthly.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div><h3>API & Exports</h3><p>Export raw data via API or CSV. Integrate analytics into your own BI tools — Tableau, Looker, Power BI, or Google Data Studio.</p></div>
            </div>
        </div>
      </section>

      {/* PRODUCT DEMO SECTION --> */}
      <section className="analytics-showcase dark-section apple-parallax-section" style={{ padding: "10rem 0", background: "#0a0a0a", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(123,30,185,0.05) 0%, transparent 80%)" }}></div>
        <div className="container text-center reveal-up" style={{ position: "relative", zIndex: 10 }}>
            <h2 className="section-title massive-title white-text" style={{ marginBottom: "2rem" }}>Your command center.</h2>
            <p className="section-subtitle white-text opacity-70" style={{ maxWidth: "850px", margin: "0 auto" }}>Call volume heatmaps, sentiment trends, CSAT gauges, agent leaderboards, and live call streams — all in one view.</p>
            
            <div className="full-dashboardreveal reveal-up" style={{ position: "relative", maxWidth: "1200px", margin: "4rem auto 0 auto", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", aspectRatio: "16/9", background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <img src="/assets/images/office_interaction.png" alt="Intelligence Analytics" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) contrast(1.1) saturate(0.8)" }} />
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.95) 100%)" }}></div>
                </div>

                <div className="apple-parallax-element" style={{ position: "absolute", bottom: "-8%", right: "-5%", width: "75%", perspective: "1500px", transformStyle: "preserve-3d", zIndex: 5 }}>
                    
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "80%", background: "rgba(123,30,185,0.4)", filter: "blur(60px)", transform: "translate(-50%, -50%)", zIndex: 0 }}></div>
                    
                    <img src="/assets/images/cx_analytics_overview.png" alt="Analytics Dashboard Full View" style={{ width: "100%", borderRadius: "20px", boxShadow: "-30px 50px 100px rgba(0,0,0,0.9)", border: "1px solid rgba(255,255,255,0.2)", transform: "rotateX(5deg) rotateY(-8deg) rotateZ(1deg)", position: "relative", zIndex: 1, display: "block", objectFit: "contain" }} />
                    
                </div>
                
            </div>
        </div>
      </section>

      <section className="final-cta dark-section" id="final-cta">
        <div className="cta-orb cta-orb--1"></div><div className="cta-orb cta-orb--2"></div>
        <div className="container final-content">
            <h2 className="section-title giant-title white-text reveal-up">Data-driven CX<br />starts here.</h2>
            <p className="section-subtitle white-text opacity-70 mb-10 reveal-up" style={{ fontSize: "1.4rem" }}>30-day free trial. Real-time intelligence from day one.</p>
            <div className="hero-cta-group reveal-up" style={{ justifyContent: "center", gap: "1.5rem" }}>
                <a href="#" className="btn btn-white btn-lg apple-pulse">Start Free Trial →</a>
                <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
            </div>
        </div>
      </section>
    </>
  );
}
