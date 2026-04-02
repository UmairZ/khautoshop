# Website Specification Document
## K&H AutoShop — Single-Page Website

---

## 1. Project Overview

**Shop Name:** K&H AutoShop
**Address:** 6006 E Burnside St, Portland, OR 97215
**Phone:** (971) 300-8228
**Email:** khautoshop@gmail.com
**Hours:** Saturday–Thursday 8:00 AM – 5:00 PM | Closed Friday

**Project Type:** Single-page scrolling website for a family-owned auto repair shop in Portland, OR.

**Primary Goals:**
- Generate new customers through local search visibility (SEO)
- Provide online appointment booking (via AutoLeap external link)
- Showcase services, build trust, and establish credibility

**Target Audience:** Local Portland-area vehicle owners looking for a trustworthy, friendly, and skilled family mechanic shop.

---

## 2. Tech Stack (Recommended)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js (App Router)** | SEO-friendly with built-in SSR/SSG, image optimization, and easy deployment |
| Styling | **Tailwind CSS** | Rapid UI development, responsive by default, easy to customize brand colors |
| Language | **TypeScript** | Type safety, better developer experience |
| Reviews | **Static JSON data** | Hardcoded curated Google Reviews (no API needed) |
| Hosting | **Vercel** (recommended) | Free tier, seamless Next.js integration, automatic HTTPS, custom domain support |
| Analytics | **Google Analytics 4** | Track traffic, conversions, and user behavior |

> **Note:** If the developer prefers a simpler stack, this could also be built as a static HTML/CSS/JS site with Tailwind via CDN. The spec is written to be stack-agnostic where possible.

---

## 3. Branding & Design Direction

### Visual Style
- **Friendly & approachable** — family shop, not corporate chain
- Warm, welcoming tone throughout copy and imagery
- Clean layout with generous whitespace — not cluttered

### Brand Colors

| Role | Hex | Description |
|------|-----|-------------|
| Primary | `#022135` | Deep navy blue — use for headers, navbar, footer backgrounds |
| Secondary | `#ebdece` | Warm beige/cream — use for section backgrounds, cards, soft contrast areas |
| Accent | `#c24040` | Warm red — use for CTAs (Book Appointment buttons), highlights, hover states |

Derive additional shades as needed (lighter/darker variants of the primary and secondary for hover states, borders, and text).

### Brand Assets
- Logo files located in the project images folder (provided by client)
- Font recommendation: A clean sans-serif pairing (e.g., **Inter** or **Plus Jakarta Sans** for headings, system sans-serif for body)

### Design Principles
- Mobile-first responsive design
- Large, tappable buttons and clear CTAs
- Photos of real shop, team, and work (provided by client) — no generic stock photos
- Rounded corners and soft shadows for a friendly feel
- Trust indicators prominent (family-owned, 5 years in business, 5-star rated)

---

## 4. Tagline

1. **"Honest Auto Repair, Straight from the Family."**

---

## 5. About Section — Drafted Copy

> K&H AutoShop is a true family business. We are owned, operated, and built from the ground up by five brothers who grew up learning the trade from our father, a lifelong mechanic. After moving to Portland five years ago, we opened K&H with a simple goal: give every customer the same honesty and care we'd want for our own family's cars.
>
> With Mom and Dad still part of the team, K&H isn't just a shop — it's a family working together to keep your vehicle safe and running right. No upsells, no runaround — just straightforward, quality auto repair from people who genuinely care.

---

## 6. Site Structure (Single Page — Scroll Sections)

The site is a **single-page layout** with a sticky navigation bar that smooth-scrolls to each section. The sections, in order from top to bottom:

### 6.1 Navigation Bar (Sticky)
- K&H AutoShop logo (left)
- Section links: Home | About | Services | Gallery | Reviews | Contact
- Prominent **"Book Appointment"** button (right) — styled with accent color `#c24040`
- Mobile: hamburger menu with the same links
- Sticky on scroll with a subtle background blur/shadow
- Navbar background: primary color `#022135`

### 6.2 Hero Section (Home)
- Large hero image or image carousel of the shop / team at work
- "K&H AutoShop" and chosen tagline
- Brief value proposition (1–2 sentences about family-owned, trusted, Portland-based)
- Two CTAs:
  - **"Book an Appointment"** → opens `https://myalp.io/weby3b` in new tab
  - **"Call Us: (971) 300-8228"** → `tel:9713008228` link (especially useful on mobile)
