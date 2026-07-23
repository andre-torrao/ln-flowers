export default function Hero() {
  return (
    <section id="top" className="relative min-h-[620px] flex items-end">
      {/* Substituir por foto real em /public/images/hero.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(20,30,23,0.88) 0%, rgba(20,30,23,0.35) 55%, rgba(20,30,23,0.15) 100%), url(/images/hero.jpg)",
        }}
      />
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 pt-40">
        <h1 className="font-serif text-cream text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] max-w-2xl">
          Transformamos espaços através da natureza
        </h1>
        <div className="w-14 h-[2px] bg-cream/60 my-6" />
        <p className="text-cream/85 max-w-md mb-8 leading-relaxed">
          Soluções florais, botânicas e decorativas para empresas, eventos e
          projetos personalizados.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#orcamento"
            className="bg-forest hover:bg-forest-light transition-colors text-cream px-6 py-3 text-xs tracking-widest2 uppercase"
          >
            Pedir orçamento
          </a>
          <a
            href="#sobre"
            className="border border-cream/70 hover:bg-cream/10 transition-colors text-cream px-6 py-3 text-xs tracking-widest2 uppercase"
          >
            Conhecer a LN Flowers
          </a>
        </div>
      </div>
    </section>
  );
}
