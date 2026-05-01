const features = [
  {
    title: "Oğul Erken Uyarısı",
    description:
      "Titreşim ve ağırlık analizine dayalı YZ modeli, oğul vermeden 24-48 saat öncesinde sizi uyarır.",
    icon: SwarmIcon,
  },
  {
    title: "Hasat Zamanı Tahmini",
    description:
      "Kovan ağırlığındaki değişim trendlerini analiz ederek optimum hasat zamanını tespit eder.",
    icon: HarvestIcon,
  },
  {
    title: "Koloni Sağlığı Takibi",
    description:
      "İç sıcaklık ve nem verilerini sürekli izleyerek koloni stresini ve hastalık riskini erken saptar.",
    icon: HealthIcon,
  },
  {
    title: "Hava Durumu Entegrasyonu",
    description:
      "Yerel hava tahminleriyle kovan verilerini birleştirerek arı aktivitesini önceden tahmin eder.",
    icon: WeatherIcon,
  },
  {
    title: "Uzaktan İzleme",
    description:
      "İstediğiniz yerden, istediğiniz zaman tüm kovanlarınızı tek ekrandan gerçek zamanlı görüntüleyin.",
    icon: RemoteIcon,
  },
  {
    title: "Kolay Kurulum",
    description:
      "Vida, lehim, kodlama gerektirmez. Sensör kutusunu kovanın altına yerleştirin, uygulamayı açın.",
    icon: SetupIcon,
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Özellikler
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Kovanınızı Gerçekten Anlayan Sistem
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Her özellik, gerçek arıcıların gerçek sorunlarından doğdu. Veriyi
            aksiyona dönüştüren akıllı algoritmalar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 hexagon bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                <f.icon />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Icons */
function SwarmIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="3" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <circle cx="4" cy="7" r="1.5" fill="#F5A623" />
      <circle cx="18" cy="7" r="1.5" fill="#F5A623" />
      <circle cx="4" cy="15" r="1.5" fill="#F5A623" />
      <circle cx="18" cy="15" r="1.5" fill="#F5A623" />
      <circle cx="11" cy="2" r="1.5" fill="#F5A623" />
      <circle cx="11" cy="20" r="1.5" fill="#F5A623" />
    </svg>
  );
}

function HarvestIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M4 16l4-8 4 4 4-8" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8l2-2 2 2" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2" y1="19" x2="20" y2="19" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M2 11h4l3-7 4 14 3-7h4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WeatherIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="8" r="3" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <path d="M5 15a6 6 0 0112 0" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <line x1="11" y1="2" x2="11" y2="3.5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5.5" y1="3.5" x2="6.5" y2="4.5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function RemoteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="6" y="2" width="10" height="16" rx="2" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <circle cx="11" cy="15" r="1" fill="#F5A623" />
      <line x1="8" y1="5" x2="14" y2="5" stroke="#F5A623" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 20h18" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SetupIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M9 3H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14 2l6 6-9 9H5v-6l9-9z" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
