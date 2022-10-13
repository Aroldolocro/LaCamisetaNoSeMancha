import "./SectionThree.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const SectionThree = () => {
  const [data, setData] = useState([]);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "EquiposData");
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  const S3dbProducts = data
    .filter((item) => item.HP_section3 === true)
    .slice(0, 3)
    .map((Item, index) => (
      <div
        className={
          Loaded
            ? "S3dbProducts-background"
            : "S3dbProducts-background-notdisplayed"
        }
        key={index}
      >
        <div className="S3dbProducts-B1">
          <img
            src={Item.HP_section3_image2}
            className="S3dbProducts-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
          <Link
            to={`/equipos/${Item.EquipoNombre2}`}
            className="S3dbProducts-txt-1"
          >
            {Item.EquipoNombre}
          </Link>
        </div>
        <div className="S3dbProducts-B2">
          <p className="S3dbProducts-txt-2">
            <strong>{Item.EquipoNombre}: </strong>
            {Item.EquipoHistoria}
          </p>
        </div>
      </div>
    ));

  const S3dbProductsLoader = (
    <>
      <div
        className={
          Loaded
            ? "S3dbProductsLoader-background-notdisplayed"
            : "S3dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S3dbProductsLoader-background-notdisplayed"
            : "S3dbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "S3dbProductsLoader-background-notdisplayed"
            : "S3dbProductsLoader-background"
        }
      ></div>
    </>
  );

  return (
    <section className="S3-background">
      <div className="S3-content">
        <div className="S3-C-B1"></div>
        <div className="S3-C-B2">
          {S3dbProductsLoader}
          {S3dbProducts}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
