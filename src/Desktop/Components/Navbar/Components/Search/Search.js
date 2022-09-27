import "./Search.css";
import { useContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { AppContext } from "../../../../../Context/Appcontext";

const Search = () => {
  const { setAbrir2 } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "Productos");
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  const [filtrado, setFiltrado] = useState([]);

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

  const resultado = filtrado.slice(0, 10).map((valor) => {
    return (
      <a
        href={`/producto/${valor.id}`}
        className="S-I-background"
        key={valor.id}
      >
        <div className="S-I-content">
          <div className="S-I-C-B1">
            <img src={valor.imagen1} className="S-I-img-1" alt={valor.nombre} />
          </div>
          <div className="S-I-C-B2">
            <div className="S-I-C-B2B1">
              <p className="S-I-txt-1">{valor.nombre}</p>
            </div>
            <div className="S-I-C-B2B2">
              <p className="S-I-txt-2">${valor.precio}</p>
            </div>
          </div>
        </div>
      </a>
    );
  });

  const handleclick = (event) => {
    event.currentTarget.classList.add("salmon");
  };

  return (
    <div className="S-background">
      <div className="S-content">
        <div className="S-C-B1">
          <div className="S-C-B1B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="S-svg-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>

          <div className="S-C-B1B2">
            <input
              className="S-inp-1"
              placeholder="Buscar..."
              onChange={handefiltrado}
              autoFocus={true}
            />
          </div>

          <div className="S-C-B1B3">
            <svg
              onClick={() => setAbrir2(false) & handleclick}
              xmlns="http://www.w3.org/2000/svg"
              className="S-svg-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="R-content">
        {filtrado.length !== 0 && <div className="R-C-B1">{resultado}</div>}
      </div>
    </div>
  );
};

export default Search;
