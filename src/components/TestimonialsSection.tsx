// src/components/TestimonialSection.tsx
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface Props {
  image: string;
  name: string;
  comment: string;
  reverse?: boolean;
}

const TestimonialSection: React.FC<Props> = ({ image, name, comment, reverse = false }) => {
  return (
    <section className="bg-gray-900 py-20 px-6 text-white">
      <div
        className={`max-w-6xl mx-auto flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-10`}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <img
            src={image}
            alt={`Testimonio de ${name}`}
            className="rounded-2xl shadow-2xl w-full max-h-[500px] object-contain border-4 border-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div className="flex justify-center lg:justify-start gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl italic text-gray-300 mb-4">“{comment}”</blockquote>
          <p className="text-white font-bold text-lg">— {name}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
