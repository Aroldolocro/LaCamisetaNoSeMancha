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

  const S4dbProducts = data
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.destacado === true)
    .slice(0, 4)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "S4dbProducts-background"
            : "S4dbProducts-background-notdisplayed"
        }
        key={index}
      >
        <div className="S4dbProducts-B1">
          <img
            src={Item.imagen1}
            className="S4dbProducts-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="S4dbProducts-B2">
          <p className="S4dbProducts-txt-1">{Item.nombre}</p>
          <p className="S4dbProducts-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.precio)}
          </p>
        </div>
      </Link>
    ));

  const S4dbProductsLoader = (
    <>
      <div
        className={
          Loaded
            ? "S4dbProductsLoader-background-notdisplayed"
            : "S4dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S4dbProductsLoader-background-notdisplayed"
            : "S4dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S4dbProductsLoader-background-notdisplayed"
            : "S4dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S4dbProductsLoader-background-notdisplayed"
            : "S4dbProductsLoader-background"
        }
      ></div>
    </>
  );

  return (
    <div className="S4-background">
      <div className="S4-content">
        <div className="S4-C-B1"></div>
        <div className="S4-C-B2">
          <p className="S4-txt-1">PRODUCTOS DESTACADOS</p>
        </div>
        <div className="S4-C-B3">
          {S4dbProducts}
          {S4dbProductsLoader}
        </div>
        <div className="S4-C-B4">
          <a href={`/destacados`} className="S4-btn">
            VER TODOS
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileSectionFour;
