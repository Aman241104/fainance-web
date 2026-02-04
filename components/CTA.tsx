"use client";

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/lib/constants';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '@/actions/submit-contact';

import { CurrencyBackground } from './CurrencyBackground';
import { CountryTicker } from './CountryTicker';

export function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    
    // 1. Submit to Google Sheets (Server Action)
    const result = await submitContactForm({ success: false }, formData);

    setIsSubmitting(false);

    // 2. Redirect to WhatsApp (regardless of Sheet success, to ensure lead capture)
    if (result) { // Proceeding always to ensure user connects
        const name = formData.get('name') as string;
        const service = formData.get('service') as string;
        const message = formData.get('message') as string;
        
        const waMessage = `Hello Ankit, I am interested in *${service}*.\n\nName: ${name}\nMessage: ${message}`;
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waMessage)}`;
        
        window.open(waUrl, '_blank');
    }
    
    if (!result.success && result.message) {
        // Optional: Show error toast if sheet failed, but we already redirected to WA
        console.warn(result.message);
    }
  }

  return (
    <section id="cta">
      
      {/* 1. "Still Thinking?" Dark Conversion Block */}
      <div className="bg-slate-950 py-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <Container className="relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Still navigating international <br className="hidden md:block" />
            <span className="text-emerald-400">fee structures?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Let’s have a conversation. Get personalized advice from industry veterans.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 md:px-10 py-6 md:py-4 h-auto text-base md:text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105 whitespace-normal text-center leading-tight"
              onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            >
              Schedule a Consultation with Ankit Patel
            </Button>
          </motion.div>
        </Container>
      </div>

      {/* 2. Global Contact Form Section */}
      <div className="bg-slate-50 py-24 relative overflow-hidden">
        <CurrencyBackground count={12} className="text-emerald-500 z-0" opacity={0.15} />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Global Presence Map Placeholder */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Global Presence, <br />
                <span className="text-emerald-600">Local Expertise.</span>
              </h3>
              <p className="text-slate-600 mb-8 max-w-md">
                Bridging the gap between India and Canada with dedicated support on both sides of the corridor.
              </p>

              {/* Text-Based Corridor Graphic */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden mb-8 group flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                 <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-slate-100 hidden md:block" />
                 
                 <div className="relative z-10 text-center w-full md:w-auto">
                    <CountryTicker 
                      countries={["INDIA", "UAE", "SINGAPORE", "USA"]} 
                      interval={2000}
                      className="block text-3xl font-bold text-slate-900 tracking-tight min-w-[100px] h-9"
                    />
                    <span className="block text-xs font-semibold text-emerald-600 uppercase tracking-widest mt-1">Origin</span>
                 </div>

                 <div className="relative z-10 flex flex-col items-center justify-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2 shadow-sm border border-emerald-100 rotate-90 md:rotate-0 transform transition-transform">
                       <ArrowRight className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2">Corridor</span>
                 </div>

                 <div className="relative z-10 text-center w-full md:w-auto">
                    <CountryTicker
                      countries={["CANADA", "UK", "USA", "EUROPE"]}
                      interval={2400}
                      className="block text-3xl font-bold text-slate-900 tracking-tight min-w-[120px] h-9"
                    />
                    <span className="block text-xs font-semibold text-emerald-600 uppercase tracking-widest mt-1">Destination</span>
                 </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Head Office</p>
                    <p className="text-sm text-slate-600">306, 3rd Floor, Tilak Raj Complex, Opp Sebi Bhavan, Panchavati Society 1st Lane, Ahmedabad - 380006</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h4>
              <form className="space-y-6" action={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Name</label>
                    <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all bg-slate-50" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone</label>
                    <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all bg-slate-50" placeholder="+91 ..." />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all bg-slate-50" placeholder="you@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Service Interest</label>
                  <select name="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all bg-slate-50">
                    <option value="Student Overseas College Fees Payment">Student Overseas College Fees Payment</option>
                    <option value="Overseas Block Account Payments">Overseas Block Account Payments</option>
                    <option value="DMC Tour Payments and FIT Tour Payments">DMC Tour Payments and FIT Tour Payments</option>
                    <option value="Currency Exchange">Currency Exchange</option>
                    <option value="Travel Cards">Travel Cards</option>
                    <option value="Family Maintainence">Family Maintainence</option>
                    <option value="Gift Remittance">Gift Remittance</option>
                    <option value="Overseas Health Insuranc">Overseas Health Insuranc</option>
                    <option value="Demand Draft for Immigration">Demand Draft for Immigration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all bg-slate-50 resize-none" placeholder="How can we help you?" />
                </div>

                <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-medium text-lg rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                    </>
                  ) : (
                    <>
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-xs text-slate-400">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>

          </div>
        </Container>
      </div>

    </section>
  )
}
