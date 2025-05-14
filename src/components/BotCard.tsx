import React from "react";
import type { BotGPT } from "../data/bots";

interface Props {
  nombre: BotGPT["nombre"];
  descripcion: BotGPT["descripcion"];
  imagen: BotGPT["imagen"];
}

const BotCard: React.FC<Props> = ({ nombre, descripcion, imagen }) => (
  <div className="group bg-white/5 hover:bg-white/10 rounded-2xl shadow-md transition-all duration-300 p-5 flex items-center gap-5 text-left border border-white/10 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(0,195,255,0.3)]">
    <img
      src={`/assets/${imagen}`}
      alt={nombre}
      className="w-20 h-28 object-cover rounded-[50%/60%] border-2 border-white/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,195,255,0.5)] transition duration-300"
    />
    <div className="flex-1">
      <h3 className="text-base font-bold text-white leading-tight">{nombre}</h3>
      <p className="text-sm text-gray-300 mt-1 leading-snug">{descripcion}</p>
    </div>
  </div>
);

export default BotCard;
