import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodo Ramirez × Neo Was — Presentacion de integracion",
  description:
    "GLA — GrowLink Agency como brazo tecnologico de Neo Was. Desarrollo de aplicaciones web, sistemas interactivos e inteligencia artificial para PyMEs.",
  openGraph: {
    title: "Rodo Ramirez × Neo Was — Presentacion de integracion",
    description:
      "GLA — GrowLink Agency como brazo tecnologico de Neo Was.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-gla.png" />
      </head>
      <body className="min-h-screen font-body antialiased">{children}</body>
    </html>
  );
}
