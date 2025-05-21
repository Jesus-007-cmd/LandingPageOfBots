// src/components/CategorySelector.tsx
import React, { useState, useRef, useMemo } from "react";
import { bots } from "../data/bots2";
import BotCard from "./BotCard";

interface CategorySelectorProps {
  categorias: string[];
  categoriaSeleccionada: string;
  onSeleccionar: (cat: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categorias,
  categoriaSeleccionada,
  onSeleccionar,
}) => {
  // filtro sigue siendo interno (opcional)
  const [filtro, setFiltro] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  // filtrado de categorías basado en el input
  const categoriasFiltradas = useMemo(
    () =>
      categorias.filter((cat) =>
        cat.toLowerCase().includes(filtro.toLowerCase())
      ),
    [filtro, categorias]
  );

  // bots filtrados según la categoría seleccionada (prop)
  const botsFiltrados = useMemo(
    () => bots.filter((b) => b.categoria === categoriaSeleccionada),
    [categoriaSeleccionada]
  );

  return (
    <div className="flex justify-center py-10">
      <div className="flex w-full max-w-7xl min-h-[80vh] bg-[#0f172a] rounded-xl shadow-lg overflow-hidden">
        {/* COLUMNA CATEGORÍAS */}
        <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Categorías</h2>

          {/* Buscador */}
          <input
            type="text"
            placeholder="Filtrar..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="w-full px-3 py-2 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Lista con scroll estilizado */}
          <div className="relative w-full">
            <ul
              ref={listRef}
              tabIndex={0}
              className="
                max-h-[35vh]
                overflow-y-auto
                scrollbar scrollbar-thin
                scrollbar-thumb-indigo-600
                scrollbar-track-gray-800
                space-y-2 px-2
              "
            >
              {categoriasFiltradas.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSeleccionar(cat)}
                    className={`
                      w-full text-left px-4 py-2 rounded-lg transition
                      ${
                        cat === categoriaSeleccionada
                          ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold"
                          : "hover:bg-gray-800"
                      }
                    `}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
            {/* Fades */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-gray-900 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>
        </div>

        {/* COLUMNA BOTS */}
        <div className="w-3/4 p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-6 border-b border-gray-700 pb-2">
            {categoriaSeleccionada}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {botsFiltrados.map((bot) => (
              <BotCard
                key={bot.nombre}
                nombre={bot.nombre}
                descripcion={bot.descripcion}
                imagen={bot.imagen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
