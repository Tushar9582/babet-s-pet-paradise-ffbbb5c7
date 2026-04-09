import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import exotix500 from "@/assets/exotix-500mg.jpg";
import keramaxy from "@/assets/keramaxy-shampoo.jpg";

const CtaBanner = () => {
  return (
    <section className="py-6 md:py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-muted/60 to-muted/30 rounded-[20px] overflow-hidden p-7 sm:p-8 flex items-center min-h-[200px] sm:min-h-[220px] border border-border group transition-all duration-300"
            style={{ boxShadow: 'var(--shadow-card)' }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card)')}
          >
            <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
              <span className="text-primary font-bold text-xs tracking-wider uppercase">BEST SELLER</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-2 mb-4">
                Exotix Fluralaner 500mg
              </h3>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img
              src={exotix500}
              alt="Exotix Fluralaner 500mg"
              className="absolute right-4 bottom-4 w-32 md:w-40 rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary/8 to-primary/3 rounded-[20px] overflow-hidden p-7 sm:p-8 flex items-center min-h-[200px] sm:min-h-[220px] border border-primary/10 group transition-all duration-300"
            style={{ boxShadow: 'var(--shadow-card)' }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card)')}
          >
            <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
              <span className="text-primary font-bold text-xs tracking-wider uppercase">NEW ARRIVAL</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-2 mb-4">
                Keramaxy Antibacterial Shampoo
              </h3>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img
              src={keramaxy}
              alt="Keramaxy Antibacterial Shampoo"
              className="absolute right-4 bottom-4 w-32 md:w-40 rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
