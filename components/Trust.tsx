"use client";

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { BadgeCheck, Users, Briefcase } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';
import { useEffect, useRef } from 'react';

function Counter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  const display = useTransform(spring, (current) => 
    prefix + current.toFixed(decimals) + suffix
  );

  return (
    <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-white/70 mb-2">
      <motion.span ref={ref}>{display}</motion.span>
    </div>
  );
}

const PARTNERS = [
  "Flywire", "Convera", "CIBC", "Visa", "Mastercard", "Western Union"
];

import { CurrencyBackground } from './CurrencyBackground';
import { FloatingCoins } from '@/components/FloatingCoins';

export function Trust() {
  return (
    <section id="trust" className="bg-white relative">
      <CurrencyBackground count={15} className="text-emerald-500 z-0" opacity={0.15} />

      
      {/* 1. Infinite Ticker & BNI Badge */}
      <div className="border-b border-slate-100 py-8 overflow-hidden bg-slate-50/50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* BNI Badge */}
            <div className="flex-shrink-0 flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm relative z-10">
              <div className="w-8 h-8 bg-[#8A051D] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                BNI
              </div>
              <span className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight">
                Proud Member of <span className="text-[#8A051D] text-lg md:text-xl">Ares Chapter</span>
              </span>
            </div>

            {/* Scrolling Ticker */}
            <div className="flex-1 overflow-hidden relative w-full mask-gradient-x">
               {/* Mask for fade effect edges */}
               <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
               <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />

               <motion.div 
                 className="flex gap-12 md:gap-16 items-center whitespace-nowrap"
                 animate={{ x: [0, -1000] }}
                 transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
               >
                 {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                   <span 
                     key={`${partner}-${i}`} 
                     className="text-2xl md:text-3xl font-bold text-slate-300 hover:text-slate-800 transition-colors cursor-default"
                   >
                     {partner}
                   </span>
                 ))}
               </motion.div>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Financial Authority Counters (Dark Stats Section) */}
      <div className="bg-[#0F172A] py-20 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[100px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[80px]" />
        </div>
        
        <CurrencyBackground count={8} className="text-emerald-500 z-0" opacity={0.15} />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Block 1: Total Turnover */}
            <div className="pt-8 md:pt-0 px-4">
              <Counter value={25} suffix="+" />
              <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm mt-4">
                Years of Experience
              </p>
            </div>

            {/* Block 3: Established Badge (Center for visual balance or swap as needed, matching user order) */}
            {/* User requested Block 3 as Static Badge, but logical flow might be middle. keeping user block order: 1: Turnover, 2: Max Cap, 3: Established */}
             
             {/* Block 2: Transaction Capacity */}
            <div className="pt-8 md:pt-0 px-4">
              <Counter value={2.5} suffix=" Cr" prefix="₹" decimals={1} />
              <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm mt-4">
                Max Transaction capped is as per RBI Guidelines
              </p>
            </div>

            {/* Block 3: Established Badge */}
            <div className="pt-8 md:pt-0 px-4">
               <Counter value={1000} suffix="+" />
               <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm mt-4">
                Happy Clients
              </p>
            </div>

          </div>
        </Container>
      </div>

      {/* 3. Problem / Solution & Referral CTA */}
      <div className="py-24 relative overflow-hidden">
        <FloatingCoins count={3} className="z-0 opacity-50" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Problem Solved */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
                <BadgeCheck className="w-4 h-4" />
                Problem Solver
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                We Handle the <span className="text-emerald-700 decoration-emerald-300 decoration-4 underline-offset-4">Hard Cases</span>.
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                While others reject complex transactions, we specialize in resolving stringent fee payment cases for students studying overseas. We ensure compliance, speed, and success where traditional banks settle for &quot;no&quot;.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Complex University Fee Structures",
                  "Blocked Account Resolutions",
                  "High-Volume Tour Operator Payments",
                  "Urgent Visa-Related Transfers"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 font-medium">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Referral / Partner */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Users className="w-32 h-32" />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-emerald-600" />
                Partner with Prihaan
              </h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Are you an <strong>Education Consultant</strong> or <strong>International Tour Operator</strong>? Join our referral network for seamless financial handling for your clients.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">🤝</div>
                  <div>
                    <p className="font-bold text-slate-900">Dedicated Support</p>
                    <p className="text-sm text-slate-500">Direct line to relationship managers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">⚡</div>
                  <div>
                    <p className="font-bold text-slate-900">Fast Processing</p>
                    <p className="text-sm text-slate-500">Priority handling for your clients</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-lg shadow-lg"
                  onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                >
                  Become a Partner
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </div>

    </section>
  );
}
