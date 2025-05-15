// src/components/BotCard.tsx
import React from "react";
import type { BotGPT } from "../data/bots";

interface Props {
  nombre: BotGPT["nombre"];
  descripcion: BotGPT["descripcion"];
  imagen: BotGPT["imagen"];
}

const BotCard: React.FC<Props> = ({ nombre, descripcion, imagen }) => (
  <div
    className="
      relative group
      bg-gray-800 hover:bg-gray-700
      rounded-2xl shadow-md
      overflow-hidden
      transition-all duration-300
      p-6 flex flex-col items-center 
      text-center border border-transparent
      hover:border-blue-400
      max-w-sm
      h-full
    "
  >
    {/* Aura + Imagen */}
    <div className="relative w-40 h-40 mb-4">
      <div className="
        absolute inset-0 rounded-full bg-blue-400/30
        filter blur-xl opacity-0
        group-hover:opacity-100 transition-opacity duration-500 animate-pulse
      "/>
      <div className="
        absolute inset-0 rounded-full bg-blue-400/50
        filter blur-2xl opacity-0
        group-hover:opacity-80 transition-opacity duration-700 animate-ping
      "/>
      <img
        src={`/assets/robots/${imagen}`}
        alt={nombre}
        className="
          relative z-10 w-full h-full object-contain
          transition-transform duration-300 group-hover:scale-125
        "
      />
    </div>

    {/* Texto */}
    <h3 className="text-xl font-bold text-white mb-2">{nombre}</h3>
    <p className="text-sm text-gray-400 line-clamp-4">{descripcion}</p>

    {/* Espacio para el botón */}
    <div className="mt-auto w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a
        href="#pricing"
        className="
          block
          bg-red-600 hover:bg-red-700
          text-white font-medium
          py-2 mt-4
          rounded-full
          transition
        "
      >
        Comprar
      </a>
    </div>
  </div>
);

export default BotCard;
