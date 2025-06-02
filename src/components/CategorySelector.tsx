import React, { useState, useRef, useMemo } from "react";
import { bots } from "../data/bots2";
import BotCard from "./BotCard";

const categoriasUnicas = [...new Set(bots.map((b) => b.categoria))];

const CategorySelector: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState(categoriasUnicas[0]);
  const [filtro, setFiltro] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  const categoriasFiltradas = useMemo(
    () =>
      categoriasUnicas.filter((cat) =>
        cat.toLowerCase().includes(filtro.toLowerCase())
      ),
    [filtro]
  );

  const botsFiltrados = useMemo(
    () => bots.filter((b) => b.categoria === categoriaActiva),
    [categoriaActiva]
  );

  return (
    <div className="relative flex justify-center py-10">
      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col sm:flex-row w-full max-w-7xl min-h-[80vh] bg-[#0f172a] rounded-xl shadow-lg overflow-hidden">

        {/* ═══ Columna de Categorías ═══════════════════════════════════════ */}
        <div className="w-full sm:w-1/4 bg-gray-900 text-white p-4 flex flex-col sm:items-center">
          <h2 className="text-2xl font-bold mb-4">Categorías</h2>
          <input
            type="text"
            placeholder="Filtrar..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="w-full px-3 py-2 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative w-full">
            <ul
              ref={listRef}
              tabIndex={0}
              className={`
                w-full
                max-h-[100px] sm:max-h-[35vh]
                overflow-x-auto sm:overflow-x-hidden
                overflow-y-hidden sm:overflow-y-auto
                scrollbar scrollbar-thin
                scrollbar-thumb-indigo-600
                scrollbar-track-gray-800
                flex sm:block
                gap-2 sm:space-y-2
                px-2
              `}
            >
              {categoriasFiltradas.map((cat) => (
                <li key={cat} className="shrink-0 sm:shrink">
                  <button
                    onClick={() => setCategoriaActiva(cat)}
                    className={`
                      whitespace-nowrap sm:whitespace-normal
                      px-4 py-2 rounded-lg transition
                      ${
                        cat === categoriaActiva
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
            <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-gray-900 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>
        </div>

        {/* ═══ Columna de Bots con fondo decorativo a la derecha ═════════ */}
        <div className="relative w-full sm:w-4/4 p-6 overflow-y-auto">

          {/* Imagen de fondo decorativa */}
          <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none">
            <img
              src="/assets/images/botsprofesionales.webp"
              alt="Fondo decorativo de bots"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* Contenido principal de los bots */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white text-center mb-6 border-b border-gray-700 pb-2">
              {categoriaActiva}
            </h3>
            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </div>
  );
};

export default CategorySelector;