- Trust badges below hero: "Family-Owned", "5-Star Rated", "5+ Years Experience", "Open 6 Days a Week"

### 6.3 About Us / Our Team
- Display the drafted about copy from Section 5 above (or client-approved version)
- Team/family photo(s) from the images folder
- Skip individual team member names/roles for now — use a group photo approach
- Emphasize the family-shop feel: honesty, transparency, community
- Optional: a brief "Our Promise" or "Why Choose Us" blurb

### 6.4 Services
- Display the following services in a clean card/grid layout:
  1. Oil Changes & Tune-Ups
  2. Brake & Suspension
  3. Engine Diagnostics & Repair
  4. Transmission
  5. AC / Heating
  6. General Inspections
- Each card should have:
  - An icon or small illustration representing the service (use a consistent icon set like Lucide or Heroicons)
  - Service name
  - Brief 1–2 sentence description of the service
- A CTA at the bottom of the section: **"Need something else? Give us a call!"** with the phone number linked

### 6.5 Gallery
- Photo grid or masonry layout showcasing:
  - The shop (interior and exterior)
  - Team at work
  - Before/after shots (if available)
  - Equipment and facility
- Lightbox functionality on click (expand photo to full view)
- All photos provided by the client (in images folder)

### 6.6 Reviews
- **Approach:** Static hardcoded reviews (no API — see Section 7 for full review data)
- Display a 5-star overall rating indicator at the top of the section (all reviews are 5 stars)
- Show reviews in a horizontal scrollable carousel or a responsive grid of review cards
- Each review card shows: reviewer name, star rating (5 stars), review text, relative time
- Truncate long reviews with a "Read more" expand toggle
- Link at the bottom: **"See All Reviews on Google"** → links to K&H AutoShop's Google Business Profile

### 6.7 Contact / Location
- Shop address: **6006 E Burnside St, Portland, OR 97215** with a **Google Maps embed** (interactive map)
- Phone: **(971) 300-8228** (clickable `tel:` link)
- Email: **khautoshop@gmail.com** (clickable `mailto:` link)
- Hours of operation:
  - Saturday–Thursday: 8:00 AM – 5:00 PM
  - Friday: Closed
- **"Book an Appointment"** button → `https://myalp.io/weby3b` (opens in new tab)

### 6.8 Footer
- Minimal design:
  - "K&H AutoShop"
  - (971) 300-8228
  - © 2026 K&H AutoShop. All rights reserved.
- Google Business Profile link (icon): https://share.google/ZDjcFNXwv9EbxxYrC
- Optional: back-to-top button

---

## 7. Static Reviews Data

These are real Google Reviews to be hardcoded into the site. Store them in a data file (e.g., `reviews.ts` or `reviews.json`).

