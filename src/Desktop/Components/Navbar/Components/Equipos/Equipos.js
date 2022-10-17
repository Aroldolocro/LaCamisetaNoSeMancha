import "./Equipos.css";
import { Link } from "react-router-dom";

const Equipos = () => {
  return (
    <div className="DD-background2">
      <Link to={`/equipos/boca-juniors`} className="DD-txt-1">
        BOCA JUNIORS
      </Link>
      <Link to={`/equipos/estudiantes-de-la-plata`} className="DD-txt-1">
        ESTUDIANTES DE LA PLATA
      </Link>
      <Link to={`/equipos/defensa-y-justicia`} className="DD-txt-1">
        DEFENSA Y JUSTICIA
      </Link>
      <Link to={`/equipos/club-atletico-talleres`} className="DD-txt-1">
        CLUB ATLÉTICO TALLERES
      </Link>
      <Link to={`/equipos/deportivo-moron`} className="DD-txt-1">
        DEPORTIVO MORÓN
      </Link>
      <Link to={`/equipos/club-atletico-independiente`} className="DD-txt-1">
        CLUB ATLÉTICO INDEPENDIENTE
      </Link>
      <Link to={`/equipos/gimnasia-y-esgrima-de-la-plata`} className="DD-txt-1">
        GIMNASIA Y ESGRIMA DE LA PLATA
      </Link>
      <Link to={`/equipos/racing-club`} className="DD-txt-1">
        RACING CLUB
      </Link>
    </div>
  );
};

export default Equipos;
