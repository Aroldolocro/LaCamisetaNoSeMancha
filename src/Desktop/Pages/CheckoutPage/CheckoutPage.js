import "./CheckoutPage.css";
import { AppContext } from "../../../Context/Appcontext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Payment from "../../Components/CheckoutPage_Components/Payment/Payment";
import Form from "../../Components/CheckoutPage_Components/Form/Form";
import EmptyCart from "../../Components/CheckoutPage_Components/EmptyCart/EmptyCart";

const CheckoutPage = () => {
  const {
    productlist,
    abrir6,
    abrir7,
    ShippingMinimum,
    ShippingMinimumOnCurrencyFormat,
    SubTotalPrice,
    SubtotalPriceOnCurrencyFormat,
    ShippingPriceOnCurrencyFormat,
    OrderPriceAfterShippingCalculation,
  } = useContext(AppContext);

  const [CheckEmptyCart, setCheckEmptyCart] = useState(false);
  useEffect(() => {
    if (productlist.length < 1) {
      setCheckEmptyCart(true);
    } else {
      setCheckEmptyCart(false);
    }
  }, [productlist.length]);

  const [ShippigHover, setShippigHover] = useState(false);
  const ShippingHoverMouseOn = () => {
    setShippigHover(true);
  };
  const ShippingHoverMouseOff = () => {
    setShippigHover(false);
  };

  const RenderOfCard = () =>
    productlist.map((Producto, index) => (
      <div className="ROConcheckout-background" key={index}>
        <div className="ROConcheckout-content">
          <div className="ROConcheckout-C-B1">
            <img
              className="ROConcheckout-img"
              src={Producto.imagen}
              alt={Producto.nombre}
            />
            <div className="ROConcheckout-count">{Producto.count}</div>
          </div>
          <div className="ROConcheckout-C-B2">
            <div className="ROConcheckout-C-B2B1">
              <div className="ROConcheckout-C-B2B1B1">
                <p className="CP-txt-9">{Producto.nombre}</p>
              </div>
              <div className="ROConcheckout-C-B2B1B2">
                <p className="CP-txt-10">{Producto.talle}</p>
              </div>
            </div>
          </div>
          <div className="ROConcheckout-C-B3">
            <div className="ROConcheckout-C-B3B1">
              <p className="CP-txt-11">
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(Producto.precio * Producto.count)}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));

  const RenderOfShippingNotification = (
    <p className="ROCS-BMid-txt">
      ¿Llevas más de {ShippingMinimumOnCurrencyFormat} en productos? ¡Te
      cubrimos el envío!
    </p>
  );

  const RenderOfNotCoveredShipping = (
    <div className="RONCS-background">
      <div className="RONCS-B1">
        <div className="RONCS-B1B1">
          <p className="RONCS-txt-1">Costo de envío</p>
        </div>
        <div
          className="RONCS-B1B2"
          onMouseOver={ShippingHoverMouseOn}
          onMouseOut={ShippingHoverMouseOff}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="RONCS-svg-1"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </div>
      </div>
      <div className="ROCS-BMid-background">
        {ShippigHover && RenderOfShippingNotification}
      </div>
      <div className="RONCS-B2">
        <p className="RONCS-txt-2">{ShippingPriceOnCurrencyFormat}</p>
      </div>
    </div>
  );

  const RenderOfCoveredShipping = (
    <div className="ROCS-background">
      <div className="ROCS-B1">
        <div className="ROCS-B1B1">
          <p className="ROCS-txt-1">Costo de envío</p>
        </div>
        <div
          className="ROCS-B1B2"
          onMouseOver={ShippingHoverMouseOn}
          onMouseOut={ShippingHoverMouseOff}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="ROCS-svg-1"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </div>
      </div>
      <div className="ROCS-BMid-background">
        {ShippigHover && RenderOfShippingNotification}
      </div>
      <div className="ROCS-B2">
        <p className="ROCS-txt-3">Gratis</p>
        <p className="ROCS-txt-2">{ShippingPriceOnCurrencyFormat}</p>
      </div>
    </div>
  );

  return (
    <div className="CP-background">
      {CheckEmptyCart && <EmptyCart />}
      <div className="CP-content">
        <div className="CP-C-B1">
          <div className="CP-C-B1B1">
            <div className="CP-C-B1B1B1">
              <div className="CP-C-B1B1B1B1">
                <Link to={"/"} className="CP-txt-1">
                  LA CAMISETA NO SE MANCHA
                </Link>
              </div>
              <div className="CP-C-B1B1B1B2">
                <div className="CP-C-B1B1B1B2B1">
                  <div className="CP-C-B1B1B1B2B1B1">
                    <p className={abrir6 ? "CP-txt-2-active" : "CP-txt-2"}>
                      Informacion de envío
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="CP-svg-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                  <div className="CP-C-B1B1B1B2B1B2">
                    <p className={abrir7 ? "CP-txt-2-active" : "CP-txt-2"}>
                      Revisión y pago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="CP-C-B1B1B2">
              {abrir6 && <Form />}
              {abrir7 && <Payment />}
            </div>
            <div className="CP-C-B1B1B3">
              <div className="CP-C-B1B1B3B1">
                <div className="CP-C-B1B1B3B1B1">
                  <p className="CP-txt-3">Politicas de reembolso</p>
                </div>
                <div className="CP-C-B1B1B3B1B2">
                  <p className="CP-txt-3">Politicas de envío</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CP-C-B2">
          <div className="CP-C-B2B1">
            <div className="CP-C-B2B1B1">
              <div className="CP-C-B2B1B1B1">{RenderOfCard()}</div>
              <div className="CP-C-B2B1B1B2">
                <div className="CP-C-B2B1B1B2B1">
                  <div className="CP-C-B2B1B1B2B1B1">
                    <p className="CP-txt-7">Subtotal</p>
                    <p className="CP-txt-8">{SubtotalPriceOnCurrencyFormat}</p>
                  </div>
                  <div className="CP-C-B2B1B1B2B1B2">
                    {SubTotalPrice() >= ShippingMinimum
                      ? RenderOfCoveredShipping
                      : RenderOfNotCoveredShipping}
                  </div>
                </div>
              </div>
              <div className="CP-C-B2B1B1B3">
                <p className="CP-txt-7">
                  Total <strong>ARS</strong>
                </p>
                <p className="CP-txt-8">{OrderPriceAfterShippingCalculation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
