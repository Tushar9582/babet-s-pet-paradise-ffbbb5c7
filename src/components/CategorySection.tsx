import { motion } from "framer-motion";
import { PawPrint, Shield, Heart, Sparkles, Pill, Bath, Bone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Flea & Tick", desc: "12-week protection with Fluralaner chewable tablets", icon: Shield, products: 3, shopCategory: "Flea & Tick" },
  { name: "Joint Care", desc: "Glucosamine & Chondroitin for mobility support", icon: Bone, products: 1, shopCategory: "Joint Care" },
  { name: "Heart Care", desc: "L-Carnitine & Taurine cardiac supplements", icon: Heart, products: 1, shopCategory: "Heart Care" },
  { name: "Skin & Coat", desc: "Biotin & Omega-3 for a shiny, healthy coat", icon: Sparkles, products: 1, shopCategory: "Skin Care" },
  { name: "Shampoos", desc: "Medicated antibacterial & antifungal care", icon: Bath, products: 1, shopCategory: "Shampoo" },
  { name: "All Products", desc: "Browse our complete veterinary product range", icon: Pill, products: 7, shopCategory: "All" },
];

const CategorySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
            <PawPrint className="w-4 h-4" /> Browse Categories
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Shop by Health Need
          </h2>
          <div className="section-divider mt-4 mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Every product is vet-grade and designed to support your dog's daily wellness — from skin care to joint mobility and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={`/shop?category=${encodeURIComponent(cat.shopCategory)}`}
                  className="group relative flex items-start gap-5 p-6 md:p-7 rounded-[18px] bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden h-full"
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-primary/8 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:scale-110 transform" />
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-heading font-bold text-foreground text-base md:text-lg">
                        {cat.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">
                      {cat.desc}
                    </p>
                    <span className="text-[11px] font-semibold text-primary bg-primary/8 px-3 py-1 rounded-lg">
                      {cat.products} {cat.products === 1 ? "Product" : "Products"}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
