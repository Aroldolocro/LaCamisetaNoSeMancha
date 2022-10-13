import "./EquiposPage.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { analytics } from "../../../Firebase/firebase";
import { logEvent } from "firebase/analytics";

const EquiposPage = () => {
  window.scrollTo(0, 0);
  const { Equipo } = useParams();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [Loaded, setLoaded] = useState(false);
  const [Loaded2, setLoaded2] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "Productos");
    const dbcollection2 = doc(db, "EquiposData", Equipo);
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
    getDoc(dbcollection2).then((res) =>
      setData2({ id: res.id, ...res.data() })
    );
  }, [Equipo]);

  useEffect(() => {
    logEvent(analytics, `${data2.EquipoNombre}_Visitado`);
  }, [data2.EquipoNombre]);

  const EquiposdbProducts = data
    .filter((item) => item.equipo2 === Equipo)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        key={index}
        className={
          Loaded
            ? "EquiposdbProducts-background"
            : "EquiposdbProducts-background-notdisplayed"
        }
      >
        <div className="EquiposdbProducts-background-B1">
          <img
            src={Item.imagen1}
            className="EquiposdbProducts-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="EquiposdbProducts-background-B2">
          <p className="EquiposdbProducts-txt-1">{Item.nombre}</p>
          <p className="EquiposdbProducts-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.precio)}
          </p>
        </div>
      </Link>
    ));

  const EquiposdbProductsLoader = (
    <>
      <div
        className={
          Loaded
            ? "EquiposdbProductsLoader-background-notdisplayed"
            : "EquiposdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "EquiposdbProductsLoader-background-notdisplayed"
            : "EquiposdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "EquiposdbProductsLoader-background-notdisplayed"
            : "EquiposdbProductsLoader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "EquiposdbProductsLoader-background-notdisplayed"
            : "EquiposdbProductsLoader-background"
        }
      ></div>
    </>
  );

  const EquipoNombredb = <p className="EP-txt-1">{data2.EquipoNombre}</p>;

  const EquipoNombredbLoader = (
    <div className="EquipoNombredbLoader-background"></div>
  );

  const EquipoNombre2db = (
    <p className="EP-txt-2">
      Explora los productos de {data2.EquipoNombre} y lucí tu outfit de la mejor
      manera.
    </p>
  );

  const EquipoNombre2dbLoader = (
    <div className="EquipoNombre2dbLoader-background"></div>
  );

  const EquipoHistoriadb = <p className="EP-txt-4">{data2.EquipoHistoria}</p>;

  const EquipoHistoria2db = <p className="EP-txt-4">{data2.EquipoHistoria2}</p>;

  const EquipoHistoriadbLoader = (
    <div className="EquipoHistoriadbLoader-background"></div>
  );

  const EquiposImagenesdb = (
    <>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdb-background"
            : "EquiposImagenesdb-background-notdisplayed"
        }
      >
        <img
          src={data2.imagen1}
          className="EquiposImagenesdb-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdb-background"
            : "EquiposImagenesdb-background-notdisplayed"
        }
      >
        <img
          src={data2.imagen2}
          className="EquiposImagenesdb-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdb-background"
            : "EquiposImagenesdb-background-notdisplayed"
        }
      >
        <img
          src={data2.imagen3}
          className="EquiposImagenesdb-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdb-background"
            : "EquiposImagenesdb-background-notdisplayed"
        }
      >
        <img
          src={data2.imagen4}
          className="EquiposImagenesdb-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdb-background"
            : "EquiposImagenesdb-background-notdisplayed"
        }
      >
        <img
          src={data2.imagen5}
          className="EquiposImagenesdb-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
    </>
  );

  const EquiposImagenesdbLoader = (
    <>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdbLoader-background-notdisplayed"
            : "EquiposImagenesdbLoader-background"
        }
      ></div>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdbLoader-background-notdisplayed"
            : "EquiposImagenesdbLoader-background"
        }
      ></div>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdbLoader-background-notdisplayed"
            : "EquiposImagenesdbLoader-background"
        }
      ></div>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdbLoader-background-notdisplayed"
            : "EquiposImagenesdbLoader-background"
        }
      ></div>
      <div
        className={
          Loaded2
            ? "EquiposImagenesdbLoader-background-notdisplayed"
            : "EquiposImagenesdbLoader-background"
        }
      ></div>
    </>
  );

  return (
    <div className="EP-background">
      <div className="EP-content">
        <div className="EP-C-B1"></div>
        <div className="EP-C-B2">
          <div className="EP-C-B2B1">
            <div className="EP-C-B2B1B1">
              {data2.EquipoNombre ? EquipoNombredb : EquipoNombredbLoader}
            </div>
            <div className="EP-C-B2B1B2">
              {data2.EquipoNombre ? EquipoNombre2db : EquipoNombre2dbLoader}
            </div>
          </div>
          <div className="EP-C-B2B2">
            <div className="EP-C-B2B2B1">
              <p className="EP-txt-3">PRODUCTOS</p>
            </div>
            <div className="EP-C-B2B2B2">
              {EquiposdbProductsLoader}
              {EquiposdbProducts}
            </div>
          </div>
          <div className="EP-C-B2B3">
            <div className="EP-C-B2B3B1">
              {data2.EquipoHistoria ? EquipoHistoriadb : EquipoHistoriadbLoader}
            </div>
          </div>
          <div className="EP-C-B2B4">
            <div className="EP-C-B2B4B1">
              {EquiposImagenesdbLoader}
              {EquiposImagenesdb}
            </div>
          </div>
          <div className="EP-C-B2B5">
            <div className="EP-C-B2B5B1">
              {data2.EquipoHistoria2
                ? data2.EquipoHistoria2
                  ? EquipoHistoria2db
                  : EquipoHistoriadbLoader
                : data2.EquipoHistoria
                ? EquipoHistoriadb
                : EquipoHistoriadbLoader}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquiposPage;
