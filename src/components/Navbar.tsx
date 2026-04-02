"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SHOP } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-navy transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/30 backdrop-blur-sm" : ""
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:text-sm"
      >
        Skip to content
      </a>

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="K&H AutoShop logo"
            width={48}
            height={48}
            className="h-10 w-auto lg:h-12"
            priority
          />
          <span className="text-white font-bold text-lg lg:text-xl tracking-tight">
            K&amp;H AutoShop
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Book button */}
        <a
          href={SHOP.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          Book Appointment
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden text-white p-2 rounded-md"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <ul className="flex flex-col px-4 pb-4 pt-2 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-white hover:bg-white/5 px-3 py-3 rounded-md text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={SHOP.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="block text-center bg-accent hover:bg-accent-light text-white font-semibold px-4 py-3 rounded-lg transition-colors"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
