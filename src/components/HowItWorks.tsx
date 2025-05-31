// src/components/HowItWorks.tsx
import React from "react";

const steps = [
  {
    number: 1,
    title: "Elige el kit de bots que se adapte a tus necesidades.",
    desc: "¡Puedes aprovechar la oferta y elegir el pack que incluye 10 bots de regalo!",
    image: "/assets/images/bot-kit.webp", // ✅ sin /public
  },
  {
    number: 2,
    title: "Configúralo con las tareas que necesites de tu empresa, negocio o contenido.",
    desc: "¡Estás a un paso de aumentar exponencialmente tus ingresos!",
    image: "/assets/images/bot-config.webp",
  },
  {
    number: 3,
    title: "¡Deja que el bot genere ingresos para ti todo el tiempo!",
    desc: "",
    image: "/assets/images/bot-income.webp",
  },
];

const HowItWorks: React.FC = () => (
  <section className="bg-gray-900 py-20 px-6 text-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl text-center font-extrabold text-yellow-400 mb-12">
        GENERAR DINERO <span className="text-white">24/7</span> TRABAJANDO EN AUTOMÁTICO
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition flex flex-col items-center"
          >
            <div className="w-full h-60 flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={step.image}
                alt={`Paso ${step.number}`}
                className="max-h-60 object-contain"
              />
            </div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">{step.number}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
            {step.desc && <p className="text-gray-300 text-sm">{step.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
