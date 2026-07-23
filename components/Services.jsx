const services = [
  {
    title: "Floral Design",
    desc: "Decoração floral personalizada para cada ocasião e espaço.",
    icon: (
      <path d="M12 3C9 6 8 9 8 12c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5c0-3-1-6-4-9Z M12 16.5V21" />
    ),
  },
  {
    title: "Botanical Design",
    desc: "Projetos com plantas para interiores e exteriores.",
    icon: (
      <path d="M12 21c0-5 0-9 0-9M12 12c-3-1-5-3-5-6 3 0 5 2 6 5M12 12c3-1 5-3 5-6-3 0-5 2-6 5" />
    ),
  },
  {
    title: "Eventos",
    desc: "Casamentos, eventos privados e corporativos com atenção a cada detalhe.",
    icon: (
      <path d="M12 2 3 7v3l9 5 9-5V7l-9-5Z M3 13v4l9 5 9-5v-4" />
    ),
  },
  {
    title: "Espaços",
    desc: "Soluções para hotéis, restaurantes, lojas e empresas.",
    icon: (
      <path d="M4 21V7l6-4v18M14 21V11l6 4v6M4 21h16M8 10h.01M8 14h.01M8 17h.01" />
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="text-center mb-14">
          <p className="eyebrow justify-center flex">Os nossos serviços</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-cream px-6 py-10 text-center flex flex-col items-center hover:-translate-y-1 transition-transform"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-forest mb-4"
              >
                {s.icon}
              </svg>
              <h3 className="font-serif text-xl mb-2">{s.title}</h3>
              <div className="divider" />
              <p className="text-sm text-forest-dark/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
