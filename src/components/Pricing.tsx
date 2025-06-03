// src/components/Pricing.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Package, Sparkles } from 'lucide-react';

interface Plan {
  title: string;
  subtitle: string;
  price: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  features: string[];
  buttonLabel: string;
  highlight?: string;
  fullDescription: string;
}

const plans: Plan[] = [
  {
    title: 'Paquete 1 – 20 GPTs Personalizados',
    subtitle: '⚡ Automatiza, responde y resuelve con inteligencia propia',
    price: '$50 USD',
    icon: Package,
    features: [
      'GPTs preconfigurados para tareas reales',
      'Soporte prioritario para ayudarte a sacarles el máximo',
      'Acceso inmediato tras tu compra',
      'Ideal si estás comenzando o quieres una solución directa y práctica',
    ],
    buttonLabel: 'Comprar ahora',
    fullDescription:
      'Consigue 20 GPTs únicos y listos para usar en tu negocio, ventas, atención al cliente, contenido, logística, educación y mucho más.',
  },
  {
    title: 'Paquete 2 – 30 + 10 GPTs (¡Recibe 10 Gratis!)',
    subtitle: '🎯 El paquete más completo para automatizar tu mundo',
    price: '$75 USD',
    icon: Gift,
    features: [
      '30 GPTs + 10 de regalo (total: 40 GPTs)',
      'Soporte premium 24/7',
      'Aplicaciones para múltiples industrias y objetivos',
      'Acceso inmediato',
      'La opción más vendida, con mayor valor por tu inversión',
    ],
    buttonLabel: 'Quiero los 40 GPTs',
    fullDescription:
      'Llévate 40 GPTs personalizados creados para resolver tareas, crear contenido, asesorar clientes, procesar datos, y mucho más… sin complicarte.',
  },
];

const Pricing: React.FC = () => (
  <section id="pricing" className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">


    <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
        Planes que Impulsan tu Negocio
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
      >
        Escoge el paquete que mejor se adapte a tus metas y empieza a automatizar con GPTs listos para ti.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {plans.map((plan, i) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={i}
              className="bg-black/50 backdrop-blur-md border border-purple-600 p-8 rounded-3xl shadow-lg flex flex-col justify-between hover:shadow-pink-400/40 transition duration-300"

              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.03 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-7 h-7 text-pink-300" />
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                </div>
                <p className="text-sm italic text-pink-200 mb-2">{plan.subtitle}</p>
                <p className="text-base text-gray-300 mb-4">{plan.fullDescription}</p>
                <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-pink-400 mt-1 animate-pulse" />
                      <span className="text-base">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
  href={i === 0 ? "https://mpago.la/1JiuA5e" : "https://mpago.la/24JE8b7"}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition self-center flex items-center gap-2"
>
  <Sparkles className="w-5 h-5 animate-pulse" /> {plan.buttonLabel}
</a>

            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Pricing;