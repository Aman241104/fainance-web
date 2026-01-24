"use client";

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { Globe3D } from '@/components/Globe3D';
import { WHATSAPP_LINK } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Globe */}
      {/* Background Globe */}
      <div className="absolute top-50 left-50 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 lg:-left-80 lg:translate-x-[-10%] lg:w-full lg:h-full md:left-[90%] lg:top-100 md:top-100">
        <Globe3D />
      </div>

      <Container className="relative z-10 w-full pointer-events-none">
        <div className="max-w-2xl lg:ml-auto lg:pl-12 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-100 md:text-slate-900 lg:text-slate-900 leading-[1.1] mb-6 drop-shadow-sm">
              Global Finance, <br />
              <span className="text-emerald-400 lg:text-emerald-700">Simplified & Secure.</span>
            </h1>
            <p className="text-lg text-slate-100 lg:text-slate-800 font-medium mb-8 max-w-lg leading-relaxed drop-shadow-sm bg-black/30 lg:bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/20 lg:border-white/50">
              Experience seamless international remittance, foreign exchange, and comprehensive financial solutions tailored for global citizens.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="shadow-lg shadow-emerald-900/10"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/50 backdrop-blur-sm hover:bg-white/80"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-200 lg:text-slate-700 font-semibold bg-black/30 lg:bg-white/30 backdrop-blur-md inline-flex py-2 px-4 rounded-full border border-white/20 lg:border-white/40">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.6)]" />
                 Regulated by RBI
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.6)]" />
                 24/7 Support
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
