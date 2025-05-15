import React from "react";

const testimonials = [
  {
    quote:
      "Gracias a los bots he podido atender el doble de clientes sin contratar más personal.",
    author: "María Pérez, CEO de Acme Corp",
  },
  {
    quote:
      "Estas prompts son oro puro. Me ahorran horas de trabajo todos los días.",
    author: "Carlos López, Freelance Marketing",
  },
];

const Testimonials: React.FC = () => (
  <section
    id="testimonios"
    className="py-16 bg-gray-900 text-white"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">
        Testimonios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <p className="italic mb-4">“{t.quote}”</p>
            <p className="font-semibold">{t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
