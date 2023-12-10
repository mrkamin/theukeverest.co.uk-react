import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/hero/Home";
import Footer from "./components/Footer/Footer";
import AirCondBanner from "./components/AirConditioning/AirCondBanner";
import Refergration from "./components/commercialReferg/Refergration";
import RepairBanner from "./components/repair and maintenance/RepairBanner";
import OurProjects from "./components/ourporject/OurProjects";
import Contactform from "./components/contact/ContactForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="air-conditioning" element={<AirCondBanner />} />
          <Route path="commercial-refrigeration" element={<Refergration />} />
          <Route path="repair-maintenance" element={<RepairBanner />} />
          <Route path="our-projects" element={<OurProjects />} />
          <Route path="contact-us" element={<Contactform />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
