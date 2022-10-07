import "./MobileCheckoutPage.css";
import OrderSummary from "../../Components/MobileCheckoutPage_Components/OrderSummary/OrderSummary";
import MobileForm from "../../Components/MobileCheckoutPage_Components/MobileForm/MobileForm";
import MobilePayment from "../../Components/MobileCheckoutPage_Components/MobilePayment/MobilePayment";
import ShippingPriceFAQ from "../../Components/MobileCheckoutPage_Components/ShippingPriceFAQ/ShippingPriceFAQ";
import { Link } from "react-router-dom";
import { AppContext } from "../../../Context/Appcontext";
import { useContext, useEffect } from "react";

const MobileCheckoutPage = () => {
  const { abrir6, abrir7, openShippingPriceFAQ } = useContext(AppContext);

  useEffect(() => {
    if (openShippingPriceFAQ) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [openShippingPriceFAQ]);

  return (
    <div className="MobileCheckoutPage-background">
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
            Informacion de envío
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
          <p className="MobileCheckoutPage-txt-3">Politicas de reembolso</p>
          <p className="MobileCheckoutPage-txt-3">Politicas de envío</p>
        </div>
      </div>
    </div>
  );
};

export default MobileCheckoutPage;
