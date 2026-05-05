"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-indigo-600 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-4">
        <div className="flex items-center gap-3 text-sm font-medium text-center">
          <span className="hidden sm:inline-block bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            Flash Sale
          </span>
          <span>
            Up to <strong>40% off</strong> sitewide — Limited time only!
          </span>
          <a
            href="#products"
            className="hidden sm:inline-block bg-white text-indigo-700 text-xs font-bold px-3 py-1 rounded-full hover:bg-indigo-50 transition-colors"
          >
            Shop Now
          </a>
        </div>
        <button
          aria-label="Dismiss promotional banner"
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
