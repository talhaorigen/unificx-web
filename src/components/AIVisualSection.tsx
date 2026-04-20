'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";

const demos = [
  { title: "Hotel Reservation", image: "/assets/demo-hotel.jpg" },
  { title: "Appointment Booking", image: "/assets/demo-appointment.jpg" },
  { title: "Order Status Check", image: "/assets/demo-order.jpg" },
  { title: "Billing Inquiry", image: "/assets/demo-billing.jpg" },
];

function WaveformIcon() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-primary">
      <rect x="2" y="6" width="3" height="8" rx="1.5" fill="currentColor" opacity="0.5" />
      <rect x="7" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.7" />
      <rect x="12" y="1" width="3" height="18" rx="1.5" fill="currentColor" />
      <rect x="17" y="4" width="3" height="12" rx="1.5" fill="currentColor" opacity="0.7" />
      <rect x="22" y="6" width="3" height="8" rx="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export default function AIVisualSection() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-20 sm:py-36 lg:py-48 bg-background overflow-hidden">
      <div ref={parallaxRef} className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-foreground leading-[1.08] tracking-[-0.03em] mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            Your AI agent, in action.
          </h2>
          <p data-speed="0.04" className={`text-[17px] text-muted-foreground/70 max-w-[540px] mx-auto leading-[1.8] reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
            Don't take our word for it — listen for yourself. Real AI conversations. No scripts. No cherry-picking. This is what your callers will experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {demos.map((demo, i) => (
            <div
              key={i}
              className={`group rounded-2xl overflow-hidden cursor-pointer reveal-scale stagger-${i + 3} ${isVisible ? "reveal-visible" : ""}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  data-gsap-parallax="15"
                  src={demo.image}
                  alt={demo.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full aspect-[4/3] object-cover will-change-transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom bar with title and waveform */}
              <div className="flex items-center justify-between px-5 py-4 bg-background border border-t-0 border-border/60 rounded-b-2xl">
                <h3 className="font-bold text-foreground text-[15px]">{demo.title}</h3>
                <WaveformIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
