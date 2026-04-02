"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GALLERY_IMAGES = [
  {
    src: "/images/front of shop.jpg",
    alt: "Front of K&H AutoShop",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/mechanic working on engine.jpg",
    alt: "Mechanic working on an engine",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/mechanic working on car door.jpg",
    alt: "Mechanic working on a car door",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/mechanic working on metal and sparks are flying.jpg",
    alt: "Metalwork with sparks flying",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/close up of tire lugs.jpg",
    alt: "Close-up of tire lugs",
    width: 1200,
    height: 800,
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  return (
    <section id="gallery" className="bg-cream-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Shop
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            See Us in Action
          </h2>
          <p className="text-navy/60 text-lg">
            A real family shop with real craftspeople — take a look inside K&amp;H
            AutoShop.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openLightbox(i)}
              className={`relative overflow-hidden rounded-xl bg-cream shadow-sm hover:shadow-md transition-shadow cursor-zoom-in group ${
                i === 0 ? "col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
              aria-label={`View photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes={
                  i === 0
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 800px"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                }
                loading={i < 3 ? "eager" : "lazy"}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={GALLERY_IMAGES.map((img) => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height,
        }))}
      />
    </section>
  );
}
