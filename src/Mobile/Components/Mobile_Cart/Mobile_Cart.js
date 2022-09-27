import "./Mobile_Cart.css";
import { AppContext } from "../../../../Appcontext";
import { useContext } from "react";

const Mobile_Cart = () => {
  const { setOpenCart } = useContext(AppContext);
  return (
    <div className="NavbarMobileCart-background">
      <div className="NavbarMobileCart-content">
        <div className="NavbarMobileCart-C-B1">
          <p className="NavbarMobileCart-txt-1">CARRITO</p>
          <div
            className="NavbarMobileCart-C-B1B1"
            onClick={() => setOpenCart(false)}
          >
            <svg
              className="NavbarMobileCart-svg-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>
        <div className="NavbarMobileCart-C-B2"></div>
      </div>
    </div>
  );
};

export default Mobile_Cart;
