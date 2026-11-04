import type { Metadata } from "next";
import { Libre_Caslon_Display, Source_Serif_4 } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const display = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const texto = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-texto",
});

export const metadata: Metadata = {
  title: "Vilela Arantes & Prado Advogados",
  description:
    "Escritório fictício de advocacia empresarial, civil, trabalhista e tributária em São Paulo. Site demonstrativo.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${texto.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
