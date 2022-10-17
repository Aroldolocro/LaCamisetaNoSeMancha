import "./MobileCheckoutPage.css";
import OrderSummary from "../../Components/MobileCheckoutPage_Components/OrderSummary/OrderSummary";
import MobileForm from "../../Components/MobileCheckoutPage_Components/MobileForm/MobileForm";
import MobilePayment from "../../Components/MobileCheckoutPage_Components/MobilePayment/MobilePayment";
import ShippingPriceFAQ from "../../Components/MobileCheckoutPage_Components/ShippingPriceFAQ/ShippingPriceFAQ";
import { Link } from "react-router-dom";
import { AppContext } from "../../../Context/Appcontext";
import { useContext, useEffect, useState } from "react";

const MobileCheckoutPage = () => {
  const { abrir6, abrir7, openShippingPriceFAQ, productlist } =
    useContext(AppContext);

  useEffect(() => {
    if (openShippingPriceFAQ) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [openShippingPriceFAQ]);

  const [CheckEmptyCart, setCheckEmptyCart] = useState(false);
  useEffect(() => {
    if (productlist.length < 1) {
      setCheckEmptyCart(true);
    } else {
      setCheckEmptyCart(false);
    }
  }, [productlist.length]);

  const RenderOfMobileCheckEmptyCart = (
    <div className="RenderOfMobileCheckEmptyCart-background">
      <div className="RenderOfMobileCheckEmptyCart-content">
        <div className="RenderOfMobileCheckEmptyCart-C-B1">
          <p className="RenderOfMobileCheckEmptyCart-txt-1">
            Todavía tu carrito está vacío.
          </p>
        </div>
        <div className="RenderOfMobileCheckEmptyCart-C-B2">
          <Link to={"/"} className="RenderOfMobileCheckEmptyCart-C-B2B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="RenderOfMobileCheckEmptyCart-svg"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
            </svg>
          </Link>
        </div>
        <div className="RenderOfMobileCheckEmptyCart-C-B3">
          <Link to={"/"} className="RenderOfMobileCheckEmptyCart-txt-2">
            VOLVER A LA TIENDA
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="MobileCheckoutPage-background">
      {CheckEmptyCart && RenderOfMobileCheckEmptyCart}
      {openShippingPriceFAQ && <ShippingPriceFAQ />}
      <div className="MobileCheckoutPage-content">
        <div className="MobileCheckoutPage-C-B1">
          <Link to={"/"} className="MobileCheckoutPage-txt-1">
            LA CAMISETA NO SE MANCHA
          </Link>
        </div>
        <OrderSummary />
        <div className="MobileCheckoutPage-C-B3">
          <p
            className={
              abrir6
                ? "MobileCheckoutPage-txt-2 MobileCheckoutPage-txt-2-black"
                : "MobileCheckoutPage-txt-2"
            }
          >
            Información de envío
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="MobileCheckoutPage-svg-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p
            className={
              abrir7
                ? "MobileCheckoutPage-txt-2 MobileCheckoutPage-txt-2-black"
                : "MobileCheckoutPage-txt-2"
            }
          >
            Revisión y pago
          </p>
        </div>
        {abrir6 && <MobileForm />}
        {abrir7 && <MobilePayment />}
        <div className="MobileCheckoutPage-C-B4">
          <Link
            to={"/preguntas_frecuentes/devoluciones"}
            target={"_blank"}
            className="MobileCheckoutPage-txt-3"
          >
            Políticas de devoluciones
          </Link>
          <Link
            to={"/preguntas_frecuentes/envios"}
            target={"_blank"}
            className="MobileCheckoutPage-txt-3"
          >
            Políticas de envíos
          </Link>
          <Link
            to={"/preguntas_frecuentes/pagos"}
            target={"_blank"}
            className="MobileCheckoutPage-txt-3"
          >
            Políticas de pagos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCheckoutPage;
