"use client";

import { useEffect } from "react";

export default function AIChatAgents() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* AI CHAT AGENTS HERO */}
      <section className="hero dark-section apple-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 60px 0", overflow: "hidden", background: "#000", position: "relative" }}>
        <div className="hero-bg parallax-bg" style={{ backgroundImage: "url('/assets/images/cinematic_hero.png')", filter: "brightness(0.2) grayscale(20%)" }}></div>
        <div className="hero-overlay" style={{ background: "radial-gradient(circle at 70% 50%, rgba(123,30,185,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(0,108,210,0.1) 0%, rgba(0,0,0,0.95) 80%)" }}></div>
        
        <div className="container hero-container" style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            
            {/* Left Text Block */}
            <div className="hero-text-wrap" style={{ position: "relative", textAlign: "left" }}>
                <div className="badge apple-badge reveal-hero" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 16px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", marginBottom: "2rem", display: "inline-block", backdropFilter: "blur(10px)" }}>CX PLATFORM / AI CHAT AGENTS</div>
                
                <h1 className="hero-title white-text reveal-hero" style={{ fontSize: "clamp(3rem, 5vw, 4.3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                    Chat automation<br />
                    <span style={{ background: "linear-gradient(90deg, #7B1EB9, #006CD2)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>that never sleeps.</span>
                </h1>
                
                <p className="hero-subtitle white-text opacity-70 reveal-hero" style={{ fontSize: "1.25rem", maxWidth: "550px", marginBottom: "3.5rem", lineHeight: 1.6, fontWeight: 400 }}>
                    Deploy intelligent AI agents across WhatsApp, SMS, and web chat that understand intent, take action in your systems, and hand off to humans the instant it matters.
                </p>
                
                <div className="hero-cta-group reveal-hero" style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-start" }}>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse" style={{ boxShadow: "0 0 30px rgba(123,30,185,0.3)", background: "#7B1EB9", borderColor: "#7B1EB9", color: "#fff" }}>Start Free Trial</a>
                    <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
                </div>
                
            </div>
            
            {/* Right Image Block --> */}
            <div className="hero-hardware-container reveal-hero-img" style={{ position: "relative", perspective: "2000px", zIndex: 5 }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(123,30,185,0.4) 0%, transparent 70%)", transform: "translate(-50%, -50%)", filter: "blur(100px)", zIndex: 0 }}></div>
                
                <div style={{ transform: "rotateY(-15deg) rotateX(8deg) rotateZ(1deg) scale(1.1)", transformStyle: "preserve-3d", transition: "transform 0.8s var(--ease-apple)" }}>
                    <img src="/assets/images/chat_agent_ui.png" alt="AI Chat Agent UX" style={{ width: "130%", maxWidth: "900px", marginLeft: "-10%", borderRadius: "24px", position: "relative", zIndex: 1, boxShadow: "-20px 40px 100px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.15)", display: "block" }} />
                    
                    <div className="reveal-up" style={{ position: "absolute", bottom: "5%", left: "-5%", background: "rgba(25,25,30,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "1.2rem", borderRadius: "16px", boxShadow: "0 30px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #7B1EB9", zIndex: 2, display: "flex", alignItems: "center", gap: "15px", animation: "float 6s ease-in-out infinite", transform: "translateZ(80px)" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(123,30,185,0.15)", border: "1px solid rgba(123,30,185,0.5)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", color: "#7B1EB9" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </div>
                        <div>
                             <div style={{ fontWeight: 800, fontSize: "1rem", lineHeight: 1, color: "#fff" }}>WhatsApp Deployed</div>
                             <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Resolution Rate: 87%</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>

      {/* WHAT IT DOES --> */}
      <section className="what-it-does">
        <div className="container">
            <div className="what-split what-split--reverse">
                <div className="reveal-up">
                    <div className="platform-eyebrow" style={{ background: "rgba(123,30,185,0.06)", borderColor: "rgba(123,30,185,0.15)", color: "var(--purple)" }}>WHAT IT DOES</div>
                    <h2 className="section-title massive-title" style={{ marginTop: "1rem" }}>One AI brain.<br />Every chat channel.</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--gray-medium)", marginTop: "1.5rem", lineHeight: 1.7 }}>AI Chat Agents use the same conversational intelligence engine as our voice agents — understanding context, intent, and emotion across WhatsApp, SMS, and web widgets simultaneously without any additional configuration.</p>
                    <ul className="what-features">
                        <li><div className="what-feature-check" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Handles bookings, FAQs, billing, and support without human intervention</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Real-time sentiment tracking with escalation triggers</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>Instant human handoff with full context and transcript</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>20+ language detection and auto-response</span></li>
                        <li><div className="what-feature-check" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div><span>CRM and calendar integration for real actions on every message</span></li>
                    </ul>
                </div>
                <div className="what-image-wrap reveal-up" style={{ minHeight: "400px" }}>
                    <img src="/assets/images/chat_agent_ui.png" alt="Chat Agent UI" />
                </div>
            </div>
        </div>
      </section>

      {/* KEY CAPABILITIES --> */}
      <section className="capabilities">
        <div className="container">
            <div className="text-center reveal-up">
                <h2 className="section-title massive-title">Key capabilities.</h2>
                <p className="section-subtitle mt-4">Everything needed to automate text-based customer conversations at scale, across every digital channel your customers use.</p>
            </div>
            <div className="capabilities-grid">
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(37,211,102,0.08)", color: "#25D366" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg></div><h3>WhatsApp Business</h3><p>Certified WhatsApp Business API integration. Send proactive messages, handle inquiries, and manage conversations at scale.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><h3>Web Chat Widget</h3><p>Embed a fully branded chat widget on your website that automatically escalates to a human agent with full conversation history.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div><h3>SMS Automation</h3><p>Two-way SMS conversations with AI-driven responses, appointment reminders, and follow-up sequences that feel personal.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div><h3>20+ Languages</h3><p>Detects language from the first message and responds natively — no configuration needed, no separate AI models.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><h3>Sentiment Escalation</h3><p>When frustration rises above threshold, the AI instantly alerts a human agent and transfers the conversation with full context preserved.</p></div>
                <div className="capability-card reveal-up hover-pop"><div className="capability-icon" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg></div><h3>Integration Actions</h3><p>Books appointments, processes orders, updates CRM records, and validates accounts — all directly from the chat window.</p></div>
            </div>
        </div>
      </section>

      {/* USE CASES --> */}
      <section className="use-cases-grid-section" style={{ background: "#fafafa" }}>
        <div className="container">
            <div className="text-center reveal-up">
                <h2 className="section-title massive-title">Every chat use case, automated.</h2>
            </div>
            <div className="use-cases-card-grid hover-pop">
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">01</span><h4>Appointment Booking</h4><p>Customers book, reschedule, or cancel appointments via WhatsApp without human involvement — calendar synced in real time.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">02</span><h4>Order Tracking</h4><p>Automatic order status updates, delivery notifications, and return initiations via SMS or web chat.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">03</span><h4>Lead Qualification</h4><p>Qualify inbound leads from web forms with AI chat, score intent, and push hot leads directly into Salesforce or HubSpot.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">04</span><h4>Customer Onboarding</h4><p>Guide new customers through account setup, documentation upload, and configuration via conversation, not forms.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">05</span><h4>Payment Collection</h4><p>Send payment reminders, accept payment confirmations, and resolve billing disputes via chat with PCI-compliant data handling.</p></div>
                <div className="use-case-card reveal-up hover-pop"><span className="use-case-number">06</span><h4>Technical Support</h4><p>Troubleshoot common issues through guided AI conversation, escalate only complex cases to your Tier 2 team.</p></div>
            </div>
        </div>
      </section>

      {/* PRODUCT DEMO SECTION --> */}
      <section className="evaluation-showcase dark-section apple-parallax-section" style={{ padding: "10rem 0", background: "#0a0a0a", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(123,30,185,0.05) 0%, transparent 80%)" }}></div>
        <div className="container text-center reveal-up" style={{ position: "relative", zIndex: 10 }}>
            <h2 className="section-title massive-title white-text" style={{ marginBottom: "2rem" }}>Live chat command center.</h2>
            <p className="section-subtitle white-text opacity-70" style={{ maxWidth: "850px", margin: "0 auto" }}>Manage all chat sessions across every channel from one unified inbox with real-time sentiment and agent handoff controls.</p>
            
            <div className="full-dashboardreveal reveal-up" style={{ position: "relative", maxWidth: "1200px", margin: "4rem auto 0 auto", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", aspectRatio: "16/9", background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <img src="/assets/images/office_interaction.png" alt="Chat Ops Center" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5) contrast(1.1) saturate(0.8)" }} />
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.95) 100%)" }}></div>
                </div>

                <div className="apple-parallax-element" style={{ position: "absolute", bottom: "-8%", right: "-5%", width: "85%", perspective: "1500px", transformStyle: "preserve-3d", zIndex: 5 }}>
                    
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "80%", background: "rgba(123,30,185,0.3)", filter: "blur(60px)", transform: "translate(-50%, -50%)", zIndex: 0 }}></div>
                    
                    <img src="/assets/images/chat_agent_ui.png" alt="Chat Evaluation Full View" style={{ width: "100%", borderRadius: "20px", boxShadow: "-30px 50px 100px rgba(0,0,0,0.9)", border: "1px solid rgba(255,255,255,0.2)", transform: "rotateX(5deg) rotateY(-8deg) rotateZ(1deg)", position: "relative", zIndex: 1, display: "block", objectFit: "contain" }} />
                    
                </div>
                
            </div>
        </div>
      </section>

      {/* PLATFORM INTEGRATION --> */}
      <section className="platform-integration">
        <div className="container text-center reveal-up">
            <h2 className="section-title massive-title">Unified with voice.</h2>
            <p className="section-subtitle mt-4">Chat and voice share the same AI brain. A customer who called yesterday gets context-aware chat responses today — automatically.</p>
            <div className="integration-flow">
                <div className="integration-flow-item"><div className="integration-flow-icon" style={{ background: "rgba(123,30,185,0.06)", color: "var(--purple)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><strong>AI Chat</strong></div>
                <div className="integration-flow-arrow">↔</div>
                <div className="integration-flow-item"><div className="integration-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="3"/></svg></div><strong>AI Voice</strong></div>
                <div className="integration-flow-arrow">→</div>
                <div className="integration-flow-item"><div className="integration-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a7 7 0 017 7c0 3-2 5-4 7l-3 4-3-4c-2-2-4-4-4-7a7 7 0 017-7z"/></svg></div><strong>AI Intelligence</strong></div>
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
            <h2 className="section-title giant-title white-text reveal-up">Chat smarter.<br />Respond faster.</h2>
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
