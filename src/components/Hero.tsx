// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => (
  <section
    className="
      relative h-[60vh]
      bg-[url('/pattern-waves.svg')] bg-cover bg-center
      flex flex-col justify-center items-center text-center
      text-white
    "
  >
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
      Descubre los Bots GPT que Transformarán tu Negocio
    </h1>
    <p className="max-w-2xl mb-8 opacity-90">
      Automatiza tareas, mejora tus ventas y ofrece atención 24/7 con inteligencia artificial.
    </p>
    <a
      href="#bots"
      className="
        bg-red-600 hover:bg-red-700
        px-6 py-3 rounded-full
        font-medium uppercase tracking-wide
        transition
      "
    >
      Ver Bots
    </a>
  </section>
);

export default Hero;

