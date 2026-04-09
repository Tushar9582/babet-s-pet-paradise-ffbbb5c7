import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { PawPrint, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";
import { products, Product } from "@/data/products";
import "swiper/css";
import "swiper/css/navigation";

const TrendingSection = () => {
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <>
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <PawPrint className="w-4 h-4" /> Popular Now
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Trending This Week
              </h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="trending-prev w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="trending-next w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{ prevEl: ".trending-prev", nextEl: ".trending-next" }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} onQuickView={setQuickView} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
};

export default TrendingSection;
