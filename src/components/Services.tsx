import {
  Droplets,
  CircleDot,
  Wrench,
  Settings2,
  Thermometer,
  ClipboardCheck,
  Phone,
} from "lucide-react";
import { SERVICES, SHOP } from "@/lib/constants";

const ICON_MAP = {
  Droplets,
  CircleDot,
  Wrench,
  Settings2,
  Thermometer,
  ClipboardCheck,
} as const;

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Auto Repair Services in Portland
          </h2>
          <p className="text-navy/60 text-lg">
            From routine maintenance to major repairs, we handle it all with the
            same care and honesty your family deserves.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
            return (
              <div
                key={service.title}
                className="group bg-cream-light hover:bg-navy rounded-2xl p-6 transition-colors duration-300 shadow-sm border border-cream"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon
                    className="text-accent"
                    size={24}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-navy group-hover:text-white text-lg mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy/65 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-navy rounded-2xl px-6 py-10">
          <p className="text-white text-xl font-semibold mb-2">
            Need something else? Give us a call!
          </p>
          <p className="text-white/65 mb-6">
            We work on most makes and models. If you don&apos;t see your service
            listed, just ask.
          </p>
          <a
            href={SHOP.phoneHref}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors min-h-[56px]"
          >
            <Phone size={20} />
            {SHOP.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
