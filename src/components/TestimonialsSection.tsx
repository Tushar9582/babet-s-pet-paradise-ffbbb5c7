import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star, PawPrint, Quote } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";

const testimonials = [
  { name: "Rohit Sharma", role: "Dog Owner", text: "Cadogs has the best selection of natural dog food. My Golden Retriever loves every single product I've ordered!", rating: 5 },
  { name: "Priya Deshmukh", role: "Cat Lover", text: "Finally found a pet shop that truly cares about quality. The cat treats are amazing and my cats go crazy for them.", rating: 5 },
  { name: "Ankit Patil", role: "Pet Parent", text: "The customer service is outstanding. They helped me find the perfect food for my senior dog with dietary needs.", rating: 5 },
  { name: "Sneha Kulkarni", role: "Multi-pet Owner", text: "I have both dogs and cats, and Cadogs has everything I need in one place. Great prices too!", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
            <PawPrint className="w-4 h-4" /> Testimonials
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Customer Feedback
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-[18px] p-7 border border-border h-full relative transition-all duration-300"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <Quote className="w-8 h-8 text-primary/15 absolute top-5 right-5" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 text-primary font-heading font-bold flex items-center justify-center text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
