import Link from "next/link";
import { Mail, MessageSquare, ShieldCheck, Clock } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="bg-slate-50/70 px-5 py-16 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full flex-1 min-w-0 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>24/7 Live Assistance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Have Questions or Need Help Getting Set Up?
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            The <strong className="text-slate-900 font-semibold">Reflexsat IPTV</strong>{" "}
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              support team
            </Link>{" "}
            responds in under 5 minutes on WhatsApp. You can also follow our{" "}
            <Link href="/installation" className="text-blue-600 font-semibold hover:underline">
              device installation tutorials
            </Link>{" "}
            or explore the{" "}
            <Link href="/faq" className="text-blue-600 font-semibold hover:underline">
              FAQ knowledge base
            </Link>{" "}
            for immediate answers.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 w-full sm:w-auto">
          <a
            className="btn-whatsapp-clean px-6 py-3.5 text-xs uppercase tracking-wider font-extrabold inline-flex items-center justify-center gap-2 text-center"
            href="https://wa.me/213552069874?text=Hello,%20I%20have%20a%20question%20about%20Reflexsat%20IPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <a
            className="btn-secondary-reflex px-6 py-3.5 text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 text-center"
            href="mailto:support@reflexsat-iptv4k.shop"
          >
            <Mail className="h-4 w-4" />
            support@reflexsat-iptv4k.shop
          </a>
        </div>
      </div>
    </section>
  );
}
