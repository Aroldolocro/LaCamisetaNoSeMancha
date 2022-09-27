import "./Mobile_Menu_Equipos.css";
import { AppContext } from "../../../../../Appcontext";
import { useContext } from "react";

const Mobile_Menu_Equipos = () => {
  const { setOpenMenu2 } = useContext(AppContext);
  return (
    <div className="NavbarMobileEquipos-background">
      <div className="NavbarMobileEquipos-content">
        <div className="NavbarMobileEquipos-C-B1">
          <div
            className="NavbarMobileEquipos-C-B1B1"
            onClick={() => setOpenMenu2(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="NavbarMobileEquipos-svg-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <p className="NavbarMobileEquipos-txt-1">EQUIPOS</p>
        </div>
        <a href={`/equipos/boca-juniors`} className="NavbarMobileEquipos-C-B2">
          <p className="NavbarMobileEquipos-txt-1">BOCA JUNORS</p>
        </a>
        <a
          href={`/equipos/estudiantes-de-la-plata`}
          className="NavbarMobileEquipos-C-B3"
        >
          <p className="NavbarMobileEquipos-txt-1">ESTUDIANTES DE LA PLATA</p>
        </a>
        <a
          href={`/equipos/defensa-y-justicia`}
          className="NavbarMobileEquipos-C-B4"
        >
          <p className="NavbarMobileEquipos-txt-1">DEFENSA Y JUSTICIA</p>
        </a>
        <a
          href={`/equipos/club-atletico-talleres`}
          className="NavbarMobileEquipos-C-B5"
        >
          <p className="NavbarMobileEquipos-txt-1">CLUB ATLETICO TALLERES</p>
        </a>
        <a
          href={`/equipos/deportivo-moron`}
          className="NavbarMobileEquipos-C-B6"
        >
          <p className="NavbarMobileEquipos-txt-1">DEPORTIVO MORON</p>
        </a>
        <a
          href={`/equipos/club-atletico-independiente`}
          className="NavbarMobileEquipos-C-B7"
        >
          <p className="NavbarMobileEquipos-txt-1">
            CLUB ATLETICO INDEPENDIENTE
          </p>
        </a>
        <a
          href={`/equipos/gimnasia-y-esgrima-de-la-plata`}
          className="NavbarMobileEquipos-C-B8"
        >
          <p className="NavbarMobileEquipos-txt-1">
            GIMNASIA Y ESGRIMA DE LA PLATA
          </p>
        </a>
        <a href={`/equipos/racing-club`} className="NavbarMobileEquipos-C-B9">
          <p className="NavbarMobileEquipos-txt-1">RACING CLUB</p>
        </a>
      </div>
    </div>
  );
};

export default Mobile_Menu_Equipos;
