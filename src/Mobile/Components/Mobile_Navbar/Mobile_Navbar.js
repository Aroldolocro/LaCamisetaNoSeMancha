import "./Mobile_Navbar.css";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../Context/Appcontext";
import Mobile_Menu from "../Mobile_Menu/Mobile_Menu";
import Mobile_Cart from "../Mobile_Cart/Mobile_Cart";
import { useLocation, Link } from "react-router-dom";

const Mobile_Navbar = () => {
  const location = useLocation();
  const { OpenMenu, setOpenMenu, OpenCart, setOpenCart } =
    useContext(AppContext);
  const [Color, SetColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      SetColor(true);
    } else {
      SetColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    if (OpenMenu) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [OpenMenu]);
  return (
    <div>
      {OpenMenu && <Mobile_Menu />}
      {OpenCart && <Mobile_Cart />}
      <div
        className={
          location.pathname === "/"
            ? Color
              ? "NM1-background NM1-background-scroll"
              : "NM1-background"
            : "NM1-background NM1-background-scroll"
        }
      >
        <div className="NM1-content">
          <div className="NM1-C-B1" onClick={() => setOpenMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className={
                location.pathname === "/"
                  ? Color
                    ? "NM1-svg-1 NM1-svg-1-scroll"
                    : "NM1-svg-1"
                  : "NM1-svg-1 NM1-svg-1-scroll"
              }
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <Link to={"/"} className="NM1-C-B2">
            <p
              className={
                location.pathname === "/"
                  ? Color
                    ? "NM1-txt-1 NM1-txt-1-scroll"
                    : "NM1-txt-1"
                  : "NM1-txt-1 NM1-txt-1-scroll"
              }
            >
              LA CAMISETA NO SE MANCHA
            </p>
          </Link>
          <div className="NM1-C-B3" onClick={() => setOpenCart(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className={
                location.pathname === "/"
                  ? Color
                    ? "NM1-svg-1 NM1-svg-1-scroll"
                    : "NM1-svg-1"
                  : "NM1-svg-1 NM1-svg-1-scroll"
              }
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_Navbar;
