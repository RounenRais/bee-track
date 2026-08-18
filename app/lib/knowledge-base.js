// BeeTrack Proje Bilgi Tabanı
// TeknikRapor.pdf ve PazarAnalizi.pdf içeriğinden derlenmiştir.
// Chatbot yalnızca bu bilgiye dayanarak cevap verir.

const BEETRACK_KNOWLEDGE_BASE = `
# BEETRACK PROJESİ — BİLGİ TABANI

## Proje Nedir
BeeTrack, arı kovanlarının uzaktan, gerçek zamanlı takibini sağlayan bir IoT
(nesnelerin interneti) sistemidir. Kovan altına yerleştirilen bir sensör ünitesi
kovan ağırlığını, sıcaklığını ve nemini ölçer, bu verileri LoRa haberleşmesiyle
bir gateway üzerinden buluta iletir ve arıcı mobil uygulama üzerinden
kovanlarını uzaktan izleyebilir.

## Sistem Mimarisi
- Kovan Sensör Düğümü: ESP32 mikrodenetleyici tabanlı, load cell (yük hücresi) ile ağırlık ölçer.
- HX711 (24-bit ADC) ölçüm modülü ağırlık verisini dijitalleştirir.
- LoRa SX1278 modülü ile uzun menzilli, düşük güçlü haberleşme.
- Gateway birimi verileri toplayıp buluta aktarır.
- Sıcaklık ve nem sensörleri kovan iç ortamını izler.

## Ağırlık Ölçümü
- Ölçüm aralığı: 0–150 kg (kesintisiz).
- Mekanik dayanım: yük hücresi 200 kg pik yüke kadar deformasyona uğramaz (güvenlik payı).
- Tipik boş kovan: 15–25 kg; bal akımında dolu kovan: 80–120 kg.
- Hedef ölçüm hassasiyeti: termal kompanzasyon ve filtreleme sonrası ±50 gram (0–150 kg aralığında).
- Ham çözünürlük: 10 gram (24-bit ADC); kullanıcıya yansıyan anlamlı adım: 50 gram (çevresel gürültü nedeniyle).

## Ölçüm ve Gönderim Sıklığı
- Standart ölçüm periyodu: 30 dakikada bir "derin uyku" modundan uyanıp ölçüm yapar.
- Sezonluk adaptasyon: bal akımı döneminde 15 dakikaya düşürülebilir, kış salkımında 2 saate çıkarılabilir.
- Her ölçüm döngüsünde 2 saniyede 10 ardışık ham örnek alınır; Medyan Filtresi ve Hareketli Ortalama ile
  gürültü (rüzgar, arı hareketi) filtrelenir.
- Rutin veri gönderimi: saatte 1 kez toplu iletim (enerji tasarrufu için ölçümden ayrı tutulur).
- Olay tetiklemeli anlık uyarı: 10 dakika içinde ≥2.5 kg ani ağırlık düşüşü tespit edilirse (oğul verme /
  yağmalama riski) sistem beklemeden alarm gönderir.

## Kalibrasyon (3 Aşamalı)
1. Donanım/Fabrika Kalibrasyonu: Üretimde 10 kg ve 50 kg referans kütlelerle sıfırlama, kazanç
   katsayıları EEPROM'a yazılır.
2. Yazılımsal Termal Kompanzasyon: Sıcaklık sensörü verisiyle, sıcaklığa bağlı ağırlık sapması formülle
   düzeltilir (A_düzeltilmiş = A_ham − [a × (T_anlık − T_kalibrasyon)]).
3. Uzaktan Sıfırlama (Remote Tare): Arıcı, ballık eklediğinde mobil uygulamadan tek tıkla darasını
   uzaktan alabilir.

## Enerji ve Batarya
- ESP32'nin Deep Sleep (derin uyku) modu enerji tasarrufu sağlar; cihaz yalnızca ölçüm/iletim anında uyanır.
- Hedeflenen batarya ömrü: güneş paneli desteği olmadan 12–18 ay.
- Enerji tüketiminin %80'inden fazlası haberleşme (LoRa/GSM) modülünden kaynaklanır; bu yüzden ölçüm
  sıklığı ile gönderim sıklığı ayrılmıştır.
- Batarya kritik seviyeye düştüğünde gönderim sıklığı otomatik azaltılır; opsiyonel mikro güneş paneli sunulur.

## Çevrim Dışı Veri Saklama ve Haberleşme Güvenliği
- Şebeke/LoRa kapsama alanı olmayan yerlerde veriler cihazın dahili EEPROM/Flash hafızasında saklanır.
- 1–20 kovanlık işletmelerde 7 gün, 21+ kovanlık işletmelerde 30 gün veri saklama kapasitesi.
- Bağlantı geri geldiğinde "Store-and-Forward" (Sakla ve Aktar) mekanizmasıyla veriler zaman damgalı
  şekilde eksiksiz aktarılır (hedef: %100 senkronizasyon başarısı).
- Zayıf sinyal bölgeleri için harici yönlü anten/sinyal yükseltici opsiyonu sunulur.

## Mekanik ve Çevresel Dayanıklılık
- Kutu, sanayi tipi 3D yazıcılarla ve yüksek mukavemetli filamentlerle (ASA, PETG, Karbon Fiber Takviyeli)
  üretilir.
- Hedef koruma sınıfı: IP65/IP67; +80°C'ye kadar deformasyonsuz gövde.
- Isıl genleşmeye karşı açık renk kaplama ve ePTFE su geçirmez/hava geçirgen havalandırma membranı kullanılır.
- Elektronik kart, neme/korozyona karşı koruyucu reçine (Conformal Coating) ile kaplanır.
- Arı/böcek girişine karşı paslanmaz çelik filtreler kullanılır (propolis/balmumu tıkanma riskine önlem).
- Şasi, yükü eşit dağıtan kaburgalı tasarımla nakliye titreşimlerine ve 100 kg üzeri yüklere dayanacak
  şekilde tasarlanır.

## Teknik Riskler ve Önlemler (özet)
- Sıcaklık kaynaklı ölçüm hatası (±1 kg'a kadar) → Termal Düzeltme Algoritması ile giderilir.
- Haberleşme kesintisi → yerel hafızada veri saklama + bağlantı gelince toplu aktarım.
- Batarya ömrünün düşmesi → Deep Sleep modu + adaptif gönderim sıklığı + opsiyonel güneş paneli.
- Nem/sıcaklık/böcek kaynaklı arızalar → conformal coating, dayanıklı filament, koruyucu filtreler.

## Saha Testleri
- Saha testleri proje yürütücüsünün ailesine ait aktif kovanlarda gerçek üretim koşullarında yapılacak;
  önce sınırlı pilot uygulama, sonra kapsam genişletme planlanıyor.

## PAZAR ANALİZİ

### Küresel Pazar
- Dünya kovan varlığı 2020–2024 arasında istikrarlı biçimde artmıştır: 2020'de ~98,87 milyon,
  2024'te ~101,71 milyon kovan (yaklaşık %2,9 artış).
- Bu artış, arıcılığın büyüyen bir sektör olduğunu ve daha fazla izleme/yönetim ihtiyacı doğurduğunu gösteriyor.

### Dünya Bal Üretiminde Ülke Payları (2024)
Çin %22,94, Hindistan %7,35, Türkiye %4,80, Etiyopya %4,32, İran %4,04, Arjantin %3,49,
Brezilya %3,39, Rusya %3,29, ABD %3,07, Meksika %2,89.
→ Türkiye, dünyanın önde gelen bal üreticilerinden biri; bu da Türkiye'yi hem test hem erken
ticarileşme pazarı olarak anlamlı kılıyor.

### Türkiye Pazarı
- Türkiye kovan sayısı 2018'de ~8,1 milyon, 2025'te ~8,8 milyon (görece yüksek ve istikrarlı).
- Bal üretimi ise dalgalı: 2018'de 107.920 ton, 2022'de zirve 118.297 ton, 2024'te düşüşle 95.492 ton,
  2025'te 97.253 ton. Toplam Türkiye bal üretimi (2025): 97.253 ton.
- Kovan sayısı ile bal üretiminin aynı yönde ilerlememesi; iklim, flora, koloni sağlığı ve bakım
  kalitesinin üretimde belirleyici olduğunu, bu yüzden düzenli veri takibinin (BeeTrack'in sunduğu)
  değerli olduğunu gösteriyor.

### İllere Göre Bal Üretimi (2025, ilk 10)
Ordu 16.750 ton, Adana 11.592 ton, Muğla 6.806 ton, Sivas 4.214 ton, Siirt 3.175 ton,
Aydın 2.884 ton, İzmir 2.759 ton, Şanlıurfa 2.286 ton, Çanakkale 2.177 ton, Bitlis 2.101 ton.

### Bölgesel Kovan Dağılımı (2025, %)
Ege-TR3 en yüksek pay, ardından Akdeniz-TR6, Doğu Karadeniz-TR9, Ortadoğu Anadolu-TR8,
Güneydoğu Anadolu-TRC. En düşük paya sahip bölge İstanbul-TR1.
→ Pazar homojen değil; BeeTrack'in yoğunluk merkezlerine göre kademeli (tek tip yayılım yerine
bölgesel önceliklendirme ile) pazara girmesi öneriliyor.

### İl Bazlı Kovan Sayısı Yoğunluğu (2025, adet)
Muğla 727.259, Ordu 638.522, Adana 467.055, Bitlis 303.193, Mersin 288.676 (öne çıkan iller).
→ Pilot kurulum ve saha satış önceliği bu illere verilebilir.

### TAM – SAM – SOM (Pazar Büyüklüğü Katmanları)
- TAM (Küresel Arı Kovanı Miktarı): 90 milyon kovan.
- Avrupa Arı Kovanı Miktarı: 20 milyon kovan.
- Türkiye Arı Kovanı Miktarı (SAM potansiyeli): 9 milyon kovan.
- SAM (erişilebilir hedef segment): yaklaşık 881 bin kovan — ürünü denemeye/benimsemeye en yakın kesim.
- SOM (gerçekçi başlangıç hedefi): yaklaşık 3.600 kovan (Türkiye'nin ~%5'lik kesimi olarak da anılıyor:
  450 bin kovan genel erişilebilir taban, SOM ise bunun disiplinli/erken dönem satış ölçeği).
→ Strateji: pazarı olduğundan büyük göstermek yerine, kontrollü büyüme ve ürün-pazar uyumu önceliklidir.

## Belgede Henüz Netleşmemiş / Yazar Tarafından İşaretlenmiş Noktalar
Kaynak belgede şu noktalar yazar tarafından "değişecek/hatırlanmıyor" notuyla işaretlenmiştir ve
kesinleşmemiştir — bu konularda soru gelirse, kesin taahhüt vermek yerine bu belirsizliği dürüstçe belirt:
- Standart ölçüm periyodunun tam olarak 30 dakika olup olmayacağı.
- Rutin gönderim periyodundaki 30 dakikalık ölçüm verisi paketleme detayı.
- Aşağıdaki başlıklar rapor taslağında henüz doldurulmamış: Projenin Amacı, Çözülmek İstenen Teknik
  Problem, Sistemin Genel Çalışma Prensibi, Kovan Ölçüleri, Tartım Platformu Yapısı, Load Cell Yerleşimi,
  Gömülü Sistem Yazılımı, LoRa Veri Paket Yapısı, Gateway Yazılımı, Veri Tabanı/Saklama, Mobil Uygulama
  detayları, Uyarı Mekanizması, TRL seviyeleri, Sonuç ve Yol Haritası. Bu başlıklarla ilgili soru gelirse,
  belgede henüz detaylandırılmadığını belirt.
`;

module.exports = { BEETRACK_KNOWLEDGE_BASE };
