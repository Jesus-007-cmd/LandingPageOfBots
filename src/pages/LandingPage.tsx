import React from "react";
import Header from "../components/Header";
import BotList from "../components/BotList";

import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


const LandingPage: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Patrón visual suave */}
      <div className="absolute inset-0 bg-[url('/pattern-waves.svg')] bg-repeat bg-[length:600px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-16">
        <Header />

        <section className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-animate-color">
            Bots Inteligentes para Impulsar tu Negocio
          </h2>

          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Elige entre una variedad de asistentes con inteligencia artificial para mejorar tus ventas, productividad y servicio.
          </p>

          {/* Aquí renderizamos toda la lista con buscador integrado */}
          <BotList />
        </section>

        <CallToAction />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;