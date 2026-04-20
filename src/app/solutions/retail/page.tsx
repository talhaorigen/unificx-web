'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { ShoppingCart, Package, RefreshCw, Star, TrendingUp, Headphones } from "lucide-react";

export default function Retail() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Industry · Retail & E-Commerce"
        title={<>Customer Support<br /><span className="gradient-text">That Sells</span></>}
        description="AI agents that handle orders, returns, product questions, and upsell opportunities across every channel."
        stat1={{ value: "3x", label: "CSAT Improvement" }}
        stat2={{ value: "50%", label: "Cost Reduction" }}
      />
      <ProductFeatureGrid
        label="Retail Solutions"
        title={<>From Browse to<br />Buy to Return</>}
        subtitle="AI support across the entire customer lifecycle — pre-purchase, post-purchase, and retention."
        features={[
          { icon: ShoppingCart, title: "Product Support", desc: "Answer sizing, compatibility, and feature questions with product-trained AI." },
          { icon: Package, title: "Order Tracking", desc: "Real-time shipment updates and delivery notifications across all carriers." },
          { icon: RefreshCw, title: "Returns & Exchanges", desc: "Automate the entire return process from initiation to refund confirmation." },
          { icon: Star, title: "Review Management", desc: "Proactive post-purchase follow-ups that drive reviews and loyalty." },
          { icon: TrendingUp, title: "Smart Upselling", desc: "AI identifies upsell opportunities based on purchase history and intent." },
          { icon: Headphones, title: "Peak Season Ready", desc: "Scale support instantly during Black Friday, holidays, and flash sales." },
        ]}
      />
      <ProductSplitSection
        label="Integrations"
        title={<>Plug Into Your<br />Commerce Stack</>}
        description="Native integrations with Shopify, WooCommerce, Magento, BigCommerce, and custom platforms."
        bullets={[
          "Real-time product catalog and inventory sync",
          "Automated shipping label and return label generation",
          "Customer order history across all channels",
          "Dynamic discount and promotion application",
        ]}
        dark
        reversed
      />
      <ProductCTA
        title={<>Elevate Your<br />Retail Experience</>}
        subtitle="Turn support calls into sales opportunities and loyal customers."
      />
      <Footer />
    </div>
  );
}
