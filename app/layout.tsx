import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeeTrack — Akıllı Kovan Takip Sistemi",
  description:
    "BeeTrack, arı kolonilerinizi uzaktan izlemenizi sağlayan akıllı kovan takip sistemidir. Oğul uyarısı, hasat tahmini ve koloni sağlığı takibi tek bir platformda.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={geist.className}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
