import React from "react";

import { StarIcon } from "@heroicons/react/24/solid";

const EarlyTestimonial: React.FC = () => (
  <section className="py-12 bg-gray-800 text-white">
    <div className="max-w-3xl mx-auto text-center px-6">
      <div className="inline-flex bg-gray-700 rounded-full px-4 py-2 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-xl italic mb-4">
        “Gracias a estos bots he duplicado mi capacidad de atención sin contratar más personal.”
      </blockquote>
      <p className="font-semibold">— María Pérez, CEO de Acme Corp</p>
    </div>
  </section>
);

export default EarlyTestimonial;
