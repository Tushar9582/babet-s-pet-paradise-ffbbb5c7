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
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
              <PawPrint className="w-4 h-4" /> Product Range
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Explore Our Supplements
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Carefully developed, vet-grade wellness solutions for every aspect of your dog's health.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {supplements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <Link
                  to={item.link}
                  className="group flex flex-col items-center p-5 md:p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 h-full text-center relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="relative font-heading font-bold text-foreground text-sm mb-1 leading-tight">
                    {item.name}
                  </h3>
                  <p className="relative text-[11px] text-muted-foreground leading-snug">
                    {item.desc}
                  </p>
                  <ArrowRight className="relative w-4 h-4 mt-3 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300" />
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
