import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="
      relative
      bg-gradient-to-r from-blue-600 to-blue-800
      text-white text-center
      py-12 px-6 mt-16
      rounded-3xl shadow-2xl
      max-w-3xl mx-auto
      overflow-hidden
    ">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3 animate-pulse">
        ¿Listo para automatizar y escalar tu negocio?
      </h2>
      <p className="text-lg md:text-xl mb-6 opacity-90">
        Elige el bot que más se adapte a tus necesidades o contáctanos para recibir asesoría personalizada.
      </p>
      <a
        href="#pricing"
        className="
          inline-block
          bg-white text-blue-700 font-semibold
          py-3 px-8 rounded-full
          shadow hover:shadow-lg
          transition transform hover:-translate-y-1
        "
      >
        Contáctanos Ahora
      </a>
      {/* Puedes añadir aquí un SVG decorativo o pattern en absoluto si quieres más personalidad */}
    </section>
  );
};

export default CallToAction;
