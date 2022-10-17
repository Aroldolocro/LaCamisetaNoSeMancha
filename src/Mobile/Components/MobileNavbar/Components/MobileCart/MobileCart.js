import "./MobileCart.css";
import { AppContext } from "../../../../../Context/Appcontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MobileCart = () => {
  const {
    setOpenCart,
    productlist,
    SubtotalPriceOnCurrencyFormat,
    EliminarProducto,
    incrementCountOfProduct,
    decrementCountOfProduct,
  } = useContext(AppContext);

  const MobileRenderOfCard = () =>
    productlist.map((Producto, index) => (
      <div className="MobileRenderOfCard-background" key={index}>
        <div className="MobileRenderOfCard-content">
          <img
            src={Producto.imagen}
            className="MobileRenderOfCard-img"
            alt=""
          />
          <div className="MobileRenderOfCard-B1">
            <div className="MobileRenderOfCard-B1B1">
              <p className="MobileRenderOfCard-txt-1">{Producto.nombre}</p>
              <p className="MobileRenderOfCard-txt-2">{Producto.talle}</p>
            </div>
            <p className="MobileRenderOfCard-txt-3">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(Producto.precio)}
            </p>
            <div className="MobileRenderOfCard-B1B2">
              <button
                className="MobileRenderOfCard-btn"
                disabled={Producto.count === 1}
                onClick={() => decrementCountOfProduct(index)}
              >
                -
              </button>
              <p className="MobileRenderOfCard-txt-4">{Producto.count}</p>
              <button
                className="MobileRenderOfCard-btn"
                onClick={() => incrementCountOfProduct(index)}
              >
                +
              </button>
            </div>
          </div>
          <div className="MobileRenderOfCard-B2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="MobileRenderOfCard-svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => EliminarProducto(Producto.id)}
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </div>
        </div>
      </div>
    ));

  const MobileFulledCart = (
    <div className="MobileFulledCart-background">
      <div className="MobileFulledCart-content">
        <div className="MobileFulledCart-C-B1">{MobileRenderOfCard()}</div>
        <div className="MobileFulledCart-C-B2">
          <div className="MobileFulledCart-C-B2B1">
            <p className="MobileFulledCart-txt-1">
              Detalles del pago y envío en el Checkout
            </p>
          </div>
          <Link
            to={`/checkout`}
            className="MobileFulledCart-C-B2B2"
            onClick={() => setOpenCart(false)}
          >
            <p className="MobileFulledCart-txt-2">
              CHECKOUT • {SubtotalPriceOnCurrencyFormat}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );

  const MobileEmptyCart = (
    <div className="MobileEmptyCart-background">
      <div className="MobileEmptyCart-content">
        <div className="MobileEmptyCart-C-B1">
          <p className="MobileEmptyCart-txt-1">Tu carrito está vacío.</p>
        </div>
        <div className="MobileEmptyCart-C-B2">
          <div
            onClick={() => setOpenCart(false)}
            className="MobileEmptyCart-C-B2B1"
          >
            <div className="MobileEmptyCart-C-B2B1B1"></div>
            <div className="MobileEmptyCart-C-B2B1B2">
              <div className="MobileEmptyCart-C-B2B1B2B1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="MobileEmptyCart-svg-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </div>
            </div>
            <div className="MobileEmptyCart-C-B2B1B3">
              <p className="MobileEmptyCart-txt-2">CONTINUAR COMPRANDO</p>
            </div>
          </div>
        </div>
        <div className="MobileEmptyCart-C-B3"></div>
      </div>
    </div>
  );

  return (
    <div className="NavbarMobileCart-background">
      <div className="NavbarMobileCart-content">
        <div className="NavbarMobileCart-C-B1">
          <p className="NavbarMobileCart-txt-1">CARRITO</p>
          <svg
            className="NavbarMobileCart-svg-1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            viewBox="0 0 16 16"
            onClick={() => setOpenCart(false)}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        <div className="NavbarMobileCart-C-B2">
          {productlist.length > 0 ? MobileFulledCart : MobileEmptyCart}
        </div>
      </div>
    </div>
  );
};

export default MobileCart;
