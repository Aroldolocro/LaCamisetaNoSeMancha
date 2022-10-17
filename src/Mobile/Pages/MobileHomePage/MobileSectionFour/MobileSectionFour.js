import "./MobileSectionFour.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const MobileSectionFour = () => {
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

  const MobileSectionFour_DB_Products = data
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.destacado === true)
    .slice(0, 4)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "MobileSectionFour_DB_Products-background"
            : "MobileSectionFour_DB_Products-background-notdisplayed"
        }
        key={index}
      >
        <div className="MobileSectionFour_DB_Products-B1">
          <img
            src={Item.imagen1}
            className="MobileSectionFour_DB_Products-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="MobileSectionFour_DB_Products-B2">
          <p className="MobileSectionFour_DB_Products-txt-1">{Item.nombre}</p>
          <p className="MobileSectionFour_DB_Products-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.precio)}
          </p>
        </div>
      </Link>
    ));

  const MobileSectionFour_DB_Products_Loader = (
    <>
      <div
        className={
          Loaded
            ? "MobileSectionFour-Loader-background-notdisplayed"
            : "MobileSectionFour-Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileSectionFour-Loader-background-notdisplayed"
            : "MobileSectionFour-Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileSectionFour-Loader-background-notdisplayed"
            : "MobileSectionFour-Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileSectionFour-Loader-background-notdisplayed"
            : "MobileSectionFour-Loader-background"
        }
      ></div>
    </>
  );

  return (
    <div className="MobileSectionFour-background">
      <div className="MobileSectionFour-content">
        <div className="MobileSectionFour-C-B1"></div>
        <div className="MobileSectionFour-C-B2">
          <p className="MobileSectionFour-txt-1">PRODUCTOS DESTACADOS</p>
        </div>
        <div className="MobileSectionFour-C-B3">
          {MobileSectionFour_DB_Products}
          {MobileSectionFour_DB_Products_Loader}
        </div>
        <div className="MobileSectionFour-C-B4">
          <Link to={`/destacados`} className="MobileSectionFour-btn">
            VER TODOS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSectionFour;
