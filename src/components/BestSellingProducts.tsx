import { useState } from "react";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";
import { PawPrint, ArrowRight } from "lucide-react";
import { products, Product } from "@/data/products";

const BestSellingProducts = () => {
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <>
      <section id="products" className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <PawPrint className="w-4 h-4" /> Top Veterinary Products
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Best Selling Dog Health Products
              </h2>
              <p className="text-muted-foreground text-sm mt-2">Vet-recommended supplements, flea treatments & care essentials for dogs</p>
            </div>
            <a
              href="/shop"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={setQuickView} />
            ))}
          </div>
        </div>
      </section>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
};

export default BestSellingProducts;
