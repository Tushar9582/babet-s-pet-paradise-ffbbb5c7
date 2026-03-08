import { useState, useEffect } from "react";
import { PawPrint, ArrowRight } from "lucide-react";
import dealProduct from "@/assets/deal-product.png";

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
    <section className="py-16 md:py-20 bg-section-alt relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5" />
      <div className="absolute bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/5" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
              <PawPrint className="w-4 h-4" /> Limited Time
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              The Best Food For Your Pet!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Don't miss out on our special deal of the day. Premium nutrition at an unbeatable price for your furry friends.
            </p>

            {/* Countdown */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="bg-primary text-primary-foreground rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center min-w-[60px] sm:min-w-[70px]">
                  <span className="text-xl sm:text-2xl font-bold block">{String(value).padStart(2, "0")}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Image side */}
          <div className="flex justify-center">
            <img
              src={dealProduct}
              alt="Deal product"
              className="w-full max-w-sm lg:max-w-md rounded-3xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
