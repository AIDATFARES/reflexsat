import Image from "next/image";
import { Globe2, Headphones, RefreshCw, ShieldCheck, Star, Trophy, Tv, Users } from "lucide-react";

const reviewImages = [
  "1-2.webp",
  "2-2.webp",
  "3-3.webp",
  "4-2.webp",
  "1-2 (1).webp",
  "Image01-e1736575288611.jpg.webp",
  "Image02-e1736575280733.jpg.webp",
  "Image03-e1736575270823.jpg.webp",
  "Image07-e1736575248206.jpg.webp"
];

const metrics = [
  { icon: Star, value: "4.9 / 5.0", label: "Average rating", tone: "text-amber-500" },
  { icon: Users, value: "14K+", label: "Happy customers", tone: "text-blue-600" },
  { icon: Tv, value: "50K+", label: "Live channels", tone: "text-blue-600" },
  { icon: Globe2, value: "80+", label: "Countries supported", tone: "text-blue-600" },
  { icon: RefreshCw, value: "94%", label: "Renewal rate", tone: "text-emerald-500" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-slate-50/50 py-24 sm:py-28 border-b border-slate-200/80">
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Trophy className="h-3.5 w-3.5 text-amber-600" /> Top Rated IPTV Provider
          </span>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by Thousands of Cord-Cutters Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
            Read verified feedback from our global streaming community. Discover why Reflexsat IPTV is recommended for buffer-free live sports, 4K movies, and reliable international feeds.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-xs"
              >
                <Icon className={`mx-auto h-4 w-4 ${metric.tone}`} />
                <span className="mt-2 block text-base font-bold text-slate-900">{metric.value}</span>
                <small className="mt-0.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {metric.label}
                </small>
              </div>
            );
          })}
        </div>

        {/* Carousel of Real Reviews */}
        <div className="mt-12 flex overflow-hidden select-none py-4">
          <div
            className="flex min-w-full gap-6 px-4 animate-marquee"
            style={{ animationDuration: '40s' }}
          >
            {[...reviewImages, ...reviewImages, ...reviewImages].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[220px] sm:w-[280px] h-[340px] sm:h-[400px] relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:scale-102 transition-all duration-200"
              >
                <Image
                  src={`/reviews/${img}`}
                  alt={`Reflexsat IPTV verified customer review ${index + 1} - 5-star subscriber satisfaction`}
                  title={`Reflexsat IPTV Verified Review ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 220px, 280px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20a%20free%20trial%20for%20Reflexsat%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-reflex inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
          >
            <Trophy className="h-4 w-4" /> Request Free 24h Trial
          </a>
        </div>
      </div>
    </section>
  );
}
