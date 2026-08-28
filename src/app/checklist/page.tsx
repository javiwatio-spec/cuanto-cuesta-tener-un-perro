import type { Metadata } from "next";
import { Suspense } from "react";
import { ChecklistView } from "@/components/checklist/ChecklistView";

export const metadata: Metadata = {
  title: "Prepara la llegada de tu perro | La letra pequeña",
  description:
    "Checklist personalizada, generada a partir de tus respuestas, para preparar la llegada de tu perro.",
  robots: { index: false, follow: false },
};

// ChecklistView usa useSearchParams() (para leer ?from=results), que Next.js
// exige envolver en un límite de Suspense para poder prerenderizar la ruta
// en el build. El fallback reutiliza exactamente el mismo texto/clases que
// el propio ChecklistView usa en su estado de carga inicial, para que no
// haya ningún salto visual perceptible.
function ChecklistFallback() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-14 sm:py-20">
      <p className="font-body text-sm text-ink-soft">Cargando tu checklist…</p>
    </main>
  );
}

export default function ChecklistPage() {
  return (
    <Suspense fallback={<ChecklistFallback />}>
      <ChecklistView />
    </Suspense>
  );
}

