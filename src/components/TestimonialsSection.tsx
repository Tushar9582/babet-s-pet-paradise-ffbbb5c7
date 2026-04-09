import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star, PawPrint } from "lucide-react";
import "swiper/css";

const testimonials = [
  { name: "Sarah Johnson", role: "Dog Owner", text: "Cadogs has the best selection of natural dog food. My Golden Retriever loves every single product I've ordered!", rating: 5 },
  { name: "Mike Chen", role: "Cat Lover", text: "Finally found a pet shop that truly cares about quality. The cat treats are amazing and my cats go crazy for them.", rating: 5 },
  { name: "Emily Davis", role: "Pet Parent", text: "The customer service is outstanding. They helped me find the perfect food for my senior dog with dietary needs.", rating: 5 },
  { name: "Alex Rivera", role: "Multi-pet Owner", text: "I have both dogs and cats, and Cadogs has everything I need in one place. Great prices too!", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
            <PawPrint className="w-4 h-4" /> Testimonials
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Customer Feedback
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-heading font-bold flex items-center justify-center text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
