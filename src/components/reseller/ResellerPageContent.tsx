"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Headphones,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";

type CreditPlan = {
  id: string;
  credits: number;
  price: number;
  popular?: boolean;
  bestValue?: boolean;
};

const creditPlans: CreditPlan[] = [
  {
    id: "100-credits",
    credits: 100,
    price: 399,
  },
  {
    id: "200-credits",
    credits: 200,
    price: 799,
    popular: true,
  },
  {
    id: "300-credits",
    credits: 300,
    price: 1199,
    bestValue: true,
  },
  {
    id: "400-credits",
    credits: 400,
    price: 1599,
  },
  {
    id: "500-credits",
    credits: 500,
    price: 1999,
  },
];

const planFeatures = [
  "1 Credit = 1 Month Subscription",
  "Free Daily Test Accounts",
  "Customize Channel Bouquets",
  "Pay As You Go - Credits Never Expire",
  "Create Sub-Resellers Under You",
  "Full Xtream Codes API & M3U Access",
  "24/7 Dedicated Reseller WhatsApp Support",
];

const advantages = [
  {
    icon: ShoppingCart,
    title: "COMPATIBLE WITH ALL DEVICES",
    description: (
      <>
        Your clients can stream on Smart TV, Firestick, Android, MAG, Apple TV, PC, and mobile apps with our{" "}
        <Link href="/installation" className="text-blue-600 font-semibold hover:underline">
          universal device setup guides
        </Link>
        .
      </>
    ),
  },
  {
    icon: Server,
    title: "HIGH-CAPACITY SERVERS",
    description: (
      <>
        Built on{" "}
        <Link href="/how-it-works" className="text-blue-600 font-semibold hover:underline">
          anti-freeze 10.0 architecture
        </Link>{" "}
        to ensure pristine stability during global sporting events and peak weekend traffic.
      </>
    ),
  },
  {
    icon: Headphones,
    title: "DIRECT RESELLER SUPPORT",
    description: (
      <>
        Our{" "}
        <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
          reseller support desk
        </Link>{" "}
        is available 7 days a week on WhatsApp to assist with line activations, renewals, and technical inquiries.
      </>
    ),
  },
  {
    icon: Zap,
    title: "INTUITIVE CONTROL PANEL",
    description:
      "Manage customer lines, edit bouquet packages, monitor active streams, and issue free test accounts with a few clicks.",
  },
];

const resellerFaqs = [
  {
    question: "Do panel credits expire?",
    answer:
      "No. Your Reflexsat reseller credits never expire. You can consume them at your own pace whenever you sell or renew a subscription.",
  },
  {
    question: "Can I create sub-resellers?",
    answer:
      "Yes. Our reseller management panel gives you complete freedom to add sub-resellers, allocate credits, and build your own distribution team.",
  },
  {
    question: "Can I generate free trial lines for my prospective clients?",
    answer:
      "Yes! You can generate daily free test accounts directly from your control panel so your prospects can verify stream quality before purchasing.",
  },
  {
    question: "How long does panel activation take after ordering?",
    answer:
      "Your reseller panel credentials and access link are set up and delivered directly via WhatsApp or email within 10 to 30 minutes.",
  },
];

export default function ResellerPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOrderPanel = (plan?: CreditPlan) => {
    const message = plan
      ? `Hello! I would like to order the Reflexsat IPTV Reseller Panel with ${plan.credits} Credits for $${plan.price}.`
      : `Hello! I am interested in becoming a Reflexsat IPTV Reseller and would like to request panel access.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFreeTrial = () => {
    const message = `Hello! I am interested in testing a Reflexsat IPTV Reseller Panel demo.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-format-marketing">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* HERO SECTION */}
        <header className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Official Reseller Opportunity
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Reflexsat IPTV <span className="text-blue-600">Reseller Program</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
            Launch your own profitable IPTV business backed by Reflexsat high-performance server infrastructure.
            Deliver over{" "}
            <Link href="/channels" className="text-blue-600 font-semibold hover:underline">
              50,000 live channels &amp; 200,000 VODs
            </Link>{" "}
            to clients across all{" "}
            <Link href="/installation" className="text-blue-600 font-semibold hover:underline">
              supported devices
            </Link>
            , powered by our{" "}
            <Link href="/how-it-works" className="text-blue-600 font-semibold hover:underline">
              anti-freeze server network
            </Link>
            . Looking for personal streaming? Explore our{" "}
            <Link href="/pricing" className="text-blue-600 font-semibold hover:underline">
              individual subscription plans
            </Link>
            .
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handleFreeTrial}
              className="btn-primary-reflex px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
            >
              Request Panel Demo
            </button>
          </div>
        </header>

        {/* RESELLER PLANS */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Credit Packages &amp; Pricing
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Transparent tier pricing with zero hidden activation fees.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
            {creditPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl bg-white p-6 transition-all duration-200 ${
                  plan.popular
                    ? "border-2 border-blue-600 shadow-lg md:-translate-y-2"
                    : plan.bestValue
                    ? "border-2 border-emerald-500 shadow-lg md:-translate-y-2"
                    : "border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                    Most Popular
                  </span>
                )}
                {plan.bestValue && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                    Best Value
                  </span>
                )}

                <div className="text-center pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Reseller Tier
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-slate-900">
                    {plan.credits} Credits
                  </h3>
                </div>

                <div className="my-5 rounded-2xl bg-slate-50 border border-slate-200/80 py-4 text-center">
                  <span className="text-3xl font-black text-slate-900">
                    ${plan.price}
                  </span>
                </div>

                <ul className="flex-grow space-y-2.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-600">
                  {planFeatures.slice(0, 5).map((feature) => (
                    <li className="flex items-start gap-2" key={feature}>
                      <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleOrderPanel(plan)}
                  className={`mt-6 w-full rounded-full py-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    plan.popular
                      ? "btn-primary-reflex"
                      : "btn-secondary-reflex"
                  }`}
                >
                  Order {plan.credits} Credits
                </button>
              </article>
            ))}
          </div>

          {/* Consumer Cross-Link Bar */}
          <div className="mt-12 text-center text-xs sm:text-sm text-slate-600 bg-slate-50/70 py-4 px-6 rounded-2xl border border-slate-200/80 max-w-2xl mx-auto">
            Looking for personal subscriptions instead of wholesale credits?{" "}
            <Link href="/pricing" className="font-bold text-blue-600 hover:underline">
              View Consumer Subscription Plans
            </Link>{" "}
            or browse our{" "}
            <Link href="/channels" className="font-bold text-blue-600 hover:underline">
              Full Channel Lineup
            </Link>
            .
          </div>
        </div>

        {/* ADVANTAGES OF IPTV RESELLER */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Partner With <span className="text-blue-600">Reflexsat IPTV</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wide text-slate-900">
                    {item.title}
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RESELLER FAQ */}
        <div className="mx-auto mt-28 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Reseller Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-bold text-slate-900 hover:bg-slate-50"
                  >
                    <span className="text-sm sm:text-base font-bold">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-slate-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 py-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => handleOrderPanel()}
              className="btn-whatsapp-clean px-10 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
            >
              Chat With Reseller Team on WhatsApp
            </button>
          </div>
        </div>

        {/* TRUST BADGE */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
          <ShieldCheck className="h-4 w-4 text-blue-600" />
          <span>Official Reflexsat IPTV Xtream Codes Reseller Panel · 99.9% Uptime Guarantee</span>
        </div>
      </div>
    </section>
  );
}
