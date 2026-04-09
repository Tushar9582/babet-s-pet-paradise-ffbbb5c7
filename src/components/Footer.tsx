import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/cadogs-logo.jpeg";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
const resources = [
  { label: "FAQ", to: "/contact" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
];
const services = [
  { label: "Flea & Tick Treatment", to: "/shop?category=Flea+%26+Tick" },
  { label: "Joint Supplements", to: "/shop?category=Joint+Care" },
  { label: "Heart Care", to: "/shop?category=Heart+Care" },
  { label: "Skin & Coat", to: "/shop?category=Skin+Care" },
  { label: "Dog Shampoo", to: "/shop?category=Shampoo" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-footer-bg text-footer-fg pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/[0.03]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-primary/[0.03]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <img src={logo} alt="Cadogs" className="h-10 rounded-lg" />
            </div>
            <p className="text-sm mb-6 opacity-70 max-w-xs leading-relaxed">
              India's trusted online store for premium veterinary dog products — flea & tick tablets, joint supplements, heart care, skin & coat support, and medicated shampoos.
            </p>
            <div className="flex flex-col gap-3.5 text-sm">
              <a href="tel:+917447313137" className="flex items-center gap-3 opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +91 74473 13137
              </a>
              <a href="mailto:enquire@cadogs.info" className="flex items-center gap-3 opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                enquire@cadogs.info
              </a>
              <span className="flex items-center gap-3 opacity-80">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                60, Rasta Peth, Neelkanth Tower, Pune-411011
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-5 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}><Link to={l.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 inline-block">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-5 text-sm tracking-wide uppercase">Resources</h4>
            <ul className="space-y-2.5">
              {resources.map((l) => (
                <li key={l.label}><Link to={l.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 inline-block">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-5 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map((l) => (
                <li key={l.label}><Link to={l.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 inline-block">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-1">Subscribe!</h4>
              <p className="text-sm opacity-60">New subscribers get 20% off their first order</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white/5 border border-white/10 text-primary-foreground placeholder:text-white/30 px-5 py-3 rounded-l-xl text-sm outline-none focus:ring-2 focus:ring-primary/30 w-full md:w-64 transition-all"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-r-xl font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <p>© 2026 Cadogs Pet Science Pvt. Ltd. All rights reserved.</p>
          <p>We Accept: Visa • Mastercard • PayPal • Apple Pay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
