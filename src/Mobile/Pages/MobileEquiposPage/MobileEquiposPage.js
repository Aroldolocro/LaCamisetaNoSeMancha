import "./MobileEquiposPage.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const MobileEquiposPage = () => {
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

  const MobileEquiposPage_DB_Products = data
    .filter((item) => item.equipo2 === Equipo)
    .map((Item, index) => (
      <Link
        to={`/producto/${Item.id}`}
        className={
          Loaded
            ? "MobileEquiposPage_DB_Products-background"
            : "MobileEquiposPage_DB_Products-background-notdisplayed"
        }
        key={index}
      >
        <div className="MobileEquiposPage_DB_Products-B1">
          <img
            src={Item.imagen1}
            className="MobileEquiposPage_DB_Products-img"
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="MobileEquiposPage_DB_Products-B2">
          <p className="MobileEquiposPage_DB_Products-txt-1">{Item.nombre}</p>
          <p className="MobileEquiposPage_DB_Products-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.precio)}
          </p>
        </div>
      </Link>
    ));

  const MobileEquiposPage_DB_Products_Loader = (
    <>
      <div
        className={
          Loaded
            ? "MobileEquiposPage_DB_Products_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_Products_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileEquiposPage_DB_Products_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_Products_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileEquiposPage_DB_Products_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_Products_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded
            ? "MobileEquiposPage_DB_Products_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_Products_Loader-background"
        }
      ></div>
    </>
  );

  const MobileEquiposPage_DB_EquiposImages = (
    <>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages-B1"
            : "MobileEquiposPage_DB_EquiposImages-B1-notdisplayed"
        }
      >
        <img
          src={data2.imagen1}
          className="MobileEquiposPage_DB_EquiposImages-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages-B1"
            : "MobileEquiposPage_DB_EquiposImages-B1-notdisplayed"
        }
      >
        <img
          src={data2.imagen2}
          className="MobileEquiposPage_DB_EquiposImages-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages-B1"
            : "MobileEquiposPage_DB_EquiposImages-B1-notdisplayed"
        }
      >
        <img
          src={data2.imagen3}
          className="MobileEquiposPage_DB_EquiposImages-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages-B1"
            : "MobileEquiposPage_DB_EquiposImages-B1-notdisplayed"
        }
      >
        <img
          src={data2.imagen4}
          className="MobileEquiposPage_DB_EquiposImages-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages-B1"
            : "MobileEquiposPage_DB_EquiposImages-B1-notdisplayed"
        }
      >
        <img
          src={data2.imagen5}
          className="MobileEquiposPage_DB_EquiposImages-img"
          alt=""
          onLoad={() => setLoaded2(true)}
        />
      </div>
    </>
  );

  const MobileEquiposPage_DB_EquiposImages_Loader = (
    <>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_EquiposImages_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_EquiposImages_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_EquiposImages_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_EquiposImages_Loader-background"
        }
      ></div>
      <div
        className={
          Loaded2
            ? "MobileEquiposPage_DB_EquiposImages_Loader-background-notdisplayed"
            : "MobileEquiposPage_DB_EquiposImages_Loader-background"
        }
      ></div>
    </>
  );

  const MobileEquiposPage_EquipoNombre = (
    <p className="MobileEquiposPage-txt-1">{data2.EquipoNombre}</p>
  );

  const MobileEquiposPage_EquipoNombre_Loader = (
    <div className="MobileEquiposPage_EquipoNombre_Loader-background">
      <div className="MobileEquiposPage_EquipoNombre_Loader-content"></div>
    </div>
  );

  const MobileEquiposPage_EquipoNombre2 = (
    <p className="MobileEquiposPage-txt-2">
      Explora los productos de {data2.EquipoNombre} y lucí tu outfit de la mejor
      manera.
    </p>
  );

  const MobileEquiposPage_EquipoNombre2_Loader = (
    <div className="MobileEquiposPage_EquipoNombre_Loader2-background">
      <div className="MobileEquiposPage_EquipoNombre_Loader2-content"></div>
    </div>
  );

  const MobileEquiposPage_EquipoHistoria = (
    <p className="MobileEquiposPage-txt-4">{data2.EquipoHistoria}</p>
  );

  const MobileEquiposPage_EquipoHistoria_Loader = (
    <div className="MobileEquiposPage_EquipoHistoria_Loader-background"></div>
  );

  const MobileEquiposPage_EquipoHistoria2 = (
    <p className="MobileEquiposPage-txt-4">{data2.EquipoHistoria2}</p>
  );

  const MobileEquiposPage_EquipoHistoria2_Loader = (
    <div className="MobileEquiposPage_EquipoHistoria2_Loader-background"></div>
  );

  return (
    <div className="MobileEquiposPage-background">
      <div className="MobileEquiposPage-content">
        <div className="MobileEquiposPage-C-B1"></div>
        <div className="MobileEquiposPage-C-B2">
          <div className="MobileEquiposPage-C-B2B1">
            {data2.EquipoNombre
              ? MobileEquiposPage_EquipoNombre
              : MobileEquiposPage_EquipoNombre_Loader}
            {data2.EquipoNombre
              ? MobileEquiposPage_EquipoNombre2
              : MobileEquiposPage_EquipoNombre2_Loader}
          </div>
          <div className="MobileEquiposPage-C-B2B2">
            <p className="MobileEquiposPage-txt-3">PRODUCTOS</p>
            <div className="MobileEquiposPage-C-B2B2B1">
              {MobileEquiposPage_DB_Products_Loader}
              {MobileEquiposPage_DB_Products}
            </div>
          </div>
          <div className="MobileEquiposPage-C-B2B3">
            {data2.EquipoHistoria
              ? MobileEquiposPage_EquipoHistoria
              : MobileEquiposPage_EquipoHistoria_Loader}
          </div>
          <div className="MobileEquiposPage-C-B2B4">
            <div className="MobileEquiposPage-C-B2B4B1">
              {MobileEquiposPage_DB_EquiposImages_Loader}
              {MobileEquiposPage_DB_EquiposImages}
            </div>
          </div>
          <div className="MobileEquiposPage-C-B2B5">
            {data2.EquipoHistoria2
              ? data2.EquipoHistoria2
                ? MobileEquiposPage_EquipoHistoria2
                : MobileEquiposPage_EquipoHistoria2_Loader
              : data2.EquipoHistoria
              ? MobileEquiposPage_EquipoHistoria
              : MobileEquiposPage_EquipoHistoria2_Loader}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEquiposPage;
