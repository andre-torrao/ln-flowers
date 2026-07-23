import { createClient } from "@supabase/supabase-js";

// Usa a service role key APENAS no servidor (nunca no browser).
// Isto garante que só o backend consegue escrever na tabela de orçamentos.
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Variáveis SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY não estão configuradas."
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
