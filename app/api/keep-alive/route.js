import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

// Pensado para ser chamado uma vez por dia por um serviço externo gratuito
// (ex: cron-job.org), já que o cron job nativo do Vercel no plano Hobby
// não é fiável (é um problema conhecido, documentado pela própria comunidade
// do Vercel). Faz um pedido mínimo e inofensivo ao Supabase (só uma contagem,
// sem devolver dados) para gerar atividade na API e evitar que o projeto
// gratuito seja pausado por 7 dias de inatividade.
export async function GET() {
  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase
      .from("orcamentos")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("Erro no keep-alive do Supabase:", error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, timestamp: new Date().toISOString() });
  } catch (err) {
    console.error("Erro de configuração no keep-alive:", err);
    return NextResponse.json({ ok: false, error: "Erro de configuração." }, { status: 500 });
  }
}
