'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, MapPin } from "lucide-react";

const roles = [
  { dept: "Engineering", title: "Senior Backend Engineer", location: "Remote", type: "Full-time" },
  { dept: "Engineering", title: "ML/NLP Engineer", location: "San Francisco", type: "Full-time" },
  { dept: "Engineering", title: "Frontend Engineer (React)", location: "Remote", type: "Full-time" },
  { dept: "Product", title: "Senior Product Manager — AI Platform", location: "New York", type: "Full-time" },
  { dept: "Product", title: "Product Designer", location: "Remote", type: "Full-time" },
  { dept: "Sales", title: "Enterprise Account Executive", location: "London", type: "Full-time" },
  { dept: "Sales", title: "Solutions Engineer", location: "Remote", type: "Full-time" },
  { dept: "Marketing", title: "Content Marketing Manager", location: "Remote", type: "Full-time" },
];

const perks = [
  "Competitive salary + equity", "Remote-first culture", "Unlimited PTO",
  "Health, dental & vision", "Learning budget ($2,500/yr)", "Home office stipend",
];

export default function Careers() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Careers"
        title={<>Build the Future<br />of <span className="gradient-text">CX With Us</span></>}
        description="Join a team of passionate builders, researchers, and customer advocates shaping how businesses communicate."
        stat1={{ value: "200+", label: "Team Members" }}
        stat2={{ value: "30+", label: "Countries" }}
      />

      {/* Perks */}
      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className={`text-3xl font-extrabold text-foreground mb-10 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>Why UnifiCX</h2>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal-hidden stagger-1 ${isVisible ? "reveal-visible" : ""}`}>
            {perks.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-5 rounded-xl border border-border/80 bg-background">
                <div className="w-2 h-2 rounded-full gradient-bg shrink-0" />
                <span className="text-[15px] font-medium text-foreground">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section ref={ref2} className="py-20 bg-section-alt">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className={`text-3xl font-extrabold text-foreground mb-10 reveal-hidden ${isVisible2 ? "reveal-visible" : ""}`}>Open Positions</h2>
          <div className="space-y-3">
            {roles.map((role, i) => (
              <a key={i} href="#" className={`group flex items-center gap-6 p-5 rounded-2xl border border-border/80 bg-background hover-lift hover:border-border transition-all duration-500 reveal-hidden stagger-${Math.min(i + 1, 8)} ${isVisible2 ? "reveal-visible" : ""}`}>
                <span className="text-[11px] font-bold text-primary tracking-[0.12em] uppercase w-24 shrink-0">{role.dept}</span>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-foreground group-hover:text-primary transition-colors">{role.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-muted-foreground shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                  {role.location}
                </div>
                <span className="text-[12px] text-muted-foreground/50 shrink-0">{role.type}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
