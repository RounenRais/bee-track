"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gray-900 flex items-center overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/4588942/pexels-photo-4588942.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Arıcı koruyucu giysisiyle çalışırken"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-gray-900/75" />
      </div>

      {/* Honeycomb decoration */}
      <HoneycombDecoration />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Akıllı Arıcılık Teknolojisi
          </span>

          {/* Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gold leading-none tracking-tight mb-4">
            BeeTrack
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-200 font-light mb-4 italic">
            "Arıcının gözü, kovanın sesi."
          </p>

          <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
            Kovanlarınızı gerçek zamanlı izleyin. Oğul vermeden önce haberdar
            olun. Hasat zamanını akıllı verilerle belirleyin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#fiyatlandirma"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gold text-gray-900 font-semibold text-base hover:bg-yellow-400 transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5"
            >
              Erken Erişim İste
            </a>
            <a
              href="#nasil-calisir"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gold/60 text-gold font-semibold text-base hover:bg-gold/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Nasıl Çalışır?
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-white/10">
            {[
              { value: "500+", label: "Aktif Kovan" },
              { value: "%94", label: "Oğul Doğruluğu" },
              { value: "7/24", label: "İzleme" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gold">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HoneycombDecoration() {
  const hexagons = [
    { size: 120, top: "12%", right: "8%",  opacity: 0.18, animClass: "animate-floatA" },
    { size: 80,  top: "28%", right: "22%", opacity: 0.28, animClass: "animate-floatB" },
    { size: 150, top: "45%", right: "4%",  opacity: 0.12, animClass: "animate-floatC" },
    { size: 60,  top: "60%", right: "28%", opacity: 0.24, animClass: "animate-floatA" },
    { size: 100, top: "70%", right: "14%", opacity: 0.16, animClass: "animate-floatB" },
    { size: 70,  top: "15%", right: "36%", opacity: 0.18, animClass: "animate-floatC" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hexagons.map((h, i) => (
        <div
          key={i}
          className={`hexagon absolute ${h.animClass}`}
          style={{
            width: h.size,
            height: h.size,
            top: h.top,
            right: h.right,
            background: `rgba(245, 166, 35, ${h.opacity})`,
          }}
        />
      ))}
    </div>
  );
}
