import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta tener un perro? | La letra pequeña",
  description:
    "Calcula cuánto podrías gastar al mes y al año teniendo un perro en España.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <p className="font-mono text-sm uppercase tracking-widest text-ledger-rust">
          La letra pequeña
        </p>

        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
          ¿Cuánto cuesta tener un perro?
        </h1>

        <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-ink-soft">
          Una estimación personalizada de lo que podrías gastar al mes, al año
          y durante el primer año con tu perro.
        </p>

        <div className="mt-10">
          <Link
            href="/calculadora"
            className="inline-flex items-center rounded-md bg-ledger-green px-6 py-4 font-body text-base font-semibold text-paper transition hover:bg-ledger-green-dark"
          >
            Calcular mi presupuesto
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="border-t border-line pt-4">
            <h2 className="font-display text-xl font-semibold text-ink">
              Alimentación
            </h2>
            <p className="mt-2 font-body text-sm leading-6 text-ink-soft">
              Ten en cuenta el tamaño y las necesidades de tu perro.
            </p>
          </div>

          <div className="border-t border-line pt-4">
            <h2 className="font-display text-xl font-semibold text-ink">
              Gastos recurrentes
            </h2>
            <p className="mt-2 font-body text-sm leading-6 text-ink-soft">
              Seguro, veterinario, higiene, servicios y otros gastos habituales.
            </p>
          </div>

          <div className="border-t border-line pt-4">
            <h2 className="font-display text-xl font-semibold text-ink">
              Primer año
            </h2>
            <p className="mt-2 font-body text-sm leading-6 text-ink-soft">
              Separa los gastos iniciales de los costes que tendrás cada mes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
