import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

// Chamado uma vez por dia pelo cron job definido em vercel.json.
// Faz um pedido mínimo ao Supabase só para gerar atividade na API e evitar
// que o projeto gratuito seja pausado por 7 dias de inatividade.
export async function GET(request) {
  const authHeader = request.headers.get("authorization");

  // O Vercel injeta automaticamente a variável CRON_SECRET e envia-a neste
  // cabeçalho quando é ele a chamar esta rota — isto impede que outra pessoa
  // dispare esta rota manualmente.
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

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
