import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";
import { Corporate } from "@/components/Corporate";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Corporate />
      <CTA />
      <Footer />
    </main>
  );
}
