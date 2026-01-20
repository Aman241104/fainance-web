import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#about" className="hover:text-emerald-700 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-emerald-700 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-emerald-700 transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600">
               <li><Link href="#" className="hover:text-emerald-700 transition-colors">Money Transfer</Link></li>
               <li><Link href="#" className="hover:text-emerald-700 transition-colors">Forex</Link></li>
               <li><Link href="#" className="hover:text-emerald-700 transition-colors">Travel Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-600">
               <li><Link href="#" className="hover:text-emerald-700 transition-colors">Help Center</Link></li>
               <li><Link href="#" className="hover:text-emerald-700 transition-colors">Contact Us</Link></li>
               <li><Link href="#" className="hover:text-emerald-700 transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
               <li>123 Finance Street</li>
               <li>New York, NY 10001</li>
               <li>support@prihaan.com</li>
               <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 mt-8">
          <div className="max-w-3xl mx-auto text-center">
             <h5 className="font-semibold text-slate-500 text-xs uppercase tracking-wider mb-2">Regulatory Disclosures</h5>
             <p className="text-xs text-slate-400 leading-relaxed">
               Prihaan Financial Services is a registered Money Services Business regulated by the Financial Conduct Authority (FCA) and Reserve Bank of India (RBI). 
               All transactions are subject to AML/KYC regulations. Past performance of currency is not indicative of future results.
               Ensure you read the Product Disclosure Statement before making any financial decisions.
             </p>
             <p className="mt-4 text-xs text-slate-400">
               &copy; {new Date().getFullYear()} Prihaan Financial Services. All rights reserved.
             </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
