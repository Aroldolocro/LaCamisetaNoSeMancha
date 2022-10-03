import "./OrderSummary.css";
import { useContext, useState } from "react";
import { AppContext } from "../../../../Context/Appcontext";

const OrderSummary = () => {
  const { SubtotalPriceOnCurrencyFormat } = useContext(AppContext);
  const [openOrderSummary, setopenOrderSummary] = useState(false);

  return (
    <div className="OrderSummary-background">
      <div
        className="OrderSummary-B1"
        onClick={() => setopenOrderSummary((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="OrderSummary-svg-1"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
        <div className="OrderSummary-B1B1">
          <p className="OrderSummary-txt-1">
            {openOrderSummary
              ? "Esconder resumen de orden"
              : "Mostrar resumen de orden"}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className={
              openOrderSummary
                ? "OrderSummary-svg-2 OrderSummary-svg-2-rotated"
                : "OrderSummary-svg-2"
            }
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <p className="OrderSummary-txt-2">{SubtotalPriceOnCurrencyFormat}</p>
      </div>
      <div
        className={
          openOrderSummary
            ? "OrderSummary-B2-opened"
            : "OrderSummary-B2-opened OrderSummary-B2-closed"
        }
      >
        asd
      </div>
    </div>
  );
};

export default OrderSummary;
