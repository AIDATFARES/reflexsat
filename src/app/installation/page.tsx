import Link from "next/link";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle } from "lucide-react";

export const metadata = {
  title: "Reflexsat IPTV Setup & Installation Guide 2026 | All Devices",
  description: "Easy step-by-step instructions to set up Reflexsat IPTV on Amazon Firestick, Smart TVs (Samsung, LG), Android TV, Apple TV, MAG boxes, and Windows/Mac.",
  alternates: {
    canonical: "/installation",
  },
  openGraph: {
    title: "Reflexsat IPTV Setup & Installation Guide 2026 | All Devices",
    description: "Easy step-by-step instructions to set up Reflexsat IPTV on Amazon Firestick, Smart TVs, Android TV, Apple TV, and MAG boxes.",
    url: "https://www.reflexsat-iptv4k.shop/installation",
    siteName: "Reflexsat IPTV",
    type: "article",
    images: [
      {
        url: "/reflexsat-firestick-iptv-setup.jpg",
        width: 1200,
        height: 675,
        alt: "Reflexsat IPTV Multi-Device Setup and Installation Guide",
      },
    ],
  },
};

export default function Installation() {
  return (
    <main className="mx-auto w-full max-w-[1400px] flex-grow px-5 pb-20 pt-12 sm:px-8 md:px-12 text-format-technical bg-white">
      <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
          Quick Setup Tutorial
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Reflexsat IPTV <span className="text-blue-600">Installation Guide</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
          Comprehensive step-by-step instructions to configure Reflexsat IPTV on all your streaming hardware.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-500">
          Works seamlessly on Smart TVs, Firestick, Android, iOS, Windows, and MAG. Need a plan first? View our{" "}
          <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/pricing">Reflexsat IPTV Pricing</Link>, check our{" "}
          <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/channels">Channel List</Link>, or discover{" "}
          <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/how-it-works">How Streaming Works</Link>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-semibold text-slate-700">
          <span className="inline-flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
            <Monitor className="h-4 w-4 text-blue-600" /> All Major Devices Supported
          </span>
          <span className="inline-flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
            <Clock3 className="h-4 w-4 text-blue-600" /> Under 5 Minutes Setup
          </span>
          <span className="inline-flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
            <Headphones className="h-4 w-4 text-blue-600" /> 24/7 WhatsApp VIP Support
          </span>
        </div>
      </header>

      {/* Quick Start 3-Card Overview */}
      <section className="mb-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-7 flex flex-col gap-3 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <span className="inline-block w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold text-center leading-6">1</span>
              <h3 className="text-slate-900 font-bold text-base">1. Download Player App</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Install a trusted IPTV player application (such as TiviMate, IPTV Smarters Pro, or IBO Player) from your device&apos;s app store. Read our guide to the{" "}
                <Link href="/blog/best-iptv-players" className="text-blue-600 font-semibold hover:underline">
                  best IPTV players in 2026
                </Link>
                .
              </p>
            </div>

            <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-7 flex flex-col gap-3 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Link2 className="w-5 h-5" />
              </div>
              <span className="inline-block w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold text-center leading-6">2</span>
              <h3 className="text-slate-900 font-bold text-base">2. Input Credentials</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Enter the M3U playlist URL or Xtream Codes API login (Server URL, username & password) sent after ordering your{" "}
                <Link href="/pricing" className="text-blue-600 font-semibold hover:underline">
                  Reflexsat plan
                </Link>
                .
              </p>
            </div>

            <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-7 flex flex-col gap-3 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <PlayCircle className="w-5 h-5" />
              </div>
              <span className="inline-block w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold text-center leading-6">3</span>
              <h3 className="text-slate-900 font-bold text-base">3. Start Streaming</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Channels, electronic program guide (EPG), and the full{" "}
                <Link href="/channels" className="text-blue-600 font-semibold hover:underline">
                  50,000+ live channel catalog
                </Link>{" "}
                and 200,000+ VODs will load automatically in true 4K resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Tabs & Detailed Instructions Component */}
      <DeviceSetupGuide />

      {/* Support CTA Box */}
      <section className="mx-auto max-w-2xl text-center mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Need Help With Installation?</h2>
        <p className="mt-2 text-sm text-slate-600">
          Our technical support team is online 24/7 on WhatsApp to assist with every device configuration step. You can also consult our{" "}
          <Link href="/faq" className="text-blue-600 font-semibold hover:underline">
            FAQ knowledge base
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
            contact us via email
          </Link>
          .
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            className="btn-whatsapp-clean px-7 py-3 text-xs font-bold uppercase tracking-wider"
            href="https://wa.me/213552069874?text=Hello,%20I%20need%20help%20setting%20up%20Reflexsat%20IPTV%20on%20my%20device."
            target="_blank"
            rel="noreferrer"
          >
            Ask On WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
