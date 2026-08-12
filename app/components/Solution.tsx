import Image from "next/image";

const flowSteps = [
  { label: "Sensör Kutusu", icon: SensorIcon, desc: "Ağırlık, sıcaklık, titreşim" },
  { label: "LoRa", icon: LoraIcon, desc: "Düşük güç, uzun menzil" },
  { label: "ESP32", icon: Esp32Icon, desc: "Merkezi işlem birimi" },
  { label: "GSM / Bulut", icon: CloudIcon, desc: "Güvenli veri aktarımı" },
  { label: "Mobil Uygulama", icon: MobileIcon, desc: "iOS & Android" },
];

const featureTags = [
  "Ağırlık Takibi",
  "Sıcaklık",
  "Titreşim",
  "Hava Durumu",
  "YZ Analizi",
];

export default function Solution() {
  return (
    <section id="cozum" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Çözüm
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Uçtan Uca Akıllı İzleme
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            BeeTrack sensörden telefona kesintisiz veri akışı sağlar. İnternet
            olmayan bölgelerde bile GSM bağlantısıyla çalışır.
          </p>
        </div>

        {/* Two-column layout: diagram + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          {/* Flow diagram */}
          <div className="flex flex-col items-center gap-4">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center w-full">
                <div className="flex items-center gap-4 w-full max-w-sm">
                  <div className="w-14 h-14 hexagon bg-navy flex items-center justify-center flex-shrink-0 shadow-md">
                    <step.icon />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{step.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{step.desc}</div>
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="w-full max-w-sm my-1">
                    {/* genişlik, üstteki altıgen ikonla birebir aynı → ok tam ortada kalır */}
                    <div className="w-14 flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4v16M4 12l8 8 8-8" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="https://images.pexels.com/photos/5247965/pexels-photo-5247965.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Arılık çerçevesinde petekler üzerindeki arılar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-medium">
                Doğadan ilham, teknoloji ile güçlendirilmiş
              </p>
            </div>
          </div>
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {featureTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-navy text-white text-sm font-medium border border-gold/20 hover:border-gold transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Inline SVG icons */
function SensorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="14" width="20" height="10" rx="2" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <path d="M10 14v-4a4 4 0 018 0v4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="14" cy="19" r="1.5" fill="#F5A623" />
    </svg>
  );
}

function LoraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <path d="M6 20c2-4 4-6 8-6s6 2 8 6" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M10 16c1-2 2-3 4-3s3 1 4 3" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="14" cy="20" r="1.5" fill="#F5A623" />
    </svg>
  );
}

function Esp32Icon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      {/* modül kartı */}
      <rect x="7" y="4" width="14" height="20" rx="1.5" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      {/* PCB anten */}
      <path d="M10 7h3v2.2h-3v2.2h3" stroke="#F5A623" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* metal kapak */}
      <rect x="9.5" y="13.5" width="9" height="7" rx="1" stroke="#F5A623" strokeWidth="1.5" fill="none" />
      {/* pin başlıkları */}
      <line x1="4.5" y1="15" x2="7" y2="15" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="4.5" y1="18.5" x2="7" y2="18.5" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="21" y1="15" x2="23.5" y2="15" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="21" y1="18.5" x2="23.5" y2="18.5" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <path d="M20 20H9a5 5 0 010-10 5 5 0 019.9-1A4 4 0 0120 17v3z" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <rect x="8" y="3" width="12" height="22" rx="2" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <circle cx="14" cy="21" r="1" fill="#F5A623" />
      <line x1="11" y1="7" x2="17" y2="7" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
