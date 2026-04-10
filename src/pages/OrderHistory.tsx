import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Package, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

interface OrderItem {
  name: string;
  qty: number;
  price: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  subtotal: number;
  status: string;
  created_at: string;
}

const OrderHistory = () => {
  const { user } = useAuth();
  const { totalItems, setCartOpen } = useCart();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchOrders = async () => {
      const { data } = await supabase
        .from("order_history")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setOrders(data as unknown as Order[]);
      setLoading(false);
    };
    fetchOrders();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Please sign in to view your order history.</p>
          <Link to="/auth" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <div className="container py-12">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-heading text-3xl font-bold text-foreground">Order History</h1>
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted-foreground">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No orders yet</p>
            <Link to="/shop" className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, i) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(order.created_at).toLocaleDateString("en-IN", {
                      day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
                    })}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {order.status}
                  </span>
                </div>
                <div className="space-y-2">
                  {order.items.map((item, j) => (
                    <div key={j} className="flex justify-between text-sm">
                      <span className="text-foreground">{item.name} × {item.qty}</span>
                      <span className="text-muted-foreground">₹{(item.price * item.qty).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-border flex justify-between font-heading font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{Number(order.subtotal).toLocaleString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;
