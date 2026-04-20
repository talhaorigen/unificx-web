'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductShowcase from "@/components/product/ProductShowcase";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { Monitor, Activity, Tag, AlertTriangle, FileText, Code2 } from "lucide-react";

export default function CXAnalytics() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="CX PLATFORM / ANALYTICS"
        title={<>See everything. <span className="gradient-text">Miss nothing.</span></>}
        description="Real-time dashboards aggregating call volume, sentiment, agent performance, CSAT scores, and anomaly alerts from every module."
        heroImage="/assets/screenshot-analytics.png"
        stat1={{ value: "+14%", label: "Sentiment Improvement" }}
        stat2={{ value: "Real-time", label: "Data Processing" }}
      />

      <ProductSplitSection
        label="What it does"
        title={<>Data from every call. <span className="gradient-text">Insights in seconds.</span></>}
        description="CX Analytics aggregates data from Cloud PBX, AI Agents, Call Evaluation, and Smart Numbers into a single intelligence layer."
        bullets={[
          "Live call volume heatmaps and queue metrics",
          "Sentiment trend lines across all channels",
          "CSAT score tracking with NPS comparison",
          "Agent leaderboards with performance benchmarking",
          "Custom report builder with scheduled delivery",
        ]}
        image="/assets/screenshot-analytics.png"
        reversed
      />

      <ProductFeatureGrid
        title={<>Key <span className="gradient-text">capabilities.</span></>}
        features={[
          { icon: Monitor, title: "Live Wallboard", desc: "Real-time grid view of queues, agent status, and calls in progress." },
          { icon: Activity, title: "Sentiment Analytics", desc: "Track sentiment trends across all calls with drill-down to conversations." },
          { icon: Tag, title: "Topic Intelligence", desc: "AI auto-categorizes conversations. See distributions in real-time." },
          { icon: AlertTriangle, title: "Anomaly Alerts", desc: "Instant alerts when metrics deviate from baselines." },
          { icon: FileText, title: "Custom Reports", desc: "Custom dashboards with scheduled automated email delivery." },
          { icon: Code2, title: "API & Exports", desc: "Export via API or CSV. Integrate with Tableau, Looker, Power BI." },
        ]}
      />

      <ProductShowcase
        title={<>Your <span className="gradient-text">command center.</span></>}
        description="Call volume heatmaps, sentiment trends, CSAT gauges, agent leaderboards — all in one view."
        image="/assets/screenshot-dashboard.png"
        badges={[
          { label: "Calls Today", value: "12,847" },
          { label: "Avg CSAT", value: "4.7/5" },
          { label: "Resolution", value: "94%" },
        ]}
      />

      <ProductCTA
        title={<>Data-driven CX <span className="gradient-text">starts here.</span></>}
        subtitle="30-day free trial. Real-time intelligence from day one."
      />
      <Footer />
    </div>
  );
}
