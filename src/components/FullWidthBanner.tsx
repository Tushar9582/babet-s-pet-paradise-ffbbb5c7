import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import exotix1000 from "@/assets/exotix-1000mg.jpg";
import primeJoint from "@/assets/prime-joint.jpg";

const FullWidthBanner = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="relative bg-primary rounded-3xl overflow-hidden p-8 md:p-12">
          {/* BG shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-primary-foreground/10" />
          <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-primary-foreground/5" />

          <div className="relative z-10 grid md:grid-cols-3 gap-6 items-center">
            {/* Left image */}
            <div className="hidden md:flex justify-center">
              <img src={exotix1000} alt="Exotix Fluralaner 1000mg" className="w-40 lg:w-48 rounded-2xl" />
            </div>

            {/* Center text */}
            <div className="text-center text-primary-foreground">
              <p className="text-sm font-medium opacity-90 mb-2">VETERINARY EXCLUSIVE</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                Premium Vet Care Products You Can Trust!
              </h2>
              <p className="text-sm opacity-80 mb-6">
                Exotix, Prime Joint, ShowCharge & more — use code: <span className="font-bold">CADOGS25</span>
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right image */}
            <div className="hidden md:flex justify-center">
              <img src={primeJoint} alt="Prime Joint Support" className="w-40 lg:w-48 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthBanner;
