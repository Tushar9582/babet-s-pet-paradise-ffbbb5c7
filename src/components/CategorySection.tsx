import { motion } from "framer-motion";
import { PawPrint, Shield, Heart, Sparkles, Pill, Bath, Bone } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Flea & Tick", desc: "Protection tablets", icon: Shield, products: 3, shopCategory: "Flea & Tick" },
  { name: "Joint Care", desc: "Mobility support", icon: Bone, products: 1, shopCategory: "Joint Care" },
  { name: "Heart Care", desc: "Cardiac supplements", icon: Heart, products: 1, shopCategory: "Heart Care" },
  { name: "Skin & Coat", desc: "Derma solutions", icon: Sparkles, products: 1, shopCategory: "Skin Care" },
  { name: "Shampoos", desc: "Antibacterial care", icon: Bath, products: 1, shopCategory: "Shampoo" },
  { name: "All Products", desc: "Browse everything", icon: Pill, products: 7, shopCategory: "All" },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
            <PawPrint className="w-4 h-4" /> Browse Categories
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Shop by Health Need
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm md:text-base">
            Trusted veterinary products to keep your dog healthy, active, and happy.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={`/shop?category=${encodeURIComponent(cat.shopCategory)}`}
                  className="group relative flex flex-col items-center p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-3 bg-primary/10 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="relative font-heading font-bold text-foreground text-sm md:text-base mb-0.5 text-center">
                    {cat.name}
                  </h3>
                  <p className="relative text-[11px] md:text-xs text-muted-foreground text-center">
                    {cat.desc}
                  </p>
                  <span className="relative mt-2 text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {cat.products} Products
                  </span>
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
