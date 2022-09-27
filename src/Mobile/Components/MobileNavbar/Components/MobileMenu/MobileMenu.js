import "./MobileMenu.css";
import { AppContext } from "../../../../../Context/Appcontext";
import { useContext } from "react";
import MobileMenuTemporadas from "./MobileMenuTemporadas/MobileMenuTemporadas";
import MobileMenuExplorar from "./MobileMenuExplorar/MobileMenuExplorar";
import MobileMenuEquipos from "./MobileMenuEquipos/MobileMenuEquipos";
import MobileMenuSearch from "./MobileMenuSearch/MobileMenuSearch";

const MobileMenu = () => {
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
    <div className="MobileMenu-background">
      <div className="MobileMenu-content">
        <div className="MobileMenu-C-B1">
          <div className="MobileMenu-C-B1B1" onClick={() => setOpenMenu(false)}>
            <svg
              className="MobileMenu-svg-1"
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
        {OpenMenu1 && <MobileMenuTemporadas />}
        {OpenMenu2 && <MobileMenuEquipos />}
        {OpenMenu3 && <MobileMenuExplorar />}
        <div
          className={
            OpenMenu1 | OpenMenu2 | OpenMenu3
              ? "MobileMenu-C-B2-notdisplayed"
              : "MobileMenu-C-B2"
          }
        >
          <div className="MobileMenu-C-B2B1">
            <MobileMenuSearch />
          </div>
          <div className="MobileMenu-C-B2B2" onClick={() => setOpenMenu1(true)}>
            <p className="MobileMenu-txt-1">TEMPORADAS</p>
          </div>
          <div className="MobileMenu-C-B2B3" onClick={() => setOpenMenu2(true)}>
            <p className="MobileMenu-txt-1">EQUIPOS</p>
          </div>
          <div className="MobileMenu-C-B2B4" onClick={() => setOpenMenu3(true)}>
            <p className="MobileMenu-txt-1">EXPLORAR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
