import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { About } from "./pages/AboutUs";
import { Contact } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { PortFolio } from "./pages/PortFolio";
import { Service } from "./pages/Service";

import { useTheme } from "./context/useTheme";

import './App.css'
import { Footer } from "./components/footer/Footer";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<PortFolio />} />
          <Route path="services" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
