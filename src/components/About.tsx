import Image from "next/image";
import { ShieldCheck, Heart, Users } from "lucide-react";

const PROMISES = [
  {
    icon: ShieldCheck,
    title: "No Upsells",
    body: "We only recommend what your car actually needs. No pressure, no runaround.",
  },
  {
    icon: Heart,
    title: "Family Values",
    body: "We treat every customer the way we'd want our own family treated — with honesty and respect.",
  },
  {
    icon: Users,
    title: "Community First",
    body: "We're your neighbors. We've been serving the Portland community for over 5 years.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/mechanic working on engine.jpg"
                alt="K&H AutoShop — mechanic working on an engine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 sm:right-4 bg-navy text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold text-accent">5+</p>
              <p className="text-sm font-medium text-white/80">
                Years Serving Portland
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-6 lg:pt-0">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
              A Real Family Shop,{" "}
              <span className="text-accent">Built on Trust</span>
            </h2>
            <div className="space-y-4 text-navy/75 text-lg leading-relaxed mb-10">
              <p>
                K&amp;H AutoShop is a true family business. We are owned,
                operated, and built from the ground up by five brothers who grew
                up learning the trade from our father, a lifelong mechanic.
                After moving to Portland five years ago, we opened K&amp;H with
                a simple goal: give every customer the same honesty and care
                we&apos;d want for our own family&apos;s cars.
              </p>
              <p>
                With Mom and Dad still part of the team, K&amp;H isn&apos;t
                just a shop — it&apos;s a family working together to keep your
                vehicle safe and running right. No upsells, no runaround — just
                straightforward, quality auto repair from people who genuinely
                care.
              </p>
            </div>

            {/* Promise cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {PROMISES.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl p-4 shadow-sm border border-cream"
                >
                  <Icon className="text-accent mb-2" size={22} />
                  <p className="font-semibold text-navy text-sm mb-1">{title}</p>
                  <p className="text-navy/60 text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
