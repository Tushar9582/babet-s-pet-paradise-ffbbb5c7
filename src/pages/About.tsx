import { motion } from "framer-motion";
import { PawPrint, Heart, Award, Users, Target, Eye } from "lucide-react";
import heroPet1 from "@/assets/hero-pet-1.png";
import heroPet2 from "@/assets/hero-pet-2.png";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import { useCart } from "@/context/CartContext";

const stats = [
  { value: "10K+", label: "Happy Pets" },
  { value: "500+", label: "Products" },
  { value: "50+", label: "Brands" },
  { value: "24/7", label: "Support" },
];

const values = [
  { icon: Heart, title: "Love for Pets", desc: "Every product is selected with genuine care for your furry, feathery, and scaly companions." },
  { icon: Award, title: "Premium Quality", desc: "We partner only with trusted brands that meet our high standards for pet nutrition and safety." },
  { icon: Users, title: "Community First", desc: "We're building a community of pet lovers who share tips, stories, and support each other." },
];

const team = [
  { name: "Jessica Miller", role: "Founder & CEO", initial: "JM" },
  { name: "David Park", role: "Head of Products", initial: "DP" },
  { name: "Amanda Cruz", role: "Veterinary Advisor", initial: "AC" },
  { name: "Ryan Thompson", role: "Customer Care Lead", initial: "RT" },
];

const AboutPage = () => {
  const { totalItems, setCartOpen } = useCart();

  return (
    <>
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundImage: `url(${aboutHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-hero-bg/80" />
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  <PawPrint className="w-4 h-4" /> About Us
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                  We're Passionate About Your Pets
                </h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Founded in 2020, Babet started with a simple mission: provide the highest quality, natural products that pets love and owners trust.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <img src={heroPet1} alt="Our team with pets" className="rounded-3xl max-w-md w-full shadow-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To make premium pet care accessible to every pet owner. We believe that every pet deserves the best nutrition, the safest toys, and the most comfortable accessories — without breaking the bank.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's most trusted pet shop, known for quality, transparency, and an unwavering commitment to animal welfare. We envision a world where every pet thrives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <PawPrint className="w-4 h-4" /> What We Stand For
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img src={heroPet2} alt="Our story" className="rounded-3xl shadow-lg w-full max-w-md mx-auto" />
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                  <PawPrint className="w-4 h-4" /> Our Story
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How It All Started</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  It all began when our founder, Jessica, struggled to find high-quality, natural food for her rescue dog, Max. Every store seemed to stock the same mass-produced products filled with artificial ingredients.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Frustrated but determined, she started researching pet nutrition and connecting with small, ethical pet food producers. What started as a personal quest became Babet — a curated marketplace for pet owners who refuse to compromise on quality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we serve over 10,000 happy pets and their families, and we're just getting started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <PawPrint className="w-4 h-4" /> Our Team
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Meet the Pack</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((t) => (
                <motion.div
                  key={t.name}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 text-primary font-heading font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    {t.initial}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{t.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ColorSwitcher />
      <CartSidebar />
      <ScrollToTop />
    </>
  );
};

export default AboutPage;
