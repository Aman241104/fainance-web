"use client";

import { Container } from '@/components/ui/Container';
import { 
  Banknote, 
  Send, 
  ArrowDownLeft, 
  ShieldPlus, 
  GraduationCap, 
  FileCheck, 
  Plane 
} from 'lucide-react';
import { motion } from 'framer-motion';
import CurvedLoop from './CurvedLoop';

const services = [
  {
    title: 'Foreign Currency Exchange',
    description: 'Competitive rates for all major global currencies with instant availability.',
    icon: Banknote,
  },
  {
    title: 'Overseas Remittance',
    description: 'Fast and secure money transfers to loved ones or businesses worldwide.',
    icon: Send,
  },
  {
    title: 'Inward Remittance',
    description: 'Receive payments from abroad directly to your local bank account.',
    icon: ArrowDownLeft,
  },
  {
    title: 'Overseas Health Insurance',
    description: 'Comprehensive travel and health coverage for international stays.',
    icon: ShieldPlus,
  },
  {
    title: 'Overseas Fees Payment',
    description: 'Seamless tuition and fee payments for international universities.',
    icon: GraduationCap,
  },
  {
    title: 'Visa Services',
    description: 'Expert assistance with visa applications and documentation.',
    icon: FileCheck,
  },
  {
    title: 'Air Ticketing',
    description: 'Best deals on international flights with flexible booking options.',
    icon: Plane,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden">
      <div className="-mt-10">
        <CurvedLoop 
          marqueeText="Borderless ✦ Seamless ✦ Secure ✦ Global ✦ Finance ✦" 
          speed={3} 
          curveAmount={80} 
          interactive={true}
          className="text-emerald-700" 
        />
      </div>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-4xl font-bold text-emerald-600 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed for the modern global citizen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-700 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
