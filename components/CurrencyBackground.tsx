"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CURRENCIES = ["₹", "$", "€", "£", "¥"];

interface CurrencyBackgroundProps {
  count?: number;
  className?: string;
  opacity?: number;
}

export function CurrencyBackground({ 
  count = 15, 
  className = "",
  opacity = 0.2 
}: CurrencyBackgroundProps) {
  const [items, setItems] = useState<{ 
    id: number; 
    symbol: string; 
    x: number; 
    y: number; 
    scale: number; 
    rotation: number;
    duration: number;
    delay: number;
  }[]>([]);

  useEffect(() => {
    // Generate random positions only on client to avoid hydration mismatch
    const newItems = Array.from({ length: count }).map((_, i) => ({
      id: i,
      symbol: CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)],
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      scale: 1.5 + Math.random() * 2.0, // 1.5 to 3.5 (Larger)
      rotation: Math.random() * 360,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 2,
    }));
    setItems(newItems);
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: opacity, 
            y: [0, -20, 0],
            rotate: [item.rotation, item.rotation + 10, item.rotation]
          }}
          transition={{ 
            duration: item.duration, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay
          }}
          style={{
            position: "absolute",
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${2 * item.scale}rem`,
            lineHeight: 1,
            color: "currentColor",
          }}
          className="font-serif font-bold blur-[2px]"
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
}
