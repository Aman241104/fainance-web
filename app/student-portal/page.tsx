"use client";

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { submitStudentForm } from '@/actions/submit-student';
import { Loader2, Send, GraduationCap, Globe, Plane, Wallet, ArrowLeft } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import Link from 'next/link';

import { CurrencyBackground } from '@/components/CurrencyBackground';
import { FloatingCoins } from '@/components/FloatingCoins';

export default function StudentPortal() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    
    // 1. Submit to Sheets
    const result = await submitStudentForm({ success: false }, formData);

    setIsSubmitting(false);

    // 2. Prepare WhatsApp Redirection
    const name = formData.get('name') as string;
    const country = formData.get('targetCountry') as string;
    const budget = formData.get('budget') as string;
    const intake = formData.get('intake') as string;
    const colleges = formData.get('colleges') as string;
    const visa = formData.get('visaHistory') as string;
    
    const waMessage = `*🎓 New Student Profile Submission*\n\n` +
      `*👤 Personal Details*\n` +
      `Name: ${name}\n` +
      `City: ${formData.get('city')}\n\n` +
      `*📚 Study Plans*\n` +
      `Target: ${country} (${intake})\n` +
      `Priority Colleges: ${colleges}\n\n` +
      `*💰 Financial & Visa*\n` +
      `Budget: ${budget}\n` +
      `Visa History: ${visa || 'N/A'}\n\n` +
      `_Please review my profile for consultation._`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10 md:py-20 relative overflow-hidden">
      <CurrencyBackground count={20} className="text-emerald-500 z-0" opacity={0.15} />
      <FloatingCoins count={3} className="z-10 opacity-70" />
      <Container className="max-w-4xl">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-emerald-600 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6"
          >
            <GraduationCap className="w-4 h-4" />
            Student Portal
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Start Your <span className="text-emerald-600">Global Journey</span>.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your academic goals and financial preferences. We'll build a personalized roadmap for your study abroad success.
          </p>
        </div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
        >
          <form action={handleSubmit} className="divide-y divide-slate-100">
            
            {/* Section 1: Personal Details */}
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Globe className="w-4 h-4" /></div>
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-slate-50 transition-all" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-slate-50 transition-all" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-slate-50 transition-all" placeholder="+91 ..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Current City</label>
                  <input name="city" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-slate-50 transition-all" placeholder="e.g. Ahmedabad" />
                </div>
              </div>
            </div>

            {/* Section 2: Study Preferences */}
            <div className="p-8 md:p-10 bg-slate-50/30">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><GraduationCap className="w-4 h-4" /></div>
                Study Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Target Country</label>
                  <select name="targetCountry" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-white transition-all">
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Preferred Intake</label>
                  <select name="intake" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-white transition-all">
                    <option value="Fall 2025">Fall 2025</option>
                    <option value="Spring 2026">Spring 2026</option>
                    <option value="Fall 2026">Fall 2026</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Top 5 Priority Colleges</label>
                <textarea name="colleges" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-white transition-all resize-none" placeholder="1. Seneca&#10;2. Humber&#10;3. ..." />
                <p className="text-xs text-slate-500">List your top preferences in order of priority.</p>
              </div>
            </div>

            {/* Section 3: Financial & Visa */}
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><Wallet className="w-4 h-4" /></div>
                Financial & Visa Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Total Budget (INR)</label>
                  <select name="budget" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-slate-50 transition-all">
                    <option value="Under 15 Lakhs">Under 15 Lakhs</option>
                    <option value="15 - 25 Lakhs">15 - 25 Lakhs</option>
                    <option value="25 - 40 Lakhs">25 - 40 Lakhs</option>
                    <option value="40 Lakhs+">40 Lakhs+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Additional Services</label>
                  <div className="flex flex-col gap-2 pt-2">
                    <label className="flex items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" name="services" value="SOP Writing" className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" /> SOP / Essay Writing
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" name="services" value="Visa Filing" className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" /> Visa Filing Support
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" name="services" value="Education Loan" className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" /> Education Loan
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Visa History / Remarks</label>
                <textarea name="visaHistory" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 outline-none bg-slate-50 transition-all resize-none" placeholder="Any previous refusals, gap years, or specific concerns?" />
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-8 md:p-10 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-slate-500 text-center md:text-left">
                By submitting, you agree to receive consultation updates via WhatsApp.
              </p>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto h-12 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-xl px-10 shadow-lg shadow-emerald-200 disabled:opacity-70"
              >
                {isSubmitting ? (
                   <span className="flex items-center gap-2"><Loader2 className="animate-spin w-5 h-5" /> Processing...</span>
                ) : (
                   <span className="flex items-center gap-2">Submit Profile <Send className="w-5 h-5" /></span>
                )}
              </Button>
            </div>

          </form>
        </motion.div>
      </Container>
    </main>
  );
}
