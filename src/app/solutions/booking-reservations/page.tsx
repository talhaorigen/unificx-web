'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { CalendarCheck, Clock, Bell, RefreshCw, Globe, Users } from "lucide-react";

export default function BookingReservations() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Solutions · Booking & Reservations"
        title={<>Automate Every<br /><span className="gradient-text">Booking Call</span></>}
        description="AI agents that schedule, confirm, reschedule, and cancel appointments — 24/7, without hold times."
        stat1={{ value: "85%", label: "Calls Automated" }}
        stat2={{ value: "3s", label: "Avg Response" }}
      />
      <ProductFeatureGrid
        label="Capabilities"
        title={<>Intelligent Scheduling,<br />Zero Friction</>}
        subtitle="From first contact to confirmation, every step is handled with natural conversation."
        features={[
          { icon: CalendarCheck, title: "Smart Scheduling", desc: "AI checks availability in real-time and books the perfect slot for every customer." },
          { icon: Clock, title: "Instant Rescheduling", desc: "Customers modify or move appointments with a single call — no transfers needed." },
          { icon: Bell, title: "Automated Reminders", desc: "Reduce no-shows by 60% with intelligent voice and SMS reminders before every appointment." },
          { icon: RefreshCw, title: "Waitlist Management", desc: "Automatically fill cancelled slots from your waitlist, maximizing utilization." },
          { icon: Globe, title: "Multi-Language", desc: "Accept bookings in 30+ languages, serving diverse customer bases effortlessly." },
          { icon: Users, title: "Multi-Location", desc: "Route bookings across locations, staff, and resources with zero confusion." },
        ]}
      />
      <ProductSplitSection
        label="How It Works"
        title={<>Calendar Sync<br />That Just Works</>}
        description="Connect your existing calendar systems — Google, Outlook, Calendly, or custom APIs — and let AI handle the rest."
        bullets={[
          "Real-time availability checks across all calendars",
          "Conflict detection and automatic alternative suggestions",
          "Buffer time management between appointments",
          "Custom booking rules per service type or staff member",
        ]}
        reversed
      />
      <ProductSplitSection
        label="Results"
        title={<>Turn Missed Calls Into<br />Booked Revenue</>}
        description="Every unanswered call is lost revenue. Our AI ensures 100% of booking requests are handled — even at 2 AM."
        bullets={[
          "24/7 availability without staffing costs",
          "60% reduction in no-show rates",
          "3x more appointments booked per day",
          "95% customer satisfaction scores",
        ]}
        dark
      />
      <ProductCTA
        title={<>Ready to Automate<br />Your Bookings?</>}
        subtitle="Start your free trial and see results in minutes, not months."
      />
      <Footer />
    </div>
  );
}
