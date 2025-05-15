import React from "react";

const steps = [
  { title: "1. Selecciona tu bot", desc: "Encuentra el asistente ideal para tu tarea." },
  { title: "2. Copia la prompt", desc: "Pégala en tu cuenta de ChatGPT al instante." },
  { title: "3. Ahorra tiempo", desc: "Automatiza procesos y crece tu negocio." },
];

const HowItWorks: React.FC = () => (
  <section className="py-16 bg-gray-800 text-white">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Cómo Funciona</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="bg-gray-700 p-6 rounded-xl text-center shadow-lg">
            <div className="text-5xl font-extrabold text-red-500 mb-4">{i + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
