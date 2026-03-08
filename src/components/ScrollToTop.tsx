import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const handleClick = () => {
    setRunning(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setRunning(false), 800);
    }, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 w-16 h-16 flex items-center justify-center group cursor-pointer"
          title="Scroll to top"
        >
          {/* Dog body */}
          <motion.div
            animate={running ? { y: [0, -200, -600], scale: [1, 0.9, 0.7], opacity: [1, 1, 0] } : { y: [0, -4, 0] }}
            transition={running ? { duration: 0.6, ease: "easeIn" } : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Dog SVG */}
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              {/* Body */}
              <ellipse cx="32" cy="38" rx="16" ry="12" className="fill-primary" />
              {/* Head */}
              <circle cx="32" cy="22" r="11" className="fill-primary" />
              {/* Left ear */}
              <ellipse cx="23" cy="14" rx="5" ry="8" transform="rotate(-15 23 14)" className="fill-primary" />
              <ellipse cx="23.5" cy="14.5" rx="3" ry="5.5" transform="rotate(-15 23.5 14.5)" fill="hsl(var(--primary) / 0.6)" />
              {/* Right ear */}
              <ellipse cx="41" cy="14" rx="5" ry="8" transform="rotate(15 41 14)" className="fill-primary" />
              <ellipse cx="40.5" cy="14.5" rx="3" ry="5.5" transform="rotate(15 40.5 14.5)" fill="hsl(var(--primary) / 0.6)" />
              {/* Eyes */}
              <circle cx="27" cy="21" r="2.5" fill="white" />
              <circle cx="37" cy="21" r="2.5" fill="white" />
              <circle cx="27.5" cy="21.5" r="1.2" fill="#333" />
              <circle cx="37.5" cy="21.5" r="1.2" fill="#333" />
              {/* Nose */}
              <ellipse cx="32" cy="26" rx="3" ry="2" fill="#333" />
              {/* Mouth */}
              <path d="M30 28 Q32 30 34 28" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round" />
              {/* Tongue (visible on hover) */}
              <motion.path
                d="M32 28 Q32 33 30 34"
                stroke="#ff6b81"
                strokeWidth="2"
                fill="#ff6b81"
                initial={{ opacity: 0, pathLength: 0 }}
                whileHover={{ opacity: 1, pathLength: 1 }}
                className="group-hover:opacity-100"
                style={{ opacity: 0 }}
              />
              {/* Front legs */}
              <rect x="25" y="46" width="4" height="8" rx="2" className="fill-primary" />
              <rect x="35" y="46" width="4" height="8" rx="2" className="fill-primary" />
              {/* Tail */}
              <motion.path
                d="M48 34 Q54 28 52 22"
                className="stroke-primary"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                animate={{ d: ["M48 34 Q54 28 52 22", "M48 34 Q56 30 54 24", "M48 34 Q54 28 52 22"] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              {/* Paw prints going up (on hover) */}
            </svg>
            {/* Paw icon below */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              animate={running ? { scale: [1, 1.5, 0], opacity: [1, 0.5, 0] } : {}}
            >
              <PawPrint className="w-3 h-3 text-primary/50" />
            </motion.div>
          </motion.div>

          {/* Paw trail when running */}
          <AnimatePresence>
            {running && (
              <>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 0.6, 0], y: [0, 20 + i * 15] }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="absolute bottom-2"
                  >
                    <PawPrint className="w-3 h-3 text-primary/40" />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
