// src/components/ChatbotSuitePromo.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Megaphone, BarChart2, Users, Edit3 } from 'lucide-react';

interface ChatbotSuitePromoProps {
  /** Ruta o URL de la imagen ilustrativa (opcional) */
  imageSrc?: string;
}

const container = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: 'easeOut' } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
};

const ChatbotSuitePromo: React.FC<ChatbotSuitePromoProps> = ({ imageSrc }) => {
  const features = [
    { icon: Megaphone, text: 'Automatización del marketing' },
    { icon: BarChart2, text: 'Optimización de SEO' },
    { icon: Users, text: 'Gestión de equipos' },
    { icon: Edit3, text: 'Creación de contenido' },
  ];

  return (
    <motion.section
    
      className="relative overflow-hidden bg-gradient-to-r from-blue-1000 to-indigo-600 text-white rounded-2xl shadow-2xl lg:flex lg:items-center lg:justify-between py-12 px-6 lg:px-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="lg:w-1/2 space-y-6" variants={item}>
        <h2 className="text-3xl lg:text-4xl font-extrabold flex items-center gap-3">
          <Rocket className="w-8 h-8 text-indigo-300 animate-bounce" />
          Accede a nuestra exclusiva suite de bots
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed">
          Estos asistentes virtuales cubren funciones clave, permitiéndote centrarte en las decisiones estratégicas mientras los bots se encargan de las tareas operativas.
        </p>
        <motion.ul className="space-y-4" variants={container}>
          {features.map(({ icon: Icon, text }, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-3"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="w-6 h-6 text-pink-400 animate-pulse" />
              <span className="text-lg lg:text-xl">{text}</span>
            </motion.li>
          ))}
        </motion.ul>
        <p className="text-lg lg:text-xl leading-relaxed">
            Permitiéndote centrarte en las decisiones estratégicas mientras los bots se encargan de las tareas operativas. Mejora la eficiencia, incrementa la productividad y asegura un crecimiento sostenido con tecnología avanzada, ajustada a las necesidades de tu negocio. ¡Transforma tu forma de trabajar con nuestra suite de bots!
        </p>
        <motion.a
  href="#pricing"
  variants={item}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 300 }}
  className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg uppercase tracking-wide"
>
  <Rocket className="w-5 h-5" /> ¡Empieza hoy mismo!
</motion.a>
      </motion.div>

      {imageSrc && (
        <motion.div
          className="hidden lg:block lg:w-1/2 pl-8"
          variants={item}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={imageSrc}
            alt="Ilustración de bots en acción"
            className="w-full h-auto object-cover rounded-xl border-4 border-white shadow-inner"
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default ChatbotSuitePromo;
