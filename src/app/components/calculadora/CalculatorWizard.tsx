"use client";

import { useState } from "react";

const preguntas = [
  "¿Qué edad tiene tu perro?",
  "¿Qué tamaño tiene?",
  "¿Es cachorro, adulto o senior?",
  "¿Cuántas veces come al día?",
  "¿Qué tipo de alimentación tiene?",
  "¿Necesita medicación o cuidados especiales?",
  "¿Cuántas veces suele ir al veterinario al año?",
  "¿Tiene seguro veterinario?",
  "¿Cuánto gastas aproximadamente en accesorios al año?",
  "¿Quieres reservar un presupuesto para imprevistos?",
];

export function CalculatorWizard() {
  const [actual, setActual] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [terminado, setTerminado] = useState(false);

  const responder = (respuesta: string) => {
    const nuevas = [...respuestas, respuesta];
    setRespuestas(nuevas);

    if (actual + 1 >= preguntas.length) {
      setTerminado(true);
    } else {
      setActual(actual + 1);
    }
  };

  const reiniciar = () => {
    setActual(0);
    setRespuestas([]);
    setTerminado(false);
  };

  if (terminado) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="mb-4 text-3xl font-bold">
          Tu presupuesto está listo 🐶
        </h1>

        <p className="mb-8 text-gray-600">
          Hemos registrado tus respuestas. En el siguiente paso podremos
          calcular una estimación personalizada.
        </p>

        <button
          onClick={reiniciar}
          className="rounded-xl border px-5 py-3 font-medium"
        >
          Volver a empezar
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <p className="mb-2 text-sm text-gray-500">
        Pregunta {actual + 1} de {preguntas.length}
      </p>

      <h1 className="mb-8 text-3xl font-bold">
        Calculadora de presupuesto 🐾
      </h1>

      <div className="rounded-3xl border p-6">
        <h2 className="mb-6 text-xl font-semibold">
          {preguntas[actual]}
        </h2>

        <div className="grid gap-3">
          {["Sí", "No", "No estoy seguro"].map((opcion) => (
            <button
              key={opcion}
              onClick={() => responder(opcion)}
              className="rounded-xl border px-5 py-4 text-left"
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
