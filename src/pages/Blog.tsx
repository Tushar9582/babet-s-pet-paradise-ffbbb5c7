import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { PawPrint, Calendar, User, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import WishlistSidebar from "@/components/WishlistSidebar";
import { useCart } from "@/context/CartContext";
import blogHeroBg from "@/assets/blog-hero-bg.jpg";

import blogHikingDog from "@/assets/blog-hiking-dog.jpg";
import blogBirthdayDog from "@/assets/blog-birthday-dog.jpg";
import blogGsdGrooming from "@/assets/blog-gsd-grooming.jpg";
import blogDogsPark from "@/assets/blog-dogs-park.jpg";
import blogLabResting from "@/assets/blog-lab-resting.jpg";
import blogDogBonding from "@/assets/blog-dog-bonding.jpg";
import blogFrenchieRunning from "@/assets/blog-frenchie-running.jpg";
import blogLabCloseup from "@/assets/blog-lab-closeup.jpg";
import blogGirlDog from "@/assets/blog-girl-dog.jpg";
import blogDogsToy from "@/assets/blog-dogs-toy.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Why Is My Dog Scratching So Much?",
    excerpt: "Frequent scratching can indicate skin dryness, allergies, or poor nutrition. Learn how to identify and support your dog's skin health.",
    image: blogGsdGrooming,
    category: "Skin Care",
    author: "Cadogs Team",
    date: "Mar 11, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How to Keep Your Dog Active & Happy",
    excerpt: "Regular exercise and mental stimulation are key to a happy dog. Discover fun activities to keep your furry friend engaged.",
    image: blogFrenchieRunning,
    category: "Wellness",
    author: "Cadogs Team",
    date: "Mar 8, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Understanding Your Dog's Joint Health",
    excerpt: "Joint issues can start early. Learn the signs of discomfort and how supplements can support mobility in dogs of all ages.",
    image: blogLabResting,
    category: "Joint Care",
    author: "Cadogs Team",
    date: "Mar 5, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Bond Between Dogs & Their Parents",
    excerpt: "Your dog's emotional well-being is directly linked to your bond. Here's how to strengthen that special connection.",
    image: blogDogBonding,
    category: "Wellness",
    author: "Cadogs Team",
    date: "Feb 28, 2026",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Hiking with Your Dog: A Complete Guide",
    excerpt: "Planning an adventure with your furry companion? Here's everything you need to know for a safe and fun hiking trip.",
    image: blogHikingDog,
    category: "Lifestyle",
    author: "Cadogs Team",
    date: "Feb 22, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Celebrating Your Dog's Birthday the Right Way",
    excerpt: "From dog-friendly cakes to party ideas — make your pup's special day truly memorable with these tips.",
    image: blogBirthdayDog,
    category: "Lifestyle",
    author: "Cadogs Team",
    date: "Feb 15, 2026",
    readTime: "3 min read",
  },
  {
    id: 7,
    title: "Signs Your Dog Needs More Nutrition",
    excerpt: "Dull coat, low energy, and slow recovery can all point to nutritional gaps. Learn what to look for and how to fix it.",
    image: blogLabCloseup,
    category: "Skin Care",
    author: "Cadogs Team",
    date: "Feb 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Socializing Your Dog: Tips for Every Age",
    excerpt: "Whether you have a puppy or an older dog, socialization is important. Here's how to do it safely and effectively.",
    image: blogDogsPark,
    category: "Wellness",
    author: "Cadogs Team",
    date: "Feb 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 9,
    title: "Why Your Dog Loves You More Than You Think",
    excerpt: "Science proves what we already feel — dogs have a deep emotional connection with their humans. Here's the beautiful truth.",
    image: blogGirlDog,
    category: "Lifestyle",
    author: "Cadogs Team",
    date: "Jan 30, 2026",
    readTime: "4 min read",
  },
  {
    id: 10,
    title: "Choosing the Right Toys for Your Dog",
    excerpt: "Not all toys are created equal. Find out which toys are safest and most engaging for your dog's breed and size.",
    image: blogDogsToy,
    category: "Lifestyle",
    author: "Cadogs Team",
    date: "Jan 25, 2026",
    readTime: "3 min read",
  },
];

const categories = ["All", "Skin Care", "Joint Care", "Wellness", "Lifestyle"];

const BlogPage = () => {
  const { totalItems, setCartOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPost = filtered.find((p) => p.featured) || filtered[0];
  const gridPosts = filtered.filter((p) => p.id !== featuredPost?.id);

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

        {/* Category filter + Posts */}
        <section className="py-12 md:py-16">
          <div className="container">
            {/* Category Pills */}
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

            {/* Featured Post */}
            {featuredPost && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative bg-card rounded-3xl border border-border overflow-hidden mb-12 cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-[420px] overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gridPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-card rounded-2xl border border-border overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-primary/90 text-primary-foreground text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3 uppercase tracking-wide">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No results */}
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <PawPrint className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">No articles found in this category yet.</p>
              </div>
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
