"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

type FAQ = {
  id: number;
  category: string;
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    id: 1,
    category: "General",
    question: "What is Reflexsat IPTV?",
    answer: (
      <>
        Reflexsat IPTV is a high-performance streaming service providing over{" "}
        <Link href="/channels" className="text-blue-600 font-bold underline hover:text-blue-800">
          50,000 live international channels
        </Link>
        , 200,000 VOD movies, television series, and live sports in true 4K and Full HD resolution with{" "}
        <Link href="/how-it-works" className="text-blue-600 font-bold underline hover:text-blue-800">
          anti-freeze server technology
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    category: "General",
    question: "Can I test Reflexsat IPTV before purchasing a full plan?",
    answer: (
      <>
        Yes! We provide a free 24-hour trial so you can experience our stream quality, server speed, and channel selection firsthand. You can{" "}
        <a
          href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Reflexsat%20IPTV."
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-bold underline hover:text-blue-800"
        >
          request a trial on WhatsApp
        </a>{" "}
        or browse our{" "}
        <a href="#pricing" className="text-blue-600 font-bold underline hover:text-blue-800">
          subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    category: "Technical",
    question: "Which devices and applications are supported?",
    answer: (
      <>
        Reflexsat IPTV is universally compatible with Amazon Firestick, Smart TVs (Samsung Tizen, LG webOS, Android TV), Apple TV, iPhone, Android smartphones, Windows, Mac, and MAG boxes using apps like TiviMate, IPTV Smarters Pro, and IBO Player. Follow our{" "}
        <Link href="/installation" className="text-blue-600 font-bold underline hover:text-blue-800">
          step-by-step setup guides
        </Link>
        .
      </>
    ),
  },
  {
    id: 4,
    category: "Technical",
    question: "Can I use my subscription on multiple devices simultaneously?",
    answer: (
      <>
        Yes. In our{" "}
        <Link href="/pricing" className="text-blue-600 font-bold underline hover:text-blue-800">
          pricing selector
        </Link>
        , you can choose 1, 2, or 3 simultaneous connections so family members can stream their favorite channels on separate screens at the same time.
      </>
    ),
  },
  {
    id: 5,
    category: "General",
    question: "Can I watch live 4K sports and PPV events?",
    answer: (
      <>
        Absolutely. Reflexsat IPTV features dedicated 60 FPS sports feeds covering football (Champions League, Premier League, La Liga), NFL Sunday Ticket, NBA, UFC PPV, Formula 1, and global competitions. View our{" "}
        <Link href="/channels" className="text-blue-600 font-bold underline hover:text-blue-800">
          sports channels lineup
        </Link>
        .
      </>
    ),
  },
  {
    id: 6,
    category: "Billing",
    question: "What payment methods are supported?",
    answer: (
      <>
        We accept major Credit and Debit cards, PayPal, and Cryptocurrency (Bitcoin, USDT) with instant processing and zero recurring contract obligations across all{" "}
        <Link href="/pricing" className="text-blue-600 font-bold underline hover:text-blue-800">
          Reflexsat plans
        </Link>
        . Every purchase is backed by our transparent{" "}
        <Link href="/refund-policy" className="text-blue-600 font-bold underline hover:text-blue-800">
          refund policy
        </Link>
        .
      </>
    ),
  },
  {
    id: 7,
    category: "Technical",
    question: "How fast should my internet connection be?",
    answer: (
      <>
        For standard HD streaming, we recommend at least 15 Mbps. For uncompressed 4K UHD and live 60 FPS sports events, a reliable connection of 30 Mbps or higher is recommended. Check our{" "}
        <Link href="/installation" className="text-blue-600 font-bold underline hover:text-blue-800">
          setup recommendations
        </Link>{" "}
        for tips on optimizing your connection.
      </>
    ),
  },
  {
    id: 8,
    category: "Technical",
    question: "Do I need a VPN to use Reflexsat IPTV?",
    answer: (
      <>
        A VPN is not required because our streams operate through high-speed encrypted protocols. However, if your local ISP throttles streaming bandwidth during major sports games, a VPN can ensure smooth speeds. For help setting up, feel free to{" "}
        <Link href="/contact" className="text-blue-600 font-bold underline hover:text-blue-800">
          contact our 24/7 support desk
        </Link>
        .
      </>
    ),
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-4 border border-blue-200/80">
            Answers & Assistance
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Find immediate answers about Reflexsat IPTV plans, device activation, and streaming quality.
          </p>
        </div>

        {/* 2-Column FAQ Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className="rounded-2xl border border-slate-200 bg-white transition-all duration-200 overflow-hidden hover:border-slate-300 hover:shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-900 focus:outline-none"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <span className={`text-slate-400 shrink-0 ml-3 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-blue-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-200"
          >
            <span>Explore Full FAQ Knowledge Base</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
