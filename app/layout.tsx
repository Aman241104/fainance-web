import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed to Inter
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter", // Changed variable name
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prihaan Financial Services | Global Finance, Simplified",
  description:
    "Secure foreign currency exchange, remittance, and financial services for global citizens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
