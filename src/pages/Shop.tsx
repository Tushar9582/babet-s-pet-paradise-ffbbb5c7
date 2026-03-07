import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PawPrint, Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

const allProducts = [
  { name: "Premium Dog Food - Chicken & Rice", price: 29.99, oldPrice: 39.99, image: product1, rating: 5, reviews: 42, badge: "New", category: "Dog" },
  { name: "Natural Cat Food - Tuna Delight", price: 12.50, image: product2, rating: 5, reviews: 38, category: "Cat" },
  { name: "Colorful Bone & Ball Set", price: 8.99, oldPrice: 12.99, image: product3, rating: 4, reviews: 25, category: "Dog" },
  { name: "Organic Pet Shampoo", price: 15.99, image: product4, rating: 5, reviews: 56, category: "All" },
  { name: "Grain-Free Dog Kibble", price: 34.99, oldPrice: 44.99, image: product1, rating: 5, reviews: 31, badge: "Sale", category: "Dog" },
  { name: "Gourmet Cat Treats", price: 9.99, image: product2, rating: 4, reviews: 18, category: "Cat" },
  { name: "Interactive Pet Toy Bundle", price: 19.99, image: product3, rating: 5, reviews: 44, badge: "Hot", category: "All" },
  { name: "Gentle Puppy Shampoo", price: 11.99, image: product4, rating: 5, reviews: 29, category: "Dog" },
  { name: "Senior Dog Food Formula", price: 27.50, image: product1, rating: 4, reviews: 22, category: "Dog" },
  { name: "Kitten Starter Pack", price: 24.99, oldPrice: 32.99, image: product2, rating: 5, reviews: 37, badge: "New", category: "Cat" },
  { name: "Fish Food Flakes Premium", price: 6.99, image: product3, rating: 5, reviews: 15, category: "Fish" },
  { name: "Bird Seed Mix Deluxe", price: 13.50, image: product4, rating: 4, reviews: 20, category: "Bird" },
  { name: "Rabbit Hay & Pellet Mix", price: 16.99, image: product1, rating: 5, reviews: 12, category: "Small Pet" },
  { name: "Turtle Shell Supplement", price: 8.50, image: product2, rating: 4, reviews: 9, category: "Reptile" },
  { name: "Salmon Oil Dog Supplement", price: 22.99, image: product4, rating: 5, reviews: 34, category: "Dog" },
  { name: "Catnip Toy Mouse Set", price: 7.99, oldPrice: 10.99, image: product3, rating: 5, reviews: 48, category: "Cat" },
];

const categories = ["All", "Dog", "Cat", "Fish", "Bird", "Small Pet", "Reptile"];
const sortOptions = ["Default", "Price: Low to High", "Price: High to Low", "Rating"];

const ShopPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Default");

  const filtered = useMemo(() => {
    let result = allProducts.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || p.category === category;
      return matchSearch && matchCat;
    });
    if (sort === "Price: Low to High") result.sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") result.sort((a, b) => b.price - a.price);
    if (sort === "Rating") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [search, category, sort]);

  return (
    <>
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section className="bg-hero-bg py-12 md:py-16 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-primary/5" />
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <PawPrint className="w-4 h-4" /> Shop
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Products
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Browse our curated selection of premium pet products — from nutritious food to fun toys and essential accessories.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-12 md:py-16">
          <div className="container">
            {/* Filter bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-foreground hover:border-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-card border border-border rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                >
                  {sortOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>

            {/* Product grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {filtered.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard {...product} onAddToCart={() => setCartCount((c) => c + 1)} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <PawPrint className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-heading font-semibold text-foreground">No products found</p>
                <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ColorSwitcher />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} itemCount={cartCount} />
      <ScrollToTop />
    </>
  );
};

export default ShopPage;
