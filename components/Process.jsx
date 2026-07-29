const steps = [
  {
    n: "1",
    title: "Partilhe a sua ideia.",
    desc: "Fale connosco sobre o seu projeto e as suas necessidades.",
    icon: <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.5-.3-3.6-.8L4 21l1.3-4.5A8.5 8.5 0 1 1 21 11.5Z" />,
  },
  {
    n: "2",
    title: "Desenvolvemos uma proposta personalizada.",
    desc: "Criamos uma solução à medida, adaptada ao espaço e ao objetivo.",
    icon: <path d="M4 20 15 9l3 3L7 23H4v-3ZM13 6l3-3 3 3-3 3-3-3Z" />,
  },
  {
    n: "3",
    title: "Damos vida ao projeto.",
    desc: "Cuidamos de cada detalhe para garantir um resultado excecional.",
    icon: <path d="M12 21c-4-3-7-6.2-7-10a7 7 0 0 1 14 0c0 3.8-3 7-7 10Z M12 8v6" />,
  },
];

export default function Process() {
  return (
    <section className="bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="text-center mb-14">
          <p className="eyebrow justify-center flex">Como trabalhamos</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="text-center flex flex-col items-center px-4">
              <div className="w-20 h-20 rounded-full bg-forest text-cream flex items-center justify-center mb-5">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 max-w-xs">{s.title}</h3>
              <p className="text-sm text-forest-dark/70 max-w-xs leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
