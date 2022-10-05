import "./ShippingPriceFAQ.css";
import { AppContext } from "../../../../Context/Appcontext";
import { useContext } from "react";

const ShippingPriceFAQ = () => {
  const { setopenShippingPriceFAQ, ShippingMinimumOnCurrencyFormat } =
    useContext(AppContext);
  return (
    <div className="ShippingPriceFAQ-background">
      <div className="ShippingPriceFAQ-content">
        <div className="ShippingPriceFAQ-C-B1">
          <svg
            className="ShippingPriceFAQ-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={() => setopenShippingPriceFAQ(false)}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        <div className="ShippingPriceFAQ-C-B2">
          <p className="ShippingPriceFAQ-txt-1">Costo de envío</p>
          <p className="ShippingPriceFAQ-txt-2">
            ¿Llevas más de {ShippingMinimumOnCurrencyFormat} en productos? ¡Te
            cubrimos el envío!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPriceFAQ;
