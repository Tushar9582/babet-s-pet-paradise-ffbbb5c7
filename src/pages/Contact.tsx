import { useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import WishlistSidebar from "@/components/WishlistSidebar";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import contactHeroBg from "@/assets/contact-hero-bg.jpg";

const contactInfo = [
  { icon: Phone, title: "Call Us", info: "+91 9158 888 345", sub: "Mon-Fri, 9am-6pm IST" },
  { icon: Mail, title: "Email Us", info: "hello@cadogs.com", sub: "We reply within 24 hours" },
  { icon: MapPin, title: "Visit Us", info: "123 Pet Street", sub: "New York, NY 10001" },
  { icon: Clock, title: "Working Hours", info: "Mon-Sat: 9AM-8PM", sub: "Sunday: 10AM-6PM" },
];

const ContactPage = () => {
  const { totalItems, setCartOpen } = useCart();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <>
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundImage: `url(${contactHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-hero-bg/80" />
          <div className="container text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <PawPrint className="w-4 h-4" /> Contact Us
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Get In Touch
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Have a question about our products or services? We'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact info cards */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
              {contactInfo.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">{c.title}</h3>
                    <p className="text-primary font-medium text-sm mt-1">{c.info}</p>
                    <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact form + map */}
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-sm text-muted-foreground mb-8">Fill out the form below and we'll respond as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="bg-card border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="bg-card border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl border border-border overflow-hidden min-h-[400px] flex items-center justify-center"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280924892!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1704900000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cadogs Location"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-section-alt">
          <div className="container max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            {[
              { q: "What are your shipping options?", a: "We offer free shipping on orders over $120. Standard shipping takes 3-5 business days, and express shipping is available for 1-2 day delivery." },
              { q: "What is your return policy?", a: "We offer a 7-day money-back guarantee on all products. If your pet doesn't love it, we'll refund your purchase — no questions asked." },
              { q: "Do you offer subscriptions?", a: "Yes! Subscribe to any product and save 15% on every recurring order. You can pause, skip, or cancel anytime." },
              { q: "Are your products natural?", a: "We prioritize natural, organic products. Every item in our store is vetted by our veterinary advisors to ensure safety and quality." },
            ].map((faq, i) => (
              <details key={i} className="bg-card rounded-xl border border-border p-5 mb-3 group">
                <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
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

export default ContactPage;
