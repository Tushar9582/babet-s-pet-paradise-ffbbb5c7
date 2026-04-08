import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

// Only green color remains
const COLORS = [
  { name: "Green", hsl: "145 60% 42%", hex: "#27AE60" },
];

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeColor = (hsl: string) => {
    document.documentElement.style.setProperty("--primary", hsl);
    document.documentElement.style.setProperty("--theme-color", hsl);
    document.documentElement.style.setProperty("--ring", hsl);
    document.documentElement.style.setProperty("--countdown-bg", hsl);
  };

  // Set green as the default theme on mount
  useEffect(() => {
    changeColor(COLORS[0].hsl);
  }, []);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            className="absolute right-14 top-1/2 -translate-y-1/2 bg-card shadow-xl rounded-lg p-3 flex flex-col gap-2"
          >
            {COLORS.map((c) => (
              <button
                key={c.hex}
                onClick={() => changeColor(c.hsl)}
                className="w-8 h-8 rounded-full border-2 border-card shadow-md hover:scale-110 transition-transform"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground w-12 h-12 rounded-l-lg flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
      >
        <Palette className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ColorSwitcher;