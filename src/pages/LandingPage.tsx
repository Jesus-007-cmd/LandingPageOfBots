import Hero from "../components/Hero";
import Benefits from "../components/Benefits";

import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

import Footer from "../components/Footer";
import BusinessCTA from "../components/BusinessCTA";
import TestimonialSection from "../components/TestimonialsSection";

import CategorySelector from "../components/CategorySelector";
import VirtualRevolution from "../components/VirtualRevolution";
import GPTBusinessComponent from "../components/GPTBusinessComponent";
import SuiteBotsSection from "../components/SuiteBotsSection"
import ChatbotSuitePromo from "../components/ChatbotSuitePromo"
import FinalCallToAction from "../components/FinalCallToAction"
// En tu página…
<GPTBusinessComponent imageSrc="/assets/emprendedorapensandoenredessociales.jpg" />




const LandingPage: React.FC = () => {



  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <Benefits />
      <TestimonialSection
        image="/assets/images/testimonios/testimonio2.jpg"
        name="Edgar Martínez"
        comment="Una máquina de generar dinero. En menos de un mes vi resultados increíbles."
      />
      <BusinessCTA imageSrc="/assets/images/BusinessCTA.webp" />




      <SuiteBotsSection />
      <TestimonialSection
        image="/assets/images/testimonios/testimonio3.jpg"
        name="Roger Mendoza"
        comment="¡Qué maravilla de bots! Ya estoy monetizando a diario."
        reverse
      />
      <VirtualRevolution imageSrc="/assets/images/redessocialesrelojgraficagirl.webp" />

      <Stats />
      <ChatbotSuitePromo imageSrc="/assets/images/ChatbotSuitePromo.webp" />
      <HowItWorks />
      <GPTBusinessComponent imageSrc="/assets/images/emprendedorapensandoenredessociales.webp" />
      <section id="bots" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Nuestros Bots</h2>
        <CategorySelector />

      </section>

      <Pricing />
      <TestimonialSection
        image="/assets/images/testimonios/testimonio1.jpg"
        name="Mayely Franco"
        comment="Los bots me cambiaron la vida. Por fin logré monetizar. ❤️‍🔥"
      />

      <FAQ />
      <FinalCallToAction />
      
      <Footer />
    </main>
  );
};

export default LandingPage;
