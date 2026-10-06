import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, Tv, Sparkles } from "lucide-react";
import TopFeatureBar from "./TopFeatureBar";

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50/50 pt-28 pb-20 sm:pt-36 sm:pb-24 border-b border-slate-200/70">
        {/* Subtle decorative background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 mb-8 shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">
              Official 2026 Edition · Anti-Freeze 10.0
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl leading-[1.12]">
            Reflexsat IPTV — <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
              Premium 4K IPTV Service
            </span>{" "}
            <br className="hidden sm:inline" />
            Built for Live TV, Sports & Cinema
          </h1>

          {/* Subtitle with SEO Interlinks */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Experience ultra-smooth television with <strong className="text-slate-900 font-semibold">Reflexsat IPTV</strong>.
            Over <Link href="/channels" className="text-blue-600 font-semibold hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 transition-colors">50,000 live international channels</Link>, 200,000 on-demand movies, and major pay-per-view sports events
            powered by <Link href="/how-it-works" className="text-blue-600 font-semibold hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 transition-colors">anti-freeze server infrastructure</Link> and <Link href="/installation" className="text-blue-600 font-semibold hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 transition-colors">instant 5-minute activation</Link>.
          </p>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Ultra HD & True 4K
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Anti-Freeze 10.0 Tech
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-xs">
              <Zap className="w-4 h-4 text-amber-500" />
              Instant 5-Min Setup
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
            <a
              href="#pricing"
              className="w-full sm:w-auto btn-primary-reflex py-4 px-8 text-sm font-extrabold uppercase tracking-wider text-center"
            >
              Choose Subscription Plan
            </a>
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Reflexsat%20IPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto btn-whatsapp-clean py-4 px-8 text-sm font-bold flex items-center justify-center gap-2.5 uppercase tracking-wider"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Get Free 24h Trial
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500 font-medium">
            No credit card required for trial · Works on <Link href="/installation" className="text-slate-700 underline hover:text-blue-600">Firestick, Smart TV, Android, Apple TV & PC</Link> · Explore our <Link href="/pricing" className="text-slate-700 underline hover:text-blue-600">Pricing</Link> & <Link href="/channels" className="text-slate-700 underline hover:text-blue-600">Channels</Link>
          </p>
        </div>
      </section>

      {/* Top Feature Bar section */}
      <section className="w-full bg-white relative z-20 py-8 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <TopFeatureBar />
        </div>
      </section>
    </>
  );
}
