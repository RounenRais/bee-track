const plans = [
  {
    name: "Bireysel",
    price: "150–200₺",
    period: "kovan başına / ay",
    description: "Küçük ve orta ölçekli arıcılar için ideal başlangıç paketi.",
    features: [
      "1–20 kovan desteği",
      "Gerçek zamanlı izleme",
      "Oğul & hasat uyarıları",
      "7 günlük geçmiş veri",
      "iOS & Android uygulama",
    ],
    cta: "Hemen Başla",
    highlighted: false,
  },
  {
    name: "Kooperatif",
    price: "Özel Fiyat",
    period: "toplu paket",
    description: "Arı kooperatifleri ve büyük işletmeler için özel fiyatlandırma.",
    features: [
      "20+ kovan desteği",
      "Merkezi yönetim paneli",
      "Takım hesapları",
      "90 günlük geçmiş veri",
      "Öncelikli teknik destek",
      "Özel raporlama",
    ],
    cta: "Teklif Al",
    highlighted: true,
  },
  {
    name: "Kurumsal",
    price: "Görüşelim",
    period: "araştırma & büyük ölçek",
    description: "Üniversiteler, araştırma kurumları ve büyük üretim tesisleri için.",
    features: [
      "Sınırsız kovan",
      "API erişimi & entegrasyon",
      "Özel YZ modelleri",
      "Tam geçmiş veri",
      "Yerinde kurulum desteği",
      "SLA garantisi",
    ],
    cta: "İletişime Geç",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="fiyatlandirma" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Fiyatlandırma
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Her Ölçeğe Uygun Plan
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Erken erişim döneminde özel fiyatlarla başla. İlk 3 ay %50
            indirimli.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-navy border-gold shadow-2xl shadow-navy/20 scale-105"
                  : "bg-gray-50 border-gray-200 hover:border-gold/40 hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gold text-gray-900 text-xs font-bold shadow-lg">
                    En Popüler
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div className={plan.highlighted ? "text-white" : "text-gray-900"}>
                  <span className="text-3xl font-black">{plan.price}</span>
                  <span className={`text-xs ml-2 ${plan.highlighted ? "text-gray-300" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                      <circle cx="8" cy="8" r="7" fill="#F5A623" opacity="0.2" />
                      <path d="M5 8l2 2 4-4" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? "text-gray-200" : "text-gray-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#iletisim"
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-gold text-gray-900 hover:bg-yellow-400 shadow-lg shadow-gold/30"
                    : "bg-navy text-white hover:bg-navy/80"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
