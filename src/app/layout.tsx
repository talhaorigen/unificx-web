import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "UnifiCX - AI Communication Platform",
  description: "AI agents that actually own the call. The only platform where AI voice agents, intelligence, and telephony are built together.",
  authors: [{ name: "UnifiCX" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    title: "UnifiCX - AI Communication Platform",
    description: "AI agents that actually own the call. The only platform where AI voice agents, intelligence, and telephony are built together.",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/88b18ce9-f36b-4d41-bd1c-759272d7c459/id-preview-31db60a8--209bbc80-823a-4831-b4bf-18738ab27e7b.lovable.app-1776074091961.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "UnifiCX - AI Communication Platform",
    description: "AI agents that actually own the call. The only platform where AI voice agents, intelligence, and telephony are built together.",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/88b18ce9-f36b-4d41-bd1c-759272d7c459/id-preview-31db60a8--209bbc80-823a-4831-b4bf-18738ab27e7b.lovable.app-1776074091961.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} bg-background text-foreground font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
