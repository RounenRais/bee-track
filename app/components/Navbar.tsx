"use client";

import { useState } from "react";

const navLinks = [
  { label: "Sorun", href: "#sorun" },
  { label: "Çözüm", href: "#cozum" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
  { label: "Fiyatlandırma", href: "#fiyatlandirma" },
  { label: "SSS", href: "#sss" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-navy/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <HexLogo />
          <span className="text-xl font-bold text-gold tracking-wide">BeeTrack</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#fiyatlandirma"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gold text-gray-900 text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200"
        >
          Erken Erişim
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-gold p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menüyü aç/kapat"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-navy/40 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#fiyatlandirma"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-gold text-gray-900 text-sm font-semibold hover:bg-yellow-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Erken Erişim
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function HexLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <polygon points="14,2 26,8.5 26,21.5 14,28 2,21.5 2,8.5" fill="#F5A623" opacity="0.9" />
      <text x="14" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">B</text>
    </svg>
  );
}
