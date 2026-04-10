import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { ArrowRight, PawPrint } from "lucide-react";
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
    <section className="relative bg-hero-bg overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-secondary animate-bounce-soft" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-primary/30 animate-pulse" />

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
            <div className="container py-12 md:py-20 lg:py-28">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Text */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                    <PawPrint className="w-4 h-4" />
                    {slide.subtitle}
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-muted-foreground text-base lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                    {slide.description}
                  </p>
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
                  >
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.subtitle}
                    className="w-full max-w-md lg:max-w-lg rounded-3xl object-cover aspect-[4/5] shadow-xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
