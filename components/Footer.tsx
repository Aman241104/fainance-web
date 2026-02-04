import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

import { CurrencyBackground } from './CurrencyBackground';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 font-sans relative overflow-hidden">
      <CurrencyBackground count={15} className="text-emerald-500 z-0" opacity={0.15} />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12 mb-16 px-4 md:px-0">
          
          {/* Column 1: Brand & Credibility */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12 rounded-full overflow-hidden shadow-md">
                <Image src="/logo.png" alt="Prihaan Logo" fill className="object-cover" />
              </div>
              <div className="relative h-12 w-32 md:w-32">
                 <Image 
                   src="/name.png" 
                   alt="Prihaan" 
                   fill 
                   className="object-contain object-left" 
                 />
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              A premier global financial firm specializing in student fees and high-value remittances since 2020.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wide">
              <span>🏆 150 Cr+ Turnover Achieved</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Site Nav) */}
          <div>
            <h5 className="text-slate-900 font-semibold text-base mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="/" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Home</Link></li>
              <li><Link href="#about" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">About Us</Link></li>
              <li><Link href="#services" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Services</Link></li>
              <li><Link href="#corporate" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Corporate</Link></li>
              <li><Link href="/student-portal" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Student Portal</Link></li>
              <li><Link href="#cta" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Global Connectivity */}
          <div>
            <h5 className="text-slate-900 font-semibold text-base mb-6">Our Network</h5>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li>
                <span className="flex items-center gap-2 hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all cursor-pointer">
                  Global Network
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all cursor-pointer">
                  BNI Ares Chapter Member
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all cursor-pointer">
                  24-City Support Network
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Specialized Services */}
          <div>
            <h5 className="text-slate-900 font-semibold text-base mb-6">Our Services</h5>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="#services" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Flywire/Convera Support</Link></li>
              <li><Link href="#services" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Overseas Block Accounts</Link></li>
              <li><Link href="#services" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Tour & Travel Payments</Link></li>
              <li><Link href="#services" className="hover:text-emerald-700 hover:underline hover:decoration-emerald-500/50 underline-offset-4 transition-all">Currency Exchange</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact & Social */}
          <div>
            <h5 className="text-slate-900 font-semibold text-base mb-6">Get in Touch</h5>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3 items-start group">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="mailto:ankit.patel@prihaanfin.com" className="hover:text-emerald-700 text-slate-700 font-medium transition-colors break-words">
                  ankit.patel@prihaanfin.com
                </a>
              </li>
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  306, 3rd Floor, Tilak Raj Complex, Ahmedabad - 380006
                </span>
              </li>
              <li className="pt-4 flex gap-4">
                <Link href="https://instagram.com/prihaanfin" target="_blank" className="p-2 bg-slate-100 rounded-lg hover:bg-emerald-600 hover:text-white transition-all text-slate-600">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-2 bg-slate-100 rounded-lg hover:bg-emerald-600 hover:text-white transition-all text-slate-600">
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Prihaan Financial Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
             <Link href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-emerald-700 transition-colors">Terms of Service</Link>
             <Link href="#" className="hover:text-emerald-700 transition-colors">Sitemap</Link>
             <span className="hidden md:inline text-slate-300">|</span>
             <Link href="https://wa.me/918104933816" target="_blank" className="hover:text-emerald-700 transition-colors font-bold text-emerald-600/80">Developed by Gravity Media Marketing</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
