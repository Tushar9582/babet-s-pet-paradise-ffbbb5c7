import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { PawPrint, Heart, Target, Eye } from "lucide-react";
import cadogsLogo from "@/assets/cadogs-logo.jpeg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import WishlistSidebar from "@/components/WishlistSidebar";
import { useCart } from "@/context/CartContext";

const AboutPage = () => {
  const { totalItems, setCartOpen } = useCart();

  return (
    <>
      <SEOHead
        title="About Us — Cadogs | Preventive Dog Wellness & Supplements"
        description="Learn about Cadogs — built from real pet parent needs. We support early care and preventive wellness for dogs through trusted supplements and grooming products."
        canonical="https://cadogs.com/about"
      />
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ backgroundImage: `url(${aboutHeroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-hero-bg/80" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  <PawPrint className="w-4 h-4" /> About Us
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  About Us — Cadogs
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Cadogs, everything started with a simple realization — most pet health problems are noticed too late.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <img src={cadogsLogo} alt="Cadogs Logo" className="rounded-3xl max-w-xs w-full shadow-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="container max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <PawPrint className="w-4 h-4" /> Our Story
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">How It All Started</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For years, we interacted with pet parents offline and heard the same concerns again and again. Dogs suffering from itching, dull coats, low energy, or joint discomfort — problems that often started with small signs but grew bigger over time.
                </p>
                <p>
                  What we realized was something important: dogs rarely show pain the way humans do. They adjust, they stay quiet, and by the time we notice something is wrong, the issue has already progressed.
                </p>
                <p>That's where the idea of Cadogs began.</p>
                <p>
                  Cadogs was created with a mission to support early care and preventive wellness for dogs. Instead of waiting for health problems to become serious, we believe in supporting their bodies daily — from skin and coat health to joint mobility and overall vitality.
                </p>
                <p>
                  Our range includes carefully developed supplements, grooming products, and wellness solutions designed to support dogs in living healthier, more comfortable lives.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Not Just Products */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <Heart className="w-4 h-4" /> More Than Products
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">But Cadogs Is Not Just About Products</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It is about helping pet parents understand their dogs better, recognize early signs of discomfort, and provide the care they truly deserve.
                </p>
                <p>
                  Today, as we expand digitally, our goal is to reach more homes, educate more pet parents, and make trusted pet wellness solutions accessible to everyone.
                </p>
                <p className="text-foreground font-semibold text-lg">
                  Because for our dogs, we are their whole world — and they deserve nothing but the best care.
                </p>
                <p className="text-primary font-bold text-lg mt-6">
                  Cadogs — Built from real pet parent needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help pet parents care for their dogs before problems become serious, through preventive wellness and trusted products.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted wellness partner for every dog parent who wants a healthier, happier life for their pets.
                </p>
              </motion.div>
            </div>
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

export default AboutPage;
