"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: products.length };
    products.forEach((p) => {
      result[p.category] = (result[p.category] || 0) + 1;
    });
    return result;
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
              Our Products
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Shop the Collection
            </h2>
          </div>
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-700">{filtered.length}</span> products
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-8">
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: (index * 50) + "ms" }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
