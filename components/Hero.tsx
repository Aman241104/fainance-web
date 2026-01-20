"use client";

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Global Finance, <br />
              <span className="text-emerald-700">Simplified & Secure.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Experience seamless international remittance, foreign exchange, and comprehensive financial solutions tailored for global citizens.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">View Services</Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 Regulated by RBI
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 24/7 Support
               </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center p-8"
          >
            {/* Abstract Background Blob */}
            <div className="absolute inset-0 bg-emerald-50/50 rounded-full blur-3xl -z-10 transform translate-x-10" />
            
            {/* 3D Globe Placeholder */}
            <div className="relative w-full h-full min-h-[400px] bg-gradient-to-br from-emerald-50 to-white rounded-3xl border border-slate-100 shadow-soft flex items-center justify-center overflow-hidden">
                 {/* Since we don't have the actual asset, we create a CSS composition */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,124,65,0.05),transparent_70%)]" />
                 
                 <div className="relative z-10 w-64 h-64 bg-emerald-700/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-100/50 shadow-2xl">
                    <div className="w-48 h-48 bg-emerald-700/10 rounded-full animate-pulse" />
                 </div>
                 
                 {/* Floating Currency Cards */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-1/3 right-12 bg-white px-4 py-3 rounded-2xl shadow-lg border border-slate-50 flex items-center gap-2"
                 >
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">$</div>
                    <span className="font-bold text-slate-700 text-sm">USD</span>
                 </motion.div>

                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 left-12 bg-white px-4 py-3 rounded-2xl shadow-lg border border-slate-50 flex items-center gap-2"
                 >
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">€</div>
                    <span className="font-bold text-slate-700 text-sm">EUR</span>
                 </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
