import "./MobileDestacadosPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const MobileDestacadosPage = () => {
  window.scrollTo(0, 0);
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

  const MobileDestacadosPage_DB_Products = data
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.destacado === true)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "MobileDestacadosPage_DB_Products-background"
            : "MobileDestacadosPage_DB_Products-background-notdisplayed"
        }
        key={index}
      >
        <div className="MobileDestacadosPage_DB_Products-content">
          <img
            src={Item.imagen1}
            className="MobileDestacadosPage_DB_Products-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
          <div className="MobileDestacadosPage_DB_Products-B1">
            <p className="MobileDestacadosPage_DB_Products-txt-1">
              {Item.nombre}
            </p>
            <p className="MobileDestacadosPage_DB_Products-txt-2">
              {Item.categoria}
            </p>
            <p className="MobileDestacadosPage_DB_Products-txt-3">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(Item.precio)}
            </p>
          </div>
        </div>
      </Link>
    ));

  const MobileDestacadosPage_DB_Products_Loaders = (
    <div
      className={
        Loaded
          ? "MobileDestacadosPage_DB_Products_Loaders-background-notdisplayed"
          : "MobileDestacadosPage_DB_Products_Loaders-background"
      }
    ></div>
  );

  return (
    <div className="MobileDestacadosPage-background">
      <div className="MobileDestacadosPage-content">
        <div className="MobileDestacadosPage-C-B1"></div>
        <div className="MobileDestacadosPage-C-B2">
          {MobileDestacadosPage_DB_Products_Loaders}
          {MobileDestacadosPage_DB_Products}
        </div>
      </div>
    </div>
  );
};

export default MobileDestacadosPage;
