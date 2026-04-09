import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PawPrint, ArrowRight } from "lucide-react";
import dealProduct from "@/assets/exotix-1000mg.jpg";

const TARGET_DATE = new Date("2027-12-06T00:00:00").getTime();

const DealsOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, TARGET_DATE - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <PawPrint className="w-4 h-4" /> Limited Time
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              The Best Food For Your Pet!
            </h2>
            <div className="section-divider mt-4 mb-4 !mx-0" />
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Don't miss out on our special deal of the day. Premium nutrition at an unbeatable price for your furry friends.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="bg-primary text-primary-foreground rounded-2xl px-4 py-3 text-center min-w-[72px]" style={{ boxShadow: '0 4px 14px hsl(var(--primary) / 0.25)' }}>
                  <span className="text-2xl font-bold block tracking-tight">{String(value).padStart(2, "0")}</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-80">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={dealProduct}
              alt="Deal product"
              className="w-full max-w-sm lg:max-w-md rounded-3xl animate-float"
              style={{ boxShadow: '0 25px 60px -12px rgb(0 0 0 / 0.1)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
