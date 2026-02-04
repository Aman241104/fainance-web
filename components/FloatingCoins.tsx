"use client";

import { motion } from "framer-motion";
import { IndianRupee, DollarSign, Euro, PoundSterling } from "lucide-react";

const COINS = [
  { Icon: IndianRupee, color: "bg-emerald-500", label: "INR" },
  { Icon: DollarSign, color: "bg-blue-500", label: "USD" },
  { Icon: Euro, color: "bg-indigo-500", label: "EUR" },
  { Icon: PoundSterling, color: "bg-violet-500", label: "GBP" },
];

interface FloatingCoinsProps {
  className?: string;
  count?: number; // How many coins to show (max 4)
}

export function FloatingCoins({ className = "", count = 4 }: FloatingCoinsProps) {
  // Select a subset of coins based on count
  const displayCoins = COINS.slice(0, Math.min(count, COINS.length));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {displayCoins.map((coin, index) => {
        // distribute positions
        const isLeft = index % 2 === 0;
        const isTop = index < 2;
        
        // Randomize slightly for variety
        const randomDelay = index * 0.5;
        const randomDuration = 3 + index;

        return (
          <motion.div
            key={coin.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: randomDelay },
              scale: { duration: 0.5, delay: randomDelay },
              y: { 
                duration: randomDuration, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: randomDelay 
              }
            }}
            className={`absolute flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg backdrop-blur-sm border border-white/20 text-white ${coin.color}
              ${isTop ? 'top-10 md:top-20' : 'bottom-10 md:bottom-20'}
              ${isLeft ? 'left-4 md:left-10' : 'right-4 md:right-10'}
            `}
            style={{
               // Offset positions to avoid perfect corners
               [isTop ? 'top' : 'bottom']: `${10 + (index * 5)}%`,
               [isLeft ? 'left' : 'right']: `${5 + (index * 5)}%`
            }}
          >
            <coin.Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
          </motion.div>
        );
      })}
    </div>
  );
}
