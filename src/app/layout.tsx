import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import BrandLogo from "@/components/ui/BrandLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Reflexsat IPTV | #1 Premium 4K IPTV Subscription Service 2026",
  description: "Experience high-performance streaming with Reflexsat IPTV. Stream over 50,000 live international channels, 200,000 movies and series on demand, and major pay-per-view sports events with ultra-stable anti-freeze server technology and instant multi-device setup.",
  metadataBase: new URL("https://www.reflexsat-iptv4k.shop"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reflexsat IPTV | #1 Premium 4K IPTV Subscription Service 2026",
    description: "Experience high-performance streaming with Reflexsat IPTV. Stream over 50,000 live international channels, 200,000 movies on demand, and major PPV sports events with ultra-stable anti-freeze server technology.",
    url: "https://www.reflexsat-iptv4k.shop",
    siteName: "Reflexsat IPTV",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/reflexsat-iptv-buying-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Reflexsat IPTV - Premium 4K Live TV, Sports & Cinema Streaming",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reflexsat IPTV | #1 Premium 4K IPTV Subscription Service 2026",
    description: "Experience high-performance streaming with Reflexsat IPTV. Stream over 50,000 live international channels, 200,000 movies on demand, and major PPV sports events.",
    images: ["/reflexsat-iptv-buying-guide.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${geist.variable}`}>
      <head>
      </head>
      <body className="bg-white text-slate-900 font-body-lg min-h-screen flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
        {/* Navbar */}
        <Navbar />

        <div className="flex-grow pt-20 flex flex-col">{children}</div>

        {/* Modern Slate Footer */}
        <footer className="w-full mt-auto border-t border-slate-800 bg-slate-950 text-slate-400">
          <div className="grid max-w-[1400px] grid-cols-2 gap-x-6 gap-y-12 px-6 py-16 sm:grid-cols-4 sm:gap-x-8 sm:px-10 xl:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] xl:gap-10 xl:px-12 mx-auto">
            <div className="col-span-2 sm:col-span-4 xl:col-span-1 min-w-0 max-w-[320px] space-y-5">
              <Link href="/" className="inline-block bg-white p-3 rounded-2xl">
                <BrandLogo />
              </Link>
              <p className="text-sm leading-6 text-slate-400">
                © 2026 Reflexsat IPTV. Satellite-grade 4K IPTV streaming infrastructure. All rights reserved.
              </p>
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20have%20a%20question%20about%20Reflexsat%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="flex max-w-[280px] items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 transition-colors hover:bg-emerald-500/20 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm transition-transform group-hover:scale-105">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#25D366]">24/7 Fast support</span>
                  <span className="block whitespace-nowrap text-sm font-bold text-white">Chat on WhatsApp</span>
                </span>
              </a>
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Reflexsat servers online · 99.9% uptime
              </p>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                <span className="border-b-2 border-blue-500 pb-1">Navigation</span>
              </p>
              <ul className="space-y-2.5 text-sm">
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/">Home</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/pricing">Pricing</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/how-it-works">How It Works</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/channels">Channels</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/reseller">Reseller</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/blog">Blog</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                <span className="border-b-2 border-blue-500 pb-1">Support</span>
              </p>
              <ul className="space-y-2.5 text-sm">
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/contact">Contact Us</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/faq">FAQ</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/installation">Setup Guide</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/pricing">Get Started</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                <span className="border-b-2 border-blue-500 pb-1">Legal</span>
              </p>
              <ul className="space-y-2.5 text-sm">
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/refund-policy">Refund Policy</Link></li>
                <li><Link prefetch={false} className="hover:text-white transition-colors" href="/dmca">DMCA Notice</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                <span className="border-b-2 border-blue-500 pb-1">Payment</span>
              </p>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>PayPal</li>
                <li>Credit & Debit Card</li>
                <li>Bitcoin & Crypto</li>
                <li>USDT Transfer</li>
              </ul>
            </div>
            
            <div className="col-span-2 mt-4 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400 sm:col-span-4 md:flex-row md:items-center md:justify-between xl:col-span-5">
              <p>© 2026 Reflexsat IPTV (www.reflexsat-iptv4k.shop). All rights reserved.</p>
              <div className="flex flex-wrap gap-2">
                <Link className="rounded-full border border-slate-800 px-3.5 py-1.5 hover:border-slate-700 hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</Link>
                <Link className="rounded-full border border-slate-800 px-3.5 py-1.5 hover:border-slate-700 hover:text-white transition-colors" href="/refund-policy">Refund Policy</Link>
                <Link className="rounded-full border border-slate-800 px-3.5 py-1.5 hover:border-slate-700 hover:text-white transition-colors" href="/dmca">DMCA</Link>
              </div>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}
