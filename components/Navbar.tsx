"use client";

import Link from 'next/link';
import CardNav, { CardNavItem } from '@/components/CardNav';
import { WHATSAPP_LINK } from '@/lib/constants';

export function Navbar() {
  const logo = (
    <Link href="/" className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-emerald-700 flex items-center justify-center">
        <span className="text-white font-bold text-lg">P</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-slate-900">
        Prihaan<span className="text-emerald-700">.</span>
      </span>
    </Link>
  );

  const items: CardNavItem[] = [
    {
      label: "Company",
      bgColor: "#0f172a", // slate-900
      textColor: "#f8fafc", // slate-50
      links: [
        { label: "Home", href: "/", ariaLabel: "Home Page" },
        { label: "Trusted By", href: "#trust", ariaLabel: "Our Partners" },
        { label: "Get Started", href: "#cta", ariaLabel: "Get Started Section" }
      ]
    },
    {
      label: "Services", 
      bgColor: "#047857", // emerald-700
      textColor: "#fff",
      links: [
        { label: "Money Transfer", href: "#services", ariaLabel: "Remittance Services" },
        { label: "Forex", href: "#services", ariaLabel: "Foreign Exchange" },
        { label: "Travel Insurance", href: "#services", ariaLabel: "Insurance Services" }
      ]
    },
    {
      label: "Support",
      bgColor: "#1e293b", // slate-800
      textColor: "#f8fafc",
      links: [
        { label: "Help Center", href: WHATSAPP_LINK, ariaLabel: "Help Center" },
        { label: "Contact Us", href: WHATSAPP_LINK, ariaLabel: "Contact Support" },
        { label: "FAQs", href: WHATSAPP_LINK, ariaLabel: "Frequently Asked Questions" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      items={items}
      baseColor="#fff"
      menuColor="#0f172a"
      buttonBgColor="#047857"
      buttonTextColor="#fff"
      ease="power3.out"
      className="font-sans"
    />
  );
}
