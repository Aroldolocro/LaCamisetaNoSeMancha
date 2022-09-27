import "./MobileMenuEquipos.css";
import { AppContext } from "../../../../../../Context/Appcontext";
import { useContext } from "react";

const MobileMenuEquipos = () => {
  const { setOpenMenu2 } = useContext(AppContext);
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
        <a href={`/equipos/boca-juniors`} className="MobileMenuEquipos-C-B2">
          <p className="MobileMenuEquipos-txt-1">BOCA JUNORS</p>
        </a>
        <a
          href={`/equipos/estudiantes-de-la-plata`}
          className="MobileMenuEquipos-C-B3"
        >
          <p className="MobileMenuEquipos-txt-1">ESTUDIANTES DE LA PLATA</p>
        </a>
        <a
          href={`/equipos/defensa-y-justicia`}
          className="MobileMenuEquipos-C-B4"
        >
          <p className="MobileMenuEquipos-txt-1">DEFENSA Y JUSTICIA</p>
        </a>
        <a
          href={`/equipos/club-atletico-talleres`}
          className="MobileMenuEquipos-C-B5"
        >
          <p className="MobileMenuEquipos-txt-1">CLUB ATLETICO TALLERES</p>
        </a>
        <a href={`/equipos/deportivo-moron`} className="MobileMenuEquipos-C-B6">
          <p className="MobileMenuEquipos-txt-1">DEPORTIVO MORON</p>
        </a>
        <a
          href={`/equipos/club-atletico-independiente`}
          className="MobileMenuEquipos-C-B7"
        >
          <p className="MobileMenuEquipos-txt-1">CLUB ATLETICO INDEPENDIENTE</p>
        </a>
        <a
          href={`/equipos/gimnasia-y-esgrima-de-la-plata`}
          className="MobileMenuEquipos-C-B8"
        >
          <p className="MobileMenuEquipos-txt-1">
            GIMNASIA Y ESGRIMA DE LA PLATA
          </p>
        </a>
        <a href={`/equipos/racing-club`} className="MobileMenuEquipos-C-B9">
          <p className="MobileMenuEquipos-txt-1">RACING CLUB</p>
        </a>
      </div>
    </div>
  );
};

export default MobileMenuEquipos;
