import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ThankYou20 from "./pages/ThankYou20";
import ThankYou40 from "./pages/ThankYou40";
import EbookGift from "./pages/EbookGift";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/20botspack" element={<ThankYou20 />} />
        <Route path="/40botspromo" element={<ThankYou40 />} />
        <Route path="/guia-de-mkt-digital-ia" element={<EbookGift />} />
        

      </Routes>
    </BrowserRouter>
  );
};

export default App;
