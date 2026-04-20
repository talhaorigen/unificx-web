'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 bg-foreground" />
        <div className="hero-orb hero-orb--blue" />
        <div className="hero-orb hero-orb--purple" />
        <div className="relative max-w-[1100px] mx-auto px-8 w-full text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-md mb-10">
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-[18px] text-primary-foreground/45 max-w-[520px] mx-auto leading-[1.75] font-medium">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>
      

      <section ref={ref} className="py-20 bg-background">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
              <h2 className="text-2xl font-extrabold text-foreground mb-8">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground text-[15px] outline-none focus:border-primary transition-colors" />
                  <input type="text" placeholder="Last name" className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground text-[15px] outline-none focus:border-primary transition-colors" />
                </div>
                <input type="email" placeholder="Work email" className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground text-[15px] outline-none focus:border-primary transition-colors" />
                <input type="text" placeholder="Company" className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground text-[15px] outline-none focus:border-primary transition-colors" />
                <textarea placeholder="How can we help?" rows={4} className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground text-[15px] outline-none focus:border-primary transition-colors resize-none" />
                <button type="submit" className="gradient-bg text-primary-foreground font-bold px-9 py-4 rounded-full text-[15px] hover:opacity-90 transition-all shadow-lg w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`reveal-hidden stagger-2 ${isVisible ? "reveal-visible" : ""}`}>
              <h2 className="text-2xl font-extrabold text-foreground mb-8">Other ways to reach us</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@unificx.com", href: "mailto:hello@unificx.com" },
                  { icon: Phone, label: "Sales", value: "+1 (888) 555-0123", href: "tel:+18885550123" },
                  { icon: MessageSquare, label: "Live Chat", value: "Available 24/7", href: "#" },
                  { icon: MapPin, label: "HQ", value: "San Francisco, CA", href: "#" },
                ].map((c, i) => (
                  <a key={i} href={c.href} className="flex items-center gap-4 p-5 rounded-xl border border-border/80 bg-background hover:border-border hover:shadow-sm transition-all group">
                    <div className="p-3 rounded-xl gradient-bg-subtle shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[12px] text-muted-foreground/60 font-semibold uppercase tracking-wider">{c.label}</p>
                      <p className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
