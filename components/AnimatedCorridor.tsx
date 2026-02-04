"use client";

import { CountryTicker } from "./CountryTicker";

const SOURCE_COUNTRIES = ["India", "UAE", "Singapore", "USA"];
const DEST_COUNTRIES = ["Canada", "UK", "USA", "Australia", "Europe", "New Zealand"];

export function AnimatedCorridor() {
  return (
    <div className="flex flex-col">
       <div className="flex items-end gap-1 text-3xl font-bold text-slate-900 leading-none">
        
        {/* Source Country */}
        <CountryTicker 
          countries={SOURCE_COUNTRIES} 
          interval={2000}
          className="h-9 min-w-[100px]" 
        />

        <span className="text-emerald-600 mx-1">-</span>

        {/* Dest Country */}
         <CountryTicker 
          countries={DEST_COUNTRIES} 
          interval={2400}
          className="h-9 min-w-[120px]" 
        />

      </div>
      <p className="text-sm text-white lg:text-slate-900 md:text-slate-900 font-bold mt-1">Global Network</p>
    </div>
  );
}
