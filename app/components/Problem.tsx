const problems = [
  {
    number: "01",
    title: "Oğul Kaybı",
    description:
      "Koloninizin oğul verdiğini ancak birkaç gün sonra fark edersiniz. Kaçan arıları geri getirme şansınız büyük ölçüde ortadan kalkar, sezonluk veriminiz ciddi düşer.",
  },
  {
    number: "02",
    title: "Gereksiz Ziyaretler",
    description:
      "Her hafta arılığa gitmek hem zaman hem de yakıt israfıdır. Kovanı açmak ise arıları strese sokar. Gerçekte ne zaman müdahale gerektiğini bilemezsiniz.",
  },
  {
    number: "03",
    title: "Hasat Belirsizliği",
    description:
      "Balın ne zaman olgunlaştığını tahmin etmek çoğu zaman sezgiye dayanır. Erken veya geç hasat; hem kaliteyi hem de verimi olumsuz etkiler.",
  },
];

export default function Problem() {
  return (
    <section id="sorun" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Sorun
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Geleneksel Arıcılığın Kör Noktaları
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Arıcıların yüzde sekseninden fazlası her yıl önlenebilir kayıplar
            yaşıyor. Sorunun kökü, kovanların içinde ne olduğunu zamanında
            bilememek.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.number}
              className="bg-navy rounded-2xl p-8 border border-navy hover:border-gold/60 hover:shadow-xl hover:shadow-navy/20 transition-all duration-300 group"
            >
              <div className="text-5xl font-black text-gold/25 group-hover:text-gold/50 transition-colors duration-300 mb-4 leading-none">
                {p.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
