import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Heart, Phone, Menu, X, User, LogOut, Package } from "lucide-react";
import logo from "@/assets/cadogs-logo.jpeg";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { products } from "@/data/products";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const PAGES = [
  { title: "Home", path: "/", keywords: ["home", "cadogs", "pet", "dog", "welcome"] },
  { title: "About Us", path: "/about", keywords: ["about", "story", "mission", "vision", "cadogs", "who we are"] },
  { title: "Services", path: "/services", keywords: ["services", "delivery", "order", "how it works"] },
  { title: "Shop", path: "/shop", keywords: ["shop", "products", "buy", "store"] },
  { title: "Blog", path: "/blog", keywords: ["blog", "articles", "tips", "guides", "health"] },
  { title: "Contact", path: "/contact", keywords: ["contact", "phone", "email", "address", "faq"] },
];

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ type: string; title: string; path: string }[]>([]);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalWishlist, setWishlistOpen } = useWishlist();
  const { user, signOut } = useAuth();
  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); return; }
    const q = searchQuery.toLowerCase();
    const results: { type: string; title: string; path: string }[] = [];
    PAGES.forEach((page) => {
      if (page.title.toLowerCase().includes(q) || page.keywords.some((k) => k.includes(q))) {
        results.push({ type: "Page", title: page.title, path: page.path });
      }
    });
    products.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q))) {
        results.push({ type: "Product", title: p.name, path: `/shop?category=${encodeURIComponent(p.category)}` });
      }
    });
    setSearchResults(results.slice(0, 8));
  }, [searchQuery]);

  useEffect(() => { setSearchOpen(false); setSearchQuery(""); setUserMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleResultClick = (path: string) => { navigate(path); setSearchOpen(false); setSearchQuery(""); };
  const handleSignOut = async () => { await signOut(); setUserMenuOpen(false); };

  const userDisplayName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split("@")[0] || "User";
  const userAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture;

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/80 glass-effect shadow-[0_1px_3px_rgb(0_0_0/0.05)]" : "bg-background"}`}>
        <div className="container flex items-center justify-between py-4 gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Cadogs" className="h-10 rounded-lg" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2.5 rounded-xl hover:bg-muted transition-all duration-200">
              <Search className="w-[18px] h-[18px] text-foreground/70" />
            </button>
            <button onClick={() => setWishlistOpen(true)} className="p-2.5 rounded-xl hover:bg-muted transition-all duration-200 hidden sm:flex relative">
              <Heart className="w-[18px] h-[18px] text-foreground/70" />
              {totalWishlist > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{totalWishlist}</span>
              )}
            </button>
            <button onClick={onCartClick} className="p-2.5 rounded-xl hover:bg-muted transition-all duration-200 relative">
              <ShoppingCart className="w-[18px] h-[18px] text-foreground/70" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>

            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center gap-2 p-1 rounded-xl hover:bg-muted transition-all duration-200">
                  {userAvatar ? (
                    <img src={userAvatar} alt="" className="w-8 h-8 rounded-xl object-cover ring-2 ring-primary/20" />
                  ) : (
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      {userDisplayName[0]?.toUpperCase()}
                    </div>
                  )}
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-2xl overflow-hidden z-50"
                      style={{ boxShadow: 'var(--shadow-xl)' }}
                    >
                      <div className="p-4 border-b border-border bg-muted/30">
                        <p className="font-heading font-semibold text-sm text-foreground truncate">{userDisplayName}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                      <Link to="/orders" className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-sm text-foreground">
                        <Package className="w-4 h-4 text-muted-foreground" /> Order History
                      </Link>
                      <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-destructive/5 transition-colors text-sm text-destructive">
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/auth" className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <User className="w-4 h-4" /> Sign In
              </Link>
            )}

            <a href="tel:+917447313137" className="hidden xl:flex items-center gap-2 border border-border text-foreground/70 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-all duration-200">
              <Phone className="w-4 h-4 text-primary" /> +91 74473 13137
            </a>
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-all duration-200">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div ref={searchRef} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-border overflow-hidden">
              <div className="container py-4 relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input type="text" placeholder="Search products, pages..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-muted rounded-xl pl-11 pr-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all" autoFocus />
                </div>
                {searchResults.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 mx-4 bg-card border border-border rounded-2xl z-50 overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
                    {searchResults.map((r, i) => (
                      <button key={i} onClick={() => handleResultClick(r.path)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left border-b border-border/50 last:border-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-md">{r.type}</span>
                        <span className="text-sm text-foreground">{r.title}</span>
                      </button>
                    ))}
                  </div>
                )}
                {searchQuery.trim() && searchResults.length === 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 mx-4 bg-card border border-border rounded-2xl z-50 p-4 text-center" style={{ boxShadow: 'var(--shadow-xl)' }}>
                    <p className="text-sm text-muted-foreground">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-foreground z-50" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 28, stiffness: 300 }} className="fixed left-0 top-0 bottom-0 w-[85vw] max-w-80 bg-card z-50 p-6" style={{ boxShadow: 'var(--shadow-xl)' }}>
              <div className="flex items-center justify-between mb-8">
                <img src={logo} alt="Cadogs" className="h-8" />
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-muted"><X className="w-5 h-5" /></button>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className={`text-base font-medium transition-all py-3 px-4 rounded-xl ${location.pathname === link.to ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-foreground hover:bg-muted"}`}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              {user ? (
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-muted rounded-2xl">
                    {userAvatar ? (
                      <img src={userAvatar} alt="" className="w-10 h-10 rounded-xl object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">{userDisplayName[0]?.toUpperCase()}</div>
                    )}
                    <div>
                      <p className="font-semibold text-sm">{userDisplayName}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Link to="/orders" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-sm text-foreground/70 py-2 px-4">
                    <Package className="w-4 h-4" /> Order History
                  </Link>
                  <button onClick={() => { handleSignOut(); setMobileOpen(false); }} className="flex items-center gap-2 text-sm text-destructive py-2 px-4">
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              ) : (
                <Link to="/auth" onClick={() => setMobileOpen(false)} className="mt-8 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl text-sm font-semibold justify-center">
                  <User className="w-4 h-4" /> Sign In / Sign Up
                </Link>
              )}
              <a href="tel:+917447313137" className="mt-3 flex items-center gap-2 border border-border text-foreground/70 px-4 py-3 rounded-xl text-sm font-medium justify-center">
                <Phone className="w-4 h-4 text-primary" /> +91 74473 13137
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
