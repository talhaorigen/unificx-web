"use client";

import { useEffect } from "react";

export default function CXPlatform() {
  useEffect(() => {
    // Phase 8: Animation mapping will be handled later
  }, []);

  return (
    <>
      {/* 1. HERO --> */}
      <section className="platform-hero">
        <div className="platform-hero-orb platform-hero-orb--blue"></div>
        <div className="platform-hero-orb platform-hero-orb--purple"></div>

        <div className="platform-hero-grid">
            {/* LEFT: Text --> */}
            <div>
                <div className="platform-eyebrow reveal-hero">UNIFICX / CX PLATFORM</div>
                <h1 className="massive-title white-text reveal-hero" style={{ marginBottom: "1.5rem", lineHeight: 1.0 }}>One platform.<br /><span style={{ background: "linear-gradient(90deg, #006CD2, #7B1EB9)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every voice.</span></h1>
                <p className="reveal-hero" style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: "500px", marginBottom: "3rem" }}>Cloud PBX, AI Voice & Chat agents, Smart Numbers, Call Evaluation, and deep Analytics — unified into a single system that runs your entire customer communication layer.</p>
                <div className="hero-cta-group reveal-hero" style={{ justifyContent: "flex-start", gap: "1.5rem" }}>
                    <a href="#" className="btn btn-primary btn-lg apple-pulse">Explore the Platform</a>
                    <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
                </div>
                <p className="reveal-hero" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", marginTop: "1.5rem" }}>No credit card required. 30-day free trial.</p>
            </div>

            {/* RIGHT: Orbit Visualization --> */}
            <div className="orbit-container reveal-hero-img">
                {/* Rings --> */}
                <div className="orbit-ring orbit-ring--3"></div>
                <div className="orbit-ring orbit-ring--2"></div>
                <div className="orbit-ring orbit-ring--1"></div>

                {/* Center core --> */}
                <div className="orbit-core">
                    <div className="orbit-core-label">Unifi<br />CX</div>
                </div>

                {/* Module nodes positioned around the orbit --> */}
                <div className="orbit-node" style={{ top: "2%", left: "50%", transform: "translateX(-50%)" }}>
                    <div className="orbit-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                    <span className="orbit-node-label">Cloud PBX</span>
                </div>
                <div className="orbit-node" style={{ top: "18%", right: "3%" }}>
                    <div className="orbit-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="11"/></svg></div>
                    <span className="orbit-node-label">AI Voice</span>
                </div>
                <div className="orbit-node" style={{ bottom: "18%", right: "3%" }}>
                    <div className="orbit-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
                    <span className="orbit-node-label">AI Chat</span>
                </div>
                <div className="orbit-node" style={{ bottom: "2%", left: "50%", transform: "translateX(-50%)" }}>
                    <div className="orbit-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
                    <span className="orbit-node-label">Smart Numbers</span>
                </div>
                <div className="orbit-node" style={{ bottom: "18%", left: "3%" }}>
                    <div className="orbit-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
                    <span className="orbit-node-label">Call Eval</span>
                </div>
                <div className="orbit-node" style={{ top: "18%", left: "3%" }}>
                    <div className="orbit-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
                    <span className="orbit-node-label">Analytics</span>
                </div>
            </div>
        </div>
      </section>

      {/* 2. PLATFORM ARCHITECTURE --> */}
      <section className="platform-arch">
        <div className="container">
            <div className="text-center reveal-up">
                <div className="platform-eyebrow" style={{ background: "rgba(0,108,210,0.06)", borderColor: "rgba(0,108,210,0.15)", color: "var(--blue)" }}>PLATFORM ARCHITECTURE</div>
                <h2 className="section-title massive-title" style={{ marginTop: "1rem" }}>How everything connects.</h2>
                <p className="section-subtitle mt-4">UnifiCX is not a collection of tools — it's a single, unified intelligence layer that connects every part of your voice communication stack.</p>
            </div>

            <div className="full-archreveal reveal-up" style={{ position: "relative", maxWidth: "1200px", margin: "5rem auto 0 auto", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", aspectRatio: "16/9", background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <img src="/assets/images/cinematic_hero.png" alt="Cloud Infrastructure" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) contrast(1.2) saturate(0.8)" }} />
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.9) 100%)" }}></div>
                </div>

                <div className="apple-parallax-element" style={{ position: "absolute", bottom: "5%", left: "50%", width: "85%", transform: "translateX(-50%)", perspective: "1500px", transformStyle: "preserve-3d", zIndex: 5 }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "80%", background: "rgba(123,30,185,0.4)", filter: "blur(60px)", transform: "translate(-50%, -50%)", zIndex: 0 }}></div>
                    
                    <img src="/assets/images/platform_architecture.png" alt="UnifiCX Platform Architecture" style={{ width: "100%", borderRadius: "20px", boxShadow: "0 50px 100px rgba(0,0,0,0.9)", border: "1px solid rgba(255,255,255,0.2)", transform: "rotateX(8deg)", position: "relative", zIndex: 1, display: "block", objectFit: "contain" }} />
                    
                    {/* Floating Data Node --> */}
                    <div className="parallax-element apple-scale-up" style={{ position: "absolute", top: "-10%", right: "10%", padding: "1.25rem 1.5rem", background: "rgba(25,25,30,0.95)", backdropFilter: "blur(20px)", borderRadius: "12px", boxShadow: "0 30px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #7B1EB9", textAlign: "left", zIndex: 2, transform: "translateZ(80px)" }}>
                        <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", lineHeight: 1 }}>Intelligence Engine Active</div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginTop: "6px" }}>Routing 10k events/sec</div>
                    </div>
                </div>
                
            </div>

            {/* Architecture nodes description --> */}
            <div className="arch-diagram" style={{ marginTop: "5rem" }}>
                <div className="arch-col reveal-up">
                    <div className="arch-node">
                        <div className="arch-node-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                        </div>
                        <div className="arch-node-text"><strong>Cloud PBX</strong><small>Phone system foundation</small></div>
                    </div>
                    <div className="arch-node">
                        <div className="arch-node-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="3"/></svg>
                        </div>
                        <div className="arch-node-text"><strong>AI Voice Agents</strong><small>Automated call handling</small></div>
                    </div>
                    <div className="arch-node">
                        <div className="arch-node-icon" style={{ background: "rgba(0,108,210,0.08)", color: "var(--blue)" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                        </div>
                        <div className="arch-node-text"><strong>AI Chat Agents</strong><small>Digital channel automation</small></div>
                    </div>
                </div>

                <div className="arch-center reveal-up" style={{ textAlign: "center", padding: "3rem 2rem" }}>
                    <div className="arch-center-label">Core</div>
                    <div className="arch-center-title">UnifiCX Intelligence Layer</div>
                    <div style={{ width: "40px", height: "2px", background: "rgba(255,255,255,0.3)", margin: "1rem auto" }}></div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>Real-time data bus</div>
                </div>

                <div className="arch-col reveal-up">
                    <div className="arch-node">
                        <div className="arch-node-icon" style={{ background: "rgba(0,186,52,0.08)", color: "#00BA34" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                        </div>
                        <div className="arch-node-text"><strong>Smart Numbers</strong><small>Global number management</small></div>
                    </div>
                    <div className="arch-node">
                        <div className="arch-node-icon" style={{ background: "rgba(255,159,10,0.08)", color: "#FF9F0A" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/></svg>
                        </div>
                        <div className="arch-node-text"><strong>Call Evaluation</strong><small>Quality scoring engine</small></div>
                    </div>
                    <div className="arch-node">
                        <div className="arch-node-icon" style={{ background: "rgba(123,30,185,0.08)", color: "var(--purple)" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                        </div>
                        <div className="arch-node-text"><strong>Analytics</strong><small>Full intelligence dashboard</small></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. MODULE GRID --> */}
      <section className="modules-showcase">
        <div className="container">
            <div className="text-center reveal-up">
                <h2 className="section-title massive-title">Six modules.<br />One platform.</h2>
                <p className="section-subtitle mt-4">Each module is powerful standalone. Together, they create a customer experience engine that learns, adapts, and improves with every conversation.</p>
            </div>

            <div className="module-preview-grid">
                {/* Cloud PBX --> */}
                <div className="module-preview-card reveal-up hover-pop">
                    <img src="/assets/images/cloud_pbx_dashboard.png" alt="Cloud PBX" className="module-preview-img" />
                    <div className="module-preview-body">
                        <div className="module-tag" style={{ color: "var(--blue)" }}>Infrastructure</div>
                        <h3>Cloud PBX</h3>
                        <p>Enterprise-grade cloud phone system with IVR, call routing, extensions, and real-time monitoring — no hardware required.</p>
                        <a href="/cloud-pbx" className="module-cta">Explore Cloud PBX <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                    </div>
                </div>

                {/* AI Voice Agents --> */}
                <div className="module-preview-card reveal-up hover-pop">
                    <img src="/assets/images/agent_dashboard_hero.png" alt="AI Voice Agents" className="module-preview-img" />
                    <div className="module-preview-body">
                        <div className="module-tag" style={{ color: "var(--purple)" }}>AI Automation</div>
                        <h3>AI Voice Agents</h3>
                        <p>Voice-first AI that answers every call, understands intent, takes real action in your systems, and hands off to humans seamlessly.</p>
                        <a href="/ai-agents" className="module-cta">Explore AI Voice Agents <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                    </div>
                </div>

                {/* AI Chat Agents --> */}
                <div className="module-preview-card reveal-up hover-pop">
                    <img src="/assets/images/chat_agent_ui.png" alt="AI Chat Agents" className="module-preview-img" />
                    <div className="module-preview-body">
                        <div className="module-tag" style={{ color: "#7B1EB9" }}>AI Automation</div>
                        <h3>AI Chat Agents</h3>
                        <p>Deploy intelligent chat agents across WhatsApp, SMS, and web that handle inquiries, bookings, and support 24/7, automatically.</p>
                        <a href="/ai-chat-agents" className="module-cta">Explore AI Chat Agents <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                    </div>
                </div>

                {/* Smart Numbers --> */}
                <div className="module-preview-card reveal-up hover-pop">
                    <img src="/assets/images/smart_numbers_dashboard.png" alt="Smart Numbers" className="module-preview-img" />
                    <div className="module-preview-body">
                        <div className="module-tag" style={{ color: "#00BA34" }}>Numbers</div>
                        <h3>Smart Numbers</h3>
                        <p>Provision and manage virtual phone numbers in 100+ countries with intelligent routing, geo-targeting, and real-time analytics.</p>
                        <a href="/smart-numbers" className="module-cta">Explore Smart Numbers <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                    </div>
                </div>

                {/* Call Evaluation --> */}
                <div className="module-preview-card reveal-up hover-pop">
                    <img src="/assets/images/call_evaluation_ui.png" alt="Call Evaluation" className="module-preview-img" />
                    <div className="module-preview-body">
                        <div className="module-tag" style={{ color: "#FF9F0A" }}>Quality</div>
                        <h3>Call Evaluation</h3>
                        <p>AI automatically scores every call on empathy, compliance, resolution, and clarity — so managers can coach with real data, instantly.</p>
                        <a href="/call-evaluation" className="module-cta">Explore Call Evaluation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                    </div>
                </div>

                {/* Analytics --> */}
                <div className="module-preview-card reveal-up hover-pop">
                    <img src="/assets/images/cx_analytics_overview.png" alt="CX Analytics" className="module-preview-img" />
                    <div className="module-preview-body">
                        <div className="module-tag" style={{ color: "var(--blue)" }}>Intelligence</div>
                        <h3>Analytics</h3>
                        <p>Real-time dashboards tracking call volume, sentiment trends, agent performance, CSAT scores, and business-critical anomalies.</p>
                        <a href="/cx-analytics" className="module-cta">Explore Analytics <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. INTEGRATION ECOSYSTEM --> */}
      <section className="integration-strip">
        <div className="integration-glow"></div>
        <div className="container reveal-up" style={{ position: "relative", zIndex: 2 }}>
            <h2 className="section-title massive-title white-text">Connects to everything<br />you already use.</h2>
            <p className="section-subtitle mt-4" style={{ color: "rgba(255,255,255,0.6)" }}>200+ integrations with CRM, helpdesk, e-commerce, calendar, and payment platforms — via native connectors and open API.</p>

            <div className="integration-logos">
                <div className="integration-badge">Salesforce</div>
                <div className="integration-badge">HubSpot</div>
                <div className="integration-badge">Zendesk</div>
                <div className="integration-badge">Stripe</div>
                <div className="integration-badge">Shopify</div>
                <div className="integration-badge">Google Calendar</div>
                <div className="integration-badge">Microsoft Teams</div>
                <div className="integration-badge">Slack</div>
                <div className="integration-badge">ServiceNow</div>
                <div className="integration-badge">Freshdesk</div>
                <div className="integration-badge">Zoho CRM</div>
                <div className="integration-badge">Intercom</div>
                <div className="integration-badge">WhatsApp Business</div>
                <div className="integration-badge">Twilio</div>
                <div className="integration-badge">Pipedrive</div>
                <div className="integration-badge">Monday.com</div>
                <div className="integration-badge">+ 200 more</div>
            </div>
        </div>
      </section>

      {/* 5. PLATFORM STATS --> */}
      <section className="platform-stats">
        <div className="container">
            <div className="text-center reveal-up" style={{ marginBottom: "5rem" }}>
                <h2 className="section-title massive-title">Numbers that matter.</h2>
            </div>
            <div className="stats-grid">
                <div className="stat-item reveal-up">
                    <span className="stat-number counter" data-target="99">99</span><span className="stat-number" style={{ fontSize: "2rem" }}>%</span>
                    <div className="stat-label">Uptime SLA</div>
                </div>
                <div className="stat-item reveal-up">
                    <span className="stat-number"><span className="counter" data-target="200">200</span>+</span>
                    <div className="stat-label">Integrations</div>
                </div>
                <div className="stat-item reveal-up">
                    <span className="stat-number"><span className="counter" data-target="100">100</span>+</span>
                    <div className="stat-label">Countries</div>
                </div>
                <div className="stat-item reveal-up">
                    <span className="stat-number"><span className="counter" data-target="40">40</span>%</span>
                    <div className="stat-label">Cost Reduction</div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. FINAL CTA --> */}
      <section className="final-cta dark-section" id="final-cta">
        <div className="cta-orb cta-orb--1"></div>
        <div className="cta-orb cta-orb--2"></div>
        <div className="cta-orb cta-orb--3"></div>
        <div className="container final-content">
            <h2 className="section-title giant-title white-text reveal-up">Ready to unify your<br />customer experience?</h2>
            <p className="section-subtitle white-text opacity-70 mb-10 reveal-up" style={{ fontSize: "1.4rem" }}>Start with any module. Scale to the full platform. 30-day free trial.</p>
            <div className="hero-cta-group reveal-up" style={{ justifyContent: "center", gap: "1.5rem" }}>
                <a href="#" className="btn btn-white btn-lg apple-pulse">Start Free Trial →</a>
                <a href="#" className="btn btn-glass btn-lg">Talk to Sales</a>
            </div>
        </div>
      </section>
    </>
  );
}
