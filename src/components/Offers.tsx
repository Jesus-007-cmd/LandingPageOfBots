import React from "react";

const Offers: React.FC = () => (
  <section
    id="que-ofrecen"
    className="py-16 bg-gray-900 text-white"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">
        ¿Qué ofrecemos?
      </h2>
      <p className="mb-8 text-gray-300">
        Con tu compra recibirás:
      </p>

      <ul className="list-disc list-inside text-left space-y-2 mb-12 text-gray-400 max-w-md mx-auto">
        <li>Acceso de por vida a todos los bots</li>
        <li>Guía rápida de uso paso a paso</li>
        <li>Actualizaciones y nuevos bots periódicamente</li>
        <li>Soporte 24/7 vía chat y correo</li>
      </ul>

      {/* Placeholder para botón de compra */}
      <button
        className="
          px-8 py-3
          bg-red-600 text-white font-semibold
          rounded-full
          opacity-50 cursor-not-allowed
        "
        disabled
      >
        Comprar ahora
      </button>
    </div>
  </section>
);

export default Offers;
