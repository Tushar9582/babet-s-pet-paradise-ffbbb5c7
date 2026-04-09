import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { PawPrint, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import CartSidebar from "@/components/CartSidebar";
import WishlistSidebar from "@/components/WishlistSidebar";
import { useCart } from "@/context/CartContext";

import galleryGirlGsd from "@/assets/gallery-girl-gsd.jpg";
import galleryTrophy from "@/assets/gallery-trophy.jpg";
import galleryGsdPuppy from "@/assets/gallery-gsd-puppy.jpg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const galleryImages = [
  { src: galleryGirlGsd, title: "Girl with German Shepherd", category: "Community" },
  { src: galleryTrophy, title: "SG-1 Winner — Dog Show", category: "Community" },
  { src: galleryGsdPuppy, title: "GSD Puppy in Training", category: "Happy Pets" },
];

const categories = ["All", "Products", "Community", "Happy Pets", "Care"];

const GalleryPage = () => {
  const { totalItems, setCartOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % filtered.length);
  };
  const prevImage = () => {
    if (lightbox !== null) setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };

  return (
    <>
      <SEOHead
        title="Gallery — Cadogs Pet Science | Happy Pets & Products"
        description="Browse our gallery of happy pets, Cadogs products, and the pet parent community. See the joy our products bring!"
        canonical="https://cadogs.com/gallery"
      />
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <main>
        {/* Hero */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ backgroundImage: `url(${aboutHeroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-hero-bg/80" />
          <div className="container text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <PawPrint className="w-4 h-4" /> Gallery
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Pet Family Gallery
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Real moments of joy — happy pets, proud pet parents, and the products that make it all possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter + Gallery */}
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

            {/* Masonry-style Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((img, index) => (
                <motion.div
                  key={img.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {img.category}
                      </span>
                      <h3 className="text-white font-bold text-lg mt-2">{img.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <PawPrint className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-bold text-lg">{filtered[lightbox]?.title}</p>
              <p className="text-white/60 text-sm">{filtered[lightbox]?.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <ColorSwitcher />
      <CartSidebar />
      <WishlistSidebar />
      <ScrollToTop />
    </>
  );
};

export default GalleryPage;
