@AGENTS.md
Build a modern, professional landing page website for BeeTrack — a smart beehive monitoring system — using Next.js 14 App Router, TypeScript, and Tailwind CSS.
Brand Identity:

Primary color: Navy #1E3B5A
Accent color: Gold #F5A623
Alert color: Red #E84545
Success color: Green #2E8B57
Background: Dark #111827 for hero, light #F8F9FA for sections
Font: Inter or Geist
Motif: Hexagon/honeycomb geometry used as decorative elements throughout

Site Structure (App Router):
app/
  page.tsx          → Landing page
  layout.tsx        → Root layout with navbar and footer
  components/
    Navbar.tsx
    Hero.tsx
    Problem.tsx
    Solution.tsx
    Features.tsx
    HowItWorks.tsx
    Pricing.tsx
    FAQ.tsx
    Footer.tsx
Section Details:
Hero → Full screen dark section. Large "BeeTrack" heading in gold. Subtitle: "Arıcının gözü, kovanın sesi." Two CTA buttons: "Erken Erişim İste" (gold, filled) and "Nasıl Çalışır?" (outlined). Animated honeycomb hexagons on the right side as decoration.
Problem → Three cards side by side. 01 Oğul Kaybı, 02 Gereksiz Ziyaretler, 03 Hasat Belirsizliği. Each card has a large number, title and short description. Dark navy cards.
Solution / How It Works → Horizontal flow diagram showing: Sensör Kutusu → LoRa → Raspberry Pi → GSM/Bulut → Mobil Uygulama. Connected with arrows. Below it, feature tags: Ağırlık Takibi, Sıcaklık, Titreşim, Hava Durumu, YZ Analizi.
Features → Grid of 6 feature cards with icons. Oğul Erken Uyarısı, Hasat Zamanı Tahmini, Koloni Sağlığı Takibi, Hava Durumu Entegrasyonu, Uzaktan İzleme, Kolay Kurulum.
HowItWorks → Numbered steps: 1. Sensör kutusunu kovanın altına yerleştir 2. Merkezi istasyonu arılığa kur 3. Mobil uygulamayı indir 4. Kovanlarını telefonundan takip et.
Pricing → Three pricing cards: Bireysel (kovan başına aylık 150-200₺), Kooperatif (toplu paket, özel fiyat), Kurumsal (araştırma kurumları için). Middle card highlighted in gold as "En Popüler".
FAQ → Accordion component. 5-6 sık sorulan soru. Örnek: "Sistemi kurmak zor mu?", "İnternet olmayan arılıklarda çalışır mı?", "Kaç kovan için uygundur?"
Footer → Logo, kısa açıklama, iletişim bilgileri, sosyal medya ikonları.
Technical Requirements:

Use next/font for typography
All components server components by default, use "use client" only where necessary (accordion, animations)
Smooth scroll between sections
Fully responsive, mobile-first
Use Tailwind custom colors defined in tailwind.config.ts
Hexagon shapes built with CSS clip-path or SVG, no external icon libraries unless shadcn/ui
Add subtle scroll animations using Intersection Observer or Framer Motion
SEO meta tags in layout.tsx: title "BeeTrack — Akıllı Kovan Takip Sistemi", description in Turkish

Do not use: any external image files, placeholder images, or lorem ipsum text. All content should be real BeeTrack content in Turkish.