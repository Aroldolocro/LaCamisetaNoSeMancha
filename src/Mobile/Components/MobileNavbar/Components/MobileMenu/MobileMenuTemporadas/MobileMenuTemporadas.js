import "./MobileMenuTemporadas.css";
import { AppContext } from "../../../../../../Context/Appcontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MobileMenuTemporadas = () => {
  const { setOpenMenu1, setOpenMenu } = useContext(AppContext);
  return (
    <div className={"MobileMenuTemporadas-background"}>
      <div className="MobileMenuTemporadas-content">
        <div className="MobileMenuTemporadas-C-B1">
          <div
            className="MobileMenuTemporadas-C-B1B1"
            onClick={() => setOpenMenu1(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="MobileMenuTemporadas-svg-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <p className="MobileMenuTemporadas-txt-1">TEMPORADAS</p>
        </div>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/temporadas/93-94`}
          className="MobileMenuTemporadas-C-B2"
        >
          <p className="MobileMenuTemporadas-txt-1">93/94</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/temporadas/94-95`}
          className="MobileMenuTemporadas-C-B3"
        >
          <p className="MobileMenuTemporadas-txt-1">94/95</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/temporadas/95-96`}
          className="MobileMenuTemporadas-C-B4"
        >
          <p className="MobileMenuTemporadas-txt-1">95/96</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/temporadas/96-97`}
          className="MobileMenuTemporadas-C-B5"
        >
          <p className="MobileMenuTemporadas-txt-1">96/97</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/temporadas/98-99`}
          className="MobileMenuTemporadas-C-B6"
        >
          <p className="MobileMenuTemporadas-txt-1">98/99</p>
        </Link>
        <Link
          onClick={() => setOpenMenu(false)}
          to={`/temporadas/00-01`}
          className="MobileMenuTemporadas-C-B7"
        >
          <p className="MobileMenuTemporadas-txt-1">00/01</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenuTemporadas;
