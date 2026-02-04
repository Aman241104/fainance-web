"use client";

import { Container } from '@/components/ui/Container';
import { 
  GraduationCap, 
  Building2, 
  Plane, 
  CreditCard, 
  HeartHandshake, 
  Gift 
} from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES_DATA = [
  {
    title: 'Student Overseas College Fees Payment',
    description: 'Expert separation of tuition fees via Flywire, Convera, and CIBC. Secure and compliant.',
    icon: GraduationCap,
  },
  {
    title: 'Overseas Block Account Payments',
    description: 'Secure fund transfers for student visa requirements (GIC/Blocked Accounts).',
    icon: Building2,
  },
  {
    title: 'DMC Tour Payments and FIT Tour Payments',
    description: 'Seamless payments for international tour operators and independent travelers.',
    icon: Plane,
  },
  {
    title: 'Currency Exchange',
    description: 'Competitive rates for physical currency exchange for global travel.',
    icon: CreditCard,
  },
  {
    title: 'Travel Cards',
    description: 'Multi-currency forex cards for convenient spending abroad.',
    icon: CreditCard,
  },
  {
    title: 'Family Maintainence',
    description: 'Reliable remittance services for supporting family members living abroad.',
    icon: HeartHandshake,
  },
  {
    title: 'Gift Remittance',
    description: 'Send monetary gifts to loved ones internationally with complete regulatory compliance.',
    icon: Gift,
  },
  {
    title: 'Overseas Health Insuranc',
    description: 'Comprehensive health insurance options for overseas stay.',
    icon: HeartHandshake,
  },
  {
    title: 'Demand Draft for Immigration',
    description: 'Secure demand drafts for immigration and visa purposes.',
    icon: Building2,
  },
];

import { CurrencyBackground } from './CurrencyBackground';
import { FloatingCoins } from '@/components/FloatingCoins';

export function Services() {
  // Stagger Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden relative">
      <CurrencyBackground count={20} className="text-emerald-500 z-0" opacity={0.15} />
      <Container className="max-w-7xl">
        <div className="text-center mb-16 relative">
          <FloatingCoins count={3} className="z-0 opacity-60" />
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-emerald-600 font-bold tracking-wider text-sm uppercase mb-3 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative z-10 text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Tailored Financial Solutions <br className="hidden md:block" /> for Global Mobility
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            From student fees to high-value corporate transactions, we provide specialized services designed for your unique needs.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES_DATA.map((service, index) => {
             const isSpecial = service.title === 'Student Fee Payments';
             return (
               <motion.div
                 key={service.title}
                 variants={item}
                 whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
                 className={`bg-white p-8 rounded-2xl border shadow-sm transition-all duration-300 group relative ${
                   isSpecial 
                     ? 'border-emerald-200/60 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                     : 'border-slate-100 hover:shadow-xl hover:border-emerald-500/30'
                 }`}
               >
                 {/* Pulsing Border for Special Card */}
                 {isSpecial && (
                   <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/30 animate-pulse pointer-events-none" style={{ animationDuration: '3s' }} />
                 )}

                 <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                   <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
                 <p className="text-slate-600 leading-relaxed text-base">
                   {service.description}
                 </p>
               </motion.div>
             );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
