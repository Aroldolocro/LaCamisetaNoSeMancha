import "./Navbar.css";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../Context/Appcontext";
import Temporadas from "./Components/Temporadas/Temporadas";
import Equipos from "./Components/Equipos/Equipos";
import Explorar from "./Components/Explorar/Explorar";
import Search from "./Components/Search/Search";
import Cart from "./Components/Cart/Cart";

const Navbar = () => {
  const location = useLocation();
  const { productlist, abrir, setAbrir, abrir2, setAbrir2 } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [Color, SetColor] = useState(false);
  const [FulledCart, setFulledCart] = useState(false);
  const [SearchAnimationState, setSearchAnimationState] = useState(false);
  const [CartAnimationState, setCartAnimationState] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      SetColor(true);
    } else {
      SetColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    if (productlist.length > 0) {
      setFulledCart(true);
    } else {
      setFulledCart(false);
    }
  }, [productlist.length]);

  const RenderOfFulledCartAnimation = (
    <div
      className={
        location.pathname === "/"
          ? Color
            ? "N-ROFCA-background N-ROFCA-background-scroll"
            : "N-ROFCA-background"
          : "N-ROFCA-background N-ROFCA-background-scroll"
      }
    ></div>
  );

  return (
    <div>
      {abrir && <Cart />}
      <div
        className={
          location.pathname === "/checkout"
            ? "N-background-notdisplayed"
            : location.pathname === "/"
            ? Color
              ? "N-background N-background-scroll"
              : "N-background"
            : "N-background N-background-scroll"
        }
      >
        {abrir2 && <Search />}
        <div className="N-content">
          <div className="N-C-B1">
            <Link
              to={"/"}
              className={
                location.pathname === "/"
                  ? Color
                    ? "N-txt-1 N-txt-1-scroll"
                    : "N-txt-1"
                  : "N-txt-1 N-txt-1-scroll"
              }
            >
              LA CAMISETA NO SE MANCHA
            </Link>
          </div>

          <div className="N-C-B2">
            <div
              className="N-C-B2B1"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <p
                className={
                  location.pathname === "/"
                    ? Color
                      ? "N-txt-2 N-txt-2-scroll"
                      : "N-txt-2"
                    : "N-txt-2 N-txt-2-scroll"
                }
              >
                TEMPORADAS
                <label
                  className={
                    location.pathname === "/"
                      ? Color
                        ? open
                          ? "Underline-opened-scroll"
                          : "Underline-closed-scroll"
                        : open
                        ? "N-Underline-opened"
                        : "N-Underline-closed"
                      : open
                      ? "Underline-opened-scroll"
                      : "Underline-closed-scroll"
                  }
                ></label>
              </p>
            </div>
            <div
              className="N-C-B2B2"
              onMouseEnter={() => setOpen2(true)}
              onMouseLeave={() => setOpen2(false)}
            >
              <p
                className={
                  location.pathname === "/"
                    ? Color
                      ? "N-txt-2 N-txt-2-scroll"
                      : "N-txt-2"
                    : "N-txt-2 N-txt-2-scroll"
                }
              >
                EQUIPOS
                <span
                  className={
                    location.pathname === "/"
                      ? Color
                        ? open2
                          ? "Underline-opened-scroll"
                          : "Underline-closed-scroll"
                        : open2
                        ? "N-Underline-opened"
                        : "N-Underline-closed"
                      : open2
                      ? "Underline-opened-scroll"
                      : "Underline-closed-scroll"
                  }
                ></span>
              </p>
            </div>
            <div
              className="N-C-B2B3"
              onMouseEnter={() => setOpen3(true)}
              onMouseLeave={() => setOpen3(false)}
            >
              <p
                className={
                  location.pathname === "/"
                    ? Color
                      ? "N-txt-2 N-txt-2-scroll"
                      : "N-txt-2"
                    : "N-txt-2 N-txt-2-scroll"
                }
              >
                EXPLORAR
                <span
                  className={
                    location.pathname === "/"
                      ? Color
                        ? open3
                          ? "Underline-opened-scroll"
                          : "Underline-closed-scroll"
                        : open3
                        ? "N-Underline-opened"
                        : "N-Underline-closed"
                      : open3
                      ? "Underline-opened-scroll"
                      : "Underline-closed-scroll"
                  }
                ></span>
              </p>
            </div>
            <div
              className="N-C-B2B4"
              onClick={() => setAbrir2(true)}
              onMouseEnter={() => setSearchAnimationState(true)}
              onMouseLeave={() => setSearchAnimationState(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className={
                  location.pathname === "/"
                    ? Color
                      ? "N-svg N-svg-scroll"
                      : "N-svg"
                    : "N-svg N-svg-scroll"
                }
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <div
                className={
                  location.pathname === "/"
                    ? Color
                      ? SearchAnimationState
                        ? "N-C-B2B4-backgroundAnimation-opened-scroll"
                        : "N-C-B2B4-backgroundAnimation-closed-scroll"
                      : SearchAnimationState
                      ? "N-C-B2B4-backgroundAnimation-opened"
                      : "N-C-B2B4-backgroundAnimation-closed"
                    : SearchAnimationState
                    ? "N-C-B2B4-backgroundAnimation-opened-scroll"
                    : "N-C-B2B4-backgroundAnimation-closed-scroll"
                }
              ></div>
            </div>
            <div
              className="N-C-B2B5"
              onClick={() => setAbrir(true)}
              onMouseEnter={() => setCartAnimationState(true)}
              onMouseLeave={() => setCartAnimationState(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className={
                  location.pathname === "/"
                    ? Color
                      ? "N-svg N-svg-scroll"
                      : "N-svg"
                    : "N-svg N-svg-scroll"
                }
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              {FulledCart && RenderOfFulledCartAnimation}
              <div
                className={
                  location.pathname === "/"
                    ? Color
                      ? CartAnimationState
                        ? "N-C-B2B5-backgroundAnimation-opened-scroll"
                        : "N-C-B2B5-backgroundAnimation-closed-scroll"
                      : CartAnimationState
                      ? "N-C-B2B5-backgroundAnimation-opened"
                      : "N-C-B2B5-backgroundAnimation-closed"
                    : CartAnimationState
                    ? "N-C-B2B5-backgroundAnimation-opened-scroll"
                    : "N-C-B2B5-backgroundAnimation-closed-scroll"
                }
              ></div>
            </div>
            <div
              className="N-C-B3"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {open && <Temporadas onMouseEnter={() => setOpen(true)} />}
            </div>
            <div
              className="N-C-B4"
              onMouseEnter={() => setOpen2(true)}
              onMouseLeave={() => setOpen2(false)}
            >
              {open2 && <Equipos />}
            </div>
            <div
              className="N-C-B5"
              onMouseEnter={() => setOpen3(true)}
              onMouseLeave={() => setOpen3(false)}
            >
              {open3 && <Explorar />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
