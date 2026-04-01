"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Register ScrollTrigger if not already registered
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    // When the pathname changes, we want to:
    // 1. Scroll to top (handled via Navbar/Footer onClick too, but good to have here as backup)
    // 2. Refresh ScrollTrigger to recalculate positions
    // 3. Potentially kill old triggers if they persist (though Next.js usually cleans up components)
    
    // Some delay to allow the new page to render and layout to stabilize
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      // Also, if there are any global animations that need re-triggering, do it here.
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
