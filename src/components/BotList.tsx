import React, { useState, useMemo } from "react";
import { bots } from "../data/bots";
import BotCard from "./BotCard";

const BotList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Memoizar el filtrado por rendimiento
  const filteredBots = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return bots;
    return bots.filter((bot) =>
      bot.nombre.toLowerCase().includes(term) ||
      bot.descripcion.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="p-4">
      {/* Input de búsqueda con resplandor rojo animado */}
      <input
        type="text"
        placeholder="Buscar bots…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full mb-6 px-4 py-2 rounded-lg
          bg-white/10 text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-red-500
          hover:ring-2 hover:ring-red-500
          transition-all duration-300
          hover:animate-pulse
        "
      />

      {/* Grid o lista de BotCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBots.map((bot) => (
          <BotCard
            key={bot.nombre}
            nombre={bot.nombre}
            descripcion={bot.descripcion}
            imagen={bot.imagen}
          />
        ))}

        {filteredBots.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            No se encontraron bots con “{searchTerm}”
          </p>
        )}
      </div>
    </div>
  );
};

export default BotList;
