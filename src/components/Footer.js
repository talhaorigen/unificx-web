"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();

  const handleNavigation = (href) => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/assets/images/logo-color.png"
              alt="UnifiCX"
              className="footer-logo"
              width={120}
              height={28}
              style={{ width: 'auto', height: 'auto' }}
            />
            <p>
              The most human AI voice agent.
              <br />
              Listen, understand, resolve.
            </p>
            <div className="footer-socials">
              <div onClick={() => handleNavigation('#')} aria-label="Twitter" style={{ cursor: 'pointer' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 3 7.8 11-7.8 10h2.4l6.4-8.2L18.4 24h5.6l-8.3-11.7L24 3h-2.4l-5.9 7.6L9.6 3H3Z" />
                </svg>
              </div>
              <div onClick={() => handleNavigation('#')} aria-label="LinkedIn" style={{ cursor: 'pointer' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div onClick={() => handleNavigation('#')} aria-label="YouTube" style={{ cursor: 'pointer' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 7.1C2.5 7.1 2.3 5.8 1.7 5.2 1 4.5 0.2 4.5 0 4.5 3 4.1 12 4.1 12 4.1s9 0 12 0.3c0.2 0 1 0 1.7 0.7 0.6 0.6 0.8 1.9 0.8 1.9S26.8 9.3 26.8 11v2c0 1.7-0.3 3.9-0.3 3.9s-0.2 1.3-0.8 1.9c-0.7 0.7-1.5 0.7-1.9 0.8-2.5 0.2-11.8 0.3-11.8 0.3s-9 0-12-0.3c-0.2 0-1 0-1.7-0.7-0.6-0.6-0.8-1.9-0.8-1.9S2.2 14.7 2.2 13v-2C2.2 9.3 2.5 7.1 2.5 7.1zM11.5 15.5l7-4-7-4v8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul className="footer-links">
              <li>
                <div 
                  onClick={() => handleNavigation('/ai-agents')}
                  style={{ cursor: 'pointer' }}
                >
                  AI Agents
                </div>
              </li>
              <li>
                <div 
                  onClick={() => handleNavigation('/ai-intelligence')}
                  style={{ cursor: 'pointer' }}
                >
                  AI Intelligence
                </div>
              </li>
              <li>
                <div 
                  onClick={() => handleNavigation('#')}
                  style={{ cursor: 'pointer' }}
                >
                  CX Platform
                </div>
              </li>
              <li>
                <div 
                  onClick={() => handleNavigation('#')}
                  style={{ cursor: 'pointer' }}
                >
                  Integrations
                </div>
              </li>
              <li>
                <div 
                  onClick={() => handleNavigation('#')}
                  style={{ cursor: 'pointer' }}
                >
                  Security
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul className="footer-links">
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>By Use Case</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Healthcare</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>E-Commerce</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Hospitality</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Telecom</div>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Blog</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Case Studies</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>API Docs</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Help Center</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>System Status</div>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>About Us</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Careers</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Partners</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Contact</div>
              </li>
              <li>
                <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Press</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2024 UnifiCX. All rights reserved.</div>
          <div className="footer-legal-links">
            <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Privacy Policy</div>
            <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Terms of Service</div>
            <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Cookie Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
