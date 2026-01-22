import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pb-8">
      <Container>
        
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
  )
}
