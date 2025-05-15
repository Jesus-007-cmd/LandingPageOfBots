import React from "react";

const faqs = [
  {
    q: "¿Cómo funciona la integración con ChatGPT?",
    a: "Simplemente copias y pegas nuestras prompts en tu cuenta de ChatGPT, ¡y listo!",
  },
  {
    q: "¿Necesito ChatGPT Plus?",
    a: "No, funciona perfectamente con cuentas gratuitas de ChatGPT.",
  },
  {
    q: "¿Puedo personalizar los bots?",
    a: "Sí, cada prompt viene comentada y lista para que la adaptes a tu estilo.",
  },
];

const FAQ: React.FC = () => (
  <section
    id="faq"
    className="py-16 bg-gray-800 text-white"
  >
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="font-semibold">{f.q}</h3>
            <p className="mt-2 text-gray-300">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
