import React from "react";
import { BookOpenCheck } from "lucide-react";
import { motion } from "framer-motion";

const EbookGift: React.FC = () => (
  <main className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl w-full bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-700"
    >
      <motion.img
        src="/assets/images/ebookgift.webp" // Usa aquí tu imagen
        alt="eBook de Regalo"
        className="w-40 mx-auto mb-6 rounded-lg shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <h1 className="text-3xl font-bold text-indigo-400 mb-4">
        🎁 ¡eBook de regalo para ti!
      </h1>
      <p className="text-gray-300 mb-6">
        Descarga gratis nuestra <strong>Guía Completa de Marketing Digital usando Bots</strong> y empieza a impulsar tu negocio desde hoy.
      </p>
      <a
        href="/assets/pdf/GuiaMarketingDigitalInteligenciaArtificialPyMEs.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold text-lg shadow-lg"
      >
        <BookOpenCheck className="w-5 h-5" />
        Descargar eBook
      </a>
    </motion.div>
  </main>
);

export default EbookGift;
