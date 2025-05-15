import React from "react";

const stats = [
  { label: "Usuarios activos", value: "12 000+" },
  { label: "Bots listos", value: "70+" },
  { label: "Horas ahorradas", value: "24 000+" },
];

const Stats: React.FC = () => (
  <section className="py-16 bg-gray-900 text-white">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
      {stats.map((s, i) => (
        <div key={i} className="space-y-2">
          <div className="text-4xl font-extrabold text-red-500">{s.value}</div>
          <div className="text-lg">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
