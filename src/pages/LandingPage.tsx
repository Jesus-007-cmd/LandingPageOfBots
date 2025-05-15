import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import EarlyTestimonial from "../components/EarlyTestimonial";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import BotList from "../components/BotList";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

import Footer from "../components/Footer";

const LandingPage: React.FC = () => (
  <main className="bg-gray-900 text-white">
    <Hero />
    <Benefits />
    <EarlyTestimonial />
    <Stats />
    <HowItWorks />
    <section id="bots" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Nuestros Bots</h2>
      <BotList />
    </section>
    <Pricing />
    <FAQ />
    <Testimonials />
    {/*<ContactForm />*/}
    <Footer />
  </main>
);

export default LandingPage;
