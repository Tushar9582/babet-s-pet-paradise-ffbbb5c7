import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { PawPrint, Calendar, User, ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import WishlistSidebar from "@/components/WishlistSidebar";
import { useCart } from "@/context/CartContext";
import heroPet1 from "@/assets/hero-pet-1.png";
import blogHeroBg from "@/assets/blog-hero-bg.jpg";

const blogPosts = [
  {
    title: "Why Is My Dog Scratching So Much?",
    excerpt:
      "Many pet parents think scratching is normal for dogs. While occasional scratching is completely natural, frequent scratching can sometimes indicate an underlying issue.",
    image: heroPet1,
    category: "Skin Care",
    author: "Cadogs Team",
    date: "Mar 11, 2026",
    readTime: "5 min read",
    fullContent: true,
  },
];

const categories = ["All", "Skin Care", "Joint Care", "Wellness"];

const BlogPage = () => {
  const { totalItems, setCartOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Blog — Cadogs | Dog Health Tips, Skin Care & Wellness Guides"
        description="Read expert articles on dog skin health, scratching causes, grooming tips, and preventive wellness advice from Cadogs."
        canonical="https://cadogs.com/blog"
      />
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img src={blogHeroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          <div className="absolute top-5 left-10 w-16 h-16 rounded-full bg-primary/10 animate-float" />
          <div className="container text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <PawPrint className="w-4 h-4" /> Blog
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Dog Health Tips & Guides
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Expert advice on preventive wellness, skin care, and keeping your dog healthy and happy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category filter */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Article — Full Content */}
            {filtered.length > 0 && filtered[0].fullContent && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-3xl border border-border overflow-hidden mb-12"
              >
                <img
                  src={filtered[0].image}
                  alt={filtered[0].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-8 md:p-12 max-w-3xl mx-auto">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {filtered[0].category}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {filtered[0].title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-8">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {filtered[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {filtered[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {filtered[0].readTime}
                    </span>
                  </div>

                  {/* Full Blog Content */}
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Many pet parents think scratching is normal for dogs. While occasional scratching is completely natural, frequent scratching can sometimes indicate an underlying issue.
                    </p>
                    <p>
                      Dogs may scratch due to skin dryness, allergies, parasites, or lack of proper skin nutrition. When this continues for long periods, it can lead to discomfort, skin irritation, and even hair loss.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Common Reasons Dogs Scratch</h3>

                    <div className="bg-section-alt rounded-2xl p-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-foreground mb-1">1. Skin Dryness</h4>
                        <p>Just like humans, dogs can experience dry skin. This can make them scratch frequently.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">2. Allergies</h4>
                        <p>Environmental allergies such as dust, pollen, or certain foods may trigger itching.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">3. Poor Skin Nutrition</h4>
                        <p>Healthy skin requires proper nutrients. Without them, the skin barrier becomes weak.</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mt-8 mb-4">When Should You Be Concerned?</h3>
                    <p>If you notice:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>Constant scratching</li>
                      <li>Redness or irritation</li>
                      <li>Hair loss in patches</li>
                      <li>Excessive licking of paws</li>
                    </ul>
                    <p>It may be time to take a closer look at your dog's skin health.</p>

                    <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Supporting Your Dog's Skin Health</h3>
                    <p>
                      Maintaining a healthy coat and skin requires proper grooming and internal nutrition. Products designed to support skin health can help strengthen the skin barrier and improve overall coat condition.
                    </p>
                    <p>
                      At Cadogs, our skin support solutions are designed to help pet parents care for their dogs before small signs become bigger problems.
                    </p>
                    <p className="text-foreground font-semibold text-lg mt-6">
                      Because when your dog feels comfortable, it shows in their behavior, energy, and happiness.
                    </p>
                  </div>
                </div>
              </motion.article>
            )}
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

export default BlogPage;
