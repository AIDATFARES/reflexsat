"use client";

import Link from "next/link";
import { Mail, MessageCircle, ArrowRight, Clock, Send, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex-grow pt-24 pb-24 px-6 md:px-12 max-w-[1300px] mx-auto w-full relative z-10 bg-white">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs tracking-wider uppercase mb-4">
          Direct Customer Care
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Get in Touch with <span className="text-blue-600">Reflexsat Support</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
          Need help <Link href="/pricing" className="text-blue-600 font-semibold hover:underline">choosing a package</Link>,{" "}
          <Link href="/installation" className="text-blue-600 font-semibold hover:underline">setting up your device</Link>, or exploring our{" "}
          <Link href="/channels" className="text-blue-600 font-semibold hover:underline">channel lineup</Link>?
          You can also consult our <Link href="/faq" className="text-blue-600 font-semibold hover:underline">FAQ knowledge base</Link> or reach out directly below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">Email Support</h3>
            <p className="text-xs text-slate-500 mb-4">For billing inquiries and general support.</p>
            <a
              className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors break-all"
              href="mailto:support@reflexsat-iptv4k.shop"
            >
              support@reflexsat-iptv4k.shop
            </a>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">WhatsApp Live Desk</h3>
            <p className="text-xs text-slate-500 mb-1">
              Fastest response time for instant setups &amp; free trials.
            </p>
            <p className="text-xs font-bold text-emerald-700 font-mono mb-3">
              +213 552 06 98 74
            </p>
            <a
              className="btn-whatsapp-clean inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
              href="https://wa.me/213552069874?text=Hello,%20I%20need%20support%20for%20Reflexsat%20IPTV."
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">Live Response Times</h3>
            <p className="text-xs text-slate-500">
              WhatsApp messages typically answered in <strong className="text-slate-900">under 5 minutes</strong> 24/7.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
              const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value || '';
              const msg = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
              const prompt = `Hello Reflexsat support,\n\nName: ${name}\nSubject: ${subject}\n\n${msg}`;
              window.open(`https://wa.me/213552069874?text=${encodeURIComponent(prompt)}`, "_blank");
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    required
                    className="border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                    id="name"
                    name="name"
                    placeholder="e.g. Alex Smith"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    required
                    className="border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                    id="email"
                    name="email"
                    placeholder="alex@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="subject">
                  Topic / Device
                </label>
                <input
                  required
                  className="border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Firestick 4K Setup or Free Trial Request"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="message">
                  How Can We Help?
                </label>
                <textarea
                  required
                  className="border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell us what device you use or any question you have..."
                  rows={5}
                />
              </div>

              <div className="mt-2 flex justify-end">
                <button
                  className="btn-primary-reflex px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2"
                  type="submit"
                >
                  <span>Send Message via WhatsApp Desk</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Quick Links Help Strip */}
      <div className="mt-16 text-center border-t border-slate-200 pt-8">
        <p className="text-xs sm:text-sm text-slate-500 font-medium mb-3">
          Looking for quick answers? Check our self-service resources:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-600">
          <Link href="/installation" className="text-blue-600 hover:underline">Device Setup Tutorials</Link>
          <span>·</span>
          <Link href="/pricing" className="text-blue-600 hover:underline">Subscription Packages</Link>
          <span>·</span>
          <Link href="/channels" className="text-blue-600 hover:underline">50,000+ Channels List</Link>
          <span>·</span>
          <Link href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</Link>
          <span>·</span>
          <Link href="/faq" className="text-blue-600 hover:underline">Full FAQ</Link>
        </div>
      </div>
    </main>
  );
}
