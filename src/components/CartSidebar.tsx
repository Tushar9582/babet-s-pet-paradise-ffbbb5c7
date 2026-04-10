import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingCart, Trash2, MessageCircle, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { createPendingOrderRecord, saveOrderHistoryLocally } from "@/lib/orderHistory";

const CartSidebar = () => {
  const { items, updateQty, removeFromCart, totalItems, subtotal, cartOpen, setCartOpen } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleWhatsAppOrder = async () => {
    if (!user) return;

    const orderItems = items.map((i) => ({
      name: i.product.name,
      qty: i.qty,
      price: i.product.price,
    }));

    const localOrder = createPendingOrderRecord(orderItems, subtotal);
    const shopUrl = `${window.location.origin}/shop`;
    const lines = items.map(
      (i) => `- ${i.product.name} x ${i.qty} = ₹${(i.product.price * i.qty).toLocaleString()}`,
    );
    const msg = `Hello, I want to order the following products from Cadogs:\n${lines.join("\n")}\nTotal: ₹${subtotal.toLocaleString()}\n\nView products: ${shopUrl}\nPlease confirm availability and payment.`;
    const whatsappUrl = `https://wa.me/917447313137?text=${encodeURIComponent(msg)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    const { error } = await supabase.from("order_history").insert({
      user_id: user.id,
      items: orderItems,
      subtotal,
      status: "pending",
    });

    if (error) {
      console.error("Order save error:", error);
      saveOrderHistoryLocally(user.id, localOrder);
      toast({
        title: "WhatsApp opened",
        description: "Order history has been saved on this device.",
      });
      return;
    }

    toast({ title: "Order saved!", description: "Your order has been recorded." });
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-foreground z-50" onClick={() => setCartOpen(false)} />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-bold text-lg text-foreground">Your Cart ({totalItems})</h3>
              </div>
              <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 && (
                <p className="text-center text-muted-foreground py-10">Your cart is empty</p>
              )}
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-3 bg-section-alt rounded-xl">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-lg object-contain bg-card" />
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-sm text-foreground">{item.product.name}</h4>
                    <p className="text-primary font-bold text-sm mt-1">₹{item.product.price.toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="w-6 h-6 rounded bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="w-6 h-6 rounded bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeFromCart(item.product.id)} className="ml-auto w-6 h-6 rounded flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between font-heading font-bold text-foreground">
                <span>Subtotal</span>
                <span className="text-primary">₹{subtotal.toLocaleString()}</span>
              </div>

              {!user && items.length > 0 && (
                <Link
                  to="/auth"
                  onClick={() => setCartOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <LogIn className="w-4 h-4" />
                  Sign in to Order
                </Link>
              )}

              {user && items.length > 0 && (
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </button>
              )}

              {items.length === 0 && (
                <button disabled className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-semibold text-sm opacity-50 cursor-not-allowed">
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
