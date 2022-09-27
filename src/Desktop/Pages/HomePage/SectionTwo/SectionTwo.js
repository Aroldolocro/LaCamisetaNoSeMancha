import "./SectionTwo.css";
import "./SectionTwoQuery.css";
import { useEffect, useState, useContext } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../Context/Appcontext";

const SectionTwo = () => {
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

  const S2dbProducts = data
    .filter((item) => item.HP_section2 === true)
    .slice(0, 6)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "S2dbProducts-background"
            : "S2dbProducts-background-notdisplayed"
        }
        key={index}
      >
        <div className="S2dbProducts-B1">
          <img
            src={Item.imagen1}
            className="S2dbProducts-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="S2dbProducts-B2">
          <p className="S2dbProducts-txt-1">{Item.nombre}</p>
          <p className="S2dbProducts-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.precio)}
          </p>
        </div>
      </Link>
    ));

  const S2dbProductsLoader = (
    <>
      <div
        className={
          Loaded
            ? "S2dbProductsLoader-background-notdisplayed"
            : "S2dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S2dbProductsLoader-background-notdisplayed"
            : "S2dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S2dbProductsLoader-background-notdisplayed"
            : "S2dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S2dbProductsLoader-background-notdisplayed"
            : "S2dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S2dbProductsLoader-background-notdisplayed"
            : "S2dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S2dbProductsLoader-background-notdisplayed"
            : "S2dbProductsLoader-background"
        }
      ></div>
    </>
  );

  return (
    <div className="S2-background" ref={scollToRef}>
      <div className="S2-content">
        <div className="S2-C-B1">
          <p className="S2-txt-1">NUESTRA SELECCIÓN</p>
          <p className="S2-txt-2">
            Junto al equipo de LA CAMISETA NO SE MANCHA decidimos crear una
            selección de nuestros productos favoritos.
          </p>
        </div>
        <div className="S2-C-B2">
          {S2dbProductsLoader}
          {S2dbProducts}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
