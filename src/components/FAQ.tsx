import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Rocket, MessageCircle, Zap, Edit, ShieldCheck, Languages, HandCoins, Bot, Users, Info, PlusCircle, MinusCircle } from "lucide-react";
import faqList from "../data/faqList.json";

import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  0: <MessageCircle className="w-6 h-6 text-pink-400 animate-pulse" />,
  1: <Bot className="w-6 h-6 text-cyan-400 animate-bounce" />,
  2: <Info className="w-6 h-6 text-blue-400 animate-spin-slow" />,
  3: <Users className="w-6 h-6 text-teal-400 animate-pulse" />,
  4: <HandCoins className="w-6 h-6 text-green-400 animate-bounce" />,
  5: <Languages className="w-6 h-6 text-violet-400 animate-pulse" />,
  6: <ShieldCheck className="w-6 h-6 text-emerald-400 animate-bounce" />,
  7: <Zap className="w-6 h-6 text-yellow-400 animate-wiggle" />,
  8: <Edit className="w-6 h-6 text-indigo-400 animate-float" />
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <motion.section
      id="faq"
      className="py-24 bg-gray-900 text-white relative overflow-hidden min-h-[900px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-yellow-400 drop-shadow-lg">
          Preguntas frecuentes
        </h2>

        <div className="space-y-6">
          {faqList.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl p-5 shadow-xl border transition-all cursor-pointer select-none group relative overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-r from-indigo-900 to-indigo-700 border-indigo-400 shadow-indigo-500/30"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <button
                  onClick={() => toggleIndex(i)}
                  className="w-full flex items-start justify-between gap-4 text-left focus:outline-none"
                >
                  <div className="flex gap-4 items-center">
                    {iconMap[i] || <Info className="w-6 h-6 text-gray-400" />}
                    <h3 className="text-lg sm:text-xl font-semibold group-hover:text-indigo-300">
                      {f.q}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    {isOpen ? (
                      <MinusCircle className="w-6 h-6 text-indigo-300" />
                    ) : (
                      <PlusCircle className="w-6 h-6 text-indigo-300" />
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
                      className="overflow-hidden mt-4 text-gray-300 text-[15px] leading-relaxed"
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
      <div className="flex justify-center mt-10 z-10 relative">
  <motion.a
    href="#pricing"
    variants={item}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg uppercase tracking-wide"
  >
    <Rocket className="w-5 h-5" /> ¡Transformar mi negocio hoy!
  </motion.a>
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
