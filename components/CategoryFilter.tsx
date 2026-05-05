"use client";

import { categories } from "@/lib/products";

interface CategoryFilterProps {
  active: string;
  onChange: (cat: string) => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide" role="tablist" aria-label="Product categories">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={
              "flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 " +
              (isActive
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600")
            }
          >
            {cat}
            {counts[cat] !== undefined && (
              <span
                className={
                  "text-xs px-1.5 py-0.5 rounded-full font-semibold " +
                  (isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500")
                }
              >
                {counts[cat]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
