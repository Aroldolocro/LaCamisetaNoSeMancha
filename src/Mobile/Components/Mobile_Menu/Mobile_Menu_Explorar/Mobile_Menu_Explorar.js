import "./Mobile_Menu_Explorar.css";
import { AppContext } from "../../../../../Appcontext";
import { useContext } from "react";

const Mobile_Menu_Explorar = () => {
  const { setOpenMenu3 } = useContext(AppContext);
  return (
    <div className="NavbarMobileExplorar-background">
      <div className="NavbarMobileExplorar-content">
        <div className="NavbarMobileExplorar-C-B1">
          <div
            className="NavbarMobileExplorar-C-B1B1"
            onClick={() => setOpenMenu3(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="NavbarMobileExplorar-svg-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <p className="NavbarMobileExplorar-txt-1">EXPLORAR</p>
        </div>
        <a href={`/seguimiento`} className="NavbarMobileExplorar-C-B2">
          <p className="NavbarMobileExplorar-txt-1">SEGUÍ TU ORDEN</p>
        </a>
        <div className="NavbarMobileExplorar-C-B3">
          <p className="NavbarMobileExplorar-txt-1">CONTACTANOS</p>
        </div>
      </div>
    </div>
  );
};

export default Mobile_Menu_Explorar;
