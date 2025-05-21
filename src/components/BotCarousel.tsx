import React from "react";
import type { BotGPT } from "../data/bots2";
import BotCard from "./BotCard";

interface BotCarouselProps {
  titulo: string;
  bots: BotGPT[];
}

const BotCarousel: React.FC<BotCarouselProps> = ({ titulo, bots }) => {
  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 px-4">{titulo}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {bots.map((bot, index) => (
          <BotCard
            key={index}
            nombre={bot.nombre}
            descripcion={bot.descripcion}
            imagen={bot.imagen}
          />
        ))}
      </div>
    </section>
  );
};

export default BotCarousel;
