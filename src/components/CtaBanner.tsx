import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import exotix500 from "@/assets/exotix-500mg.jpg";
import keramaxy from "@/assets/keramaxy-shampoo.jpg";

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Left CTA */}
          <div className="relative bg-secondary rounded-3xl overflow-hidden p-6 sm:p-8 flex items-center min-h-[180px] sm:min-h-[220px]">
            <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
              <span className="text-primary font-bold text-sm">BEST SELLER</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-1 mb-4">
                Exotix Fluralaner 500mg
              </h3>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img
              src={exotix500}
              alt="Exotix Fluralaner 500mg"
              className="absolute right-4 bottom-4 w-32 md:w-40 rounded-xl opacity-90"
            />
          </div>

          {/* Right CTA */}
          <div className="relative bg-primary/10 rounded-3xl overflow-hidden p-6 sm:p-8 flex items-center min-h-[180px] sm:min-h-[220px]">
            <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
              <span className="text-primary font-bold text-sm">NEW ARRIVAL</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-1 mb-4">
                Keramaxy Antibacterial Shampoo
              </h3>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img
              src={keramaxy}
              alt="Keramaxy Antibacterial Shampoo"
              className="absolute right-4 bottom-4 w-32 md:w-40 rounded-xl opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
