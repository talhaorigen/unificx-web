"use client";

import styles from "./TrustedSection.module.css";

const testimonials = [
  {
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "VP of CX, Global Hotels",
    quote: "UnifiCX cut our costs by 40% while actually improving customer satisfaction. The AI is indistinguishable from humans.",
    logo: "HOTELS.COM"
  },
  {
    initials: "DC",
    name: "David Chen",
    role: "Director of Support, TechFlow",
    quote: "The voice quality is game-changing. We reached 80% autonomous resolution in just two weeks of deployment.",
    logo: "TECHFLOW"
  },
  {
    initials: "ML",
    name: "Maria Lopez",
    role: "COO, FinanceHub",
    quote: "From 45-minute wait times to instant pickup. Our customers love the speed and accuracy of the UnifiCX voice agents.",
    logo: "FINANCEHUB"
  }
];

export default function TrustedSection() {
  return (
    <section className="testimonials light-section overflow-hidden" id="testimonials">
      <div className="container">
        <h2 className="section-title text-center mb-8 reveal-up">
          Trusted by the best CX leaders.
        </h2>
      </div>
      
      <div className={styles.trackContainer}>
        <div className={styles.track}>
          {/* Render the full list of cards TWICE for a seamless infinite marquee */}
          {[...testimonials, ...testimonials].map((test, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  {test.initials}
                </div>
                <div className={styles.meta}>
                  <strong>{test.name}</strong>
                  <span>{test.role}</span>
                </div>
              </div>
              <p className={styles.quote}>"{test.quote}"</p>
              <div className={styles.logo}>{test.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
