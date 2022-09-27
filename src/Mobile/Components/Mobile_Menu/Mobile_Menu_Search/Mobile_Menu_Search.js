import "./Mobile_Menu_Search.css";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Mobile_Menu_Search = () => {
  const [data, setData] = useState([]);
  const [filtrado, setFiltrado] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "Productos");
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  const handefiltrado = (event) => {
    const word = event.target.value;
    const nuevofiltrado = data.filter((valor) =>
      valor.nombre.toLowerCase().includes(word.toLowerCase())
    );

    if (word === "") {
      setFiltrado([]);
    } else {
      setFiltrado(nuevofiltrado);
    }
  };

  const resultado = filtrado.slice(0, 4).map((valor, index) => {
    return (
      <a
        href={`/producto/${valor.id}`}
        className="resultado-background"
        key={index}
      >
        <div className="resultado-B1">
          <img src={valor.imagen1} className="resultado-img" alt="" />
        </div>
        <div className="resultado-B2">
          <p className="resultado-txt-1">{valor.nombre}</p>
          <p className="resultado-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(valor.precio)}
          </p>
        </div>
      </a>
    );
  });

  return (
    <div className="NavbarMobileSearch-bacground">
      <div className="NavbarMobileSearch-content">
        <div className="NavbarMobileSearch-C-B1">
          <input
            className="NavbarMobileSearch-input"
            placeholder="Buscar..."
            onChange={handefiltrado}
          />
        </div>
        <div className="NavbarMobileSearch-C-B2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="NavbarMobileSearch-svg-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
      <div
        className={
          filtrado.length === 0
            ? "NavbarMobileSearch-content-2-notdisplayed"
            : "NavbarMobileSearch-content-2"
        }
      >
        {resultado}
      </div>
    </div>
  );
};

export default Mobile_Menu_Search;
