import Image from "next/image";
import { Phone, MapPin, ArrowUp } from "lucide-react";
import { SHOP } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="K&H AutoShop logo"
              width={44}
              height={44}
              className="h-10 w-auto"
            />
            <div>
              <p className="font-bold text-lg leading-tight">K&amp;H AutoShop</p>
              <p className="text-white/50 text-xs">Portland, OR</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-1.5 text-sm text-white/70">
            <a
              href={SHOP.phoneHref}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={14} />
              {SHOP.phone}
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>6006 E Burnside St, Portland, OR 97215</span>
            </div>
          </div>

          {/* Google + Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={SHOP.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="K&H AutoShop on Google Business"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              {/* Google "G" icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/40 text-sm">
          © 2026 K&amp;H AutoShop. All rights reserved.
        </div>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="lg:hidden h-16" />
    </footer>
  );
}
