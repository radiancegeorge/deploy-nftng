import { useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import About from "./pages/About";
import Award from "./components/forms/Award";
import Speaker from "./components/forms/Speaker";
import Volunter from "./components/forms/Volunter";
import Sponser from "./components/forms/Sponser";
import Partner from "./components/forms/Partner";
import Products from "./pages/Products";
import MerchandiseSection from "./components/products/MerchandiseSection";
import Faq from "./pages/Faq";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import Awards from "./pages/Awards";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/apply/award" element={<Award />} />
        <Route path="/apply/speaker" element={<Speaker />} />
        <Route path="/apply/volunter" element={<Volunter />} />
        <Route path="/apply/sponser" element={<Sponser />} />
        <Route path="/apply/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/merchandise" element={<MerchandiseSection />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </main>
  );
}

export default App;
