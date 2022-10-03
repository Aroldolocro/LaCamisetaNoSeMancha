import "./MobileNavbar.css";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../Context/Appcontext";
import { useLocation, Link } from "react-router-dom";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import MobileCart from "./Components/MobileCart/MobileCart";

const MobileNavbar = () => {
  const location = useLocation();
  const {
    OpenMenu,
    setOpenMenu,
    OpenCart,
    setOpenCart,
    setOpenMenu1,
    setOpenMenu2,
    setOpenMenu3,
    productlist,
  } = useContext(AppContext);
  const [Color, SetColor] = useState(false);
  const [FulledCart, setFulledCart] = useState(false);

  useEffect(() => {
    if (productlist.length > 0) {
      setFulledCart(true);
    } else {
      setFulledCart(false);
    }
  }, [productlist.length]);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      SetColor(true);
    } else {
      SetColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    if (OpenMenu || OpenCart) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [OpenMenu, OpenCart]);

  useEffect(() => {
    if (!OpenMenu) {
      setOpenMenu1(false);
      setOpenMenu2(false);
      setOpenMenu3(false);
    }
  }, [OpenMenu, setOpenMenu1, setOpenMenu2, setOpenMenu3]);

  const RenderOfMobileFulledCartAnimation = (
    <div
      className={
        location.pathname === "/"
          ? Color
            ? "RenderOfMobileFulledCartAnimation-background RenderOfMobileFulledCartAnimation-background-scroll"
            : "RenderOfMobileFulledCartAnimation-background"
          : "RenderOfMobileFulledCartAnimation-background RenderOfMobileFulledCartAnimation-background-scroll"
      }
    ></div>
  );

  return (
    <div
      className={
        location.pathname === "/checkout"
          ? "MobileNavbar-notdisplayed"
          : "MobileNavbar"
      }
    >
      {OpenMenu && <MobileMenu />}
      {OpenCart && <MobileCart />}
      <div
        className={
          location.pathname === "/"
            ? Color
              ? "MobileNavbar-background MobileNavbar-background-scroll"
              : "MobileNavbar-background"
            : "MobileNavbar-background MobileNavbar-background-scroll"
        }
      >
        <div className="MobileNavbar-content">
          <div className="MobileNavbar-C-B1" onClick={() => setOpenMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className={
                location.pathname === "/"
                  ? Color
                    ? "MobileNavbar-svg-1 MobileNavbar-svg-1-scroll"
                    : "MobileNavbar-svg-1"
                  : "MobileNavbar-svg-1 MobileNavbar-svg-1-scroll"
              }
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <Link to={"/"} className="MobileNavbar-C-B2">
            <p
              className={
                location.pathname === "/"
                  ? Color
                    ? "MobileNavbar-txt-1 MobileNavbar-txt-1-scroll"
                    : "MobileNavbar-txt-1"
                  : "MobileNavbar-txt-1 MobileNavbar-txt-1-scroll"
              }
            >
              LA CAMISETA NO SE MANCHA
            </p>
          </Link>
          <div className="MobileNavbar-C-B3" onClick={() => setOpenCart(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className={
                location.pathname === "/"
                  ? Color
                    ? "MobileNavbar-svg-1 MobileNavbar-svg-1-scroll"
                    : "MobileNavbar-svg-1"
                  : "MobileNavbar-svg-1 MobileNavbar-svg-1-scroll"
              }
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            {FulledCart && RenderOfMobileFulledCartAnimation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
