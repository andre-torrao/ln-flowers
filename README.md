# LnFlowers — website

Site em Next.js (App Router) + Tailwind, pronto para GitHub → Vercel, com
formulário de pedido de orçamento que grava no Supabase e envia um email de
notificação via Resend.

## Estrutura

```
app/
  page.jsx              -> página principal (junta todas as secções)
  layout.jsx             -> layout raiz + metadata
  globals.css             -> estilos base / Tailwind
  api/orcamento/route.js  -> API que recebe o formulário, grava no Supabase e envia o email
components/               -> Header, Hero, About, Services, Projects, Process, ContactForm, Footer
lib/supabase.js            -> cliente Supabase (usado só no servidor)
supabase/schema.sql         -> script para criar a tabela "orcamentos"
public/images/               -> onde deves colocar as tuas fotografias
```

## 1. Correr localmente

```bash
npm install
cp .env.example .env.local   # e preenche as variáveis (ver secções abaixo)
npm run dev
```

Abre http://localhost:3000

## 2. Criar o projeto no Supabase

1. Cria uma conta/projeto em https://supabase.com
2. Vai a **SQL Editor** e corre o conteúdo de `supabase/schema.sql` — isto
   cria a tabela `orcamentos` com Row Level Security ativo (ninguém consegue
   ler/escrever diretamente pelo browser; só o backend consegue, através da
   `service_role key`).
3. Vai a **Project Settings → API** e copia:
   - `Project URL` → variável `SUPABASE_URL`
   - `service_role` key (não a `anon` key!) → variável `SUPABASE_SERVICE_ROLE_KEY`

⚠️ A `service_role key` tem privilégios totais — nunca a exponhas no
frontend. Neste projeto só é usada dentro de `app/api/orcamento/route.js`,
que corre no servidor.

## 3. Configurar o envio de email (Resend)

1. Cria conta em https://resend.com (tem plano gratuito)
2. Cria uma **API Key** em resend.com/api-keys → variável `RESEND_API_KEY`
3. Define `CONTACT_EMAIL` para o email que deve receber os pedidos
   (ex: `geral@lnflowers.pt`)
4. Enquanto não verificares o teu domínio no Resend, usa
   `EMAIL_FROM=LnFlowers <onboarding@resend.dev>` (funciona logo, mas o
   remetente aparece como resend.dev). Quando quiseres usar
   `geral@lnflowers.pt` como remetente, verifica o domínio `lnflowers.pt`
   em Resend → Domains (é só adicionar uns registos DNS).

Nota: mesmo que o email falhe por algum motivo, o pedido fica sempre
guardado no Supabase — o email é só uma notificação extra.

## 4. Subir para o GitHub

```bash
git init
git add .
git commit -m "Site LnFlowers inicial"
git branch -M main
git remote add origin https://github.com/o-teu-user/lnflowers.git
git push -u origin main
```

(`.env.local` nunca é enviado — está no `.gitignore`.)

## 5. Deploy no Vercel

1. Em https://vercel.com → **Add New → Project** → importa o repositório do GitHub
2. O framework Next.js é detetado automaticamente, não precisas de mudar nada
3. Em **Environment Variables**, adiciona as mesmas 4 variáveis do `.env.local`:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `EMAIL_FROM`
4. **Deploy**. A partir daqui, cada `git push` para `main` faz deploy automático.

## 6. Adicionar as tuas fotografias

Substitui os ficheiros de exemplo em `public/images/` pelas tuas fotos reais
(ver `public/images/README.txt` para os nomes e dimensões esperadas). Depois
de fazeres commit + push, o Vercel atualiza automaticamente.

## Onde ver os pedidos recebidos

- **Supabase** → Table Editor → tabela `orcamentos` (fica tudo guardado, mesmo que o email falhe)
- **Email** → chega uma notificação para o `CONTACT_EMAIL` configurado, com "responder a" já preenchido com o email do cliente

## Possíveis melhorias futuras (opcional)

- Proteção anti-spam (honeypot ou Cloudflare Turnstile) no formulário
- Painel simples de administração para ver os pedidos sem entrar no Supabase
- Multilingue (PT/EN)
