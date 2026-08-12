import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-dark.png"
                alt="BeeTrack"
                width={790}
                height={291}
                sizes="140px"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Arıcıların gözü, kovanın sesi. Akıllı sensörler ve yapay zeka
              analiziyle arıcılığı geleceğe taşıyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Hızlı Erişim</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Sorun", href: "#sorun" },
                { label: "Çözüm", href: "#cozum" },
                { label: "Özellikler", href: "#ozellikler" },
                { label: "Fiyatlandırma", href: "#fiyatlandirma" },
                { label: "SSS", href: "#sss" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="iletisim">
            <h4 className="text-sm font-semibold text-white mb-4">İletişim</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <MailIcon />
                <a href="mailto:info@beetrackapp.com" className="hover:text-gold transition-colors">
                  info@beetrackapp.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <PhoneIcon />
                <a href="tel:+902121234567" className="hover:text-gold transition-colors">
                  +90 (212) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <LocationIcon />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <SocialLink href="#" label="Twitter"><TwitterIcon /></SocialLink>
              <SocialLink href="#" label="Instagram"><InstagramIcon /></SocialLink>
              <SocialLink href="#" label="LinkedIn"><LinkedInIcon /></SocialLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2025 BeeTrack. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-gold transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gold transition-colors">
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:border-gold hover:text-gold transition-colors duration-200"
    >
      {children}
    </a>
  );
}

/* Icons */
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2h3l1.5 3.5-2 1.5a9 9 0 004.5 4.5l1.5-2L15 11v3a1 1 0 01-1 1C6.5 15 1 9.5 1 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1a5 5 0 015 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M12.6 1h2.4L9.6 6.8 16 15H11L7.2 10 2.8 15H.4l5.8-6.3L0 1h5.2l3.4 4.7L12.6 1zm-.8 12.6h1.3L4.2 2.3H2.8l9 11.3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2 1a1 1 0 100 2 1 1 0 000-2zM1 5h2v9H1V5zm4 0h2v1.3C7.5 5.5 8.5 5 9.5 5 11.4 5 13 6.5 13 9v5h-2V9.5c0-1-.8-1.5-1.5-1.5S8 8.5 8 9.5V14H6V5z" />
    </svg>
  );
}
