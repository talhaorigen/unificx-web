"use client";

import { useEffect } from "react";

export default function AIIntelligence() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* 1. HERO — AI INTELLIGENCE (REDESIGNED PREMIUM LAYOUT) */}
      <section className="hero dark-section apple-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 60px 0", overflow: "hidden", background: "#000", position: "relative" }}>
        <div className="hero-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/hero-bg-real.png')", filter: "brightness(0.15) grayscale(30%)" }}></div>
        <div className="hero-overlay" style={{ background: "radial-gradient(circle at 70% 50%, rgba(123,30,185,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(0,108,210,0.1) 0%, rgba(0,0,0,0.95) 80%)" }}></div>
        
        <div className="container hero-container" style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Left Text Block */}
            <div className="hero-text-wrap" style={{ position: "relative", textAlign: "left" }}>
                <div className="badge apple-badge reveal-hero" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 16px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", marginBottom: "2rem", display: "inline-block", backdropFilter: "blur(10px)" }}>UNIFICX / AI INTELLIGENCE</div>
                
                <h1 className="hero-title white-text reveal-hero" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                    Understand every conversation. <br />
                    <span style={{ background: "linear-gradient(90deg, #7B1EB9, #006CD2)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>In real-time.</span>
                </h1>
                
                <p className="hero-subtitle white-text opacity-70 reveal-hero" style={{ fontSize: "1.25rem", maxWidth: "550px", marginBottom: "3.5rem", lineHeight: 1.6, fontWeight: 400 }}>
                    Not just AI calls — every call. Customer service, internal meetings, vendor negotiations. Real-time sentiment, topic categorization, and anomaly detection.
                </p>
                
                <div className="hero-cta-group reveal-hero" style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-start" }}>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse" style={{ boxShadow: "0 0 30px rgba(123,30,185,0.4)" }}>Start Free Trial</a>
                    <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
                </div>
                
                <div className="reveal-hero" style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#222", border: "2px solid #000" }}></div>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#333", border: "2px solid #000", marginLeft: "-10px" }}></div>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#444", border: "2px solid #000", marginLeft: "-10px" }}></div>
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
                        <strong style={{ color: "#fff" }}>10M+</strong> calls analyzed monthly
                    </div>
                </div>
            </div>
            
            {/* Right Image Block (Stunning 3D perspective to make it look premium and fit well) */}
            <div className="hero-hardware-container reveal-hero-img" style={{ position: "relative", perspective: "2000px", zIndex: 5 }}>
                {/* Background glow */}
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(123,30,185,0.4) 0%, transparent 70%)", transform: "translate(-50%, -50%)", filter: "blur(100px)", zIndex: 0 }}></div>
                
                <div style={{ transform: "rotateY(-18deg) rotateX(10deg) rotateZ(2deg) scale(1.1)", transformStyle: "preserve-3d", transition: "transform 0.8s var(--ease-apple)" }}>
                    <img src="/assets/images/intelligence_hero_dashboard.png" alt="UnifiCX AI Intelligence Dashboard" style={{ width: "130%", maxWidth: "900px", marginLeft: "-10%", borderRadius: "24px", position: "relative", zIndex: 1, boxShadow: "-20px 40px 100px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.15)", display: "block" }} />
                    
                    {/* Animated interactive badge floating out */}
                    <div className="reveal-up" style={{ position: "absolute", bottom: "-10%", left: "-5%", background: "rgba(25,25,30,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "1.5rem", borderRadius: "20px", boxShadow: "-30px 40px 80px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", zIndex: 2, display: "flex", alignItems: "center", gap: "15px", animation: "float 6s ease-in-out infinite", transform: "translateZ(80px)" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#00BA34", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(0,186,52,0.4)" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <div>
                             <div style={{ fontWeight: 800, fontSize: "1.1rem", lineHeight: 1, color: "#fff" }}>Positive Sentiment</div>
                             <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Real-time active</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>

      {/* 2. UNIFICX ADVANTAGE (BENTO GRID) */}
      <section className="advantage light-section" style={{ padding: "12rem 0", background: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="container">
            <div className="text-center mb-10 reveal-up">
                <h2 className="section-title massive-title" style={{ letterSpacing: "-0.05em" }}>We analyze <span className="gradient-text">EVERY</span> call.<br />Not just the AI ones.</h2>
                <p className="section-subtitle mt-4">Competitors only see what their AI handles. Because we own the phone system layer, we ingest, analyze, and map 100% of your voice data.</p>
            </div>
            
            <div className="advantage-grid bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
                {/* Customer Calls */}
                <div className="bento-box glass-card reveal-up hover-pop" style={{ background: "#fff", padding: "4rem 3rem", borderRadius: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <div className="icon-wrap mb-6" style={{ width: "72px", height: "72px", borderRadius: "20px", background: "rgba(0,108,210,0.05)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "1.5rem" }}>Customer Calls</h3>
                    <p style={{ color: "var(--gray-medium)", lineHeight: 1.6, fontSize: "1.1rem" }}>Inbound/outbound. AI tracks CSAT, detects complaints proactively, ensures compliance, and shows you exactly what customers are actually calling about.</p>
                </div>
                
                {/* Internal Meetings */}
                <div className="bento-box glass-card reveal-up hover-pop" style={{ background: "#fff", padding: "4rem 3rem", borderRadius: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <div className="icon-wrap mb-6" style={{ width: "72px", height: "72px", borderRadius: "20px", background: "rgba(123,30,185,0.05)", color: "var(--purple)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M9 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "1.5rem" }}>Internal Meetings</h3>
                    <p style={{ color: "var(--gray-medium)", lineHeight: 1.6, fontSize: "1.1rem" }}>Automatically summarizes team check-ins, extracts action items, tracks discussion topics, and monitors talk-vs-listen engagement metrics automatically.</p>
                </div>
                
                {/* Vendor Negotiations */}
                <div className="bento-box glass-card reveal-up hover-pop" style={{ background: "#fff", padding: "4rem 3rem", borderRadius: "40px", boxShadow: "0 10px 40px rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <div className="icon-wrap mb-6" style={{ width: "72px", height: "72px", borderRadius: "20px", background: "rgba(0,0,0,0.05)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "1.5rem" }}>Vendor Negotiations</h3>
                    <p style={{ color: "var(--gray-medium)", lineHeight: 1.6, fontSize: "1.1rem" }}>Surface key commitments, price objections, and SLA promises during B2B supplier and partner calls across your entire organization automatically.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. INTELLIGENCE MODULES (BENTO GRID 2) */}
      <section className="modules light-section" style={{ padding: "10rem 0", background: "#fff" }}>
        <div className="container">
            <div className="text-center mb-10 reveal-up">
                <div className="section-label" style={{ fontWeight: 800, color: "var(--blue)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1.5rem" }}>CORE MODULES</div>
                <h2 className="section-title massive-title">A module for every insight.</h2>
            </div>
            
            <div className="modules-grid bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
                {/* Real-Time Sentiment */}
                <div className="bento-box module-card reveal-up hover-pop" style={{ padding: "3rem", borderRadius: "32px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.04)" }}>
                   <div style={{ fontWeight: 800, color: "#00BA34", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "1.5rem", letterSpacing: "1px" }}>Sentiment</div>
                   <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem" }}>Real-Time Sentiment</h3>
                   <p style={{ color: "#666", lineHeight: 1.6, fontSize: "1.05rem" }}>Live scoring during calls. Positive, netural, negative — with trend lines. Immediate manager alerts when score drops sharply mid-call.</p>
                </div>
                
                {/* Topic Categorization --> */}
                <div className="bento-box module-card reveal-up hover-pop" style={{ padding: "3rem", borderRadius: "32px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.04)" }}>
                   <div style={{ fontWeight: 800, color: "var(--blue)", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "1.5rem", letterSpacing: "1px" }}>Categories</div>
                   <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem" }}>Topic Categorization</h3>
                   <p style={{ color: "#666", lineHeight: 1.6, fontSize: "1.05rem" }}>AI auto-labels every conversation globally. See accurate volume distribution across billing, complaints, sales, and unstructured chatter.</p>
                </div>
                
                {/* Employee Performance --> */}
                <div className="bento-box module-card reveal-up hover-pop" style={{ gridColumn: "span 1", gridRow: "span 2", padding: "3rem", borderRadius: "32px", background: "var(--gradient)", border: "1px solid rgba(0,0,0,0.04)", color: "#fff", boxShadow: "0 20px 40px rgba(0,108,210,0.2)" }}>
                   <div style={{ fontWeight: 800, color: "#fff", opacity: 0.8, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "1.5rem", letterSpacing: "1px" }}>Performance</div>
                   <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.25rem" }}>Employee Performance</h3>
                   <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.6, fontSize: "1.1rem", marginBottom: "2rem" }}>Per-agent granular insights including calls handled, average sentiment, resolution rates, emotional intelligence tracking, and strict compliance script adherence.</p>
                   <div style={{ width: "100%", height: "120px", background: "rgba(0,0,0,0.2)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                       <span style={{ fontWeight: 800, opacity: 0.5 }}>[ Performance Chart ]</span>
                   </div>
                </div>
                
                {/* Trend Detection --> */}
                <div className="bento-box module-card reveal-up hover-pop" style={{ padding: "3rem", borderRadius: "32px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.04)" }}>
                   <div style={{ fontWeight: 800, color: "#FF9F0A", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "1.5rem", letterSpacing: "1px" }}>Trends</div>
                   <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem" }}>Trend Detection</h3>
                   <p style={{ color: "#666", lineHeight: 1.6, fontSize: "1.05rem" }}>Anomaly alerts trigger globally: “Billing complaints +47% this week”. Resolve fires before your customers blast social media.</p>
                </div>
                
                {/* Compliance Recording --> */}
                <div className="bento-box module-card reveal-up hover-pop" style={{ padding: "3rem", borderRadius: "32px", background: "#fafafa", border: "1px solid rgba(0,0,0,0.04)" }}>
                   <div style={{ fontWeight: 800, color: "#000", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "1.5rem", letterSpacing: "1px" }}>Security</div>
                   <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem" }}>Compliance Recording</h3>
                   <p style={{ color: "#666", lineHeight: 1.6, fontSize: "1.05rem" }}>Tamper-proof encrypted recordings featuring exact phrase detection. PCI handling and HIPAA-aware automated intelligent PII redaction.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. ANALYTICS DEEP DIVE (MIXED REALITY PARALLAX VIEW) --> */}
      <section className="analytics-deep-dive" style={{ padding: "10rem 0", background: "#0a0a0a", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(0,108,210,0.1) 0%, transparent 80%)" }}></div>
        <div className="container text-center reveal-up" style={{ position: "relative", zIndex: 10 }}>
            <h2 className="section-title massive-title white-text mb-6">See the full picture.</h2>
            <p className="section-subtitle mb-10" style={{ maxWidth: "800px", margin: "0 auto", color: "rgba(255,255,255,0.7)", position: "relative", zIndex: 10 }}>Intelligence analytics dashboard featuring timeline forecasting, sentiment aggregation, and detailed KPI leaderboards mapping your organizational velocity.</p>
            
            {/* Redesigned Composite Showcase Container --> */}
            <div className="full-dashboardreveal reveal-up" style={{ position: "relative", maxWidth: "1200px", margin: "4rem auto 0 auto", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", aspectRatio: "16/9", background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                
                {/* 1. Human / Contextual Background Layer --> */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <img src="/assets/images/office_interaction.png" alt="Office Collaboration" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75) contrast(1.1) saturate(0.8)" }} />
                    {/* Vignette Overlay --> */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.85) 100%)" }}></div>
                </div>

                {/* 2. Dashboard UI Overlay Layer (Scaled Down & Angled) --> */}
                <div className="apple-parallax-element" style={{ position: "absolute", bottom: "-8%", right: "-5%", width: "65%", perspective: "1500px", transformStyle: "preserve-3d", zIndex: 5 }}>
                    
                    {/* Dashboard Shadow & Glow --> */}
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "80%", background: "rgba(0,108,210,0.4)", filter: "blur(60px)", transform: "translate(-50%, -50%)", zIndex: 0 }}></div>
                    
                    <img src="/assets/images/analytics_deep_dive.png" alt="Full Analytics Dashboard Preview" style={{ width: "100%", borderRadius: "20px", boxShadow: "-30px 50px 100px rgba(0,0,0,0.9)", border: "1px solid rgba(255,255,255,0.2)", transform: "rotateX(4deg) rotateY(-10deg) rotateZ(1deg)", position: "relative", zIndex: 1, display: "block" }} />
                    
                    {/* Parallax floating elements (data points) tied to the dashboard --> */}
                    <div className="parallax-element apple-scale-up" style={{ position: "absolute", top: "15%", left: "-15%", padding: "1.25rem 1.5rem", background: "rgba(25,25,30,0.9)", backdropFilter: "blur(20px)", borderRadius: "12px", boxShadow: "-20px 30px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #FF9F0A", textAlign: "left", zIndex: 2, transform: "translateZ(80px) rotateY(10deg)" }}>
                        <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", lineHeight: 1 }}>Trend Alert</div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginTop: "6px" }}>Billing escalations +47%</div>
                    </div>
                    
                    <div className="parallax-element apple-scale-up" style={{ position: "absolute", bottom: "25%", left: "-5%", padding: "1.25rem 1.5rem", background: "rgba(25,25,30,0.9)", backdropFilter: "blur(20px)", borderRadius: "12px", boxShadow: "-20px 30px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #00BA34", textAlign: "left", zIndex: 2, transform: "translateZ(120px) rotateY(10deg)" }}>
                        <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", lineHeight: 1 }}>High CSAT</div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginTop: "6px" }}>Agent "Sarah L." resolved 12 cases</div>
                    </div>
                </div>
                
            </div>
        </div>
      </section>

      {/* 5. FINAL CTA --> */}
      <section className="final-cta dark-section" id="final-cta" style={{ padding: "12rem 0", position: "relative", zIndex: 1, background: "radial-gradient(circle at center, #001A33 0%, #000 100%)", overflow: "hidden" }}>
        <div className="cta-orb cta-orb--1"></div>
        <div className="cta-orb cta-orb--2"></div>
        <div className="cta-orb cta-orb--3"></div>
        
        <div className="container final-content">
            <h2 className="section-title giant-title white-text reveal-up">Start analyzing every conversation.</h2>
            <p className="section-subtitle white-text opacity-70 mb-10 reveal-up" style={{ fontSize: "1.5rem" }}>30-day free trial. Setup in 5 minutes.</p>
            <div className="hero-cta-group reveal-up" style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
                <a href="#" className="btn btn-white btn-lg apple-pulse">Start Free Trial →</a>
                <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
            </div>
        </div>
      </section>
    </>
  );
}
