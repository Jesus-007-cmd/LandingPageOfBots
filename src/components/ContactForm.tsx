import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section
      id="contacto"
      className="
        relative
        w-full max-w-lg mx-auto
        mt-12 mb-20
        p-8 bg-white
        rounded-2xl shadow-xl
      "
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Contáctanos
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3
            border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-700
            transition
          "
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3
            border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-700
            transition
          "
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3
            border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-700
            transition
          "
        />
        <button
          type="submit"
          className="
            w-full bg-blue-700 text-white
            py-3 rounded-full font-medium
            hover:bg-blue-800
            transition
          "
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
