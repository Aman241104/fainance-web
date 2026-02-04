"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { WHATSAPP_LINK } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Student Portal", href: "/student-portal" },
    { label: "Corporate", href: "#corporate" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-md py-4" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-lg shadow-emerald-900/10 group-hover:scale-105 transition-transform duration-300">
              <Image src="/logo.jpeg" alt="Prihaan Financial Services" fill className="object-cover" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled || isMobileMenuOpen ? "text-slate-900" : "text-slate-900"}`}>
              Prihaan<span className="text-emerald-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
                  isScrolled ? "text-slate-700" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Wrapper for CTA & Toggle to ensure alignment */}
          <div className="flex items-center gap-4">
             {/* Desktop CTA Button */}
             <div className="hidden md:block">
               <Button 
                 className="bg-[#107C41] hover:bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 px-6"
                 onClick={() => window.open(WHATSAPP_LINK, '_blank')}
               >
                 Get Started
               </Button>
             </div>

             {/* Mobile Menu Toggle */}
             <button 
               className="md:hidden z-50 p-2 text-slate-800 hover:text-emerald-600 transition-colors rounded-lg hover:bg-slate-100"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>

          {/* Mobile Dropdown - Solid White & Smooth */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth "spring-like" ease
                className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl overflow-hidden md:hidden"
              >
                <div className="flex flex-col p-6 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium text-slate-700 py-4 border-b border-slate-50 last:border-0 hover:text-emerald-600 hover:pl-2 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button 
                        className="w-full bg-[#107C41] hover:bg-emerald-800 text-white shadow-lg h-12 text-lg font-semibold"
                        onClick={() => {
                        window.open(WHATSAPP_LINK, '_blank');
                        setIsMobileMenuOpen(false);
                        }}
                    >
                        Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </nav>
      </Container>
    </motion.header>
  );
}
