-- Executa este script no SQL Editor do teu projeto Supabase.

create table if not exists public.orcamentos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null,
  empresa text,
  email text not null,
  telefone text,
  tipo_projeto text not null,
  localizacao text not null,
  data_prevista date,
  orcamento_estimado text,
  mensagem text
);

-- Row Level Security: bloqueia todo o acesso direto do browser.
-- Só o backend (com a service_role key, que nunca é exposta ao cliente)
-- consegue ler/escrever nesta tabela.
alter table public.orcamentos enable row level security;

-- (Opcional) Se um dia quiseres ver os pedidos autenticado no Supabase Studio,
-- as tuas próprias queries no painel já usam uma chave com privilégios de admin,
-- por isso não precisas de nenhuma policy adicional para isso.
