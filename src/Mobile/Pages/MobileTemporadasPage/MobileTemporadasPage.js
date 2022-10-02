import "./MobileTemporadasPage.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const MobileTemporadasPage = () => {
  const { Temporade } = useParams();
  const [Loaded, setLoaded] = useState(false);
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

  const MobileTemporadasPage_DB_Products = data
    .filter((item) => item.temporada === Temporade)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "MobileTemporadasPage_DB_Products-background"
            : "MobileTemporadasPage_DB_Products-background-notdisplayed"
        }
        key={index}
      >
        <div className="MobileTemporadasPage_DB_Products-content">
          <img
            src={Item.imagen1}
            className="MobileTemporadasPage_DB_Products-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
          <div className="MobileTemporadasPage_DB_Products-B1">
            <p className="MobileTemporadasPage_DB_Products-txt-1">
              {Item.nombre}
            </p>
            <p className="MobileTemporadasPage_DB_Products-txt-2">
              {Item.categoria}
            </p>
            <p className="MobileTemporadasPage_DB_Products-txt-3">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(Item.precio)}
            </p>
          </div>
        </div>
      </Link>
    ));

  const MobileTemporadasPage_DB_Products_Loaders = (
    <div
      className={
        Loaded
          ? "MobileTemporadasPage_DB_Products_Loaders-background-notdisplayed"
          : "MobileTemporadasPage_DB_Products_Loaders-background"
      }
    ></div>
  );

  return (
    <div className="MobileTemporadasPage-background">
      <div className="MobileTemporadasPage-content">
        <div className="MobileTemporadasPage-C-B1"></div>
        <div className="MobileTemporadasPage-C-B2">
          {MobileTemporadasPage_DB_Products_Loaders}
          {MobileTemporadasPage_DB_Products}
        </div>
      </div>
    </div>
  );
};

export default MobileTemporadasPage;
