export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <a href="#top" className="font-serif text-cream text-base tracking-wide">
          LN Flowers
        </a>

        <p>© 2026 LnFlowers. Todos os direitos reservados.</p>

        <div className="flex items-center gap-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="mailto:geral@lnflowers.pt">geral@lnflowers.pt</a>
          <a href="tel:+351000000000">+351 000 000 000</a>
        </div>
      </div>
    </footer>
  );
}
