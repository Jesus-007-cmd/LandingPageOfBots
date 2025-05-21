import React, { useState } from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import EarlyTestimonial from "../components/EarlyTestimonial";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import { bots } from "../data/bots2";
import CategorySelector from "../components/CategorySelector";


const categoriasUnicas = [...new Set(bots.map(bot => bot.categoria))];

const LandingPage: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState(categoriasUnicas[0]);
  

  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <Benefits />
      <EarlyTestimonial />
      <Stats />
      <HowItWorks />

      <section id="bots" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Nuestros Bots</h2>
        <CategorySelector
          categorias={categoriasUnicas}
          categoriaSeleccionada={categoriaActiva}
          onSeleccionar={setCategoriaActiva}
        />
       
      </section>

      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default LandingPage;
