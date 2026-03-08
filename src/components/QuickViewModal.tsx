import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/60 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-2 sm:inset-4 md:inset-0 md:m-auto md:w-[900px] md:max-w-[calc(100vw-4rem)] md:h-fit md:max-h-[85vh] bg-card rounded-2xl z-50 overflow-y-auto shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full z-10">
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
              {/* Image */}
              <div className="bg-section-alt rounded-xl flex items-center justify-center p-4 sm:p-6">
                <img src={product.image} alt={product.name} className="w-full max-h-60 sm:max-h-80 object-contain" />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-bold text-foreground">{product.name}</h2>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">({product.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">{product.description}</p>

                <div className="space-y-3 text-sm">
                  <Detail label="Form" value={product.form} />
                  <Detail label="Packing" value={product.packing} />
                  <Detail label="Indications" value={product.indications} />
                  <Detail label="Composition" value={product.composition} />
                  <Detail label="Dosage" value={product.dosage} />
                  <Detail label="Mechanism" value={product.mechanism} />
                  <Detail label="Precautions" value={product.precautions} />
                </div>

                {/* Qty + Add to cart */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
                  <div className="flex items-center border border-border rounded-full">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-muted rounded-l-full">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 sm:w-10 text-center font-medium text-sm">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-muted rounded-r-full">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button onClick={handleAdd} className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 sm:py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                  <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Meta */}
                <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t border-border">
                  <p><span className="font-medium text-foreground">SKU:</span> {product.sku}</p>
                  <p><span className="font-medium text-foreground">Category:</span> {product.category}</p>
                  <p><span className="font-medium text-foreground">Tags:</span> {product.tags.join(", ")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="font-semibold text-foreground">{label}:</span>{" "}
    <span className="text-muted-foreground">{value}</span>
  </div>
);

export default QuickViewModal;
