import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

const title = "BeeTrack — Akıllı Kovan Takip Sistemi";
const description =
  "BeeTrack, arı kolonilerinizi uzaktan izlemenizi sağlayan akıllı kovan takip sistemidir. Oğul uyarısı, hasat tahmini ve koloni sağlığı takibi tek bir platformda.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://beetrackapp.com"
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "BeeTrack",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BeeTrack" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
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
