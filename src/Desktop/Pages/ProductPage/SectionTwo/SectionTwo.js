import "./SectionTwo.css";

import { useParams } from "react-router-dom";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

import { useState, useEffect } from "react";

const SectionTwo = () => {
  const { productId } = useParams();
  const [Loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Productos", productId);
    getDoc(dbcollection).then((res) => setData({ id: res.id, ...res.data() }));
  }, [productId]);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "Productos");
    getDocs(dbcollection).then((res) =>
      setData2(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, [productId]);

  const NombreEquipo = data.equipo;
  const IdProducto = data.id;

  const RelatedArray1 = data2
    .sort(() => Math.random() - 0.5)
    .filter((item) => (item.equipo === NombreEquipo) & (item.id !== IdProducto))
    .slice(0, 4)
    .map((item2) => (
      <a
        href={`/producto/${item2.id}`}
        className={Loaded ? "RA-background" : "RA-background-notdisplayed"}
        key={item2.id}
      >
        <div className="RA-content">
          <div className="RA-C-B1">
            <img
              src={item2.imagen1}
              className="RA-img"
              alt=""
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="RA-C-B2">
            <p className="RA-txt-1">{item2.nombre}</p>
          </div>
          <div className="RA-C-B3">
            <p className="RA-txt-2">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(item2.precio)}
            </p>
          </div>
        </div>
      </a>
    ));

  const RelatedArray2 = data2
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.equipo !== NombreEquipo)
    .slice(0, 4 - RelatedArray1.length)
    .map((item2) => (
      <a
        href={`/producto/${item2.id}`}
        className={Loaded ? "RA-background" : "RA-background-notdisplayed"}
        key={item2.id}
      >
        <div className="RA-content">
          <div className="RA-C-B1">
            <img
              src={item2.imagen1}
              className="RA-img"
              alt=""
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="RA-C-B2">
            <p className="RA-txt-1">{item2.nombre}</p>
          </div>
          <div className="RA-C-B3">
            <p className="RA-txt-2">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(item2.precio)}
            </p>
          </div>
        </div>
      </a>
    ));

  const PGSTdbProductsLoader = (
    <>
      <div
        className={
          Loaded
            ? "PGSTdbProductsLoader-background-notdisplayed"
            : "PGSTdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "PGSTdbProductsLoader-background-notdisplayed"
            : "PGSTdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "PGSTdbProductsLoader-background-notdisplayed"
            : "PGSTdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "PGSTdbProductsLoader-background-notdisplayed"
            : "PGSTdbProductsLoader-background"
        }
      ></div>
    </>
  );

  return (
    <div className="PG-S2-background">
      <div className="PG-S2-content">
        <div className="PG-S2-C-B1">
          <p className="PG-S2-txt-1">PRODUCTOS RELACIONADOS</p>
        </div>
        <div className="PG-S2-C-B2">
          {RelatedArray1}
          {RelatedArray2}
          {PGSTdbProductsLoader}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
