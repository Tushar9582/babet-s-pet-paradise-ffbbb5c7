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
const services = ["Flea & Tick Treatment", "Joint Supplements", "Heart Care", "Skin & Coat", "Dog Shampoo"];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-footer-bg text-footer-fg pt-16 pb-6 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary/5" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Cadogs" className="h-10" />
            </div>
            <p className="text-sm mb-6 opacity-80 max-w-xs">
              India's trusted online store for premium veterinary dog products — flea & tick tablets, joint supplements, heart care, skin & coat support, and medicated shampoos.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+917447313137" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +91 74473 13137
              </a>
              <a href="mailto:enquire@cadogs.info" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> enquire@cadogs.info
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> 60, Rasta Peth, Neelkanth Tower, Pune-411011
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}><Link to={l.to} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((l) => (
                <li key={l}><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((l) => (
                <li key={l}><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscribe */}
        <div className="border-t border-primary-foreground/10 pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-1">Subscribe!</h4>
              <p className="text-sm opacity-70">New subscribers get 20% off their first order</p>
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
                className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 px-5 py-3 rounded-l-full text-sm outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-r-full font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p>© 2026 Cadogs Pet Science Pvt. Ltd. All rights reserved.</p>
          <p>We Accept: Visa • Mastercard • PayPal • Apple Pay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
