import { motion } from "framer-motion";
import { PawPrint, Pill, Droplets, Heart, Bone, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const supplements = [
  { name: "Flea & Tick Tablets", desc: "Fluralaner-based chewable protection", icon: ShieldCheck, link: "/shop?category=Flea+%26+Tick" },
  { name: "Joint Supplements", desc: "Glucosamine & MSM formula", icon: Bone, link: "/shop?category=Joint+Care" },
  { name: "Heart Support", desc: "L-Carnitine & CoQ10 tablets", icon: Heart, link: "/shop?category=Heart+Care" },
  { name: "Skin & Coat Care", desc: "Biotin & Omega-3 supplements", icon: Sparkles, link: "/shop?category=Skin+Care" },
  { name: "Medicated Shampoos", desc: "Antibacterial & antifungal", icon: Droplets, link: "/shop?category=Shampoo" },
  { name: "All Supplements", desc: "View complete range", icon: Pill, link: "/shop?category=All" },
];

const FoodSupplements = () => {
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
            <PawPrint className="w-4 h-4" /> Product Range
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Explore Our Supplements
          </h2>
          <div className="section-divider mt-4 mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Carefully developed, vet-grade wellness solutions for every aspect of your dog's health.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {supplements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  to={item.link}
                  className="group flex flex-col items-center p-5 md:p-6 rounded-[18px] bg-card border border-border transition-all duration-300 h-full text-center relative overflow-hidden"
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:scale-110 transform" />
                  </div>
                  <h3 className="relative font-heading font-bold text-foreground text-sm mb-1 leading-tight">
                    {item.name}
                  </h3>
                  <p className="relative text-[11px] text-muted-foreground leading-snug">
                    {item.desc}
                  </p>
                  <ArrowRight className="relative w-4 h-4 mt-3 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodSupplements;
