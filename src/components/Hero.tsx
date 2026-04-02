import Image from "next/image";
import { Phone } from "lucide-react";
import { SHOP, TRUST_BADGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/front of shop.jpg"
          alt="K&H AutoShop — front of the shop"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          K&amp;H AutoShop
        </h1>
        <p className="text-xl sm:text-2xl text-cream font-medium mb-4">
          {SHOP.tagline}
        </p>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Portland&apos;s trusted family-owned auto repair shop. Honest prices,
          quality work, and care you can count on — every time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href={SHOP.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors min-h-[56px]"
          >
            Book an Appointment
          </a>
          <a
            href={SHOP.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors min-h-[56px]"
          >
            <Phone size={20} />
            Call Us: {SHOP.phone}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge.label}
              className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm"
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
