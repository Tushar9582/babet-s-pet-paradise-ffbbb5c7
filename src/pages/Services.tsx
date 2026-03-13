import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { PawPrint, ShoppingBag, Phone, Truck, Shield, Clock, MessageCircle, ArrowRight, Check, Package, HeartHandshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import WishlistSidebar from "@/components/WishlistSidebar";
import { useCart } from "@/context/CartContext";
import servicesHeroBg from "@/assets/services-hero-bg.jpg";

const howItWorks = [
  {
    step: "01",
    title: "Browse Products",
    desc: "Explore our range of vet-grade dog supplements — skin care, joint support, heart health & more.",
    icon: ShoppingBag,
  },
  {
    step: "02",
    title: "Place Your Order",
    desc: "Add products to cart and place your order online. Safe & secure checkout with multiple payment options.",
    icon: Package,
  },
  {
    step: "03",
    title: "Fast Delivery",
    desc: "We deliver your order right to your doorstep. Track your shipment in real-time.",
    icon: Truck,
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "Vet-Grade Quality",
    desc: "All our supplements are carefully developed with veterinary-grade ingredients to ensure safety and effectiveness.",
  },
  {
    icon: HeartHandshake,
    title: "Built from Real Needs",
    desc: "Cadogs was born from years of interacting with pet parents and understanding the real health concerns of dogs.",
  },
  {
    icon: Clock,
    title: "Preventive Approach",
    desc: "We focus on early care — supporting your dog's health daily before small signs become bigger problems.",
  },
  {
    icon: MessageCircle,
    title: "Direct Support",
    desc: "Have questions? Call us directly or WhatsApp us. We're always here to help you choose the right products.",
  },
];

const ServicesPage = () => {
  const { totalItems, setCartOpen } = useCart();

  return (
    <>
      <SEOHead
        title="Our Services — Cadogs | Dog Supplements & Wellness Products Online"
        description="Order premium dog supplements online from Cadogs. Skin care, joint support, heart health — delivered to your door. Contact us directly for guidance."
        canonical="https://cadogs.com/services"
      />
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={servicesHeroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          <div className="absolute top-10 right-20 w-20 h-20 rounded-full bg-primary/10 animate-float" />
          <div className="container text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <PawPrint className="w-4 h-4" /> What We Offer
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Premium Dog Supplements, Delivered to You
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We provide trusted, vet-grade dog supplements for skin, joints, heart & overall wellness. Order online or contact us directly — we're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Provide */}
        <section className="py-16 md:py-20">
          <div className="container max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                  <PawPrint className="w-4 h-4" /> Our Services
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What We Do</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
                <p>
                  At <span className="text-foreground font-semibold">Cadogs</span>, we specialize in providing premium dog supplements and wellness products. From skin & coat care to joint support, heart health, and flea & tick protection — our range is carefully designed to support your dog's daily health.
                </p>
                <p>
                  You can conveniently <span className="text-foreground font-semibold">order through our website</span> and get products delivered to your doorstep. If you need help choosing the right product, feel free to <span className="text-foreground font-semibold">contact us directly</span> — we're always happy to guide you.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <PawPrint className="w-4 h-4" /> How It Works
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Order in 3 Simple Steps</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {howItWorks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="text-center relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-9 h-9" />
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Step {item.step}</span>
                    <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    {i < howItWorks.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-4 w-8 text-primary/30">
                        <ArrowRight className="w-8 h-8" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <PawPrint className="w-4 h-4" /> Why Cadogs
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Why Pet Parents Trust Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <Phone className="w-4 h-4" /> Get in Touch
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need Help Choosing the Right Product?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand every dog is different. If you're unsure which supplement is right for your pet, reach out to us. We'll help you find the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919158888345"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Us: +91 9158 888 345
                </a>
                <a
                  href="mailto:hello@cadogs.com"
                  className="inline-flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-3.5 rounded-full font-semibold hover:border-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  hello@cadogs.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ColorSwitcher />
      <CartSidebar />
      <WishlistSidebar />
      <ScrollToTop />
    </>
  );
};

export default ServicesPage;
