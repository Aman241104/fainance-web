"use client";

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Building2, Briefcase, TrendingUp, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const CORPORATE_FEATURES = [
  {
    title: "Tour & Travel Operators",
    description: "Seamless bulk vendor payments with 100% TCS compliance. Handle high-volume transactions with zero friction.",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Education Consultants",
    description: "Instant commission settlements and streamlined student fee processing. Dedicated support for your applicants.",
    icon: Briefcase,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Import / Export SMEs",
    description: "Advanced Forex risk management and hedging strategies to protect your bottom line from currency volatility.",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600",
  },
];

export function Corporate() {
  const handlePartnerClick = () => {
    const message = "Hello Ankit, I represent a business and I am interested in a Corporate Partnership.";
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="corporate" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Header Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              For Business
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Powering Your Business with <br />
              <span className="text-emerald-600">Global Financial Agility.</span>
            </motion.h2>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              From tour operators to education consultants, we provide specialized infrastructure to handle cross-border payments with speed, compliance, and best-in-class rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handlePartnerClick}
                className="bg-slate-900 hover:bg-slate-800 text-white h-12 px-8 text-base shadow-xl shadow-slate-200"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Stats / Visual */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                   <div className="text-3xl font-bold text-slate-900 mb-1">0%</div>
                   <div className="text-sm text-slate-500 font-medium">Hidden Charges</div>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                   <div className="text-3xl font-bold text-emerald-700 mb-1">24h</div>
                   <div className="text-sm text-emerald-600 font-medium">Settlement Speed</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 col-span-2">
                   <div className="flex items-center gap-3 mb-2">
                     <ShieldCheck className="w-6 h-6 text-blue-600" />
                     <div className="text-lg font-bold text-slate-900">100% Compliant</div>
                   </div>
                   <div className="text-sm text-slate-600">RBI & TCS Regulatory Adherence</div>
                </div>
             </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORPORATE_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
