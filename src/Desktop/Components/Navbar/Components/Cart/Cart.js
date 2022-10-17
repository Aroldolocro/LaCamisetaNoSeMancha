import "./Cart.css";
import { useContext } from "react";
import { AppContext } from "../../../../../Context/Appcontext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    productlist,
    setAbrir,
    EliminarProducto,
    incrementCountOfProduct,
    decrementCountOfProduct,
    SubtotalPriceOnCurrencyFormat,
  } = useContext(AppContext);

  const RenderOfCard = () =>
    productlist.map((Producto, index) => (
      <div className="FC-I-background" key={index}>
        <div className="FC-I-content">
          <div className="FC-I-C-B1">
            <img
              src={Producto.imagen}
              className="FC-I-img"
              alt={Producto.nombre}
            />
          </div>

          <div className="FC-I-C-B2">
            <div className="FC-I-C-B2B1">
              <p className="FC-I-C-txt-1">{Producto.nombre}</p>
            </div>
            <div className="FC-I-C-B2B2">
              <p className="FC-I-C-txt-2">{Producto.categoria}</p>
            </div>
            <div className="FC-I-C-B2B3">
              <p className="FC-I-C-txt-3">{Producto.talle}</p>
            </div>
            <div className="FC-I-C-B2B4">
              <p className="FC-I-C-txt-4">
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(Producto.precio)}
              </p>
            </div>
            <div className="FC-I-C-B2B5">
              <button
                className="FC-I-C-B2B5B1"
                disabled={Producto.count === 1}
                onClick={() => decrementCountOfProduct(index)}
              >
                -
              </button>
              <div className="FC-I-C-B2B5B2">{Producto.count}</div>
              <button
                className="FC-I-C-B2B5B3"
                onClick={() => incrementCountOfProduct(index)}
              >
                +
              </button>
            </div>
          </div>

          <div className="FC-I-C-B3">
            <div
              className="FC-I-C-B3B1"
              onClick={() => EliminarProducto(Producto.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="FC-I-svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
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
      </div>
    ));

  const emptycart = (
    <div className="EC-background">
      <div className="EC-content">
        <div className="EC-C-B1">
          <p className="EC-txt-1">Tu carrito está vacío.</p>
        </div>

        <div className="EC-C-B2">
          <div onClick={() => setAbrir(false)} className="EC-C-B2B1">
            <div className="EC-C-B2B1B1"></div>

            <div className="EC-C-B2B1B2">
              <div className="EC-C-B2B1B2B1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="EC-svg-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </div>
            </div>

            <div className="EC-C-B2B1B3">
              <p className="EC-txt-2">CONTINUAR COMPRANDO</p>
            </div>
          </div>
        </div>

        <div className="EC-C-B3"></div>
      </div>
    </div>
  );

  const fulledcart = (
    <div className="FC-background">
      <div className="FC-content">
        <div className="FC-C-B1">{RenderOfCard()}</div>

        <div className="FC-C-B2">
          <div className="FC-C-B2B1">
            <p className="FC-txt-1">Detalles del pago y envío en el Checkout</p>
          </div>

          <Link
            className="FC-C-B2B2"
            to={`/checkout`}
            onClick={() => setAbrir(false)}
          >
            <p className="FC-txt-2">
              CHECKOUT • {SubtotalPriceOnCurrencyFormat}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="C-background">
      <div className="C-content">
        <div className="C-C-B1">
          <div className="C-C-B1B1">
            <p className="C-txt-1">CARRITO</p>
          </div>

          <div className="C-C-B1B2" onClick={() => setAbrir(false)}>
            <svg
              className="C-svg-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>

        <div className="C-C-B2">
          {!productlist.length ? emptycart : fulledcart}
        </div>
      </div>
    </div>
  );
};

export default Cart;
