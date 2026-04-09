import { motion } from "framer-motion";
import { Truck, RotateCcw, Crown, Headphones } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Delivery", desc: "Free shipping on veterinary products over ₹999" },
  { icon: RotateCcw, title: "Easy Returns", desc: "7-day return guarantee on all dog health products" },
  { icon: Crown, title: "Human Grade", desc: "All supplements are made with human-grade API & clinically tested" },
  { icon: Headphones, title: "Expert Support", desc: "24/7 veterinary product guidance & consultation" },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-[18px] p-6 md:p-8 text-center border border-border transition-all duration-300"
                style={{ boxShadow: 'var(--shadow-card)' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card)')}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/8 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2 text-base">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
