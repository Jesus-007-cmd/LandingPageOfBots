import React from "react";
import { motion } from "framer-motion";
import { Flame, Rocket, AlertTriangle, ArrowRight } from "lucide-react";

const FinalCallToAction: React.FC = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-gray-900 to-black py-24 px-6 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto z-10 relative space-y-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold leading-snug text-center text-red-400 drop-shadow animate-pulse"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🛑 ¡¡¡¡¿Sigues dudando?!
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          ¿Cuántas oportunidades más vas a dejar pasar?
          <br />
          Has gastado más en cenas, gasolina o cosas que ya ni recuerdas.
          <br />
          Hoy tienes frente a ti una herramienta <strong>probada, real y diseñada para generar ingresos automáticos</strong> mientras duermes.
        </motion.p>

        <motion.div
          className="text-center text-orange-400 font-semibold text-xl mt-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Flame className="inline w-6 h-6 mr-2 animate-bounce" />
          DECISIÓN: lo que separa a quienes ganan de los que solo observan.
        </motion.div>

        <motion.p
          className="text-center text-gray-400 mt-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Y si todavía tienes que pensarlo...
          <br />
          Tal vez esta oportunidad no sea para ti.
        </motion.p>

        <motion.h3
          className="text-center mt-8 text-2xl font-bold text-white drop-shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          ¿Te unes o lo dejas pasar otra vez?
        </motion.h3>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-xl transition-transform transform hover:scale-105 animate-pulse"
          >
            <ArrowRight className="w-6 h-6" />
            QUIERO MIS BOTS AHORA
          </a>
        </motion.div>
      </div>

      {/* Fondo decorativo suave */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/images/botanalizando.webp')] bg-no-repeat bg-bottom bg-contain"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </motion.section>
  );
};

export default FinalCallToAction;
