import React from "react";

const Features: React.FC = () => (
  <section
    id="que-hacen"
    className="py-16 bg-gray-800 text-white"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">
        ¿Qué hacen nuestros Bots?
      </h2>
      <p className="mb-12 text-gray-300">
        Cada uno de nuestros asistentes GPT está especializado para delegar tareas repetitivas
        y liberar tu tiempo para actividades estratégicas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-xl mb-2">Automatización</h3>
          <p className="text-gray-400">
            Desde generar informes hasta responder consultas, tus bots lo hacen por ti.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">Escalabilidad</h3>
          <p className="text-gray-400">
            Multiplica tu capacidad de atención sin aumentar tu equipo.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">Personalización</h3>
          <p className="text-gray-400">
            Ajusta cada bot a tu estilo de comunicación y necesidades de negocio.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
