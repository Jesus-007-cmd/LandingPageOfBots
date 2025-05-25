// src/components/Pricing.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Gift, Sparkles } from 'lucide-react';

interface Plan {
  title: string;
  price: string;
  features: string[];
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const plans: Plan[] = [
  {
    title: '20 Bots Premium',
    price: '$50 USD',
    icon: Package,
    features: [
      '20 prompts listos',
      'Soporte prioritario',
      'Actualizaciones semanales',
    ],
  },
  {
    title: '30 + 10 Bots Gratis',
    price: '$75 USD',
    icon: Gift,
    features: [
      '30 prompts listos',
      '10 prompts de regalo',
      'Soporte premium 24/7',
    ],
  },
];

const Pricing: React.FC = () => (
  <section id="pricing" className="py-16 bg-gray-900 text-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-4 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
        Elige tu Pack Perfecto
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
      >
        Dos opciones diseñadas para impulsar tu negocio: escoge entre 20 bots o lleva 30 bots + 10 de regalo. ¡Automatiza y escala con IA!
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, i) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-purple-800 to-indigo-800 p-8 rounded-2xl shadow-2xl flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-7 h-7 text-pink-300" />
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                </div>
                <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1">
                        <Sparkles className="w-4 h-4 text-pink-400" />
                      </span>
                      <span className="text-base">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition self-center flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 animate-pulse" /> Comprar ahora
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Pricing;