```json
[
  {
    "name": "Adam Hofrichter",
    "rating": 5,
    "relativeTime": "4 weeks ago",
    "text": "I can't say enough how thankful I am that I found this family run shop. I could sense they take great pride in their work, their business and their customer service. They took the time to explain what was the best course of action for my vehicle and communicated regularly regarding progress. I found them to be very trustworthy and fairly priced and they went above and beyond on my repairs. Truly a gem of a business."
  },
  {
    "name": "mattcore2002",
    "rating": 5,
    "relativeTime": "3 months ago",
    "text": "K&H Auto Shop in Portland, Oregon is hands down one of the best auto repair experiences I've ever had. They diagnosed and repaired my exhaust leak quickly and with impressive precision, clearly knowing exactly what they were doing from the start. The price they quoted was great and refreshingly low compared to others, and most importantly, it never changed. The work was done quickly and I was in and out the same day. What really sets them apart is that they're a friendly, family-run business that genuinely cares about their customers. They took the time to advise me on how to better preserve and maintain my engine for the long run, which I truly appreciated. Their communication was excellent throughout the entire process, and they followed through on everything they said they would do. It's rare to find mechanics this honest, reliable, and professional. They are absolutely my new go-to shop for all future auto repair needs, and I highly recommend them to anyone. I only wish I had found K&H Auto Shop much sooner."
  },
  {
    "name": "KayLee",
    "rating": 5,
    "relativeTime": "1 month ago",
    "text": "I was having issues with my car starting on a Sunday and needed to have it quickly fixed for the week. Luckily K&H was open on the weekend so I was able to call and make an appointment for first thing in the morning on Monday. They were very easy to talk to and got it fixed by early afternoon. Very happy with service and efficiency. Will most likely come again for future fixes!"
  },
  {
    "name": "Tatiana Graham",
    "rating": 5,
    "relativeTime": "3 months ago",
    "text": "Needing to go to a garage is something I do not look forward to especially since I don't know much about cars and feel at the \"mercy\" of the mechanics. The team at K&H auto shop is fantastic. The customer service is second to none and the expertise is clear. My car needed some work done immediately and they took care of what was needed. Never trying to oversell anything. And the car now runs so well and the gas efficiency has improved which I'll add as a bonus! I highly highly recommend the shop to anyone who'd need work done."
  },
  {
    "name": "Rohit Colaco",
    "rating": 5,
    "relativeTime": "1 month ago",
    "text": "My passenger side headlight bulb on my Jeep Grand Cherokee died and needed replacement. The dealer quoted me $$$ and scheduled me a week away. K&H let me walk in on a Sunday morning and replaced it for a much more reasonable rate. Jawad and team are very capable, honest, friendly and responsive and fixed my headlight bulb in an hour. You'll be surprised how complicated it can be to replace a light bulb on some of these newer cars and I'm glad K&H were there to help."
  },
  {
    "name": "Felixis Reyes",
    "rating": 5,
    "relativeTime": "1 month ago",
    "text": "So I've been going to them consistently for the past two years since I moved to Portland. I've gone to them for any mechanical issues, and oil changes and whenever there is a service code on my dashboard. I've always set an appointment but today I decided to walk in and they still took me and was still able to complete the services within a reasonable amount of time even though they were really busy. I like the fact that they send you a text with all the estimates of the work that is needed to be done with prices of work that you asked for then you could either approve the services or save it for another date. Go to them you won't regret it."
  }
]
```

---

## 8. Appointment Booking Integration

- **Provider:** AutoLeap (All-In-One Shop Management Tool)
- **Integration method:** External link (AutoLeap does NOT support embeds)
- **Behavior:** All "Book Appointment" buttons open the AutoLeap scheduling URL in a **new browser tab**
- **URL:** `https://myalp.io/weby3b`
- **Button styling:** Make the booking button the most visually prominent CTA on the page — use accent color `#c24040` with white text

---

## 9. SEO Requirements

### Technical SEO
- Server-side rendering or static generation (Next.js SSG/ISR preferred)
- Semantic HTML5 elements (`header`, `main`, `section`, `nav`, `footer`, `article`)
- Proper heading hierarchy (single `h1`, logical `h2`/`h3` structure)
- Meta tags:
  - `<title>` — "K&H AutoShop — Trusted Auto Repair in Portland, OR"
  - `<meta name="description">` — "Family-owned auto repair shop in Portland, OR. Honest, affordable service for oil changes, brakes, engine repair, transmission, AC, and inspections. Book online today."
  - Open Graph tags for social sharing (og:title, og:description, og:image)
- Canonical URL
- XML sitemap (`/sitemap.xml`)
- `robots.txt`

