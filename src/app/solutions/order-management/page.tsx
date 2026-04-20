'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatureGrid from "@/components/product/ProductFeatureGrid";
import ProductSplitSection from "@/components/product/ProductSplitSection";
import ProductCTA from "@/components/product/ProductCTA";
import { Package, MapPin, RefreshCw, Truck, AlertCircle, BarChart3 } from "lucide-react";

export default function OrderManagement() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductHero
        badge="Solutions · Order Management"
        title={<>Track, Modify &<br /><span className="gradient-text">Manage Orders</span></>}
        description="AI handles order inquiries, modifications, cancellations, and returns — keeping customers informed at every step."
        stat1={{ value: "80%", label: "Automated" }}
        stat2={{ value: "24/7", label: "Availability" }}
      />
      <ProductFeatureGrid
        label="Features"
        title={<>Complete Order<br />Lifecycle Support</>}
        subtitle="From placement to delivery, AI manages the entire customer order experience."
        features={[
          { icon: Package, title: "Order Status", desc: "Real-time tracking updates delivered through natural conversation." },
          { icon: MapPin, title: "Delivery Tracking", desc: "Integrates with carriers for live shipment location and ETA." },
          { icon: RefreshCw, title: "Easy Modifications", desc: "Address changes, item swaps, and quantity updates handled instantly." },
          { icon: Truck, title: "Returns & Exchanges", desc: "Automates return label generation, refund processing, and exchanges." },
          { icon: AlertCircle, title: "Proactive Alerts", desc: "Notifies customers about delays, backorders, or delivery issues." },
          { icon: BarChart3, title: "Order Analytics", desc: "Insights into common order issues to improve fulfillment processes." },
        ]}
      />
      <ProductSplitSection
        label="Integration"
        title={<>Connected to<br />Your Stack</>}
        description="Works with Shopify, WooCommerce, Magento, and custom OMS platforms out of the box."
        bullets={[
          "Real-time inventory and order data sync",
          "Automatic carrier API integration (FedEx, UPS, DHL)",
          "Custom return and exchange policies enforced by AI",
          "Seamless handoff to human agents for complex cases",
        ]}
        dark
        reversed
      />
      <ProductCTA
        title={<>Automate Order<br />Support Today</>}
        subtitle="Handle 80% of order inquiries without human intervention."
      />
      <Footer />
    </div>
  );
}
