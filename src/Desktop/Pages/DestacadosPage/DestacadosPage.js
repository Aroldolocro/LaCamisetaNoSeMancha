import "./DestacadosPage.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DestacadosPage = () => {
  window.scrollTo(0, 0);
  const [data, setData] = useState([]);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "Productos");
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  const DestacadosdbProducts = data
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.destacado === true)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "DestacadosdbProducts-background"
            : "DestacadosdbProducts-background-notdisplayed"
        }
        key={index}
      >
        <div className="DestacadosdbProducts-B1">
          <img
            src={Item.imagen1}
            className="DestacadosdbProducts-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="DestacadosdbProducts-B2">
          <p className="DestacadosdbProducts-txt-1">{Item.nombre}</p>
          <p className="DestacadosdbProducts-txt-2">{Item.categoria}</p>
          <p className="DestacadosdbProducts-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.precio)}
          </p>
        </div>
      </Link>
    ));

  const DestacadosdbProductsLoader = (
    <>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "DestacadosdbProductsLoader-background-notdisplayed"
            : "DestacadosdbProductsLoader-background"
        }
      ></div>
    </>
  );

  return (
    <div className="DP-background">
      <div className="DP-content">
        <div className="DP-C-B1"></div>
        <div className="DP-C-B2">
          {DestacadosdbProductsLoader}
          {DestacadosdbProducts}
        </div>
      </div>
    </div>
  );
};

export default DestacadosPage;
