"use client";
import { useRouter } from "next/navigation";
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 3 7.8 11L3 24h2.4l6.4-8.2L18.4 24H24l-8.3-11.7L24 3h-2.4l-5.9 7.6L9.6 3H3Z"/></svg>
              </div>
              <div onClick={() => handleNavigation('#')} aria-label="LinkedIn" style={{ cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul className="footer-links">
              <li><div onClick={() => handleNavigation('/cx-platform')} style={{ cursor: 'pointer' }}>CX Platform</div></li>
              <li><div onClick={() => handleNavigation('/ai-agents')} style={{ cursor: 'pointer' }}>AI Voice Agents</div></li>
              <li><div onClick={() => handleNavigation('/ai-chat-agents')} style={{ cursor: 'pointer' }}>AI Chat Agents</div></li>
              <li><div onClick={() => handleNavigation('/ai-intelligence')} style={{ cursor: 'pointer' }}>AI Intelligence</div></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Infrastructure</h4>
            <ul className="footer-links">
              <li><div onClick={() => handleNavigation('/cloud-pbx')} style={{ cursor: 'pointer' }}>Cloud PBX</div></li>
              <li><div onClick={() => handleNavigation('/smart-numbers')} style={{ cursor: 'pointer' }}>Smart Numbers</div></li>
              <li><div onClick={() => handleNavigation('/call-evaluation')} style={{ cursor: 'pointer' }}>Call Evaluation</div></li>
              <li><div onClick={() => handleNavigation('/cx-analytics')} style={{ cursor: 'pointer' }}>Analytics</div></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Blog</div></li>
              <li><div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>API Docs</div></li>
              <li><div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Help Center</div></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>About Us</div></li>
              <li><div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Careers</div></li>
              <li><div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Contact</div></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2024 UnifiCX. All rights reserved.</div>
          <div className="footer-legal-links">
            <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Privacy Policy</div>
            <div onClick={() => handleNavigation('#')} style={{ cursor: 'pointer' }}>Terms of Service</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
