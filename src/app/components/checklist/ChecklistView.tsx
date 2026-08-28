"use client";

import { useState } from "react";

const preguntas = [
  "¿Qué edad tiene tu perro?",
  "¿Qué tamaño tiene?",
  "¿Es cachorro, adulto o senior?",
  "¿Cuántas veces come al día?",
  "¿Qué tipo de alimentación tiene?",
  "¿Necesita medicación o cuidados especiales?",
  "¿Cuántas veces suele ir al veterinario?",
  "¿Tiene seguro veterinario?",
  "¿Cuánto gastas aproximadamente en accesorios?",
  "¿Quieres reservar un presupuesto para imprevistos?",
];

export function ChecklistView() {
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [terminado, setTerminado] = useState(false);

  const responder = (respuesta: string) => {
    setRespuestas((actuales) => [...actuales, respuesta]);

    if (respuestas.length + 1 >= preguntas.length) {
      setTerminado(true);
    }
  };

  const reiniciar = () => {
    setRespuestas([]);
    setTerminado(false);
  };

  const actual = respuestas.length;

  if (terminado) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-14">
        <div className="rounded-3xl border p-6 shadow-sm">
          <p className="mb-2 text-sm font-medium">Checklist completada</p>

          <h1 className="mb-4 text-3xl font-bold">
            Ya tienes preparada tu lista 🐶
          </h1>

          <p className="mb-6 text-gray-600">
            Has respondido las 10 preguntas. Guarda tus respuestas para
            utilizarlas al preparar la llegada de tu perro.
          </p>

          <button
            onClick={reiniciar}
            className="rounded-xl bg-black px-5 py-3 text-white"
          >
            Volver a empezar
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-14">
      <p className="mb-2 text-sm text-gray-500">
        Pregunta {actual + 1} de {preguntas.length}
      </p>

      <h1 className="mb-8 text-3xl font-bold">
        Prepara la llegada de tu perro 🐾
      </h1>

      <div className="rounded-3xl border p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          {preguntas[actual]}
        </h2>

        <div className="grid gap-3">
          {["Sí", "No", "No estoy seguro"].map((opcion) => (
            <button
              key={opcion}
              onClick={() => responder(opcion)}
              className="rounded-xl border px-4 py-4 text-left transition hover:bg-gray-100"
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
