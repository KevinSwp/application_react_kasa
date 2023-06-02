import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Flat from "./pages/Flat/Flat";
import Error404 from "./pages/Error404/Error404";

function Router() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flats/:id" element={<Flat />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default Router;
