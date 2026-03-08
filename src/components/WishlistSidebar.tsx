import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Trash2, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

const WishlistSidebar = () => {
  const { items, removeFromWishlist, totalWishlist, wishlistOpen, setWishlistOpen } = useWishlist();
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {wishlistOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground z-50"
            onClick={() => setWishlistOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-bold text-lg text-foreground">Wishlist ({totalWishlist})</h3>
              </div>
              <button onClick={() => setWishlistOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 && (
                <div className="text-center py-10">
                  <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Your wishlist is empty</p>
                </div>
              )}
              {items.map((product) => (
                <div key={product.id} className="flex gap-4 p-3 bg-section-alt rounded-xl">
                  <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-contain bg-card" />
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-sm text-foreground line-clamp-2">{product.name}</h4>
                    <p className="text-primary font-bold text-sm mt-1">₹{product.price.toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          addToCart(product);
                          removeFromWishlist(product.id);
                        }}
                        className="flex items-center gap-1 text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="ml-auto w-6 h-6 rounded flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WishlistSidebar;
