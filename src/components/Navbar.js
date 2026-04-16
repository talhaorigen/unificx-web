"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector("section");
      if (firstSection) {
        const threshold = firstSection.offsetHeight - 80; // 80px buffer for navbar height
        if (window.scrollY > threshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Re-run on path changes to re-calculate for new first sections

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigation = (href) => {
    setIsMenuOpen(false);
    
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

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };


  return (
    <nav className={`nav ${isScrolled ? "is-scrolled" : ""} ${isMenuOpen ? "is-menu-open" : ""}`} id="nav">
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
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <Image
            src="/assets/images/logo-color.png"
            alt="UnifiCX"
            className="logo-c"
            width={120}
            height={28}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="nav-menu">
          {/* PLATFORM */}
          <div className="nav-drop">
            <span className="nav-link">
              Platform{" "}
              <span className="material-symbols-rounded nav-caret" style={{ fontSize: "16px" }}>expand_more</span>
            </span>
            <div className="mega">
              <div className="mega-grid mega-grid--3">
                <div className="mega-col">
                  <div className="mega-label">AI & Automation</div>
                  <div onClick={() => handleNavigation('/ai-agents')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">star</span></div>
                    <div><strong>AI Agents</strong><small>Voice AI that handles customer calls end-to-end</small></div>
                  </div>
                  <div onClick={() => handleNavigation('/ai-chat-agents')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">forum</span></div>
                    <div><strong>AI Chat Agents</strong><small>WhatsApp, SMS, web chat — automated</small></div>
                  </div>
                  <div onClick={() => handleNavigation('/ai-intelligence')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">psychology</span></div>
                    <div><strong>AI Intelligence</strong><small>All-call analytics, sentiment & insights</small></div>
                  </div>
                </div>
                <div className="mega-col">
                  <div className="mega-label">Platform</div>
                  <div onClick={() => handleNavigation('/cx-platform')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">dashboard</span></div>
                    <div><strong>CX Platform</strong><small>Cloud comms, phones, video in one system</small></div>
                  </div>
                  <div onClick={() => handleNavigation('/cloud-pbx')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">cloud</span></div>
                    <div><strong>Cloud PBX</strong><small>Enterprise-grade cloud phone system</small></div>
                  </div>
                  <div onClick={() => handleNavigation('/smart-numbers')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">dialpad</span></div>
                    <div><strong>Smart Numbers</strong><small>Virtual numbers in 100+ countries</small></div>
                  </div>
                  <div onClick={() => handleNavigation('/call-evaluation')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">analytics</span></div>
                    <div><strong>Call Evaluation</strong><small>AI-powered quality scoring for every call</small></div>
                  </div>
                  <div onClick={() => handleNavigation('/cx-analytics')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">star</span></div>
                    <div><strong>Analytics</strong><small>Real-time call center intelligence</small></div>
                  </div>
                </div>
                <div className="mega-col mega-col--feat">
                  <div className="mega-label">Featured</div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon mega-icon--accent"><span className="material-symbols-rounded">star</span></div>
                    <div><strong>Demo Library</strong><small>Watch AI handle real customer calls</small></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div className="nav-drop">
            <span className="nav-link">
              Solutions{" "}
              <span className="material-symbols-rounded nav-caret" style={{ fontSize: "16px" }}>expand_more</span>
            </span>
            <div className="mega">
              <div className="mega-grid mega-grid--2">
                <div className="mega-col">
                  <div className="mega-label">By Use Case</div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">event_available</span></div>
                    <div><strong>Booking & Reservations</strong><small>Automated scheduling and confirmations</small></div>
                  </div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">payments</span></div>
                    <div><strong>Billing & Payments</strong><small>Process refunds and manage subscriptions</small></div>
                  </div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">quiz</span></div>
                    <div><strong>FAQ Handling</strong><small>Instant answers to common questions</small></div>
                  </div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">build_circle</span></div>
                    <div><strong>Troubleshooting</strong><small>Guided diagnosis and resolution</small></div>
                  </div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">inventory_2</span></div>
                    <div><strong>Order Management</strong><small>Track, modify, and manage orders</small></div>
                  </div>
                </div>
                <div className="mega-col">
                  <div className="mega-label">By Industry</div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">local_hospital</span></div>
                    <div><strong>Healthcare</strong><small>Patient scheduling & follow-ups</small></div>
                  </div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">account_balance</span></div>
                    <div><strong>Banking</strong><small>Secure financial support & inquiries</small></div>
                  </div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">shopping_bag</span></div>
                    <div><strong>Retail & E-commerce</strong><small>Orders, returns, and product support</small></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div onClick={() => handleNavigation('#pricing')} className="nav-link" style={{ cursor: 'pointer' }}>Pricing</div>

          {/* RESOURCES */}
          <div className="nav-drop">
            <span className="nav-link">
              Resources{" "}
              <span className="material-symbols-rounded nav-caret" style={{ fontSize: "16px" }}>expand_more</span>
            </span>
            <div className="mega">
              <div className="mega-grid mega-grid--2">
                <div className="mega-col">
                  <div className="mega-label">Learn</div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">article</span></div>
                    <div><strong>Blog</strong><small>Insights on AI and customer experience</small></div>
                  </div>
                </div>
                <div className="mega-col">
                  <div className="mega-label">Developers</div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">code</span></div>
                    <div><strong>API Docs</strong><small>Full API reference & SDKs</small></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div className="nav-drop">
            <span className="nav-link">
              Company{" "}
              <span className="material-symbols-rounded nav-caret" style={{ fontSize: "16px" }}>expand_more</span>
            </span>
            <div className="mega">
              <div className="mega-grid mega-grid--2">
                <div className="mega-col">
                  <div className="mega-label">About</div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">groups</span></div>
                    <div><strong>About Us</strong><small>Our mission, vision, and values</small></div>
                  </div>
                </div>
                <div className="mega-col">
                  <div className="mega-label">Connect</div>
                  <div onClick={() => handleNavigation('#')} className="mega-item" style={{ cursor: 'pointer' }}>
                    <div className="mega-icon"><span className="material-symbols-rounded">mail</span></div>
                    <div><strong>Contact</strong><small>Get in touch with our team</small></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-actions">
          <button onClick={() => handleNavigation('#')} className="btn btn-ghost font-bold">Talk to Sales</button>
          <button onClick={() => handleNavigation('#')} className="btn btn-primary">Start Free Trial</button>
        </div>

        {/* MOBILE MENU TOGGLE (Using original class and structure) */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay is-active"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            onClick={() => setIsMenuOpen(false)}
          >
            <ul className="mobile-nav-list" onClick={(e) => e.stopPropagation()}>
              <li>
                <div 
                  className="mobile-nav-link" 
                  onClick={() => toggleSubmenu('platform')}
                  style={{ cursor: 'pointer' }}
                >
                  Platform <span className="material-symbols-rounded">expand_more</span>
                </div>
                <AnimatePresence>
                  {openSubmenu === 'platform' && (
                    <motion.div 
                      className="mobile-sub-menu is-open"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div onClick={() => handleNavigation('/cx-platform')} className="mobile-sub-link">CX Platform</div>
                      <div onClick={() => handleNavigation('/ai-agents')} className="mobile-sub-link">AI Voice Agents</div>
                      <div onClick={() => handleNavigation('/ai-chat-agents')} className="mobile-sub-link">AI Chat Agents</div>
                      <div onClick={() => handleNavigation('/ai-intelligence')} className="mobile-sub-link">AI Intelligence</div>
                      <div onClick={() => handleNavigation('/cloud-pbx')} className="mobile-sub-link">Cloud PBX</div>
                      <div onClick={() => handleNavigation('/smart-numbers')} className="mobile-sub-link">Smart Numbers</div>
                      <div onClick={() => handleNavigation('/call-evaluation')} className="mobile-sub-link">Call Evaluation</div>
                      <div onClick={() => handleNavigation('/cx-analytics')} className="mobile-sub-link">Analytics</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <div 
                  className="mobile-nav-link" 
                  onClick={() => toggleSubmenu('solutions')}
                  style={{ cursor: 'pointer' }}
                >
                  Solutions <span className="material-symbols-rounded">expand_more</span>
                </div>
                <AnimatePresence>
                  {openSubmenu === 'solutions' && (
                    <motion.div 
                      className="mobile-sub-menu is-open"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div onClick={() => handleNavigation('#')} className="mobile-sub-link">Healthcare</div>
                      <div onClick={() => handleNavigation('#')} className="mobile-sub-link">Retail & E-commerce</div>
                      <div onClick={() => handleNavigation('#')} className="mobile-sub-link">Booking & Reservations</div>
                      <div onClick={() => handleNavigation('#')} className="mobile-sub-link">Customer Operations</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li><div onClick={() => handleNavigation('#pricing')} className="mobile-nav-link" style={{ cursor: 'pointer' }}>Pricing</div></li>
              <li><div onClick={() => handleNavigation('#')} className="mobile-nav-link" style={{ cursor: 'pointer' }}>Resources</div></li>
              <li>
                <div 
                  onClick={() => handleNavigation('#')} 
                  className="mobile-nav-link" 
                  style={{ borderBottom: 'none', color: 'var(--blue)', cursor: 'pointer' }}
                >
                  Talk to Sales
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
