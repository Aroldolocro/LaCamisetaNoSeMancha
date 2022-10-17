import "./App.css";
import "./Firebase/firebase";
import { HashRouter, Route, Routes } from "react-router-dom";
import ConstAppContext from "./Context/Appcontext";
import HomePage from "./Desktop/Pages/HomePage/HomePage";
import NotFoundPage from "./Desktop/Pages/NotFoundPage/NotFoundPage";
import ProdcutPage from "./Desktop/Pages/ProductPage/ProductPage";
import TemporadasPage from "./Desktop/Pages/TemporadasPage/TemporadasPage";
import EquiposPage from "./Desktop/Pages/EquiposPage/EquiposPage";
import DestacadosPage from "./Desktop/Pages/DestacadosPage/DestacadosPage";
import SeguimientoPage from "./Desktop/Pages/SeguimientoPage/SeguimientoPage";
import CheckoutPage from "./Desktop/Pages/CheckoutPage/CheckoutPage";
import PostPaymentPage from "./Desktop/Pages/PostPaymentPage/PostPaymentPage";
import Navbar from "./Desktop/Components/Navbar/Navbar";
import Footer from "./Desktop/Components/Footer/Footer";
import PreguntasFrecuentes from "./Desktop/Components/Footer/Components/PreguntasFrecuentes/Preguntas_Frecuentes";
import FAQSections from "./Desktop/Components/Footer/Components/PreguntasFrecuentes/Components/FAQSections/FAQSections";

/*Mobile Pages & Components*/

import MobileHomePage from "./Mobile/Pages/MobileHomePage/MobileHomePage";
import MobileNavbar from "./Mobile/Components/MobileNavbar/MobileNavbar";
import MobileProductPage from "./Mobile/Pages/MobileProductPage/MobileProductPage";
import MobileTemporadasPage from "./Mobile/Pages/MobileTemporadasPage/MobileTemporadasPage";
import MobileEquiposPage from "./Mobile/Pages/MobileEquiposPage/MobileEquiposPage";
import MobileDestacadosPage from "./Mobile/Pages/MobileDestacadosPage/MobileDestacadosPage";
import MobileCheckoutPage from "./Mobile/Pages/MobileCheckoutPage/MobileCheckoutPage";
import MobileSeguimientoPage from "./Mobile/Pages/MobileSeguimientoPage/MobileSeguimientoPage";
import MobileFooter from "./Mobile/Components/MobileFooter/MobileFooter";
import MobilePreguntasFrecuentes from "./Mobile/Components/MobileFooter/Components/MobilePreguntasFrecuentes/MobilePreguntasFrecuentes";

export default function App() {
  return (
    <ConstAppContext>
      <HashRouter hashType="slash">
        <Navbar />
        <MobileNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <MobileHomePage />
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/producto/:productId"
            element={
              <>
                <ProdcutPage />
                <MobileProductPage />
              </>
            }
          />
          <Route
            path="/temporadas/:Temporade"
            element={
              <>
                <TemporadasPage />
                <MobileTemporadasPage />
              </>
            }
          />
          <Route
            path="/equipos/:Equipo"
            element={
              <>
                <EquiposPage />
                <MobileEquiposPage />
              </>
            }
          />
          <Route
            path="/destacados"
            element={
              <>
                <DestacadosPage />
                <MobileDestacadosPage />
              </>
            }
          />
          <Route
            path="/seguimiento"
            element={
              <>
                <SeguimientoPage />
                <MobileSeguimientoPage />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <CheckoutPage />
                <MobileCheckoutPage />
              </>
            }
          />
          <Route path="/postpayment" element={<PostPaymentPage />} />
          <Route
            path="/preguntas_frecuentes"
            element={
              <>
                <PreguntasFrecuentes />
                <MobilePreguntasFrecuentes />
              </>
            }
          />
          <Route
            path="preguntas_frecuentes/:faqindice"
            element={<FAQSections />}
          />
        </Routes>
        <Footer />
        <MobileFooter />
      </HashRouter>
    </ConstAppContext>
  );
}
