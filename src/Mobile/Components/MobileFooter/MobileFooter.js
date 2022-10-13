import "./MobileFooter.css";
import { useLocation, Link } from "react-router-dom";
import imagen1 from "../../../Images/imagesPaymentMethods/image1.png";
import imagen2 from "../../../Images/imagesPaymentMethods/image2.png";
import imagen3 from "../../../Images/imagesPaymentMethods/image3.png";
import imagen4 from "../../../Images/imagesPaymentMethods/image4.png";
import imagen5 from "../../../Images/imagesPaymentMethods/image5.png";
import imagen6 from "../../../Images/imagesPaymentMethods/image6.png";
import imagen7 from "../../../Images/imagesPaymentMethods/image7.png";
import imagen8 from "../../../Images/imagesPaymentMethods/image8.png";

const MobileFooter = () => {
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === "/checkout"
          ? "MobileFooter-background-notdisplayed"
          : "MobileFooter-background"
      }
    >
      <div className="MobileFooter-content">
        <div className="MobileFooter-C-B1">
          <div className="MobileFooter-C-B1B1">
            <p className="MobileFooter-txt-1">Contacto</p>
            <Link to={"/preguntas_frecuentes"} className="MobileFooter-txt-1">
              Preuguntas frecuentes
            </Link>
            <p className="MobileFooter-txt-1">Nuestros productos</p>
          </div>
          <div className="MobileFooter-C-B1B1">
            <p className="MobileFooter-txt-1">Envios</p>
            <p className="MobileFooter-txt-1">Talles</p>
            <p className="MobileFooter-txt-1">Devoluciones</p>
          </div>
          <div className="MobileFooter-C-B1B1">
            <Link
              to={"/preguntas_frecuentes/pagos"}
              className="MobileFooter-txt-1"
            >
              Pagos
            </Link>
            <p className="MobileFooter-txt-1">Problemas con mi pedido</p>
            <p className="MobileFooter-txt-1">Terminos y mi viejo</p>
          </div>
        </div>
        <p className="MobileFooter-txt-2">© LA CAMISETA NO SE MANCHA 2022</p>
        <div className="MobileFooter-C-B2">
          <img src={imagen1} className="MobileFooter-img-1" alt="" />
          <img src={imagen2} className="MobileFooter-img-1" alt="" />
          <img src={imagen3} className="MobileFooter-img-1" alt="" />
          <img src={imagen4} className="MobileFooter-img-1" alt="" />
          <img src={imagen5} className="MobileFooter-img-1" alt="" />
          <img src={imagen6} className="MobileFooter-img-1" alt="" />
          <img src={imagen7} className="MobileFooter-img-1" alt="" />
          <img src={imagen8} className="MobileFooter-img-1" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
