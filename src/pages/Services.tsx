import { motion } from "framer-motion";
import { PawPrint, Stethoscope, Scissors, Bath, Home, GraduationCap, Heart, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import { useState } from "react";

const services = [
  { icon: Stethoscope, title: "Veterinary Care", desc: "Regular check-ups, vaccinations, and emergency care from certified veterinarians.", features: ["Annual check-ups", "Vaccinations", "Emergency care", "Dental cleaning"] },
  { icon: Scissors, title: "Pet Grooming", desc: "Professional grooming services to keep your pet looking and feeling their best.", features: ["Bath & dry", "Haircut & styling", "Nail trimming", "Ear cleaning"] },
  { icon: Bath, title: "Pet Spa", desc: "Luxurious spa treatments for pampered pets who deserve a little extra love.", features: ["Aromatherapy", "Deep conditioning", "Paw massage", "De-shedding"] },
  { icon: Home, title: "Pet Boarding", desc: "Safe, comfortable boarding facilities where your pet feels right at home.", features: ["24/7 supervision", "Climate controlled", "Daily exercise", "Webcam access"] },
  { icon: GraduationCap, title: "Pet Training", desc: "Expert training programs for puppies and adult dogs of all breeds.", features: ["Basic obedience", "Behavior correction", "Socialization", "Advanced tricks"] },
  { icon: Heart, title: "Pet Adoption", desc: "Help a rescue pet find their forever home through our adoption program.", features: ["Rescue partnerships", "Health screening", "Behavioral assessment", "Adoption support"] },
];

const pricing = [
  { name: "Basic", price: 29, period: "/month", desc: "Essential care for your pet", features: ["Monthly check-up", "Basic grooming", "10% store discount", "Email support"], popular: false },
  { name: "Premium", price: 59, period: "/month", desc: "Complete pet wellness package", features: ["Bi-weekly check-ups", "Full grooming", "20% store discount", "Priority support", "Dental cleaning"], popular: true },
  { name: "VIP", price: 99, period: "/month", desc: "The ultimate pet care experience", features: ["Weekly check-ups", "Unlimited grooming", "30% store discount", "24/7 support", "Spa treatments", "Free boarding (3 days)"], popular: false },
];

const ServicesPage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header cartCount={0} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section className="bg-hero-bg py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-10 right-20 w-20 h-20 rounded-full bg-primary/10 animate-float" />
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <PawPrint className="w-4 h-4" /> Our Services
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Complete Care for Your Pet
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From grooming to veterinary care, we offer a comprehensive range of services to keep your pet healthy, happy, and looking great.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <PawPrint className="w-4 h-4" /> Pricing
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Membership Packages</h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Choose a plan that works for you and your pet's needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((p) => (
                <motion.div
                  key={p.name}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl p-8 border transition-all ${
                    p.popular
                      ? "bg-primary text-primary-foreground border-primary shadow-xl scale-105"
                      : "bg-card text-foreground border-border hover:shadow-lg"
                  }`}
                >
                  {p.popular && (
                    <span className="inline-block bg-primary-foreground text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">Most Popular</span>
                  )}
                  <h3 className="font-heading text-xl font-bold">{p.name}</h3>
                  <p className={`text-sm mt-1 mb-4 ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>{p.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${p.price}</span>
                    <span className={`text-sm ${p.popular ? "opacity-70" : "text-muted-foreground"}`}>{p.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className={`w-4 h-4 shrink-0 ${p.popular ? "" : "text-primary"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all ${
                      p.popular
                        ? "bg-primary-foreground text-primary hover:opacity-90"
                        : "bg-primary text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ColorSwitcher />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} itemCount={0} />
      <ScrollToTop />
    </>
  );
};

export default ServicesPage;
