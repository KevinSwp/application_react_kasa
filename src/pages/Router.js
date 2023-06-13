import { Route, Routes } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Flat from "./FlatPage/FlatPage";
import Error404 from "./Error404/Error404";

import './style.scss'

function Router() {
  return (
    <div>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flats/:id" element={<Flat />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Router;
