// src/components/SuiteBotsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import suiteData from "../data/suiteBotsContent.json";

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const SuiteBotsSection: React.FC = () => {
  const { title, intro, image, sections, cta } = suiteData;

  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 sm:px-12 lg:px-24 text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Título */}
      <motion.h2
        variants={item}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 
                   bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      {/* Introducción */}
      <motion.p
        variants={item}
        className="max-w-3xl mx-auto text-center text-gray-300 mb-12 leading-relaxed"
      >
        {intro}
      </motion.p>

      {/* Imagen flotante */}
      {image && (
        <motion.div
          variants={item}
          className="hidden md:block absolute top-1/4 right-12 w-1/4 opacity-30"
          style={{ pointerEvents: "none" }}
        >
          <img
            src={image}
            alt="Suite de Bots"
            className="rounded-lg shadow-2xl object-cover w-full h-auto"
          />
        </motion.div>
      )}

      {/* Grid de secciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            variants={item}
            className="p-6 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-2xl shadow-lg
                       hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {sec.heading}
            </h3>
            <p className="text-gray-200 leading-relaxed">{sec.content}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div variants={item} className="mt-16 flex justify-center z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600
                     hover:from-blue-700 hover:to-indigo-600 text-white font-semibold py-3 px-8
                     rounded-full shadow-xl transition-shadow"
        >
          {cta}
        </motion.button>
      </motion.div>

      {/* Overlay de partículas sutil */}
      <div className="absolute inset-0 bg-[url('/assets/images/particles.png')] bg-center bg-repeat opacity-5 pointer-events-none" />
    </motion.section>
  );
};

export default SuiteBotsSection;
