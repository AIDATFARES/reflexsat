"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Gift, Tv, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Zap, CreditCard, Bitcoin, Wallet } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  badge: string;
  price: number;
  durationLabel: string;
  months: number;
  popular?: boolean;
  buttonText: string;
};

const commonFeatures: PlanFeature[] = [
  { text: "Reflexsat IPTV subscription for {devices} Device{s}", included: true },
  { text: "Uncompressed Ultra HD & True 4K", included: true },
  { text: "50,000+ Premium Live Channels", included: true },
  { text: "200,000+ VODs (Updated Daily)", included: true },
  { text: "Major Sports & PPV Pass (60 FPS)", included: true },
  { text: "Electronic Program Guide (EPG)", included: true },
  { text: "Advanced Anti-Freeze 10.0 Technology", included: true },
  { text: "Compatible With All Major IPTV Apps", included: true },
  { text: "24/7 Dedicated WhatsApp VIP Support", included: true },
];

const plans: Plan[] = [
  {
    id: "3-months",
    name: "3 MONTHS",
    badge: "STARTER",
    price: 35,
    durationLabel: "3 Months",
    months: 3,
    buttonText: "SELECT 3 MONTHS",
  },
  {
    id: "12-months",
    name: "12 MONTHS",
    badge: "BEST VALUE",
    price: 69.99,
    durationLabel: "12 Months",
    months: 12,
    popular: true,
    buttonText: "GET 12 MONTHS",
  },
  {
    id: "6-months",
    name: "6 MONTHS",
    badge: "POPULAR",
    price: 49.99,
    durationLabel: "6 Months",
    months: 6,
    buttonText: "SELECT 6 MONTHS",
  },
];

const includedFeatures = [
  { icon: Tv, title: "+50,000 Channels", text: <>Explore live channels from around the world, including 4K sports, news and entertainment in our <Link href="/channels" className="text-blue-600 font-semibold hover:underline">channel lineup</Link>.</> },
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: <>Enjoy a massive, regularly updated catalog of movies and series on all <Link href="/installation" className="text-blue-600 font-semibold hover:underline">supported devices</Link>.</> },
  { icon: Zap, title: "Anti-Freeze 10.0", text: <>Optimized server technology ensures zero buffering even during peak global sporting events. Learn <Link href="/how-it-works" className="text-blue-600 font-semibold hover:underline">how it works</Link>.</> },
  { icon: Headphones, title: "24/7 VIP Support", text: <>The Reflexsat support team is ready to assist with setup and streaming questions on WhatsApp via our <Link href="/contact" className="text-blue-600 font-semibold hover:underline">support desk</Link>.</> },
  { icon: Sparkles, title: "Fast Activation", text: <>Your Reflexsat IPTV details are delivered instantly. Follow our <Link href="/installation" className="text-blue-600 font-semibold hover:underline">installation guides</Link> to get started in minutes.</> },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Accurate electronic program guides with catch-up functionality on supported players." },
];

