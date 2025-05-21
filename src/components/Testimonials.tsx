import React from "react";

const testimonials = [
  {
    imagen: "casoRoger.png",
    name: "Roger Mendoza",
    quote:
      "¡Hombre! Que sus bots son una maravilla tío. Nos agrada que te hayan funcionado y ya estés monetizando?",
  },
  {
    imagen: "casoMayely.png",
    name: "Mayely Gómez",
    quote:
      "Muchísimas gracias por la recomendación. Hemos tenido una respuesta excelente de la gente. ¡Pronto no estarán al mismo precio, así que aprovecha!",
  },
  {
    imagen: "casoEdgarMartinez.png",
    name: "Edgar Martínez",
    quote: "¿Y tú qué crees? No paro de hacerlo 😉",
  },
];

const Testimonials: React.FC = () => (
  <section id="testimonios" className="py-16 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Testimonios y Casos de Éxito
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Mira cómo estos emprendedores han multiplicado sus resultados usando nuestros bots.
      </p>

      {/* Grid sin input de búsqueda */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center h-full"
          >
            {/* Imagen de caso de éxito */}
            <div className="w-full bg-white rounded-2xl overflow-hidden mb-4 shadow-inner">
              <img
                src={`/assets/casosdeexito/${t.imagen}`}
                alt={t.name}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Cita */}
            <p className="italic text-gray-200 mb-4 flex-1">“{t.quote}”</p>
            {/* Nombre */}
            <p className="font-semibold text-white mt-2">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
