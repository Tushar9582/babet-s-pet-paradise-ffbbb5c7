import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Left CTA */}
          <div className="relative bg-secondary rounded-3xl overflow-hidden p-6 sm:p-8 flex items-center min-h-[180px] sm:min-h-[220px]">
            <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
              <span className="text-primary font-bold text-sm">15% OFF</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-1 mb-4">
                Fresh Natural Pets Food
              </h3>
              <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Shop Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src={product1}
              alt="Pet food"
              className="absolute right-4 bottom-4 w-32 md:w-40 opacity-90"
            />
          </div>

          {/* Right CTA */}
          <div className="relative bg-primary/10 rounded-3xl overflow-hidden p-6 sm:p-8 flex items-center min-h-[180px] sm:min-h-[220px]">
            <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
              <span className="text-primary font-bold text-sm">NEW ARRIVAL</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-1 mb-4">
                Premium Cat Food Collection
              </h3>
              <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Shop Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src={product2}
              alt="Cat food"
              className="absolute right-4 bottom-4 w-32 md:w-40 opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