const billingQuestions = [
  { question: "1. Which payment methods are accepted?", answer: <>We accept credit/debit cards, PayPal, and major cryptocurrencies (Bitcoin, USDT). <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/contact">Contact Reflexsat support</Link> if you need guidance before ordering.</> },
  { question: "2. Is my order protected?", answer: <>Yes. All transactions are securely processed with 256-bit SSL encryption and backed by our <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/refund-policy">refund policy</Link>. We never store payment card credentials.</> },
  { question: "3. Will my subscription auto-renew?", answer: <>No surprise rebills. Subscriptions are prepaid. You will receive an optional reminder before your plan expires so you can easily renew on your terms. Have questions? See our <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/faq">FAQ</Link>.</> },
  { question: "4. Can I upgrade my plan or add extra connections later?", answer: <>Yes. <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/contact">Contact our support team on WhatsApp</Link> at any time and we will upgrade your account seamlessly.</> },
];

const planComparison = [
  { feature: "LIVE CHANNELS", m3: "15,000+", m12: "50,000+", m6: "25,000+" },
  { feature: "VOD LIBRARY", m3: "60,000+", m12: "200,000+", m6: "100,000+" },
  { feature: "4K & 60 FPS STREAMING", m3: "Yes", m12: "Yes", m6: "Yes" },
  { feature: "SPORTS PPV EVENTS", m3: "Standard", m12: "VIP All Included", m6: "All Included" },
  { feature: "EPG TV GUIDE", m3: "Standard", m12: "Full 7-Day Catchup", m6: "Full 7-Day" },
  { feature: "ANTI-FREEZE TECH", m3: "Standard", m12: "VIP Advanced 10.0", m6: "Pro 10.0" },
  { feature: "MULTI-SCREEN READY", m3: "Optional Upgrade", m12: "Multi-Screen Ready", m6: "Multi-Screen Ready" },
  { feature: "24/7 SUPPORT", m3: "Standard", m12: "VIP WhatsApp Priority", m6: "Priority Support" },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);
  const monthlyPrice = (plan: Plan) => ((plan.price * devices) / plan.months).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to order the Reflexsat IPTV ${plan.name} plan with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 mb-5">
            <Gift className="h-4 w-4 text-blue-600" />
            <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase">
              TRANSPARENT PRICING · NO CONTRACTS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Reflexsat IPTV <span className="text-blue-600">Subscription Plans</span>
          </h1>
          <p className="mx-auto mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Choose your preferred subscription duration with uncompressed 4K streaming and zero long-term commitments.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-500">
            Need guidance? Check our <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/installation">setup guide</Link>, view our <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/channels">channel lineup</Link>, learn <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/how-it-works">how it works</Link>, or explore <Link className="font-semibold text-blue-600 hover:text-blue-800" href="/reseller">reseller panel credits</Link>.
          </p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-14 max-w-md w-full">
          <div className="flex flex-col items-center gap-2.5 w-full">
            <div className="flex items-center gap-2">
              <Tv className="h-4 w-4 text-blue-600" />
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Simultaneous Devices</p>
            </div>
            <div className="grid grid-cols-3 gap-2 w-full p-1.5 bg-slate-50 rounded-full border border-slate-200">
              {[1, 2, 3].map((count) => {
                const selected = devices === count;
                return (
                  <button
                    key={count}
                    onClick={() => setDevices(count)}
                    type="button"
                    className={`rounded-full py-2.5 px-2 text-xs sm:text-sm font-bold transition-all uppercase tracking-wide text-center whitespace-nowrap ${
                      selected
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white"
                    }`}
                  >
                    {count} Device{count > 1 ? "s" : ""}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl bg-white p-8 text-left transition-all duration-200 ${
                  isPopular
                    ? "border-2 border-blue-600 shadow-xl md:-translate-y-2"
                    : "border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Badge */}
                {isPopular ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                ) : (
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-extrabold text-slate-900 uppercase mt-2">{plan.name}</h3>

                <div className="mt-4 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                      ${priceFor(plan)}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      / {plan.durationLabel.toLowerCase()}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">
                    Just ${monthlyPrice(plan)} / month
                  </p>
                </div>

                <ul className="mb-8 flex-grow space-y-3 pt-4 border-t border-slate-100">
                  {commonFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                      <span>
                        {feature.text.replace('{devices}', devices.toString()).replace('{s}', devices > 1 ? 's' : '')}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 rounded-full ${
                    isPopular ? "btn-primary-reflex" : "btn-secondary-reflex"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </article>
            );
          })}
        </div>

        {/* Free Trial Banner */}
        <div className="mx-auto mt-16 max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-blue-50/60 p-6 sm:px-8 border border-blue-200/80 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="bg-blue-600 p-2.5 rounded-xl text-white">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Want to test Reflexsat IPTV first?
              </h3>
              <p className="text-xs text-slate-600">Request a free 24-hour trial with instant activation.</p>
            </div>
          </div>
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%2024H%20trial%20for%20Reflexsat%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp-clean px-6 py-3 text-xs uppercase tracking-wider font-extrabold whitespace-nowrap"
          >
            Request Trial
          </a>
        </div>

        {/* Plan Comparison Table */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-3 border border-blue-200/80">
              Detailed Plan Specs
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Compare <span className="text-blue-600">Reflexsat Plans</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[650px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-6 text-center">3 Months</th>
                    <th className="py-4 px-6 text-center bg-blue-50/70 text-blue-700 border-x border-blue-200/70">12 Months</th>
                    <th className="py-4 px-6 text-center">6 Months</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {planComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"}>
                      <td className="py-4 px-6 font-semibold text-slate-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-slate-600">{row.m3}</td>
                      <td className="py-4 px-6 text-center font-bold text-blue-700 bg-blue-50/40 border-x border-blue-200/50">{row.m12}</td>
                      <td className="py-4 px-6 text-center text-slate-600">{row.m6}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Included Features Grid */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Included With Every <span className="text-blue-600">Reflexsat Subscription</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Billing Questions FAQ */}
        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900">
            Billing & Subscription FAQ
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {billingQuestions.map((item) => (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs" key={item.question}>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
          <ShieldCheck className="h-4 w-4 text-blue-600" />
          <span>Secure checkout with 256-bit SSL encryption · 24/7 Reflexsat IPTV WhatsApp VIP Support</span>
        </div>
      </div>
    </section>
  );
}
