// src/components/VirtualRevolution.tsx
import React from "react";
import { FaClock, FaChartLine, FaRobot } from "react-icons/fa";

interface VirtualRevolutionProps {
  /** URL de la imagen que quieras mostrar */
  imageSrc?: string;
}

const VirtualRevolution: React.FC<VirtualRevolutionProps> = ({ imageSrc }) => {
  return (
    <section className="bg-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
        Imaginen tener asistentes virtuales que trabajen las{" "}
        <strong className="text-blue-400">24/7</strong>, mejorando la
        eficiencia, reduciendo costos y aumentando la satisfacción del cliente.{" "}
        <FaClock className="inline-block text-yellow-400 ml-2" size={24} />
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
         {/* Imagen */}
         <div className="flex-1 flex justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Asistentes virtuales trabajando 24/7"
              className="w-full max-w-md h-auto rounded-lg shadow-2xl object-cover"
            />
          ) : (
            <div className="w-full max-w-md h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">[Tu imagen aquí]</span>
            </div>
          )}
        </div>
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <p className="text-gray-300 text-lg">
            ¡Prepárense para conocer la revolución tecnológica que traerá grandes
            beneficios a sus empresas!{" "}
            <FaChartLine className="inline-block text-green-400 ml-1" size={20} />
          </p>
          <p className="text-gray-300 text-lg">
            👉 Manténganse atentos y no se pierdan esta gran oportunidad.{" "}
            <span className="text-blue-400 font-semibold">¡Lo mejor está por venir!</span>{" "}
            🔜
          </p>
          <p className="text-gray-500 italic">#Innovación #Tecnología #Bots</p>
          <button
            className="mt-6 mx-auto lg:mx-0 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600
                       hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full
                       transition-shadow shadow-lg hover:shadow-xl"
          >
            <FaRobot /> Descúbrelo ahora
          </button>
        </div>

       
      </div>
    </section>
  );
};

export default VirtualRevolution;
