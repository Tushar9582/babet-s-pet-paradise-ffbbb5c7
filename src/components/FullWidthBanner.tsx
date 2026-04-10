import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import exotix1000 from "@/assets/exotix-1000mg.jpg";
import primeJoint from "@/assets/prime-joint.jpg";

const FullWidthBanner = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-primary to-emerald-500 rounded-[22px] overflow-hidden p-8 md:p-14"
          style={{ boxShadow: '0 20px 40px hsl(var(--primary) / 0.2)' }}
        >
          {/* Soft bg shapes */}
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5" />

          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="hidden md:flex justify-center">
              <img src={exotix1000} alt="Exotix Fluralaner 1000mg" className="w-40 lg:w-48 rounded-2xl hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="text-center text-primary-foreground">
              <p className="text-sm font-medium opacity-80 mb-2 tracking-wider uppercase">VETERINARY EXCLUSIVE</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Premium Vet Care Products You Can Trust!
              </h2>
              <p className="text-sm opacity-80 mb-6">
                Exotix, Prime Joint, ShowCharge & more — use code: <span className="font-bold bg-white/15 px-2 py-0.5 rounded-md">CADOGS25</span>
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="hidden md:flex justify-center">
              <img src={primeJoint} alt="Prime Joint Support" className="w-40 lg:w-48 rounded-2xl hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FullWidthBanner;
