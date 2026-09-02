import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dogcostapp.com"),
  title: "¿Cuánto cuesta tener un perro? Calculadora personalizada | La letra pequeña",
  description:
    "Calcula cuánto podrías gastar al mes y al año teniendo en cuenta tu situación concreta: peso del perro, alimentación, seguro, servicios y equipamiento. Gratis, sin registro, en 2 minutos.",
  openGraph: {
    title: "¿Cuánto cuesta tener un perro?",
    description:
      "Calculadora personalizada de presupuesto para propietarios y futuros propietarios de perro en España.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
