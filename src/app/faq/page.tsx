"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, Clock3, CreditCard, Mail, MessageCircle, Send, Settings2, UserRound } from "lucide-react";

type Category = "About Reflexsat" | "Setup & streaming" | "Plans & access" | "Payments & support";

type FAQItem = {
  category: Category;
  question: string;
  answer: React.ReactNode;
};

const categories: { label: Category; icon: typeof CircleHelp }[] = [
  { label: "About Reflexsat", icon: CircleHelp },
  { label: "Setup & streaming", icon: Settings2 },
  { label: "Plans & access", icon: UserRound },
  { label: "Payments & support", icon: CreditCard },
];

const faqs: FAQItem[] = [
  {
    category: "About Reflexsat",
    question: "1. What is Reflexsat IPTV?",
    answer: (
      <>
        Reflexsat IPTV is a satellite-grade streaming service providing live TV channels, VOD movies, TV series, and sports channels in uncompressed 4K and Full HD quality. Explore our{" "}
        <Link href="/channels" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">live TV channels</Link> and{" "}
        <Link href="/pricing" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">subscription plans</Link>.
      </>
    ),
  },
  {
    category: "About Reflexsat",
    question: "2. Is Reflexsat IPTV compatible worldwide?",
    answer: (
      <>
        Yes. Reflexsat IPTV servers are distributed globally with load-balancing nodes, allowing seamless high-speed streaming anywhere in the world on any standard internet connection.
      </>
    ),
  },
  {
    category: "About Reflexsat",
    question: "3. What channels and content are included with Reflexsat IPTV?",
    answer: (
      <>
        Reflexsat IPTV features over 50,000 live channels covering sports, news, documentaries, and entertainment, along with 200,000+ regularly updated movies and series on demand. Check our <Link href="/channels" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">full channels catalog</Link>.
      </>
    ),
  },
  {
    category: "About Reflexsat",
    question: "4. Can I watch live sports and PPV events on Reflexsat IPTV?",
    answer: (
      <>
        Yes. Reflexsat IPTV includes extensive 60 FPS sports coverage for Champions League, Premier League, NFL, NBA, UFC PPV, Formula 1, and global tournaments. Explore our <Link href="/channels" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">sports channels</Link>.
      </>
    ),
  },
  {
    category: "About Reflexsat",
    question: "5. Which devices are compatible?",
    answer: (
      <>
        Reflexsat IPTV works with compatible player apps on Firestick, Smart TVs (Samsung Tizen, LG webOS, Android TV), Apple TV, smartphones, tablets, and Windows/Mac PCs. Follow our <Link href="/installation" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">installation guides</Link>.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "1. How do I install Reflexsat IPTV on my device?",
    answer: (
      <>
        Install a player such as TiviMate or IPTV Smarters Pro from your device&apos;s app store. Then enter the Xtream Codes API credentials or M3U URL sent to your WhatsApp and email. View our <Link href="/installation" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">step-by-step guides</Link>.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "2. Can I use Reflexsat IPTV on a Smart TV?",
    answer: (
      <>
        Yes. Reflexsat IPTV works smoothly on Samsung, LG, Sony, TCL, and Android TVs using players like IBO Player, Smart IPTV, or IPTV Smarters Pro. Follow our{" "}
        <Link href="/installation" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          Smart TV installation tutorial
        </Link>
        .
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "3. What internet speed do I need for 4K streaming?",
    answer: (
      <>
        We recommend a connection speed of 15 Mbps for HD channels and 30 Mbps or higher for native 4K UHD and live 60 FPS sports feeds. Ethernet or 5GHz Wi-Fi is best. Check our{" "}
        <Link href="/installation" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          setup recommendations
        </Link>
        .
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "4. How does anti-freeze technology prevent buffering?",
    answer: (
      <>
        Our Anti-Freeze 10.0 technology utilizes redundant cloud server clusters that automatically route your connection through optimal nodes, avoiding network congestion. Learn more about{" "}
        <Link href="/how-it-works" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          how our streaming servers work
        </Link>
        .
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "5. Do I need a VPN to stream Reflexsat IPTV?",
    answer: (
      <>
        A VPN is not mandatory. Our streams are encrypted and private. However, if your local ISP throttles streaming bandwidth during peak sports events, a VPN can ensure full speeds. For advice, reach out to our{" "}
        <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          support specialists
        </Link>
        .
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "1. Are there any hidden fees or recurring contracts?",
    answer: (
      <>
        Zero contracts and zero surprise charges. All plans are prepaid. View our{" "}
        <Link href="/pricing" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          pricing page
        </Link>{" "}
        for clear options and read our{" "}
        <Link href="/refund-policy" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          refund policy
        </Link>
        .
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "2. Can I stream on multiple screens simultaneously?",
    answer: (
      <>
        Yes! When selecting your plan on our <Link href="/pricing" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">pricing page</Link>, you can select 1, 2, or 3 device connections.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "3. What are M3U and Xtream Codes login parameters?",
    answer: (
      <>
        Your welcome email and WhatsApp message include both M3U playlist URLs and Xtream Codes credentials (Server URL, username, password). Follow our{" "}
        <Link href="/installation" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          setup instructions
        </Link>{" "}
        to input them into your favorite player.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "1. Does Reflexsat IPTV offer a free trial?",
    answer: (
      <>
        Yes, we offer a <a href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Reflexsat%20IPTV." target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">free 24-hour trial</a> so you can verify our quality before subscribing to a <Link href="/pricing" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">full plan</Link>.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "2. Which payment methods are accepted?",
    answer: (
      <>
        We accept Credit and Debit cards, PayPal, and Cryptocurrencies (Bitcoin, USDT). For custom payment inquiries, reach out to our <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">support team</Link>.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "3. How fast is activation after ordering?",
    answer: (
      <>
        Activation is instant and automated. Your account credentials are created and delivered to your WhatsApp and email within minutes of order completion. Follow our <Link href="/installation" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">quick start guides</Link> to start watching.
      </>
    ),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<Category | "All">("All");

  const filteredFaqs = selectedCat === "All" 
    ? faqs 
    : faqs.filter(f => f.category === selectedCat);

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello Reflexsat IPTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow px-4 sm:px-6 pb-20 pt-16 md:pt-20 bg-white text-slate-900">
      <div className="mx-auto max-w-[1140px]">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs tracking-wider uppercase mb-4">
            Help & Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
            Find answers to common questions about Reflexsat IPTV subscriptions, device installation, stream performance, and billing.
          </p>
        </header>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCat("All")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCat === "All"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Questions
          </button>
          {categories.map((c) => (
            <button
              key={c.label}
              onClick={() => setSelectedCat(c.label)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCat === c.label
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const contentId = `faq-item-${index}`;

            return (
              <div 
                key={index} 
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all"
              >
                <button
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-900 hover:bg-slate-50/50"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question.replace(/^\d+\.\s*/, '')}</span>
                  <span className={`text-slate-400 shrink-0 ml-3 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                {isOpen && (
                  <div 
                    id={contentId}
                    className="p-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Section */}
        <section className="mt-20 border-t border-slate-200 pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Still Have a Question?</h2>
            <p className="mt-2 text-sm text-slate-600">Our customer support specialists respond on WhatsApp in under 5 minutes.</p>
          </header>

          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <a className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center hover:bg-white hover:border-blue-300 transition-all" href="mailto:support@reflexsat-iptv4k.shop">
              <span className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3"><Mail className="h-5 w-5" /></span>
              <span className="font-bold text-sm text-slate-900">Email Us</span>
              <span className="text-xs text-blue-600 font-semibold mt-1 break-all">support@reflexsat-iptv4k.shop</span>
            </a>
            <a className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center hover:bg-white hover:border-emerald-300 transition-all" href="https://wa.me/213552069874?text=Hello%20Reflexsat%20IPTV%20support%2C%20I%20need%20help." rel="noreferrer" target="_blank">
              <span className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3"><MessageCircle className="h-5 w-5" /></span>
              <span className="font-bold text-sm text-slate-900">WhatsApp Desk</span>
              <span className="text-xs text-emerald-600 font-bold mt-1">Start Live Chat &rarr;</span>
            </a>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
              <span className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mb-3"><Clock3 className="h-5 w-5" /></span>
              <span className="font-bold text-sm text-slate-900">Live Hours</span>
              <span className="text-xs text-slate-500 mt-1">24 Hours / 7 Days Online</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
