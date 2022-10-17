import "./Explorar.css";

import { Link } from "react-router-dom";

const Explorar = () => {
  return (
    <div className="DD-background5">
      <Link to={`/seguimiento`} className="DD-txt-1">
        SEGUÍ TU ORDEN
      </Link>
      <Link to={"/preguntas_frecuentes"} className="DD-txt-1">
        CONTÁCTANOS
      </Link>
    </div>
  );
};

export default Explorar;
