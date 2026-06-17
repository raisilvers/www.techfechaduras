import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Fechaduras | Instalação de Fechaduras Digitais",
  description:
    "Instalação de fechaduras digitais Intelbras, Yale, Papaiz e Elsys em São Paulo.",

  openGraph: {
    title: "🔒 Fechaduras Digitais em São Paulo | Tech Fechaduras",
    description:
      "👉 Proteja sua casa ou empresa! Instalação profissional de fechaduras digitais Intelbras, Yale, Papaiz e Elsys. Orçamento rápido pelo WhatsApp.",
    url: "https://techfechaduras.com.br",
    siteName: "Tech Fechaduras",
    images: [
    {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Instalação de Fechaduras Digitais em São Paulo",
    },
  ],
},

  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}