import "./Mobile_Menu_Temporadas.css";
import { AppContext } from "../../../../../Appcontext";
import { useContext } from "react";

const Mobile_Menu_Temporadas = () => {
  const { setOpenMenu1 } = useContext(AppContext);
  return (
    <div className="NavbarMobileTemporadas-background">
      <div className="NavbarMobileTemporadas-content">
        <div className="NavbarMobileTemporadas-C-B1">
          <div
            className="NavbarMobileTemporadas-C-B1B1"
            onClick={() => setOpenMenu1(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="NavbarMobileTemporadas-svg-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <p className="NavbarMobileTemporadas-txt-1">TEMPORADAS</p>
        </div>
        <a href={`/temporadas/93-94`} className="NavbarMobileTemporadas-C-B2">
          <p className="NavbarMobileTemporadas-txt-1">93/94</p>
        </a>
        <a href={`/temporadas/94-95`} className="NavbarMobileTemporadas-C-B3">
          <p className="NavbarMobileTemporadas-txt-1">94/95</p>
        </a>
        <a href={`/temporadas/95-96`} className="NavbarMobileTemporadas-C-B4">
          <p className="NavbarMobileTemporadas-txt-1">95/96</p>
        </a>
        <a href={`/temporadas/96-97`} className="NavbarMobileTemporadas-C-B5">
          <p className="NavbarMobileTemporadas-txt-1">96/97</p>
        </a>
        <a href={`/temporadas/98-99`} className="NavbarMobileTemporadas-C-B6">
          <p className="NavbarMobileTemporadas-txt-1">98/99</p>
        </a>
        <a href={`/temporadas/00-01`} className="NavbarMobileTemporadas-C-B7">
          <p className="NavbarMobileTemporadas-txt-1">00/01</p>
        </a>
      </div>
    </div>
  );
};

export default Mobile_Menu_Temporadas;
