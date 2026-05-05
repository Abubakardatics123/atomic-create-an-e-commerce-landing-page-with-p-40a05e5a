"use client";

import { useState } from "react";
import { Mail, Check, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="bg-indigo-600 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Get Exclusive Deals First
        </h2>
        <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
          Join 50,000+ subscribers and be the first to know about new arrivals, flash sales, and members-only discounts.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl">
            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            You are subscribed! Check your inbox for a welcome gift.
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                aria-describedby={error ? "newsletter-error" : undefined}
              />
              {error && (
                <p id="newsletter-error" className="mt-2 text-sm text-red-300 text-left">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="mt-5 text-indigo-300 text-sm">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
