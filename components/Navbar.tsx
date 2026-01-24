"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { WHATSAPP_LINK } from '@/lib/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-emerald-500/30 shadow-sm py-4" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-lg shadow-emerald-900/10 group-hover:scale-105 transition-transform duration-300">
              <Image src="/logo.jpg" alt="Prihaan Financial Services" fill className="object-cover" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
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

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              className="bg-[#107C41] hover:bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 px-6"
              onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}
