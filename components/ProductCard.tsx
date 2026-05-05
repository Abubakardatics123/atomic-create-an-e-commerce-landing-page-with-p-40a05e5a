"use client";

import { useState } from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={"Rating: " + rating + " out of 5"}>
      {[1, 2, 3, 4, 5].map((star) => {
        let cls = "w-3.5 h-3.5 ";
        if (star <= Math.floor(rating)) {
          cls += "fill-yellow-400 text-yellow-400";
        } else if (star - 0.5 <= rating) {
          cls += "fill-yellow-200 text-yellow-400";
        } else {
          cls += "fill-gray-200 text-gray-200";
        }
        return <Star key={star} className={cls} />;
      })}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const btnClass = added
    ? "bg-green-500 text-white"
    : "bg-indigo-600 hover:bg-indigo-700 text-white";

  const overlayBtnClass = added
    ? "bg-green-500 text-white"
    : "bg-white text-indigo-700 hover:bg-indigo-600 hover:text-white shadow-lg";

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {product.sale && product.saleLabel && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            {product.saleLabel}
          </div>
        )}

        {product.badge && (
          <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            aria-label={"Add " + product.name + " to cart"}
            className={"w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 " + overlayBtnClass}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">({product.reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between gap-2 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          {discount > 0 && (
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
              Save {discount}%
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          aria-label={"Add " + product.name + " to cart"}
          className={"mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 " + btnClass}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}
