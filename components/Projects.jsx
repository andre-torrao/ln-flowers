const images = [
  "projeto-1.jpg",
  "projeto-2.jpg",
  "projeto-3.jpg",
  "projeto-4.jpg",
  "projeto-5.jpg",
  "projeto-6.jpg",
];

export default function Projects() {
  return (
    <section id="projetos" className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="text-center mb-10">
          <p className="eyebrow justify-center flex">Projetos</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={img}
              className="aspect-[3/4] bg-sand bg-cover bg-center"
              style={{ backgroundImage: `url(/images/${img})` }}
              aria-label={`Projeto ${i + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block border border-forest-dark px-6 py-3 text-xs tracking-widest2 uppercase hover:bg-forest hover:text-cream hover:border-forest transition-colors"
          >
            Ver mais projetos
          </a>
        </div>
      </div>
    </section>
  );
}
