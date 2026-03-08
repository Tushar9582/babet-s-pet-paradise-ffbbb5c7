import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import babelLogo from "@/assets/cadogs-logo.jpeg";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={babelLogo}
        alt="Cadogs"
        className="w-32 mb-6"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      />
      <p className="text-lg font-heading text-foreground mb-4">Loading...</p>
      <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        onClick={onComplete}
        className="mt-6 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        Skip
      </button>
    </motion.div>
  );
};

export default Preloader;
