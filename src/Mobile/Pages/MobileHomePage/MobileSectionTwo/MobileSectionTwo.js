import "./MobileSectionTwo.css";
import { useEffect, useState, useContext } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../Context/Appcontext";

const MobileSectionTwo = () => {
  const { scollToRef } = useContext(AppContext);
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

  const MobileSectionTwo_DB_Products = data
    .filter((item) => item.HP_section2 === true)
    .slice(0, 6)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "MobileSectionTwo_DB_Products-background"
            : "MobileSectionTwo_DB_Products-background-notdisplayed"
        }
        key={index}
      >
        <div className="MobileSectionTwo_DB_Products-B1">
          <img
            src={Item.imagen1}
            className="MobileSectionTwo_DB_Products-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="MobileSectionTwo_DB_Products-B2">
          <p className="MobileSectionTwo_DB_Products-txt-1">{Item.nombre}</p>
          <p className="MobileSectionTwo_DB_Products-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.precio)}
          </p>
        </div>
      </Link>
    ));

  const MobileSectionTwo_DB_Products_Loader = (
    <>
      <div
        className={
          Loaded
            ? "MobileSectionTwo_DB_Products_Loader-background-notdisplayed"
            : "MobileSectionTwo_DB_Products_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileSectionTwo_DB_Products_Loader-background-notdisplayed"
            : "MobileSectionTwo_DB_Products_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileSectionTwo_DB_Products_Loader-background-notdisplayed"
            : "MobileSectionTwo_DB_Products_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileSectionTwo_DB_Products_Loader-background-notdisplayed"
            : "MobileSectionTwo_DB_Products_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileSectionTwo_DB_Products_Loader-background-notdisplayed"
            : "MobileSectionTwo_DB_Products_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileSectionTwo_DB_Products_Loader-background-notdisplayed"
            : "MobileSectionTwo_DB_Products_Loader-background"
        }
      ></div>
    </>
  );

  return (
    <div className="MobileSectionTwo-background" ref={scollToRef}>
      <div className="MobileSectionTwo-content">
        <div className="MobileSectionTwo-C-B1">
          <p className="MobileSectionTwo-txt-1">NUESTRA SELECCIÓN</p>
          <p className="MobileSectionTwo-txt-2">
            Junto al equipo de LA CAMISETA NO SE MANCHA decidimos crear una
            selección de nuestros productos favoritos.
          </p>
        </div>
        <div className="MobileSectionTwo-C-B2">
          {MobileSectionTwo_DB_Products_Loader}
          {MobileSectionTwo_DB_Products}
        </div>
      </div>
    </div>
  );
};

export default MobileSectionTwo;
