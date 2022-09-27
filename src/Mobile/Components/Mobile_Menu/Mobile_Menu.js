import "./Mobile_Menu.css";
import { AppContext } from "../../../../Appcontext";
import { useContext } from "react";
import Mobile_Menu_Temporadas from "./Mobile_Menu_Temporadas/Mobile_Menu_Temporadas";
import Mobile_Menu_Explorar from "./Mobile_Menu_Explorar/Mobile_Menu_Explorar";
import Mobile_Menu_Equipos from "./Mobile_Menu_Equipos/Mobile_Menu_Equipos";
import Mobile_Menu_Search from "./Mobile_Menu_Search/Mobile_Menu_Search";

const Mobile_Menu = () => {
  const {
    setOpenMenu,
    OpenMenu1,
    setOpenMenu1,
    OpenMenu2,
    setOpenMenu2,
    OpenMenu3,
    setOpenMenu3,
  } = useContext(AppContext);

  return (
    <div className="NavbarMobileMenu-background">
      <div className="NavbarMobileMenu-content">
        <div className="NavbarMobileMenu-C-B1">
          <div
            className="NavbarMobileMenu-C-B1B1"
            onClick={() => setOpenMenu(false)}
          >
            <svg
              className="NavbarMobileMenu-svg-1"
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
        {OpenMenu1 && <Mobile_Menu_Temporadas />}
        {OpenMenu2 && <Mobile_Menu_Equipos />}
        {OpenMenu3 && <Mobile_Menu_Explorar />}
        <div
          className={
            OpenMenu1 | OpenMenu2 | OpenMenu3
              ? "NavbarMobileMenu-C-B2-notdisplayed"
              : "NavbarMobileMenu-C-B2"
          }
        >
          <div className="NavbarMobileMenu-C-B2B1">
            <Mobile_Menu_Search />
          </div>
          <div
            className="NavbarMobileMenu-C-B2B2"
            onClick={() => setOpenMenu1(true)}
          >
            <p className="NavbarMobileMenu-txt-1">TEMPORADAS</p>
          </div>
          <div
            className="NavbarMobileMenu-C-B2B3"
            onClick={() => setOpenMenu2(true)}
          >
            <p className="NavbarMobileMenu-txt-1">EQUIPOS</p>
          </div>
          <div
            className="NavbarMobileMenu-C-B2B4"
            onClick={() => setOpenMenu3(true)}
          >
            <p className="NavbarMobileMenu-txt-1">EXPLORAR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_Menu;
