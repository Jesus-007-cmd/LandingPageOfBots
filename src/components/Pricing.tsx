// src/components/Pricing.tsx
import React from "react";

interface Plan {
  title: string;
  price: string;
  features: string[];
}

const plans: Plan[] = [
  {
    title: "Pack 1 Bot",
    price: "$5 USD",
    features: [
      "1 prompt listo",
      "Soporte básico",
      "Actualizaciones mensuales"
    ],
  },
  {
    title: "Pack 5 Bots",
    price: "$19 USD",
    features: [
      "5 prompts listos",
      "Soporte prioritario",
      "Actualizaciones cada 2 semanas"
    ],
  },
  {
    title: "Pack 10 Bots",
    price: "$35 USD",
    features: [
      "10 prompts listos",
      "Soporte avanzado",
      "Acceso a nuevos bots al mes"
    ],
  },
  {
    title: "Pack 30 Bots",
    price: "$49 USD",
    features: [
      "30 prompts listos",
      "Soporte premium",
      "Actualizaciones semanales"
    ],
  },
  {
    title: "Pack 70 Bots",
    price: "$99 USD",
    features: [
      "70 prompts listos",
      "Soporte 24/7",
      "Nuevos bots cada semana"
    ],
  },
];

const Pricing: React.FC = () => (
    <section  id="pricing" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Elige tu Pack Perfecto</h2>
        <p className="text-lg text-gray-400 mb-12">
          Escoge el plan que mejor se adapte a tus necesidades y comienza a ahorrar
          tiempo y recursos hoy mismo. ¡Automatiza y escala tu negocio con IA!
        </p>
  
        <div className="
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
          gap-8
        ">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="
                bg-gray-800 
                p-6 md:p-8        /* padding reducido en vertical */
                rounded-2xl 
                shadow-lg 
                flex flex-col justify-between 
                h-full           /* iguala alturas */
              "
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-3xl md:text-4xl font-extrabold mb-4">
                  {plan.price}
                </p>
                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start">
                      <span className="mt-1 mr-2 w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              <button
                className="
                  bg-red-600 hover:bg-red-700
                  text-white font-medium
                  py-3 px-6 rounded-full
                  transition
                  self-center
                  mt-4
                "
              >
                Comprar ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Pricing;