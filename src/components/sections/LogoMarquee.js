"use client";

import styles from "./LogoMarquee.module.css";

const logos = [
  "Microsoft",
  "Salesforce",
  "Amazon",
  "Shopify",
  "Stripe",
  "Zendesk",
  "HubSpot",
  "ServiceNow",
  "Twilio",
  "Genesys"
];

export default function LogoMarquee() {
  return (
    <section className="social-proof">
      <div className="container">
        <p className="social-label reveal-up">Trusted by innovative teams worldwide</p>
      </div>
      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {/* Mapping the logos twice for a seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className={styles.logo}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
