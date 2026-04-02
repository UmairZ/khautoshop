export const SHOP = {
  name: "K&H AutoShop",
  tagline: "Honest Auto Repair, Straight from the Family.",
  phone: "(971) 300-8228",
  phoneHref: "tel:9713008228",
  email: "khautoshop@gmail.com",
  address: "6006 E Burnside St, Portland, OR 97215",
  addressLine1: "6006 E Burnside St",
  addressLine2: "Portland, OR 97215",
  hours: "Saturday–Thursday: 8:00 AM – 5:00 PM",
  hoursClosed: "Friday: Closed",
  bookingUrl: process.env.NEXT_PUBLIC_AUTOLEAP_URL ?? "https://myalp.io/weby3b",
  googleBusinessUrl: "https://share.google/ZDjcFNXwv9EbxxYrC",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.123456789!2d-122.5965!3d45.5245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b3f9b4e4d1b%3A0x0!2s6006+E+Burnside+St%2C+Portland%2C+OR+97215!5e0!3m2!1sen!2sus!4v1700000000000",
} as const;

export const SERVICES = [
  {
    title: "Oil Changes & Tune-Ups",
    description:
      "Keep your engine running smoothly with regular oil changes and comprehensive tune-ups tailored to your vehicle's needs.",
    icon: "Droplets",
  },
  {
    title: "Brake & Suspension",
    description:
      "From brake pads to rotors and shocks to struts — we keep your vehicle safe and handling at its best.",
    icon: "CircleDot",
  },
  {
    title: "Engine Diagnostics & Repair",
    description:
      "Check engine light on? Our advanced diagnostics pinpoint the issue fast so we can get you back on the road.",
    icon: "Wrench",
  },
  {
    title: "Transmission",
    description:
      "Smooth shifting matters. We handle transmission inspections, fluid service, and repairs for automatic and manual vehicles.",
    icon: "Settings2",
  },
  {
    title: "AC / Heating",
    description:
      "Stay comfortable year-round. We diagnose and repair AC systems, heaters, and climate control components.",
    icon: "Thermometer",
  },
  {
    title: "General Inspections",
    description:
      "Buying a used car or just want peace of mind? Our thorough inspections give you a complete picture of your vehicle's health.",
    icon: "ClipboardCheck",
  },
] as const;

export const TRUST_BADGES = [
  { label: "Family-Owned" },
  { label: "5-Star Rated" },
  { label: "5+ Years Experience" },
  { label: "Open 6 Days a Week" },
] as const;
