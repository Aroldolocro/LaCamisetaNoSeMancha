import "./SectionTwo.css";
import { useState, useEffect, useContext } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../Context/Appcontext";
import MobileAddToCartNotification from "../MobileAddToCartNotification/MobileAddToCartNotification";
import MobileAddToCartAnimation from "../MobileAddToCartAnimation/MobileAddToCartAnimation";
import MobileSizeGuide from "../MobileSizeGuide/MobileSizeGuide";
import { analytics } from "../../../../Firebase/firebase";
import { logEvent } from "firebase/analytics";

const SectionTwo = () => {
  const {
    AgregarProducto,
    abrir3,
    abrir4,
    abrir5,
    setAbrir5,
    notificate,
    notificate1,
  } = useContext(AppContext);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [data3, setData3] = useState({});
  const [selected, setSelected] = useState();
  const [sizeError, setSizeError] = useState(false);
  const [SinStock, setSinStock] = useState();
  // const [Loaded, setLoaded] = useState(false);
  const [OpenDescription, setOpenDescription] = useState(true);

  useEffect(() => {
    if (abrir5) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [abrir5]);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Productos", productId);
    const dbcollection3 = doc(
      db,
      "Productos",
      productId,
      "StockDisponible",
      "SubStockDisponible"
    );
    getDoc(dbcollection).then((res) => setData({ id: res.id, ...res.data() }));
    getDoc(dbcollection3).then((res) =>
      setData3({ id: res.id, ...res.data() })
    );
  }, [productId]);

  /*DATOS*/

  const imagen = data.imagen1;
  const nombre = data.nombre;
  const categoria = data.categoria;
  const talle = selected;
  const precio = data.precio;
  const id = data.id;
  const StockS = data3.StockS;
  const StockM = data3.StockM;
  const StockL = data3.StockL;
  const StockXL = data3.StockXL;
  const StockXXL = data3.StockXXL;
  const TalleS = "S";
  const TalleM = "M";
  const TalleL = "L";
  const TalleXL = "XL";
  const TalleXXL = "XXL";
  const precioOnCurrency = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(data.precio);

  /*VERIFICATION OF SIZE ERROR*/

  useEffect(() => {
    if (
      selected === undefined &&
      StockS === 0 &&
      StockM === 0 &&
      StockL === 0 &&
      StockXL === 0 &&
      StockXXL === 0
    ) {
      setSinStock(true);
    } else {
      setSinStock(false);
    }
  }, [selected, StockS, StockM, StockL, StockXL, StockXXL]);

  const VerificationOfSize = () => {
    if (selected === undefined || selected === "SELECCIONA UN TALLE") {
      setSizeError(true);
    } else {
      logEvent(
        analytics,
        `Mobile_Producto ID: ${productId} Agregado al carrito (Boton agregar al carrito)`
      );
      setSizeError(false);
      notificate();
      notificate1();
      AgregarProducto(
        imagen,
        nombre,
        categoria,
        talle,
        precio,
        StockS,
        StockM,
        StockL,
        StockXL,
        StockXXL,
        id
      );
    }
  };

  const VerificationOfSize2 = () => {
    if (selected === undefined || selected === "SELECCIONA UN TALLE") {
      setSizeError(true);
    } else {
      logEvent(
        analytics,
        `Mobile_Producto ID: ${productId} Agregado al carrito (Boton comprar ahora)`
      );
      setSizeError(false);
      AgregarProducto(
        imagen,
        nombre,
        categoria,
        talle,
        precio,
        StockS,
        StockM,
        StockL,
        StockXL,
        StockXXL,
        id
      );
      navigate("/checkout");
    }
  };

  /*DB SIZES VERIFICATION*/

  const [ActulizarStockS, setActulizarStockS] = useState(TalleS);
  const [ActulizarStockM, setActulizarStockM] = useState(TalleM);
  const [ActulizarStockL, setActulizarStockL] = useState(TalleL);
  const [ActulizarStockXL, setActulizarStockXL] = useState(TalleXL);
  const [ActulizarStockXXL, setActulizarStockXXL] = useState(TalleXXL);

  useEffect(() => {
    if (StockS === 0) {
      setActulizarStockS(TalleS + " - AGOTADO");
    } else {
      setActulizarStockS(TalleS);
    }
  }, [StockS, TalleS]);

  useEffect(() => {
    if (StockM === 0) {
      setActulizarStockM(TalleM + " - AGOTADO");
    } else {
      setActulizarStockM(TalleM);
    }
  }, [StockM, TalleM]);

  useEffect(() => {
    if (StockL === 0) {
      setActulizarStockL(TalleL + " - AGOTADO");
    } else {
      setActulizarStockL(TalleL);
    }
  }, [StockL, TalleL]);

  useEffect(() => {
    if (StockXL === 0) {
      setActulizarStockXL(TalleXL + " - AGOTADO");
    } else {
      setActulizarStockXL(TalleXL);
    }
  }, [StockXL, TalleXL]);

  useEffect(() => {
    if (StockXXL === 0) {
      setActulizarStockXXL(TalleXXL + " - AGOTADO");
    } else {
      setActulizarStockXXL(TalleXXL);
    }
  }, [StockXXL, TalleXXL]);

  useEffect(() => {
    if (selected?.includes("AGOTADO")) {
      setSinStock(true);
    } else {
      setSinStock(false);
    }
  }, [selected]);

  return (
    <div className="SectionTwo-background">
      {abrir3 && <MobileAddToCartNotification />}
      {abrir5 && <MobileSizeGuide />}
      <div className="SectionTwo-content">
        <div className="SectionTwo-C-B1">
          <p className="SectionTwo-txt-1">Home</p>
          <p className="SectionTwo-txt-2">/</p>
          <p className="SectionTwo-txt-2">{nombre}</p>
        </div>
        <div className="SectionTwo-C-B2">
          <div className="SectionTwo-C-B2B1">
            <p className="SectionTwo-txt-3">{nombre}</p>
            <p className="SectionTwo-txt-4">{categoria}</p>
          </div>
          <div className="SectionTwo-C-B2B2">
            <p className="SectionTwo-txt-5">TALLE</p>
            <select
              className="SectionTwo-select"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option className="SectionTwo-option">SELECCIONA UN TALLE</option>
              <option className="SectionTwo-option">{ActulizarStockS}</option>
              <option className="SectionTwo-option">{ActulizarStockM}</option>
              <option className="SectionTwo-option">{ActulizarStockL}</option>
              <option className="SectionTwo-option">{ActulizarStockXL}</option>
              <option className="SectionTwo-option">{ActulizarStockXXL}</option>
            </select>
          </div>
        </div>
        <div className="SectionTwo-C-B3">
          <div className="SectionTwo-C-B3B1">
            <p
              className={
                sizeError ? "SectionTwo-Error" : "SectionTwo-Error-notdisplayed"
              }
            >
              Seleccione un talle
            </p>
          </div>
          <div className="SectionTwo-C-B3B2" onClick={() => setAbrir5(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="SectionTwo-svg-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <p className="SectionTwo-txt-6">Guía de talles</p>
          </div>
          <button
            disabled={SinStock === true}
            className={
              SinStock ? " SectionTwo-btn1-SinStock" : "SectionTwo-btn1"
            }
            onClick={() => VerificationOfSize()}
          >
            {abrir4 ? (
              <MobileAddToCartAnimation />
            ) : SinStock ? (
              ["Sin Stock • ", precioOnCurrency]
            ) : (
              ["Agregar al Carrito • ", precioOnCurrency]
            )}
          </button>
          {SinStock ? null : (
            <button
              className="SectionTwo-btn2"
              onClick={() => VerificationOfSize2()}
            >
              Comprar ahora
            </button>
          )}
        </div>
        <div className="SectionTwo-C-B4">
          <div
            className="SectionTwo-C-B4B1"
            onClick={() => setOpenDescription((prev) => !prev)}
          >
            <p className="SectionTwo-txt-7">Descripcion</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className={
                OpenDescription
                  ? "SectionTwo-svg-2 SectionTwo-svg-2-rotated"
                  : "SectionTwo-svg-2"
              }
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <p className="SectionTwo-txt-8">{data.descripcion}</p>
          <span
            className={
              OpenDescription
                ? "SectionTwo-span"
                : "SectionTwo-span SectionTwo-span-animtion"
            }
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
