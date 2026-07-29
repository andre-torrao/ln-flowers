export default function About() {
  return (
    <section id="sobre" className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow">Sobre nós</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">A LnFlowers</h2>
          <div className="divider" />
          <p className="text-forest-dark/80 leading-relaxed mb-4 max-w-md">
            A LnFlowers, projeto de Luís Nogueira, desenvolve soluções florais
            e botânicas para transformar espaços, ambientes e eventos.
          </p>
          <p className="text-forest-dark/80 leading-relaxed mb-6 max-w-md">
            Cada projeto é pensado de forma personalizada, adaptando-se às
            necessidades de cada cliente.
          </p>
        </div>
        <div
          className="aspect-[4/5] w-full bg-cover bg-center bg-sand"
          style={{ backgroundImage: "url(/images/about.jpg)" }}
        />
      </div>
    </section>
  );
}
