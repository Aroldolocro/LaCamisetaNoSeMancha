import "./TemporadasPage.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../../Firebase/firebase";

const TemporadasPage = () => {
  const { Temporade } = useParams();
  const [Loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  window.scrollTo(0, 0);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "Productos");
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  useEffect(() => {
    logEvent(analytics, `Temporada: ${Temporade} visitado`);
  }, [Temporade]);

  const TemporadasdbProducts = data
    .filter((item) => item.temporada === Temporade)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "TemporadasdbProducts-background"
            : "TemporadasdbProducts-background-notdisplayed"
        }
        key={index}
      >
        <div className="TemporadasdbProducts-B1">
          <img
            src={Item.imagen1}
            className="TemporadasdbProducts-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="TemporadasdbProducts-B2">
          <p className="TemporadasdbProducts-txt-1">{Item.nombre}</p>
          <p className="TemporadasdbProducts-txt-2">{Item.categoria}</p>
          <p className="TemporadasdbProducts-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.precio)}
          </p>
        </div>
      </Link>
    ));

  const TemporadasdbProductsLoader = (
    <>
      <div
        className={
          Loaded
            ? "TemporadasdbProductsLoader-background-notdisplayed"
            : "TemporadasdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "TemporadasdbProductsLoader-background-notdisplayed"
            : "TemporadasdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "TemporadasdbProductsLoader-background-notdisplayed"
            : "TemporadasdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "TemporadasdbProductsLoader-background-notdisplayed"
            : "TemporadasdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "TemporadasdbProductsLoader-background-notdisplayed"
            : "TemporadasdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "TemporadasdbProductsLoader-background-notdisplayed"
            : "TemporadasdbProductsLoader-background"
        }
      ></div>
    </>
  );

  return (
    <div className="TP-background">
      <div className="TP-content">
        <div className="TP-C-B1"></div>
        <div className="TP-C-B2">
          {TemporadasdbProductsLoader}
          {TemporadasdbProducts}
        </div>
      </div>
    </div>
  );
};

export default TemporadasPage;
