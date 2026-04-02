import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SHOP } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K&H AutoShop — Trusted Auto Repair in Portland, OR",
  description:
    "Family-owned auto repair shop in Portland, OR. Honest, affordable service for oil changes, brakes, engine repair, transmission, AC, and inspections. Book online today.",
  keywords: [
    "auto repair Portland OR",
    "mechanic Portland",
    "oil change Portland",
    "brake repair Portland",
    "family owned auto shop Portland",
    "K&H AutoShop",
  ],
  openGraph: {
    title: "K&H AutoShop — Trusted Auto Repair in Portland, OR",
    description:
      "Family-owned auto repair shop in Portland, OR. Honest, affordable service for oil changes, brakes, engine repair, transmission, AC, and inspections. Book online today.",
    type: "website",
    locale: "en_US",
    siteName: "K&H AutoShop",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SHOP.name,
  image: "/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: SHOP.addressLine1,
    addressLocality: "Portland",
    addressRegion: "OR",
    postalCode: "97215",
    addressCountry: "US",
  },
  telephone: "+19713008228",
  email: SHOP.email,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
