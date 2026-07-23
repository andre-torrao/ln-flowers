"use client";

import { useState } from "react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre nós" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#top" className="font-serif text-cream text-xl md:text-2xl tracking-wide">
          LN Flowers
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest2 uppercase text-cream/90">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cream transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#orcamento"
            className="bg-forest hover:bg-forest-light transition-colors text-cream px-5 py-2.5 tracking-widest2"
          >
            Pedir orçamento
          </a>
        </nav>

        <button
          className="md:hidden text-cream"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-forest-dark/95 px-6 py-6 flex flex-col gap-4 text-cream text-sm tracking-widest2 uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#orcamento"
            onClick={() => setOpen(false)}
            className="bg-forest text-center py-2.5"
          >
            Pedir orçamento
          </a>
        </div>
      )}
    </header>
  );
}
