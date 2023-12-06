import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/hero/Home";
import Footer from "./components/Footer/Footer";
import AirCondBanner from "./components/AirConditioning/AirCondBanner";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="air-conditioning" element={<AirCondBanner />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
