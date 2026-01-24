"use client";

import { Container } from '@/components/ui/Container';

const logos = [
  { name: 'Forbes', className: 'font-serif italic' },
  { name: 'Bloomberg', className: 'font-sans font-extrabold' },
  { name: 'TechCrunch', className: 'font-mono font-bold' },
  { name: 'Deloitte', className: 'font-sans font-bold tracking-widest' },
  { name: 'Visa', className: 'font-sans font-bold italic' },
];

export function Trust() {
  return (
    <section id="trust" className="py-12 border-b border-slate-100 bg-white">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-50">
           {logos.map((logo) => (
             <div key={logo.name} className="group cursor-pointer">
                <span className={`text-2xl md:text-3xl text-slate-900 group-hover:text-emerald-800 transition-colors duration-300 ${logo.className}`}>
                  {logo.name}
                </span>
             </div>
           ))}
        </div>
      </Container>
    </section>
  );
}
