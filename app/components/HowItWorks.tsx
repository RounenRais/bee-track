import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Sensörü Yerleştir",
    description:
      "Sensör kutusunu kovanın altına koy. Manyetik bağlantı sayesinde hiçbir alet kullanmana gerek yok.",
  },
  {
    number: "2",
    title: "İstasyonu Kur",
    description:
      "Merkezi LoRa istasyonunu arılığın ortasına yerleştir. Güneş paneli desteğiyle elektriksiz çalışır.",
  },
  {
    number: "3",
    title: "Uygulamayı İndir",
    description:
      "BeeTrack uygulamasını App Store veya Google Play'den indir. Hesap oluşturma 2 dakika sürer.",
  },
  {
    number: "4",
    title: "Takip Et",
    description:
      "Tüm kovanlarını tek ekrandan izle. Uyarıları al, raporları incele, doğru zamanda müdahale et.",
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Nasıl Çalışır?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            4 Adımda Başla
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Teknik bilgi gerekmez. İlk kovanını 15 dakika içinde sisteme bağla.
          </p>
        </div>

        {/* Two-column: steps + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-5">
                {/* Number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 hexagon bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-base font-black">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-navy/40 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src="https://images.pexels.com/photos/5247968/pexels-photo-5247968.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Arıcı petek çerçevesini tutarken"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Kovan #14 — Anlık Ağırlık</div>
                  <div className="text-xl font-bold text-gray-900">32.4 kg</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  Sağlıklı
                </div>
              </div>
              <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gold rounded-full" />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Hasat eşiği: 35 kg</span>
                <span>%76</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
