import "./Temporadas.css";
import { Link } from "react-router-dom";

const Temporadas = () => {
  return (
    <div className="DD-background">
      <Link to={`/temporadas/93-94`} className="DD-txt-1">
        93/94
      </Link>
      <Link to={`/temporadas/94-95`} className="DD-txt-1">
        94/95
      </Link>
      <Link to={`/temporadas/95-96`} className="DD-txt-1">
        95/96
      </Link>
      <Link to={`/temporadas/96-97`} className="DD-txt-1">
        96/97
      </Link>
      <Link to={`/temporadas/98-99`} className="DD-txt-1">
        98/99
      </Link>
      <Link to={`/temporadas/00-01`} className="DD-txt-1">
        00/01
      </Link>
    </div>
  );
};

export default Temporadas;
