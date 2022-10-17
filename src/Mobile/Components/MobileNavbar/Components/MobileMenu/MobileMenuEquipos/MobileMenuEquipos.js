import "./MobileMenuEquipos.css";
import { AppContext } from "../../../../../../Context/Appcontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MobileMenuEquipos = () => {
  const { setOpenMenu2, setOpenMenu } = useContext(AppContext);
  return (
    <div className="MobileMenuEquipos-background">
      <div className="MobileMenuEquipos-content">
        <div className="MobileMenuEquipos-C-B1">
          <div
            className="MobileMenuEquipos-C-B1B1"
            onClick={() => setOpenMenu2(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="MobileMenuEquipos-svg-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <p className="MobileMenuEquipos-txt-1">EQUIPOS</p>
        </div>
        <Link
          to={`/equipos/boca-juniors`}
          onClick={() => setOpenMenu(false)}
          className="MobileMenuEquipos-C-B2"
        >
          <p className="MobileMenuEquipos-txt-1">BOCA JUNIORS</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/equipos/estudiantes-de-la-plata`}
          className="MobileMenuEquipos-C-B3"
        >
          <p className="MobileMenuEquipos-txt-1">ESTUDIANTES DE LA PLATA</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/equipos/defensa-y-justicia`}
          className="MobileMenuEquipos-C-B4"
        >
          <p className="MobileMenuEquipos-txt-1">DEFENSA Y JUSTICIA</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/equipos/club-atletico-talleres`}
          className="MobileMenuEquipos-C-B5"
        >
          <p className="MobileMenuEquipos-txt-1">CLUB ATLÉTICO TALLERES</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/equipos/deportivo-moron`}
          className="MobileMenuEquipos-C-B6"
        >
          <p className="MobileMenuEquipos-txt-1">DEPORTIVO MORÓN</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/equipos/club-atletico-independiente`}
          className="MobileMenuEquipos-C-B7"
        >
          <p className="MobileMenuEquipos-txt-1">CLUB ATLÉTICO INDEPENDIENTE</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/equipos/gimnasia-y-esgrima-de-la-plata`}
          className="MobileMenuEquipos-C-B8"
        >
          <p className="MobileMenuEquipos-txt-1">
            GIMNASIA Y ESGRIMA DE LA PLATA
          </p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/equipos/racing-club`}
          className="MobileMenuEquipos-C-B9"
        >
          <p className="MobileMenuEquipos-txt-1">RACING CLUB</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenuEquipos;
