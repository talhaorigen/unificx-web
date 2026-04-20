'use client';

import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";

interface Props {
  title: React.ReactNode;
  description: string;
  image?: string;
  badges?: { label: string; value: string }[];
}

export default function ProductShowcase({ title, description, image, badges }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <section ref={ref} className="py-32 lg:py-44 bg-background">
      <div ref={parallaxRef} className="max-w-[880px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-speed="0.08" className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.08] tracking-[-0.03em] mb-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
            {title}
          </h2>
          <p data-speed="0.04" className={`text-[16px] text-muted-foreground/70 max-w-[480px] mx-auto leading-[1.8] reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
            {description}
          </p>
        </div>

        <div className={`relative reveal-scale stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
          {image ? (
            <div className="relative p-3 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-border/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
              <img data-gsap-parallax="20" data-gsap-zoom src={image} alt="Dashboard" loading="lazy" className="w-full block rounded-xl will-change-transform" />
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-border/50 bg-section-alt">
              <div className="aspect-[16/9] p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(hsl(var(--border)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)/0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                  }} />
                  <div className="relative flex items-end gap-3 h-40">
                    {[60, 85, 45, 90, 70, 55, 80, 95, 65, 75].map((h, i) => (
                      <div key={i} className="w-6 rounded-t-md gradient-bg opacity-60" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {badges && (
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {badges.map((b, i) => (
                <div key={i} className="bg-background rounded-xl px-4 py-2.5 border border-border/50 shadow-sm">
                  <span className="text-[10px] text-muted-foreground/50 font-semibold block tracking-wide uppercase">{b.label}</span>
                  <span className="text-[15px] text-foreground font-extrabold">{b.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
