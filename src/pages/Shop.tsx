import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PawPrint, Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import { products, categories, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import shopHeroBg from "@/assets/shop-hero-bg.jpg";

const sortOptions = ["Default", "Price: Low to High", "Price: High to Low", "Rating"];

const ShopPage = () => {
  const { totalItems, setCartOpen } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Default");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || p.category === category;
      return matchSearch && matchCat;
    });
    if (sort === "Price: Low to High") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "Rating") result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [search, category, sort]);

  return (
    <>
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <main>
        <section className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundImage: `url(${shopHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-hero-bg/80" />
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <PawPrint className="w-4 h-4" /> Shop
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Products</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Browse our curated selection of premium veterinary products — supplements, treatments, and care essentials.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col gap-4 mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setCategory(cat)} className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${category === cat ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:border-primary"}`}>
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground shrink-0" />
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-card border border-border rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary w-full sm:w-52">
                  {sortOptions.map((o) => (<option key={o}>{o}</option>))}
                </select>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filtered.map((product, index) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                    <ProductCard product={product} onQuickView={setQuickView} />
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
      <CartSidebar />
      <ScrollToTop />
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
};

export default ShopPage;
