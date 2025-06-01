import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Zap, Edit, PlusCircle } from "lucide-react";

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

const FAQ: React.FC = () => (
  <section
    id="faq"
    className="py-20 bg-gray-900 text-white relative overflow-hidden"
  >
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-400">
        Preguntas frecuentes
      </h2>
      <div className="space-y-10">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-700 flex items-start gap-4"
          >
            <div className="mt-1">{f.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Fondo decorativo */}
    <motion.img
      src="/assets/images/botpensante.webp"
      alt="FAQ Illustration"
      className="absolute bottom-0 right-0 max-w-[400px] opacity-5 select-none hidden md:block"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 0.05 }}
      transition={{ duration: 1.2 }}
    />
  </section>
);

export default FAQ;