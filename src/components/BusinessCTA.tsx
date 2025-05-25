// src/components/BusinessCTA.tsx
import React from "react";
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import {
  FaMobileAlt,
  FaBullhorn,
  FaClock,
  FaSearch,
} from "react-icons/fa";

interface BusinessCTAProps {
  /** URL de la imagen que quieras mostrar */
  imageSrc?: string;
}

const BusinessCTA: React.FC<BusinessCTAProps> = ({ imageSrc }) => {
  return (
    <section className="bg-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-3xl text-center sm:text-4xl font-bold text-white mb-4">
        ¿Estás listo para llevar tu negocio al siguiente nivel? 🔝✨
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Texto + bullets */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-gray-300 mb-8">
            Imagina tener un equipo incansable que trabaja 24/7 para ti. Con nuestros Bots avanzados, obtendrás:
          </p>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-start gap-3">
              <FaMobileAlt className="mt-1 text-yellow-400" size={20} />
              <span>
                <strong>Creación de Contenido Automatizado:</strong> Mantén tus redes sociales siempre activas con publicaciones relevantes y atractivas. 📝🤖
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaBullhorn className="mt-1 text-red-400" size={20} />
              <span>
                <strong>Análisis de Campañas de Ads:</strong> Maximiza tu ROI con análisis precisos de Facebook Ads y Google Ads. 📈🔍
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="mt-1 text-green-400" size={20} />
              <span>
                <strong>Análisis en Tiempo Real:</strong> Toma decisiones informadas con insights detallados sobre el comportamiento de tus clientes. 📊🕵️‍♂️
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaSearch className="mt-1 text-purple-400" size={20} />
              <span>
                <strong>Posicionamiento SEO Efectivo:</strong> Mejora tu visibilidad en buscadores y atrae más tráfico orgánico. 🌐🔝
              </span>
            </li>
          </ul>
        </div>

        {/* Imagen lateral */}
        <div className="flex-1 flex flex-col items-center gap-6">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Ilustración de bots trabajando"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          ) : (
            <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">[Aquí va tu imagen]</span>
            </div>
          )}
        </div>

      </div>
      <motion.a
        href="#pricing"
        className="mt-8 inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg uppercase tracking-wide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Rocket className="w-5 h-5" /> ¡Quiero impulsar mi negocio!
      </motion.a>
    </section>
  );
};

export default BusinessCTA;
