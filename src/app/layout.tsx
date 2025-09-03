import type { Metadata } from "next";
import { Inter, Space_Grotesk, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Golden Hour Foundation - Save Golden Hour, Save Life",
    template: "%s | Golden Hour Foundation",
  },
  description: "Empowering communities with first aid and CPR awareness since 2018. Professional training, free medical camps, and emergency services across India.",
  keywords: ["first aid", "CPR training", "medical camps", "emergency services", "health awareness"],
  authors: [{ name: "Golden Hour Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goldenhour.org",
    siteName: "Golden Hour Foundation",
    title: "Golden Hour Foundation - Save Golden Hour, Save Life",
    description: "Empowering communities with first aid and CPR awareness since 2018.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${nunitoSans.variable}`}>
      <body className="min-h-screen bg-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
