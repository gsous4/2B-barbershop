import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2B Barbershop — Experiência, Precisão e Estilo",
  description:
    "2B Barbershop em Águas Lindas de Goiás. Cortes modernos, barba bem feita e atendimento de primeira. Agende online 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
