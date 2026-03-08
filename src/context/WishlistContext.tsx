import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Product } from "@/data/products";

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  totalWishlist: number;
  wishlistOpen: boolean;
  setWishlistOpen: (open: boolean) => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be within WishlistProvider");
  return ctx;
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const addToWishlist = useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const isInWishlist = useCallback((productId: string) => {
    return items.some((p) => p.id === productId);
  }, [items]);

  const totalWishlist = items.length;

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist, totalWishlist, wishlistOpen, setWishlistOpen }}>
      {children}
    </WishlistContext.Provider>
  );
};
