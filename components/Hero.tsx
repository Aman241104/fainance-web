"use client";

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { Globe3D } from '@/components/Globe3D';
import { WHATSAPP_LINK } from '@/lib/constants';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-slate-50">
      
      {/* Background Globe - Absolute Positioned z-0 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 md:left-full md:translate-x-[-50%] lg:left-auto lg:right-[-20%] lg:translate-x-0 lg:w-[80%] opacity-90 pointer-events-none">
        <Globe3D />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pointer-events-none">
          
          {/* Left Column: Content - z-10 */}
          <div className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 backdrop-blur-sm border border-emerald-200 text-emerald-800 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Established 2020 • 150 Cr+ Turnover
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 drop-shadow-sm">
                Expert Global Remittance. <br />
                <span className="text-emerald-700">150 Cr+ Trusted Transactions.</span>
              </h1>
              
              <p className="text-lg text-slate-800 font-medium mb-8 max-w-lg leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/40">
                Specializing in high-stakes international remittances and student fee payments via platforms like Flywire, Convera, and CIBC. Trusted by families for seamless maintenance support.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-[#107C41] hover:bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 px-8 h-12 text-base"
                  onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                >
                  Talk to an Expert
                </Button>
                <Link href="/student-portal">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/60 backdrop-blur-sm border-slate-300 text-slate-800 hover:bg-slate-50 h-12 text-base"
                  >
                    View Student Portal
                  </Button>
                </Link>
              </div>
              
              {/* Stats / Social Proof */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-200/60 pt-8 bg-white/30 backdrop-blur-sm rounded-xl p-6">
                <div>
                  <p className="text-3xl font-bold text-slate-900">150 Cr+</p>
                  <p className="text-sm text-slate-600 font-bold">Annual Turnover</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">2020</p>
                  <p className="text-sm text-slate-600 font-bold">Established</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">India-Canada</p>
                  <p className="text-sm text-slate-600 font-bold">Primary Network</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Empty to allow Globe visibility, but with Trust Badge floating */}
          <div className="relative h-full hidden lg:block pointer-events-auto">
             {/* Floating Badge Example - Optional */}
             <motion.div 
               className="absolute top-0 right-0 bg-white/90 backdrop-blur shadow-xl p-4 rounded-xl border border-white/50"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1, duration: 0.8 }}
             >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Trusted Partner</p>
                    <p className="text-sm font-bold text-slate-900">Flywire & Convera</p>
                  </div>
                </div>
             </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
