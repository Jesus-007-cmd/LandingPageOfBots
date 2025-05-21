// src/components/GPTBusinessComponent.tsx
import React from "react";
import {
  FaUserCircle,
  FaBullhorn,
  FaCogs,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

interface GPTBusinessProps {
  /** URL de la imagen que ilustre tu GPT asistente */
  imageSrc?: string;
}

const GPTBusinessComponent: React.FC<GPTBusinessProps> = ({ imageSrc }) => {
  return (
    <section className="bg-gray-900 text-center  py-16 px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Imagina tener una herramienta en tu negocio que no solo responde
            preguntas, sino que entiende a fondo las necesidades de tus clientes.
          </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Bloque de texto */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p></p>
          <ul className="space-y-4 text-gray-200 text-lg">
            <li className="flex items-start gap-3">
              <FaUserCircle className="mt-1 text-blue-400" size={22} />
              <span>
                <strong>Atención al Cliente Personalizada:</strong> Un GPT puede
                convertirse en el “rostro digital” de tu empresa, atendiendo 24/7
                con respuestas rápidas y a la medida.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaBullhorn className="mt-1 text-red-400" size={22} />
              <span>
                <strong>Marketing Automatizado y Efectivo:</strong> Genera
                campañas y mensajes promocionales que realmente conecten con
                tus usuarios basándose en sus intereses.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCogs className="mt-1 text-green-400" size={22} />
              <span>
                <strong>Optimización de Procesos Internos:</strong> Desde
                reportes hasta análisis de datos, libera tiempo para que tu
                equipo se concentre en la estrategia.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaChartLine className="mt-1 text-yellow-400" size={22} />
              <span>
                <strong>Asistencia en la Toma de Decisiones:</strong> Recibe
                recomendaciones basadas en datos y predicciones para lanzar
                productos o definir estrategias.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaLightbulb className="mt-1 text-purple-400" size={22} />
              <span>
                <strong>Innovación Constante:</strong> Tu GPT aprende y se adapta
                para mantenerte siempre un paso adelante de la competencia.
              </span>
            </li>
          </ul>

          <p className="text-gray-400 italic">
            Inversión desde <strong className="text-white">$500</strong>.  
            ¿Qué área de tu negocio se beneficiaría más?
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500
                         hover:from-indigo-700 hover:to-blue-600 text-white font-semibold py-3 px-8
                         rounded-full transition-shadow shadow-lg hover:shadow-xl"
            >
              ¡Hablemos de tu GPT!
            </button>
          </div>
        </div>

        {/* Imagen ilustrativa */}
        <div className="flex-1 flex justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Ilustración GPT asistente"
              className="w-full max-w-sm rounded-lg shadow-2xl object-cover"
            />
          ) : (
            <div className="w-full max-w-sm h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">[Tu imagen aquí]</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GPTBusinessComponent;
