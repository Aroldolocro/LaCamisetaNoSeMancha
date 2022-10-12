import "./Footer.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import imagen1 from "../../../Images/imagesPaymentMethods/image1.png";
import imagen2 from "../../../Images/imagesPaymentMethods/image2.png";
import imagen3 from "../../../Images/imagesPaymentMethods/image3.png";
import imagen4 from "../../../Images/imagesPaymentMethods/image4.png";
import imagen5 from "../../../Images/imagesPaymentMethods/image5.png";
import imagen6 from "../../../Images/imagesPaymentMethods/image6.png";
import imagen7 from "../../../Images/imagesPaymentMethods/image7.png";
import imagen8 from "../../../Images/imagesPaymentMethods/image8.png";

const Footer = () => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/checkout"
          ? "F-background-notdisplayed"
          : "F-background"
      }
    >
      <div className="F-content">
        <div className="F-C-B1">
          <div className="F-C-B1B1">
            <Link to={"/preguntas_frecuentes"} className="F-txt-1">
              Contacto
            </Link>
            <Link to={"/preguntas_frecuentes"} className="F-txt-1">
              Preuguntas frecuentes
            </Link>
            <p className="F-txt-1">Nuestros productos</p>
          </div>

          <div className="F-C-B1B2">
            <p className="F-txt-1">Envios</p>
            <p className="F-txt-1">Talles</p>
            <p className="F-txt-1">Devoluciones</p>
          </div>

          <div className="F-C-B1B3">
            <Link to={"/preguntas_frecuentes/pagos"} className="F-txt-1">
              Pagos
            </Link>
            <Link
              to={"/preguntas_frecuentes/problemas_con_mi_pedido"}
              className="F-txt-1"
            >
              Problemas con mi pedido
            </Link>
            <p className="F-txt-1">Terminos y mi viejo</p>
          </div>
        </div>

        <p className="F-txt-2">© LA CAMISETA NO SE MANCHA 2022</p>

        <div className="F-C-B2">
          <div className="F-C-B2B1">
            <img src={imagen1} alt="" className="F-img" />
            <img src={imagen2} alt="" className="F-img" />
            <img src={imagen3} alt="" className="F-img" />
            <img src={imagen4} alt="" className="F-img" />
            <img src={imagen5} alt="" className="F-img" />
            <img src={imagen6} alt="" className="F-img" />
            <img src={imagen7} alt="" className="F-img" />
            <img src={imagen8} alt="" className="F-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
