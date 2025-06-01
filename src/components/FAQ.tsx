import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Zap, Edit, PlusCircle, MinusCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo funciona la integración con ChatGPT?",
    a: "Simplemente copias y pegas nuestras prompts en tu cuenta de ChatGPT, ¡y listo!",
    icon: <MessageCircle className="w-6 h-6 text-pink-500" />,
  },
  {
    q: "¿Necesito ChatGPT Plus?",
    a: "No, funciona perfectamente con cuentas gratuitas de ChatGPT.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
  },
  {
    q: "¿Puedo personalizar los bots?",
    a: "Sí, cada prompt viene comentada y lista para que la adaptes a tu estilo.",
    icon: <Edit className="w-6 h-6 text-indigo-400" />,
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <motion.section
      id="faq"
      className="py-20 bg-gray-900 text-white relative overflow-hidden min-h-[800px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-400">
          Preguntas frecuentes
        </h2>

        <div className="space-y-6">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl p-5 shadow-lg border transition-all ${
                  isOpen
                    ? "bg-gray-800 border-indigo-500 shadow-indigo-400/20"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <button
                  onClick={() => toggleIndex(i)}
                  className="w-full flex items-start justify-between gap-4 text-left focus:outline-none"
                >
                  <div className="flex gap-4 items-center">
                    {f.icon}
                    <h3 className="text-lg sm:text-xl font-semibold">{f.q}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    {isOpen ? (
                      <MinusCircle className="w-6 h-6 text-indigo-400" />
                    ) : (
                      <PlusCircle className="w-6 h-6 text-indigo-400" />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-3 text-gray-400 text-sm"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fondo decorativo animado */}
      <motion.img
        src="/assets/images/botpensante.webp"
        alt="Bot Pensante"
        className="absolute bottom-4 right-4 w-[260px] sm:w-[380px] lg:w-[440px] opacity-10 sm:opacity-5 select-none z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </motion.section>
  );
};

export default FAQ;
