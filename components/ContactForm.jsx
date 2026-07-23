"use client";

import { useState } from "react";

const projectTypes = [
  "Floral Design",
  "Botanical Design",
  "Evento (casamento, privado ou corporativo)",
  "Espaço (hotel, restaurante, loja, empresa)",
  "Outro",
];

const budgetRanges = [
  "Até 500€",
  "500€ – 1.500€",
  "1.500€ – 5.000€",
  "Mais de 5.000€",
  "Ainda não sei",
];

const initialState = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  tipo_projeto: "",
  localizacao: "",
  data_prevista: "",
  orcamento_estimado: "",
  mensagem: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Não foi possível enviar o pedido.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <section id="orcamento" className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-[0.9fr_1.4fr] gap-12">
        <div>
          <p className="eyebrow">Peça o seu orçamento</p>
          <h2 className="font-serif text-3xl mt-2 mb-2">Vamos conversar</h2>
          <div className="divider" />
          <p className="text-forest-dark/70 leading-relaxed max-w-xs">
            Preencha o formulário e entraremos em contacto brevemente.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nome *">
              <input
                required
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="input"
                type="text"
              />
            </Field>
            <Field label="Empresa">
              <input
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                className="input"
                type="text"
              />
            </Field>
            <Field label="Email *">
              <input
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input"
                type="email"
              />
            </Field>
            <Field label="Telefone">
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                className="input"
                type="tel"
              />
            </Field>
            <Field label="Tipo de projeto *">
              <select
                required
                name="tipo_projeto"
                value={form.tipo_projeto}
                onChange={handleChange}
                className="input"
              >
                <option value="">Selecione uma opção</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Localização do projeto *">
              <input
                required
                name="localizacao"
                value={form.localizacao}
                onChange={handleChange}
                className="input"
                type="text"
              />
            </Field>
            <Field label="Data prevista">
              <input
                name="data_prevista"
                value={form.data_prevista}
                onChange={handleChange}
                className="input"
                type="date"
              />
            </Field>
            <Field label="Orçamento estimado">
              <select
                name="orcamento_estimado"
                value={form.orcamento_estimado}
                onChange={handleChange}
                className="input"
              >
                <option value="">Selecione uma opção</option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Mensagem">
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={4}
              placeholder="Conte-nos mais sobre o seu projeto..."
              className="input resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-forest hover:bg-forest-light disabled:opacity-60 transition-colors text-cream py-3.5 text-xs tracking-widest2 uppercase"
          >
            {status === "loading" ? "A enviar..." : "Solicitar proposta"}
          </button>

          {status === "success" && (
            <p className="text-sm text-forest-light text-center pt-2">
              Pedido enviado com sucesso! Entraremos em contacto brevemente.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700 text-center pt-2">
              {errorMsg || "Ocorreu um erro. Tente novamente."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs text-forest-dark/70 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
