import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface Props {
  image: string;
  name: string;
  comment: string;
  delay?: number;
}

const TestimonialCard: React.FC<Props> = ({ image, name, comment, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl flex flex-col items-center text-center"
    >
      <img
        src={image}
        alt={`Testimonio de ${name}`}
        className="w-full max-w-[280px] rounded-xl shadow-md mb-4"
      />
      <div className="flex justify-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
      <p className="italic text-gray-300 mb-2">{`“${comment}”`}</p>
      <p className="text-white font-semibold">{name}</p>
    </motion.div>
  );
};

export default TestimonialCard;
