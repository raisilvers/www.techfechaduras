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
  metadataBase: new URL("https://techfechaduras.com.br"),
  title: "Instalação de Fechaduras Digitais em São Paulo | Tech Fechaduras",
  description:
    "Empresa especializada na instalação de fechaduras digitais Intelbras, Yale, Papaiz e Elsys em São Paulo. Atendimento residencial e comercial, instalação com garantia, suporte técnico e instalação rápida.",
  
  keywords: [
    "fechadura digital",
    "instalação de fechadura digital",
    "fechadura biométrica",
    "Intelbras",
    "Yale",
    "Papaiz",
    "Elsys",
    "São Paulo",
    "controle de acesso",
  ],

  openGraph: {
    title: "🔒 Fechaduras Digitais em São Paulo | Tech Fechaduras",
    description:
      "⭐ Prestador 5 estrelas na Leroy Merlin. Especialista em instalação de fechaduras digitais, Atendimento em toda São Paulo.",
    url: "https://techfechaduras.com.br",
    siteName: "Tech Fechaduras",
    images: [
      {
        url: "/opengraph-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Instalação de Fechaduras Digitais em São Paulo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image-v2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tech Fechaduras",
    url: "https://techfechaduras.com.br",
    image: "https://techfechaduras.com.br/logo.png",
    description:
      "Especialistas em instalação de fechaduras digitais em São Paulo.",
    telephone: "+55 11 97120-4826",
    areaServed: "São Paulo",
    priceRange: "$$",
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}