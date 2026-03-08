import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import CtaBanner from "@/components/CtaBanner";
import BestSellingProducts from "@/components/BestSellingProducts";
import DealsOfTheDay from "@/components/DealsOfTheDay";
import TrendingSection from "@/components/TrendingSection";
import FullWidthBanner from "@/components/FullWidthBanner";
import FoodSupplements from "@/components/FoodSupplements";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import ColorSwitcher from "@/components/ColorSwitcher";
import CartSidebar from "@/components/CartSidebar";
import WishlistSidebar from "@/components/WishlistSidebar";
import ScrollToTop from "@/components/ScrollToTop";
import { useCart } from "@/context/CartContext";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const { totalItems, setCartOpen } = useCart();

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
          <main>
            <HeroSection />
            <CategorySection />
            <CtaBanner />
            <BestSellingProducts />
            <DealsOfTheDay />
            <TrendingSection />
            <FullWidthBanner />
            <FoodSupplements />
            <TestimonialsSection />
            <FeaturesSection />
          </main>
          <Footer />
          <ColorSwitcher />
          <CartSidebar />
          <WishlistSidebar />
          <ScrollToTop />
        </>
      )}
    </>
  );
};

export default Index;
