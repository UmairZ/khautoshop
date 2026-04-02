import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SHOP } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Find Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Visit K&amp;H AutoShop
          </h2>
          <p className="text-navy/60 text-lg">
            Conveniently located on E Burnside Street in Portland. Stop by or
            give us a call anytime Sat–Thu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Info card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <MapPin className="text-accent" size={20} />
              </div>
              <div>
                <p className="font-semibold text-navy mb-0.5">Address</p>
                <p className="text-navy/65">6006 E Burnside St</p>
                <p className="text-navy/65">Portland, OR 97215</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Phone className="text-accent" size={20} />
              </div>
              <div>
                <p className="font-semibold text-navy mb-0.5">Phone</p>
                <a
                  href={SHOP.phoneHref}
                  className="text-accent font-semibold hover:underline text-lg"
                >
                  {SHOP.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="text-accent" size={20} />
              </div>
              <div>
                <p className="font-semibold text-navy mb-0.5">Email</p>
                <a
                  href={`mailto:${SHOP.email}`}
                  className="text-accent hover:underline"
                >
                  {SHOP.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Clock className="text-accent" size={20} />
              </div>
              <div>
                <p className="font-semibold text-navy mb-1">Hours</p>
                <div className="space-y-0.5">
                  <div className="flex gap-2 text-sm">
                    <span className="text-navy/65 w-40">Saturday – Thursday</span>
                    <span className="font-medium text-navy">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-navy/65 w-40">Friday</span>
                    <span className="font-medium text-accent">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book button */}
            <a
              href={SHOP.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-accent hover:bg-accent-light text-white font-bold text-lg px-6 py-4 rounded-xl transition-colors mt-2 min-h-[56px] flex items-center justify-center"
            >
              Book an Appointment
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-cream h-96 lg:h-full min-h-80">
            <iframe
              title="K&H AutoShop location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4282!2d-122.5915!3d45.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950bb5c5bbf4f1%3A0x3f68fd60ed52ce77!2s6006%20E%20Burnside%20St%2C%20Portland%2C%20OR%2097215!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Mobile sticky call bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy border-t border-white/10 px-4 py-3 flex gap-3">
        <a
          href={SHOP.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold py-3 rounded-xl text-sm"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href={SHOP.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center bg-accent hover:bg-accent-light text-white font-semibold py-3 rounded-xl text-sm transition-colors"
        >
          Book Online
        </a>
      </div>
    </section>
  );
}
