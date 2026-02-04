"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface CountryTickerProps {
  countries: string[];
  interval?: number;
  className?: string;
}

export function CountryTicker({ countries, interval = 2000, className = "" }: CountryTickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % countries.length);
    }, interval);

    return () => clearInterval(timer);
  }, [countries.length, interval]);

  // Find the longest country name to reserve adequate space
  const longestCountry = countries.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <div className={`relative inline-flex flex-col justify-center ${className}`}>
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={countries[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap w-full h-full"
          >
            {countries[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      {/* Invisible spacer to reserve width based on the longest item. 
          We use opacity-0 and h-0 (or minimal height) to not affect layout height if not intended,
          but here we want it to dictate WIDTH. 
      */}
      <span className="invisible opacity-0 whitespace-nowrap h-0 select-none" aria-hidden="true">
        {longestCountry}
      </span>
    </div>
  );
}
