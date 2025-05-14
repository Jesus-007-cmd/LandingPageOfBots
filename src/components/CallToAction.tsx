import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-blue-700 text-white text-center py-10 px-4 mt-16 rounded-2xl shadow-lg max-w-4xl w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        ¿Listo para automatizar y escalar tu negocio?
      </h2>
      <p className="mb-6">
        Elige el bot que más se adapte a tus necesidades o contáctanos para recibir asesoría personalizada.
      </p>
      <a
        href="#contacto"
        className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Contáctanos Ahora
      </a>
    </section>
  );
};

export default CallToAction;
