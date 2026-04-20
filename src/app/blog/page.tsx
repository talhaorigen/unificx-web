'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation, useTextParallax } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const posts = [
  { category: "AI & Automation", title: "How Voice AI Is Reshaping Customer Experience in 2026", excerpt: "The latest trends in conversational AI and what they mean for your contact center strategy.", date: "Apr 10, 2026", readTime: "6 min read" },
  { category: "Product Updates", title: "Introducing Multi-Agent Orchestration for Complex Workflows", excerpt: "Deploy multiple AI agents that collaborate to resolve customer issues end-to-end.", date: "Apr 5, 2026", readTime: "4 min read" },
  { category: "Industry Insights", title: "The True Cost of Customer Wait Times — And How to Eliminate Them", excerpt: "New data reveals the revenue impact of hold times and how AI can reduce them to zero.", date: "Mar 28, 2026", readTime: "8 min read" },
  { category: "Best Practices", title: "5 Steps to Deploy AI Agents Without Disrupting Your Team", excerpt: "A practical guide to rolling out AI-powered support alongside your existing human agents.", date: "Mar 20, 2026", readTime: "5 min read" },
  { category: "Case Study", title: "How a Healthcare System Reduced Call Volume by 60%", excerpt: "Real results from a 200-clinic health network that deployed UnifiCX AI agents.", date: "Mar 15, 2026", readTime: "7 min read" },
  { category: "Technology", title: "Building AI That Sounds Human: Our Approach to Natural Conversation", excerpt: "Inside the engineering behind our voice AI — from speech synthesis to intent understanding.", date: "Mar 8, 2026", readTime: "10 min read" },
];

export default function Blog() {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxRef = useTextParallax();

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 bg-foreground" />
        <div className="hero-orb hero-orb--blue" />
        <div className="hero-orb hero-orb--purple" />
        <div className="relative max-w-[1100px] mx-auto px-8 w-full text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-md mb-10">
            <span className="text-[11px] font-bold text-primary-foreground/50 tracking-[0.2em] uppercase">Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em] text-primary-foreground mb-7 max-w-3xl mx-auto">
            Insights & <span className="gradient-text">Ideas</span>
          </h1>
          <p className="text-[18px] text-primary-foreground/45 max-w-[520px] mx-auto leading-[1.75] font-medium">
            The latest on AI, customer experience, and the future of business communication.
          </p>
        </div>
      </section>
      

      {/* Posts Grid */}
      <section ref={ref} className="py-20 bg-background">
        <div ref={parallaxRef} className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <a key={i} href="#" className={`group block reveal-scale stagger-${Math.min(i + 1, 8)} ${isVisible ? "reveal-visible" : ""}`}>
                <div className="rounded-2xl border border-border/80 bg-background p-8 hover-lift hover:border-border hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col">
                  <span className="text-[11px] font-bold text-primary tracking-[0.15em] uppercase mb-4">{post.category}</span>
                  <h3 className="text-[20px] font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-muted-foreground/60">{post.date} · {post.readTime}</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
