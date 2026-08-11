import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseServerClient } from "@/lib/supabase";

const REQUIRED_FIELDS = ["nome", "email", "tipo_projeto", "localizacao"];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  const {
    nome,
    empresa,
    email,
    telefone,
    tipo_projeto,
    localizacao,
    data_prevista,
    orcamento_estimado,
    mensagem,
  } = body || {};

  for (const field of REQUIRED_FIELDS) {
    if (!body?.[field] || String(body[field]).trim() === "") {
      return NextResponse.json(
        { error: `O campo "${field}" é obrigatório.` },
        { status: 400 }
      );
    }
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  // 1. Guardar o pedido no Supabase
  try {
    const supabase = getSupabaseServerClient();
    const { error: dbError } = await supabase.from("orcamentos").insert({
      nome,
      empresa: empresa || null,
      email,
      telefone: telefone || null,
      tipo_projeto,
      localizacao,
      data_prevista: data_prevista || null,
      orcamento_estimado: orcamento_estimado || null,
      mensagem: mensagem || null,
    });

    if (dbError) {
      console.error("Erro Supabase:", dbError);
      return NextResponse.json(
        { error: "Não foi possível guardar o pedido. Tente novamente." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Erro de configuração do Supabase:", err);
    return NextResponse.json(
      { error: "Erro de configuração do servidor." },
      { status: 500 }
    );
  }

  // 2. Enviar email de notificação via Resend
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyTo = process.env.CONTACT_EMAIL;
    const fromAddress = process.env.EMAIL_FROM || "LnFlowers <onboarding@resend.dev>";

    if (resendApiKey && notifyTo) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: fromAddress,
        to: notifyTo,
        reply_to: email,
        subject: `Novo pedido de orçamento — ${nome}`,
        html: `
          <h2>Novo pedido de orçamento</h2>
          <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
          <p><strong>Empresa:</strong> ${escapeHtml(empresa || "—")}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefone:</strong> ${escapeHtml(telefone || "—")}</p>
          <p><strong>Tipo de projeto:</strong> ${escapeHtml(tipo_projeto)}</p>
          <p><strong>Localização:</strong> ${escapeHtml(localizacao)}</p>
          <p><strong>Data prevista:</strong> ${escapeHtml(data_prevista || "—")}</p>
          <p><strong>Orçamento estimado:</strong> ${escapeHtml(orcamento_estimado || "—")}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${escapeHtml(mensagem || "—").replace(/\n/g, "<br/>")}</p>
        `,
      });
    } else {
      console.warn(
        "RESEND_API_KEY ou CONTACT_EMAIL não configurados — email não enviado (o pedido foi guardado no Supabase)."
      );
    }
  } catch (err) {
    // Não falha o pedido do utilizador só porque o email falhou —
    // o pedido já está guardado no Supabase.
    console.error("Erro ao enviar email:", err);
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
