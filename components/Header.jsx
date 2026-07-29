export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#top" className="font-serif text-cream text-xl md:text-2xl tracking-wide">
          LN Flowers
        </a>

        <a
          href="#orcamento"
          className="bg-forest hover:bg-forest-light transition-colors text-cream px-5 py-2.5 text-xs tracking-widest2 uppercase"
        >
          Pedir orçamento
        </a>
      </div>
    </header>
  );
}
