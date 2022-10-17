import "./MobileMenuExplorar.css";
import { AppContext } from "../../../../../../Context/Appcontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MobileMenuExplorar = () => {
  const { setOpenMenu3 } = useContext(AppContext);
  return (
    <div className="MobileMenuExplorar-background">
      <div className="MobileMenuExplorar-content">
        <div className="MobileMenuExplorar-C-B1">
          <div
            className="MobileMenuExplorar-C-B1B1"
            onClick={() => setOpenMenu3(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="MobileMenuExplorar-svg-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <p className="MobileMenuExplorar-txt-1">EXPLORAR</p>
        </div>
        <Link to={`/seguimiento`} className="MobileMenuExplorar-C-B2">
          <p className="MobileMenuExplorar-txt-1">SEGUÍ TU ORDEN</p>
        </Link>
        <Link to="/preguntas_frecuentes" className="MobileMenuExplorar-C-B3">
          <p className="MobileMenuExplorar-txt-1">CONTÁCTANOS</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenuExplorar;
