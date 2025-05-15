// src/components/BotList.tsx
import React, { useState, useMemo } from "react";
import { bots } from "../data/bots";
import BotCard from "./BotCard";

const BotList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBots = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return bots;
    return bots.filter(bot =>
      bot.nombre.toLowerCase().includes(term) ||
      bot.descripcion.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
          {/* Instrucción para el buscador */}
          <p className="text-lg text-gray-400 mb-12">
        Escribe el nombre o palabra clave para encontrar tu bot (p.ej. “marketing”, “ventas”, “SEO”).
      </p>
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar bots…"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="
          w-full mb-8 px-5 py-3 rounded-lg
          bg-gray-700 text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-400
          hover:ring-2 hover:ring-blue-400
          transition duration-300
        "
      />

      {/* Grid responsivo y centrado */}
      <div className="
        grid
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
        gap-8
        justify-items-center   /* centra cada BotCard dentro de su celda */
        justify-center         /* centra el grid en su contenedor */
      ">
        {filteredBots.map(bot => (
          <BotCard
            key={bot.nombre}
            nombre={bot.nombre}
            descripcion={bot.descripcion}
            imagen={bot.imagen}
          />
        ))}

        {filteredBots.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No se encontraron bots con “{searchTerm}”
          </p>
        )}
      </div>
    </div>
  );
};

export default BotList;
