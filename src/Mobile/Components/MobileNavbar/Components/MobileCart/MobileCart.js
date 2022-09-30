import "./MobileCart.css";
import { AppContext } from "../../../../../Context/Appcontext";
import { useContext } from "react";

const MobileCart = () => {
  const { setOpenCart, productlist } = useContext(AppContext);

  // const RenderOfCard = () => productlist.map((Producto, index) => <p></p>);

  const MobileFulledCart = <div>MobileFulledCart</div>;

  const MobileEmptyCart = (
    <div className="MobileEmptyCart-background">
      <div className="MobileEmptyCart-content">
        <div className="MobileEmptyCart-C-B1">
          <p className="MobileEmptyCart-txt-1">Tu carrito está vacio.</p>
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
