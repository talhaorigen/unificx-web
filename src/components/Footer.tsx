import { UnifiLogo } from "@/components/UnifiLogo";

export default function Footer() {
  return (
    <footer className="bg-foreground py-16 sm:py-20 lg:py-24">
      <div className="max-w-[980px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-primary-foreground/80 font-bold text-[13px] tracking-wide mb-5">Platform</h3>
            {["AI Voice Agents", "AI Chat Agents", "Cloud PBX", "Smart Numbers", "Analytics"].map((item) => (
              <a key={item} href="#" className="block text-primary-foreground/40 hover:text-primary-foreground/70 text-[13px] py-1.5 transition-colors">{item}</a>
            ))}
          </div>
          <div>
            <h3 className="text-primary-foreground/80 font-bold text-[13px] tracking-wide mb-5">Solutions</h3>
            {["Healthcare", "Banking", "E-commerce", "Retail", "Support"].map((item) => (
              <a key={item} href="#" className="block text-primary-foreground/40 hover:text-primary-foreground/70 text-[13px] py-1.5 transition-colors">{item}</a>
            ))}
          </div>
          <div>
            <h3 className="text-primary-foreground/80 font-bold text-[13px] tracking-wide mb-5">Resources</h3>
            {["Blog", "Documentation", "Case Studies", "Webinars"].map((item) => (
              <a key={item} href="#" className="block text-primary-foreground/40 hover:text-primary-foreground/70 text-[13px] py-1.5 transition-colors">{item}</a>
            ))}
          </div>
          <div>
            <h3 className="text-primary-foreground/80 font-bold text-[13px] tracking-wide mb-5">Company</h3>
            {["About", "Careers", "Contact", "Partners"].map((item) => (
              <a key={item} href="#" className="block text-primary-foreground/40 hover:text-primary-foreground/70 text-[13px] py-1.5 transition-colors">{item}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-primary-foreground/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <UnifiLogo className="h-7 w-auto text-white brightness-0 invert" />
          <p className="text-primary-foreground/30 text-[12px] tracking-wide">© 2026 UnifiCX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
