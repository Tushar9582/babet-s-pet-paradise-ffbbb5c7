import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-card rounded-[18px] border border-border overflow-hidden transition-shadow duration-300"
      style={{ boxShadow: 'var(--shadow-card)' }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card)')}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-muted/30 p-5 aspect-square flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-lg tracking-wide uppercase">
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={() => liked ? removeFromWishlist(product.id) : addToWishlist(product)}
            className={`w-9 h-9 rounded-xl shadow-md flex items-center justify-center transition-all duration-200 ${liked ? "bg-primary text-primary-foreground" : "bg-card/90 glass-effect hover:bg-primary hover:text-primary-foreground"}`}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
          </button>
          <button
            onClick={() => onQuickView?.(product)}
            className="w-9 h-9 rounded-xl bg-card/90 glass-effect shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 pt-3">
        <div className="flex items-center gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < product.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
            />
          ))}
          <span className="text-[11px] text-muted-foreground ml-1.5">({product.reviews})</span>
        </div>
        <a href="#" className="font-heading font-semibold text-xs sm:text-sm text-foreground hover:text-primary transition-colors line-clamp-2 mb-3 block leading-snug">
          {product.name}
        </a>
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="font-bold text-sm sm:text-base text-foreground">₹{product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">₹{product.oldPrice.toLocaleString()}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-9 h-9 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center hover:shadow-lg hover:shadow-primary/20"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
