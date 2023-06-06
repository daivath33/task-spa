import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import SpaNews from "./pages/SpaNews";
import Services from "./pages/Services";
import OurWorks from "./pages/OurWorks";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/spanews" element={<SpaNews />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourworks" element={<OurWorks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
