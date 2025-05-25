import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import EarlyTestimonial from "../components/EarlyTestimonial";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import BusinessCTA from "../components/BusinessCTA";

import CategorySelector from "../components/CategorySelector";
import VirtualRevolution from "../components/VirtualRevolution";
import GPTBusinessComponent from "../components/GPTBusinessComponent";
import SuiteBotsSection from "../components/SuiteBotsSection"
import ChatbotSuitePromo from "../components/ChatbotSuitePromo"
// En tu página…
<GPTBusinessComponent imageSrc="/assets/emprendedorapensandoenredessociales.jpg" />




const LandingPage: React.FC = () => {
  
  

  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <Benefits />
      <BusinessCTA imageSrc="/assets/images/BusinessCTA.jpg"/>
      
      <BusinessCTA imageSrc="/assets/images/emprendedorapensandoenredessociales.jpg" />

      <EarlyTestimonial />
      <SuiteBotsSection />
      <VirtualRevolution imageSrc="../../public/assets/images/redessocialesrelojgraficagirl.jpg" />
      
      <Stats />
      <ChatbotSuitePromo imageSrc="/assets/images/ChatbotSuitePromo.jpg" /> 
      <HowItWorks />
      <GPTBusinessComponent imageSrc="../../public/assets/images/emprendedorapensandoenredessociales.jpg" />
      <section id="bots" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Nuestros Bots</h2>
        <CategorySelector  />
       
      </section>

      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default LandingPage;
