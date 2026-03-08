import { useState } from "react";
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
import heroPet2 from "@/assets/hero-pet-2.png";
import dealProduct from "@/assets/deal-product.png";

const blogPosts = [
  {
    title: "10 Best Natural Foods for Your Dog in 2026",
    excerpt: "Discover the top-rated natural dog foods that veterinarians recommend for optimal health and nutrition.",
    image: heroPet1,
    category: "Nutrition",
    author: "Dr. Sarah Miller",
    date: "Mar 5, 2026",
    readTime: "5 min read",
  },
  {
    title: "How to Groom Your Cat at Home Like a Pro",
    excerpt: "Professional tips and tricks for keeping your cat's coat shiny and healthy between grooming appointments.",
    image: heroPet2,
    category: "Grooming",
    author: "Amanda Cruz",
    date: "Mar 3, 2026",
    readTime: "7 min read",
  },
  {
    title: "Understanding Pet Food Labels: A Complete Guide",
    excerpt: "Learn how to decode pet food labels and make informed choices for your furry friend's diet.",
    image: dealProduct,
    category: "Education",
    author: "David Park",
    date: "Feb 28, 2026",
    readTime: "8 min read",
  },
  {
    title: "5 Signs Your Pet Needs a Vet Visit",
    excerpt: "Don't wait until it's too late. Learn the warning signs that indicate your pet needs professional attention.",
    image: heroPet1,
    category: "Health",
    author: "Dr. Sarah Miller",
    date: "Feb 25, 2026",
    readTime: "4 min read",
  },
  {
    title: "The Ultimate Guide to Puppy Training",
    excerpt: "From sit to stay, master the basics of puppy training with our comprehensive step-by-step guide.",
    image: heroPet2,
    category: "Training",
    author: "Ryan Thompson",
    date: "Feb 20, 2026",
    readTime: "10 min read",
  },
  {
    title: "Why Wet Food Might Be Better for Your Cat",
    excerpt: "Explore the benefits of wet food versus dry food for feline health and hydration.",
    image: dealProduct,
    category: "Nutrition",
    author: "Amanda Cruz",
    date: "Feb 15, 2026",
    readTime: "6 min read",
  },
];

const categories = ["All", "Nutrition", "Grooming", "Health", "Training", "Education"];

const BlogPage = () => {
  const { totalItems, setCartOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section className="bg-hero-bg py-12 md:py-16 relative overflow-hidden">
          <div className="absolute top-5 left-10 w-16 h-16 rounded-full bg-primary/10 animate-float" />
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <PawPrint className="w-4 h-4" /> Blog
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Pet Care Tips & Stories
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Expert advice, helpful guides, and heartwarming stories from the Cadogs community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            {/* Category filter */}
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

            {/* Featured post */}
            {filtered.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-8 mb-12 bg-card rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={filtered[0].image} alt={filtered[0].title} className="w-full h-64 md:h-full object-cover" />
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    {filtered[0].category}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-3">{filtered[0].title}</h2>
                  <p className="text-muted-foreground mb-4">{filtered[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {filtered[0].author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {filtered[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {filtered[0].readTime}</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.slice(1).map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-heading font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
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

export default BlogPage;
