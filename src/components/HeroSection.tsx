import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { ArrowRight, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import heroDogHappy from "@/assets/hero-dog-happy.jpg";
import heroGsd from "@/assets/hero-gsd.jpg";
import heroDalmatian from "@/assets/hero-dalmatian.jpg";

const slides = [
  {
    subtitle: "Flea & Tick Protection",
    title: "Exotix Fluralaner Chewable Tablets",
    description: "12-week flea and tick protection for dogs. Fast-acting, long-lasting veterinary-grade chewable tablets for every breed.",
    image: heroDogHappy,
  },
  {
    subtitle: "Joint & Mobility Support",
    title: "Prime Joint — Move Without Pain",
    description: "Glucosamine-based joint support supplement for dogs. Vet-recommended for aging joints, stiffness, and active breed mobility.",
    image: heroGsd,
  },
  {
    subtitle: "Skin, Coat & Heart Care",
    title: "ShowCharge & Furlux — Complete Wellness",
    description: "Heart health tablets and skin & coat supplements backed by veterinary science. Give your dog the care they deserve.",
    image: heroDalmatian,
  },
];

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container py-16 md:py-24 lg:py-32">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-1.5 rounded-lg text-sm font-medium mb-5 border border-primary/10">
                    <PawPrint className="w-4 h-4" />
                    {slide.subtitle}
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-5 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-muted-foreground text-base lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    {slide.description}
                  </p>
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.subtitle}
                      className="w-full max-w-md lg:max-w-lg rounded-3xl object-cover aspect-[4/5]"
                      style={{ boxShadow: '0 25px 60px -12px rgb(0 0 0 / 0.12)' }}
                    />
                    {/* Decorative ring */}
                    <div className="absolute -inset-3 rounded-[2rem] border border-primary/10 -z-10" />
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
