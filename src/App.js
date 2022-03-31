import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/AboutUs";
import { Contact } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { PortFolio } from "./pages/PortFolio";
import { Service } from "./pages/Service";


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<PortFolio />} />
            <Route path="services" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
