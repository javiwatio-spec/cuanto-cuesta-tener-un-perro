import type { Metadata } from "next";
import { Suspense } from "react";
import { CalculatorWizard } from "@/components/calculadora/CalculatorWizard";

export const metadata: Metadata = {
  title: "Calculadora de presupuesto para tu perro | La letra pequeña",
  description:
    "Responde 10 preguntas cortas y obtén una estimación personalizada de cuánto podrías gastar al mes, al año y en el primer año con tu perro.",
  alternates: {
    canonical: "/calculadora",
  },
};

function CalculadoraFallback() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-14 sm:py-20">
      <p className="font-body text-sm text-ink-soft">Cargando la calculadora…</p>
    </main>
  );
}

export default function CalculadoraPage() {
  return (
    <Suspense fallback={<CalculadoraFallback />}>
      <CalculatorWizard />
    </Suspense>
  );
}

