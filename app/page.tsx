import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PromoBanner />
      <Hero />
      <ProductGrid />

      {/* Features strip */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
              { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" },
              { icon: "🔒", title: "Secure Checkout", desc: "256-bit SSL encryption" },
              { icon: "💬", title: "24/7 Support", desc: "We are here to help" },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
                <span className="text-3xl" role="img" aria-label={feature.title}>
                  {feature.icon}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
