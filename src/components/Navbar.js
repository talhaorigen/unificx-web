"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href) => {
    // Force instantaneous scroll or smooth if desired
    // The requirement says "instant"
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    
    window.scrollTo({ top: 0, behavior: "instant" });
    router.push(href);
  };

  return (
    <nav className={`nav ${isScrolled || pathname === "/ai-intelligence" ? "is-scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <div 
          onClick={() => handleNavigation('/')} 
          className="nav-logo"
          style={{ cursor: 'pointer' }}
        >
          <Image
            src="/assets/images/logo-white.png"
            alt="UnifiCX"
            className="logo-w"
            width={120}
            height={28}
            priority
          />
          <Image
            src="/assets/images/logo-color.png"
            alt="UnifiCX"
            className="logo-c"
            width={120}
            height={28}
          />
        </div>

        <div className="nav-menu">
          {/* PLATFORM */}
          <div className="nav-drop">
            <span className="nav-link">
              Platform{" "}
              <svg className="nav-caret" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="mega">
              <div className="mega-grid mega-grid--3">
                <div className="mega-col">
                  <div className="mega-label">AI & Automation</div>
                  <div 
                    onClick={() => handleNavigation('/ai-agents')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="10" rx="2" />
                        <circle cx="12" cy="5" r="3" />
                        <line x1="12" y1="8" x2="12" y2="11" />
                        <circle cx="8" cy="16" r="1" />
                        <circle cx="16" cy="16" r="1" />
                        <line x1="10" y1="19" x2="14" y2="19" />
                      </svg>
                    </div>
                    <div>
                      <strong>AI Agents</strong>
                      <small>Voice AI that handles customer calls end-to-end</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('/ai-intelligence')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a7 7 0 017 7c0 3-2 5-4 7l-3 4-3-4c-2-2-4-4-4-7a7 7 0 017-7z" />
                        <circle cx="12" cy="9" r="2" />
                      </svg>
                    </div>
                    <div>
                      <strong>AI Intelligence</strong>
                      <small>All-call analytics, sentiment & insights</small>
                    </div>
                  </div>
                </div>
                <div className="mega-col">
                  <div className="mega-label">Platform</div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 11.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <strong>CX Platform</strong>
                      <small>Cloud comms, phones, video in one system</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" />
                        <rect x="2" y="14" width="20" height="8" rx="2" />
                        <line x1="6" y1="6" x2="6.01" y2="6" />
                        <line x1="6" y1="18" x2="6.01" y2="18" />
                      </svg>
                    </div>
                    <div>
                      <strong>Integrations</strong>
                      <small>CRM, ERP, 200+ apps connected</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <div>
                      <strong>Security</strong>
                      <small>Enterprise-grade protection & compliance</small>
                    </div>
                  </div>
                </div>
                <div className="mega-col mega-col--feat">
                  <div className="mega-label">Featured</div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon mega-icon--accent">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <div>
                      <strong>Demo Library</strong>
                      <small>Watch AI handle real customer calls</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div className="nav-drop">
            <span className="nav-link">
              Solutions{" "}
              <svg className="nav-caret" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="mega">
              <div className="mega-grid mega-grid--2">
                <div className="mega-col">
                  <div className="mega-label">By Use Case</div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <strong>Booking & Reservations</strong>
                      <small>Automated scheduling and confirmations</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <strong>Billing & Payments</strong>
                      <small>Process refunds and manage subscriptions</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <div>
                      <strong>FAQ Handling</strong>
                      <small>Instant answers to common questions</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91A6 6 0 0114.7 6.3z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Troubleshooting</strong>
                      <small>Guided diagnosis and resolution</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    </div>
                    <div>
                      <strong>Order Management</strong>
                      <small>Track, modify, and manage orders</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Customer Authentication</strong>
                      <small>Secure identity verification</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 3 21 3 21 8" />
                        <line x1="4" y1="20" x2="21" y2="3" />
                        <polyline points="21 16 21 21 16 21" />
                        <line x1="15" y1="15" x2="21" y2="21" />
                        <line x1="4" y1="4" x2="9" y2="9" />
                      </svg>
                    </div>
                    <div>
                      <strong>Smart Call Routing</strong>
                      <small>Intent-based call distribution</small>
                    </div>
                  </div>
                </div>
                <div className="mega-col">
                  <div className="mega-label">By Industry</div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <strong>Healthcare</strong>
                      <small>Patient scheduling & follow-ups</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                      </svg>
                    </div>
                    <div>
                      <strong>Banking</strong>
                      <small>Secure financial support & inquiries</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                      </svg>
                    </div>
                    <div>
                      <strong>Retail & E-commerce</strong>
                      <small>Orders, returns, and product support</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Education</strong>
                      <small>Enrollment, admissions & student support</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.55a11 11 0 0114.08 0" />
                        <path d="M1.42 9a16 16 0 0121.16 0" />
                        <path d="M8.53 16.11a6 6 0 016.95 0" />
                        <circle cx="12" cy="20" r="1" />
                      </svg>
                    </div>
                    <div>
                      <strong>Telecom</strong>
                      <small>Service activation & tech support</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            onClick={() => handleNavigation('#pricing')} 
            className="nav-link"
            style={{ cursor: 'pointer' }}
          >
            Pricing
          </div>

          {/* RESOURCES */}
          <div className="nav-drop">
            <span className="nav-link">
              Resources{" "}
              <svg className="nav-caret" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="mega">
              <div className="mega-grid mega-grid--2">
                <div className="mega-col">
                  <div className="mega-label">Learn</div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                        <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Blog</strong>
                      <small>Insights on AI and customer experience</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    </div>
                    <div>
                      <strong>Case Studies</strong>
                      <small>Real results from real customers</small>
                    </div>
                  </div>
                </div>
                <div className="mega-col">
                  <div className="mega-label">Developers</div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div>
                      <strong>API Docs</strong>
                      <small>Full API reference & SDKs</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div className="nav-drop">
            <span className="nav-link">
              Company{" "}
              <svg className="nav-caret" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="mega">
              <div className="mega-grid mega-grid--2">
                <div className="mega-col">
                  <div className="mega-label">About</div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </div>
                    <div>
                      <strong>About Us</strong>
                      <small>Our mission, vision, and values</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div>
                      <strong>Careers</strong>
                      <small>Join the team building the future of CX</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <line x1="20" y1="8" x2="20" y2="14" />
                        <line x1="23" y1="11" x2="17" y2="11" />
                      </svg>
                    </div>
                    <div>
                      <strong>Partners</strong>
                      <small>Join our partner ecosystem</small>
                    </div>
                  </div>
                </div>
                <div className="mega-col">
                  <div className="mega-label">Connect</div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Contact</strong>
                      <small>Get in touch with our team</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                        <path d="M18 14h-8" />
                        <path d="M15 18h-5" />
                        <path d="M10 6h8v4h-8V6z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Press</strong>
                      <small>Newsroom and media resources</small>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleNavigation('#')} 
                    className="mega-item"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="mega-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Legal</strong>
                      <small>Privacy, terms & compliance</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-actions">
          <button 
            onClick={() => handleNavigation('#')} 
            className="btn btn-ghost"
            style={{ cursor: 'pointer' }}
          >
            Talk to Sales
          </button>
          <button 
            onClick={() => handleNavigation('#')} 
            className="btn btn-primary"
            style={{ cursor: 'pointer' }}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
}
