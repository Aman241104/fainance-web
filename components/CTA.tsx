"use client";

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { WHATSAPP_LINK } from '@/lib/constants';

export function CTA() {
  return (
    <section id="cta" className="py-24 bg-white relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-60" />

       <Container>
         <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Ready to move money?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join thousands of businesses and individuals who trust Prihaan Financial Services for their global transactions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="px-10"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              >
                Get Started Now
              </Button>
            </div>
         </div>
       </Container>
    </section>
  )
}
