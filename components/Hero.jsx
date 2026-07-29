export default function Hero() {
  return (
    <section id="top" className="relative min-h-[620px] flex items-end">
      {/* Substituir por foto real em /public/images/hero.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(20,30,23,0.78) 0%, rgba(20,30,23,0.25) 55%, rgba(20,30,23,0.08) 100%), url(/images/hero.jpg)",
        }}
      />
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 pt-40">
        <h1 className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
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
        </div>
      </div>
    </section>
  );
}