### Local SEO
- **JSON-LD structured data** for `AutoRepair` schema:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "K&H AutoShop",
    "image": "[logo URL]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6006 E Burnside St",
      "addressLocality": "Portland",
      "addressRegion": "OR",
      "postalCode": "97215",
      "addressCountry": "US"
    },
    "telephone": "+19713008228",
    "email": "khautoshop@gmail.com",
    "url": "[website URL]",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6"
    },
    "priceRange": "$$"
  }
  ```
- Google Maps embed on the contact section
- Consistent NAP (Name, Address, Phone) across the entire site
- Location keywords naturally included in headings and copy (e.g., "Portland auto repair")

### Performance
- Image optimization (Next.js `<Image>` component or manual compression)
- Lazy loading for gallery and below-the-fold images
- Target: **90+ Lighthouse score** across Performance, Accessibility, Best Practices, and SEO
- Core Web Vitals compliance (LCP < 2.5s, FID < 100ms, CLS < 0.1)

---

## 10. Responsive Design Requirements

| Breakpoint | Target |
|-----------|--------|
| Mobile | 320px – 767px |
| Tablet | 768px – 1023px |
| Desktop | 1024px+ |

- Navigation collapses to hamburger menu on mobile/tablet
- Service cards stack to 1 column on mobile, 2 on tablet, 3 on desktop
- Gallery adjusts grid columns by breakpoint
- Font sizes scale appropriately
- All tap targets minimum 44x44px on mobile
- "Call Us" CTA especially prominent on mobile (sticky bottom bar or floating button)

---

## 11. Accessibility

- WCAG 2.1 AA compliance
- Alt text on all images
- Sufficient color contrast ratios (4.5:1 minimum for text)
- Keyboard navigable (tab order, focus styles)
- Screen reader-friendly landmarks and ARIA labels where needed
- Skip-to-content link

---

## 12. Hosting & Deployment

**Recommended: Vercel**
- Free tier is sufficient for this site
- Automatic HTTPS / SSL
- Custom domain support (connect your existing domain)
- Automatic deployments from a Git repository (GitHub recommended)
- Built-in analytics (optional upgrade)

**Alternative options:**
- Netlify (similar feature set, also has a free tier)
- Traditional hosting (if client prefers, the site can be exported as static HTML)

---

## 13. Project File Structure (Suggested)

```
kh-autoshop/
├── public/
│   ├── images/           # Shop photos, team photos, gallery, logo
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata + JSON-LD
│   │   ├── page.tsx      # Main single-page component
│   │   └── globals.css   # Tailwind + custom styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Reviews.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── constants.ts  # Shop info, service list, colors
│   └── data/
│       └── reviews.ts    # Static review data (from Section 7)
├── .env.local            # Environment variables (not committed)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 14. Environment Variables

```env
NEXT_PUBLIC_AUTOLEAP_URL=https://myalp.io/weby3b
NEXT_PUBLIC_SHOP_PHONE=9713008228
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

*(No Google Places API keys needed — reviews are static.)*

---

## 15. Assets Checklist

| Asset | Status |
|-------|--------|
| Shop logo | ✅ In images folder |
| Brand colors (#022135, #ebdece, #c24040) | ✅ Provided |
| Shop photos | ✅ In images folder |
| Team member names/roles | ⏭️ Skipped for now |
| Shop name, address, phone, email | ✅ Provided |
| Hours of operation | ✅ Provided |
| AutoLeap booking URL | ✅ `https://myalp.io/weby3b` |
| Google Business Profile Place ID | ❌ Not needed (static reviews) |
| Domain name | ✅ Client has one (details TBD) |
| Tagline | 📝 Suggestions in Section 4 (client to pick) |
| About copy | 📝 Draft in Section 5 (client to approve) |
| Curated reviews | ✅ 6 reviews provided (Section 7) |
| Certifications / badges | ⏭️ None |

---

## 16. Out of Scope (for initial build)

The following are explicitly **not** included in this phase:
- Blog / content management system
- E-commerce or online payments
- Customer login / portal
- Live chat widget
- Email newsletter signup
- Multi-language support
- Inventory or parts catalog
- Integration with AutoLeap beyond the external booking link
- Google Places API integration (reviews are static)

Any of these can be added as future enhancements.

---

## 17. Summary

| Attribute | Value |
|----------|-------|
| Shop | K&H AutoShop — Portland, OR |
| Type | Single-page scrolling website |
| Sections | Navbar, Hero, About, Services, Gallery, Reviews, Contact, Footer |
| Stack | Next.js + Tailwind CSS + TypeScript |
| Booking | AutoLeap external link (`https://myalp.io/weby3b`, new tab) |
| Reviews | 6 static Google Reviews (hardcoded) |
| Colors | `#022135` (navy), `#ebdece` (cream), `#c24040` (red accent) |
| Design | Friendly, approachable, family-owned vibe, mobile-first |
| SEO | Local SEO with JSON-LD AutoRepair schema, meta tags, sitemap |
| Hosting | Vercel (recommended) |
| Team | Family-run — 5 brothers + mom & dad |
| Photos | Provided by client |
| Social | Google Business Profile link only |

---

*This spec is ready to be used as a prompt or reference document for Claude Code. All shop details, reviews, colors, and copy are included — just pick a tagline, approve the About copy, and development can begin.*
