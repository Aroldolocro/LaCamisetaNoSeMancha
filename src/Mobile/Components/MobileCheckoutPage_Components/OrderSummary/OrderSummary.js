import "./OrderSummary.css";
import { useContext, useState } from "react";
import { AppContext } from "../../../../Context/Appcontext";

const OrderSummary = () => {
  const {
    productlist,
    SubtotalPriceOnCurrencyFormat,
    ShippingMinimum,
    SubTotalPrice,
    ShippingPriceOnCurrencyFormat,
    OrderPriceAfterShippingCalculation,
    setopenShippingPriceFAQ,
  } = useContext(AppContext);
  const [openOrderSummary, setopenOrderSummary] = useState(false);

  const MobileRenderOfCartSummary = () =>
    productlist.map((Producto, index) => (
      <div className="MobileRenderOfCartSummary-background" key={index}>
        <div className="MobileRenderOfCartSummary-B1">
          <img
            src={Producto.imagen}
            className="MobileRenderOfCartSummary-img"
            alt=""
          />
          <div className="MobileRenderOfCartSummary-count">
            {Producto.count}
          </div>
        </div>
        <div className="MobileRenderOfCartSummary-B2">
          <p className="MobileRenderOfCartSummary-txt-1">{Producto.nombre}</p>
          <p className="MobileRenderOfCartSummary-txt-2">{Producto.talle}</p>
        </div>
        <p className="MobileRenderOfCartSummary-txt-3">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(Producto.precio)}
        </p>
      </div>
    ));

  const RenderOfMobileCoveredShipping = (
    <div className="RenderOfMobileCoveredShipping-background">
      <div className="RenderOfMobileCoveredShipping-B1">
        <p className="RenderOfMobileCoveredShipping-txt-1">Costo de envío</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="RenderOfMobileCoveredShipping-svg"
          viewBox="0 0 16 16"
          onClick={() => setopenShippingPriceFAQ(true)}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </div>
      <div className="RenderOfMobileCoveredShipping-B2">
        <p className="RenderOfMobileCoveredShipping-txt-2">Gratis</p>
        <p className="RenderOfMobileCoveredShipping-txt-3">
          {ShippingPriceOnCurrencyFormat}
        </p>
      </div>
    </div>
  );

  const RenderOfMobileNotCoveredShipping = (
    <div className="RenderOfMobileNotCoveredShipping-background">
      <div className="RenderOfMobileNotCoveredShipping-B1">
        <p className="RenderOfMobileNotCoveredShipping-txt-1">Costo de envío</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="RenderOfMobileNotCoveredShipping-svg"
          viewBox="0 0 16 16"
          onClick={() => setopenShippingPriceFAQ(true)}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </div>
      <p className="RenderOfMobileNotCoveredShipping-txt-2">
        {ShippingPriceOnCurrencyFormat}
      </p>
    </div>
  );

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
        <p className="OrderSummary-txt-2">
          {OrderPriceAfterShippingCalculation}
        </p>
      </div>
      <div
        className={
          openOrderSummary
            ? "OrderSummary-B2-opened"
            : "OrderSummary-B2-opened OrderSummary-B2-closed"
        }
      >
        <div className="OrderSummary-B2B1">{MobileRenderOfCartSummary()}</div>
        <div className="OrderSummary-B2B2">
          <div className="OrderSummary-B2B2B1">
            <p className="OrderSummary-txt-3">Subtotal</p>
            <p className="OrderSummary-txt-4">
              {SubtotalPriceOnCurrencyFormat}
            </p>
          </div>
          <div className="OrderSummary-B2B2B2">
            {SubTotalPrice() >= ShippingMinimum
              ? RenderOfMobileCoveredShipping
              : RenderOfMobileNotCoveredShipping}
          </div>
        </div>
        <div className="OrderSummary-B2B3">
          <p className="OrderSummary-txt-5">Total</p>
          <div className="OrderSummary-B2B3B1">
            <p className="OrderSummary-txt-6">ARS</p>
            <p className="OrderSummary-txt-7">
              {OrderPriceAfterShippingCalculation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
