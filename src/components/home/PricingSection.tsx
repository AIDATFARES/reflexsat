"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Gift, Tv, Zap, ShieldCheck, Sparkles } from "lucide-react";

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

export default function PricingSection() {
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
    <section id="pricing" className="relative bg-slate-50/50 py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 mb-5">
            <Gift className="h-4 w-4 text-blue-600" />
            <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase">
              TRANSPARENT PRICING · NO HIDDEN FEES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Choose Your <span className="text-blue-600">Reflexsat IPTV</span> Plan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Select your subscription duration with zero contract commitments. Enjoy bigger savings on longer plans,
            with instant credentials delivery directly to your WhatsApp and email.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Browse our{" "}
            <Link href="/channels" className="font-semibold text-blue-600 hover:text-blue-800 underline">
              50,000+ live channels lineup
            </Link>
            , view our{" "}
            <Link href="/installation" className="font-semibold text-blue-600 hover:text-blue-800 underline">
              device installation guides
            </Link>
            , or explore our{" "}
            <Link href="/reseller" className="font-semibold text-blue-600 hover:text-blue-800 underline">
              IPTV reseller credits
            </Link>
            .
          </p>
        </header>

        {/* Device Selector Switcher */}
        <div className="mx-auto max-w-md w-full mb-14">
          <div className="flex flex-col items-center gap-3 w-full">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Simultaneous Devices:
            </span>
            <div className="grid grid-cols-3 gap-2 w-full p-1.5 bg-white rounded-full border border-slate-200 shadow-xs">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setDevices(num)}
                  type="button"
                  className={`py-2.5 px-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide transition-all text-center whitespace-nowrap ${
                    devices === num
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {num} {num === 1 ? "Device" : "Devices"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl bg-white p-7 sm:p-8 transition-all duration-200 ${
                  isPopular
                    ? "border-2 border-blue-600 shadow-xl md:-translate-y-2"
                    : "border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {!isPopular && (
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>

                {/* Price Display */}
                <div className="mt-4 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                      ${priceFor(plan)}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      / {plan.durationLabel.toLowerCase()}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">
                    Only ${monthlyPrice(plan)} / month
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 ${
                    isPopular
                      ? "btn-primary-reflex"
                      : "btn-secondary-reflex"
                  }`}
                >
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex-grow">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Plan Includes:
                  </p>
                  <ul className="space-y-3">
                    {commonFeatures.map((feat, idx) => {
                      const text = feat.text
                        .replace("{devices}", String(devices))
                        .replace("{s}", devices > 1 ? "s" : "");
                      return (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-blue-600 inline" />
            <span>Instant automated setup · Works on all IPTV players · 24/7 VIP WhatsApp Assistance ·</span>
            <span>Backed by our <Link href="/refund-policy" className="font-semibold text-blue-600 hover:underline">Refund Policy</Link> ·</span>
            <span>Have questions? Read our <Link href="/faq" className="font-semibold text-blue-600 hover:underline">FAQ</Link> or <Link href="/contact" className="font-semibold text-blue-600 hover:underline">Contact Support</Link></span>
          </p>
        </div>
      </div>
    </section>
  );
}
