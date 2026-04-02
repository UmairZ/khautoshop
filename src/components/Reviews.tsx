"use client";

import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";
import { SHOP } from "@/lib/constants";

const TRUNCATE_AT = 220;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-yellow-400 fill-yellow-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > TRUNCATE_AT;
  const displayText =
    isLong && !expanded ? review.text.slice(0, TRUNCATE_AT).trimEnd() + "…" : review.text;

  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-cream flex flex-col gap-3 h-full">
      <StarRating count={review.rating} />
      <p className="text-navy/75 text-sm leading-relaxed flex-1">
        &ldquo;{displayText}&rdquo;
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="ml-1 text-accent font-semibold hover:underline text-sm"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>
      <div className="flex items-center justify-between pt-2 border-t border-cream">
        <span className="font-semibold text-navy text-sm">{review.name}</span>
        <span className="text-navy/45 text-xs">{review.relativeTime}</span>
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What Customers Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            5-Star Reviews from Portland Drivers
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className="text-yellow-400 fill-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-3xl font-bold text-navy">4.9</span>
            <span className="text-navy/50 text-sm">
              (341 reviews)
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* Google link */}
        <div className="text-center">
          <a
            href={SHOP.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-accent transition-colors"
          >
            See All Reviews on Google
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
