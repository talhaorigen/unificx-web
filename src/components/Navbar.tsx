'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { UnifiLogo } from "@/components/UnifiLogo";
import {
  Star, MessageSquare, Brain, LayoutGrid, Phone, Hash, BarChart3, Sparkles,
  CalendarCheck, CreditCard, HelpCircle, Wrench, Package, ShieldCheck, GitFork,
  HeartPulse, Landmark, ShoppingCart, GraduationCap, Radio,
  BookOpen, FileText, BookMarked, Code2, FileCode, LifeBuoy,
  Users, Briefcase, Handshake, Mail, Newspaper, Scale
} from "lucide-react";

interface MenuItem {
  icon: React.ElementType;
  title: string;
  desc: string;
  href?: string;
}

interface MenuColumn {
  heading: string;
  items: MenuItem[];
}

interface NavItem {
  label: string;
  columns?: MenuColumn[];
}

const navItems: NavItem[] = [
  {
    label: "Platform",
    columns: [
      {
        heading: "AI & AUTOMATION",
        items: [
          { icon: Star, title: "AI Agents", desc: "Voice AI that handles customer calls end-to-end", href: "/ai-agents" },
          { icon: MessageSquare, title: "AI Chat Agents", desc: "WhatsApp, SMS, web chat — automated", href: "/ai-chat-agents" },
          { icon: Brain, title: "AI Intelligence", desc: "All-call analytics, sentiment & insights", href: "/ai-intelligence" },
        ],
      },
      {
        heading: "PLATFORM",
        items: [
          { icon: LayoutGrid, title: "CX Platform", desc: "Cloud comms, phones, video in one system", href: "/cx-platform" },
          { icon: Phone, title: "Cloud PBX", desc: "Enterprise-grade cloud phone system", href: "/cloud-pbx" },
          { icon: Hash, title: "Smart Numbers", desc: "Virtual numbers in 100+ countries", href: "/smart-numbers" },
          { icon: BarChart3, title: "Call Evaluation", desc: "AI-powered quality scoring for every call", href: "/call-evaluation" },
          { icon: Sparkles, title: "Analytics", desc: "Real-time call center intelligence", href: "/cx-analytics" },
        ],
      },
      {
        heading: "FEATURED",
        items: [
          { icon: Star, title: "Demo Library", desc: "Watch AI handle real customer calls" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        heading: "BY USE CASE",
        items: [
          { icon: CalendarCheck, title: "Booking & Reservations", desc: "Automated scheduling and confirmations", href: "/solutions/booking-reservations" },
          { icon: CreditCard, title: "Billing & Payments", desc: "Process refunds and manage subscriptions", href: "/solutions/billing-payments" },
          { icon: HelpCircle, title: "FAQ Handling", desc: "Instant answers to common questions", href: "/solutions/faq-handling" },
          { icon: Wrench, title: "Troubleshooting", desc: "Guided diagnosis and resolution", href: "/solutions/troubleshooting" },
          { icon: Package, title: "Order Management", desc: "Track, modify, and manage orders", href: "/solutions/order-management" },
          { icon: ShieldCheck, title: "Customer Authentication", desc: "Secure identity verification", href: "/solutions/customer-authentication" },
          { icon: GitFork, title: "Smart Call Routing", desc: "Intent-based call distribution", href: "/solutions/smart-call-routing" },
        ],
      },
      {
        heading: "BY INDUSTRY",
        items: [
          { icon: HeartPulse, title: "Healthcare", desc: "Patient scheduling & follow-ups", href: "/solutions/healthcare" },
          { icon: Landmark, title: "Banking", desc: "Secure financial support & inquiries", href: "/solutions/banking" },
          { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Orders, returns, and product support", href: "/solutions/retail" },
          { icon: GraduationCap, title: "Education", desc: "Enrollment, admissions & student support", href: "/solutions/education" },
          { icon: Radio, title: "Telecom", desc: "Service activation & tech support", href: "/solutions/telecom" },
        ],
      },
    ],
  },
  { label: "Pricing", columns: undefined },
  {
    label: "Resources",
    columns: [
      {
        heading: "LEARN",
        items: [
          { icon: BookOpen, title: "Blog", desc: "Insights on AI and customer experience", href: "/blog" },
          { icon: FileText, title: "Case Studies", desc: "Real results from real customers", href: "/case-studies" },
          { icon: BookMarked, title: "Guides & Tutorials", desc: "Step-by-step walkthroughs", href: "/guides" },
        ],
      },
      {
        heading: "DEVELOPERS",
        items: [
          { icon: Code2, title: "API Docs", desc: "Full API reference & SDKs", href: "/api-docs" },
          { icon: FileCode, title: "Documentation", desc: "Platform guides and setup docs", href: "/documentation" },
          { icon: LifeBuoy, title: "Help Center", desc: "Support articles and FAQs", href: "/help-center" },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        heading: "ABOUT",
        items: [
          { icon: Users, title: "About Us", desc: "Our mission, vision, and values", href: "/about" },
          { icon: Briefcase, title: "Careers", desc: "Join the team building the future of CX", href: "/careers" },
          { icon: Handshake, title: "Partners", desc: "Join our partner ecosystem", href: "/partners" },
        ],
      },
      {
        heading: "CONNECT",
        items: [
          { icon: Mail, title: "Contact", desc: "Get in touch with our team", href: "/contact" },
          { icon: Newspaper, title: "Press", desc: "Newsroom and media resources", href: "/press" },
          { icon: Scale, title: "Legal", desc: "Privacy, terms & compliance", href: "/legal" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobileSection = useCallback((label: string) => {
    setMobileExpanded(prev => prev === label ? null : label);
  }, []);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      setActiveDropdown(null);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-2xl shadow-[0_1px_0_hsl(var(--border))]"
          : "bg-gradient-to-b from-foreground/30 to-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[72px] px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <UnifiLogo className={`h-8 w-auto transition-all duration-500 ${scrolled ? "text-[#006CD2]" : "text-white brightness-0 invert"}`} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.columns ? (
                <button
                  className={`px-5 py-2 text-[14px] font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    scrolled
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-primary-foreground/85 hover:text-primary-foreground"
                  } ${activeDropdown === item.label ? (scrolled ? "text-foreground" : "text-primary-foreground") : ""}`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={`/${item.label.toLowerCase()}`}
                  className={`px-5 py-2 text-[14px] font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    scrolled
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-primary-foreground/85 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#"
            className={`text-[14px] font-semibold px-6 py-2.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? "text-foreground border-border hover:bg-secondary"
                : "text-primary-foreground border-primary-foreground/25 hover:bg-primary-foreground/10 backdrop-blur-sm"
            }`}
          >
            Talk to Sales
          </Link>
          <Link
            href="#"
            className="gradient-bg text-primary-foreground text-[14px] font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {/* Mega Menu Dropdown — rendered outside nav items for full width */}
      {activeDropdown && navItems.find(n => n.label === activeDropdown)?.columns && (
        <div
          className="hidden lg:block absolute top-[72px] left-0 right-0"
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1100px] mx-auto px-8 pt-2 pb-4">
            <div
              className="bg-background rounded-2xl shadow-[0_25px_60px_-15px_hsl(var(--foreground)/0.15)] border border-border/70 p-8 mega-menu-enter"
            >
              {(() => {
                const item = navItems.find(n => n.label === activeDropdown);
                if (!item?.columns) return null;
                return (
                  <div className={`grid gap-10 ${
                    item.columns.length === 3 ? "grid-cols-[1fr_1.3fr_0.8fr]" : "grid-cols-2"
                  }`}>
                    {item.columns.map((col) => (
                      <div key={col.heading}>
                        <div className="text-[11px] font-bold text-muted-foreground/70 tracking-[0.18em] uppercase mb-5 pb-3 border-b border-border/60">
                          {col.heading}
                        </div>
                        <div className="space-y-0.5">
                          {col.items.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href || "#"}
                              className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-secondary/80 transition-all duration-200 group"
                            >
                              <div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary/[0.1] transition-colors shrink-0">
                                <child.icon className="w-[18px] h-[18px] text-primary/70 group-hover:text-primary transition-colors" />
                              </div>
                              <div>
                                <div className="font-semibold text-[14px] text-foreground group-hover:text-primary transition-colors leading-tight">
                                  {child.title}
                                </div>
                                <div className="text-[12px] text-muted-foreground/80 mt-0.5 leading-snug">
                                  {child.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        {/* Panel */}
        <div
          className={`relative bg-background border-t border-border max-h-[calc(100vh-72px)] overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.columns ? (
                  <>
                    <button
                      onClick={() => toggleMobileSection(item.label)}
                      className="w-full flex items-center justify-between py-3.5 text-foreground font-semibold text-[15px]"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileExpanded === item.label ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-4 pl-1 space-y-5">
                        {item.columns.map((col) => (
                          <div key={col.heading}>
                            <div className="text-[10px] font-bold text-muted-foreground/50 tracking-[0.18em] uppercase mb-3 pl-3">
                              {col.heading}
                            </div>
                            <div className="space-y-0.5">
                              {col.items.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href || "#"}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary/80 transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0">
                                    <child.icon className="w-4 h-4 text-primary/70" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-semibold text-[14px] text-foreground leading-tight">{child.title}</div>
                                    <div className="text-[11px] text-muted-foreground/60 mt-0.5 leading-snug truncate">{child.desc}</div>
                                  </div>
                                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/30 ml-auto shrink-0" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={`/${item.label.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3.5 text-foreground font-semibold text-[15px]"
                  >
                    {item.label}
                  </Link>
                )}
                <div className="h-px bg-border/40" />
              </div>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="px-6 pb-8 space-y-3">
            <Link href="#" className="block gradient-bg text-primary-foreground text-center font-bold px-5 py-3.5 rounded-full text-[15px]">
              Start Free Trial
            </Link>
            <Link href="#" className="block text-center font-semibold text-foreground border border-border px-5 py-3.5 rounded-full text-[15px]">
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

