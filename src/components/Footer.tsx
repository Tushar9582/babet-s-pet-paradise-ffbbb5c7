import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/babet-logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
const resources = ["FAQ", "Testimonials", "Gallery", "Team", "Pricing"];
const services = ["Pet Grooming", "Veterinary", "Pet Training", "Pet Boarding", "Pet Adoption"];

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
              <img src={logo} alt="Babet" className="h-8 w-8" />
              <span className="font-heading text-xl font-bold text-primary-foreground">Babet</span>
            </div>
            <p className="text-sm mb-6 opacity-80 max-w-xs">
              Your one-stop shop for premium pet products. We care about your furry, feathery, and scaly friends!
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+25862323258" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +258 6232 3258
              </a>
              <a href="mailto:hello@babet.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> hello@babet.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> 123 Pet Street, NY 10001
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">{l}</a></li>
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
          <p>© 2026 Babet. All rights reserved.</p>
          <p>We Accept: Visa • Mastercard • PayPal • Apple Pay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
