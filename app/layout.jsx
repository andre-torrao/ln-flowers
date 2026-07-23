import "./globals.css";

export const metadata = {
  title: "LnFlowers — Floral & Botanical Design",
  description:
    "Transformamos espaços através da natureza. Soluções florais, botânicas e decorativas para empresas, eventos e projetos personalizados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
