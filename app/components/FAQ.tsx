"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Sistemi kurmak zor mu?",
    a: "Hayır. Sensör kutusunu kovanın altına yerleştirmek için hiçbir teknik bilgi gerekmez. Manyetik bağlantı sistemi sayesinde alet kullanmadan 2 dakikada kurulum tamamlanır. Merkezi istasyonu da dahil tüm kurulum ortalama 15 dakika sürer.",
  },
  {
    q: "İnternet olmayan arılıklarda çalışır mı?",
    a: "Evet. Sensörler ve merkezi istasyon arasındaki bağlantı LoRa teknolojisiyle sağlanır; bu nedenle Wi-Fi gerekmez. Merkezi istasyon, internet yerine GSM/4G ağını kullanarak verileri buluta iletir. Kapsama alanı olan her yerde çalışır.",
  },
  {
    q: "Kaç kovan için uygundur?",
    a: "Bireysel plan 1 ile 20 kovanı destekler. 20'den fazla kovanınız varsa Kooperatif veya Kurumsal planları tercih edebilirsiniz. Tek bir merkezi istasyon 500 metrelik yarıçap içindeki tüm sensörlerle iletişim kurabilir.",
  },
  {
    q: "Sensörler pil mi kullanıyor? Ne kadar dayanır?",
    a: "Sensörler düşük güç tüketimine sahip LoRa çipleri ve AA pil kullanır. Tam şarjla yaklaşık 12–18 ay kullanım ömrü sunar. İsteğe bağlı güneş paneli aksesuarıyla pili hiç değiştirmeden çalıştırabilirsiniz.",
  },
  {
    q: "Verilerimi ne kadar süre saklıyorsunuz?",
    a: "Bireysel planda 7 gün, Kooperatif planında 90 gün geçmiş veri tutulur. Kurumsal planda tüm veriler süresiz saklanır ve dışa aktarılabilir. KVKK uyumlu altyapımızla verileriniz yalnızca sizin onayladığınız kişilerle paylaşılır.",
  },
  {
    q: "Oğul uyarısı ne kadar güvenilir?",
    a: "Modelimiz sahada test edilen 10.000'den fazla kovan kaydıyla eğitilmiştir. Bağımsız testlerde %94 doğruluk oranına ulaşmıştır. Uyarı, oğul olayından 24–48 saat önce iletilir; böylece müdahale için yeterli süreniz olur.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            SSS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Sık Sorulan Sorular
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-gold/50 bg-white shadow-md shadow-gold/5"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-semibold leading-snug ${isOpen ? "text-gold" : "text-gray-900"}`}>
                    {faq.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M5 7.5l5 5 5-5"
                      stroke={isOpen ? "#F5A623" : "#9CA3AF"}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
