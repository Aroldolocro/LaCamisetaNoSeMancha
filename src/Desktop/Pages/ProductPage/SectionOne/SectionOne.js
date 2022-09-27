import "./SectionOne.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { AppContext } from "../../../../Context/Appcontext";
import DescriptionOfProduct from "../../../Components/ProductPage_Components/DescriptionOfProduct/DescriptionOfProduct";
import SwiperJsSlider from "../../../Components/ProductPage_Components/SwiperJsSlider/SwiperJsSlider";
import AddToCartAnimation from "../../../Components/ProductPage_Components/AddToCartAnimation/AddToCartAnimation";
import AddToCartNotification from "../../../Components/ProductPage_Components/AddToCartNotification/AddToCartNotification";
import SizeGuide from "../../../Components/ProductPage_Components/SizeGuide/SizeGuide";

const SectionOne = () => {
  window.scrollTo(0, 0);
  const { productId } = useParams();
  const [data, setData] = useState({});
  const [data3, setData3] = useState({});

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

  const [open4, setOpen4] = useState(true);

  const [selected, setSelected] = useState();

  const {
    AgregarProducto,
    abrir3,
    abrir4,
    abrir5,
    setAbrir5,
    notificate,
    notificate1,
  } = useContext(AppContext);

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

  /*VERIFICACION DE TALLE*/

  const [sizeError, setSizeError] = useState(false);

  const RenderOfSizeError = (
    <div className="ROSE-background">Seleccione un talle</div>
  );

  const VerificationOfSize = () => {
    if (selected === undefined || selected === "SELECCIONA UN TALLE") {
      setSizeError(true);
    } else {
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

  const navigate = useNavigate();

  const VerificationOfSize2 = () => {
    if (selected === undefined || selected === "SELECCIONA UN TALLE") {
      setSizeError(true);
    } else {
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

  const [SinStock, setSinStock] = useState();

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

  useEffect(() => {
    if (selected?.includes("AGOTADO")) {
      setSinStock(true);
    } else {
      setSinStock(false);
    }
  }, [selected]);

  /*BOTON AGREGAR AL CARRITO / SOLD OUT*/

  const constock = (
    <div className="PG-C-B3B2B2B3B1" onClick={() => VerificationOfSize()}>
      {abrir4 ? (
        <AddToCartAnimation />
      ) : (
        <p className="PG-txt-7">AGREGAR AL CARRITO • {precioOnCurrency}</p>
      )}
    </div>
  );

  const sinstock = (
    <div className="PG-C-B3B2B2B3B1-v2">
      <p className="PG-txt-7-v2">SIN STOCK • {precioOnCurrency}</p>
    </div>
  );

  const constock2 = (
    <div className="PG-C-B3B2B2B4B1" onClick={() => VerificationOfSize2()}>
      <p className="PG-txt-8">COMPRAR AHORA</p>
    </div>
  );

  const PGdbName1 = <p className="PG-txt-1">{data.nombre}</p>;

  const PGdbNameLoader1 = <div className="PGdbNameLoader1-background"></div>;

  const PGdbName2 = <p className="PG-txt-2">{data.nombre}</p>;

  const PGdbNameLoader2 = <div className="PGdbNameLoader2-background"></div>;

  const PGdbCategoria = <p className="PG-txt-3">{data.categoria}</p>;

  const PGdbCategoriaLoader = (
    <div className="PGdbCategoriaLoader-background"></div>
  );

  const PGdbPrecio = <p className="PG-txt-4">{precioOnCurrency}</p>;

  const PGdbPrecioLoader = <div className="PGdbPrecioLoader-background"></div>;

  return (
    <section className="PG-background">
      {abrir3 && <AddToCartNotification />}
      {abrir5 && <SizeGuide />}
      <div className="PG-content">
        <div className="PG-C-B1"></div>
        <div className="PG-C-B2">
          <div className="PG-C-B2B1">
            <Link to={"/"} className="PG-C-B2B1B1">
              <p className="PG-txt-1-v2">HOME</p>
            </Link>
            <div className="PG-C-B2B1B2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="PG-svg-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
            <div className="PG-C-B2B1B3">
              {data.nombre ? PGdbName1 : PGdbNameLoader1}
            </div>
          </div>
        </div>
        <div className="PG-C-B3">
          <div className="PG-C-B3B1">
            <SwiperJsSlider />
          </div>

          <div className="PG-C-B3B2">
            <div className="PG-C-B3B2B1">
              <div className="PG-C-B3B2B1B1">
                <div className="PG-C-B3B2B1B1B1">
                  {data.nombre ? PGdbName2 : PGdbNameLoader2}
                </div>
                <div className="PG-C-B3B2B1B1B2">
                  {data.nombre ? PGdbCategoria : PGdbCategoriaLoader}
                </div>
                <div className="PG-C-B3B2B1B1B3">
                  {data.nombre ? PGdbPrecio : PGdbPrecioLoader}
                </div>
              </div>

              <div className="PG-C-B3B2B1B2">
                <div className="PG-C-B3B2B1B2B1">
                  <div className="PG-C-B3B2B1B2B1B1">
                    <p className="PG-txt-5">TALLE</p>
                  </div>

                  <div className="PG-C-B3B2B1B2B1B2">
                    <select
                      className="PG-select"
                      value={selected}
                      onChange={(e) => setSelected(e.target.value)}
                    >
                      <option className="PG-txt-6">SELECCIONA UN TALLE</option>
                      <option className="PG-txt-6">{ActulizarStockS}</option>
                      <option className="PG-txt-6">{ActulizarStockM}</option>
                      <option className="PG-txt-6">{ActulizarStockL}</option>
                      <option className="PG-txt-6">{ActulizarStockXL}</option>
                      <option className="PG-txt-6">{ActulizarStockXXL}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="PG-C-B3B2B2">
              <div className="PG-C-B3B2B2B1">
                {sizeError && RenderOfSizeError}
              </div>
              <div className="PG-C-B3B2B2B2">
                <div
                  className="PG-C-B3B2B2B2B1"
                  onClick={() => setAbrir5(true)}
                >
                  <div className="PG-C-B3B2B2B2B1B1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="PG-svg-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </div>
                  <div className="PG-C-B3B2B2B2B1B2">
                    <p className="PG-txt-10">Guía de talles</p>
                  </div>
                </div>
              </div>
              <div className="PG-C-B3B2B2B3">
                {SinStock ? sinstock : constock}
              </div>
              <div className="PG-C-B3B2B2B4">{SinStock ? null : constock2}</div>
            </div>

            <div className="PG-C-B3B2B3">
              <div className="PG-C-B3B2B3B1">
                <div
                  className="PG-C-B3B2B3B1B1"
                  onClick={() => setOpen4((prev) => !prev)}
                >
                  <div className="PG-C-B3B2B3B1B1B1">
                    <p className="PG-txt-9">DESCRIPCION</p>
                  </div>
                  <div className="PG-C-B3B2B3B1B1B2">
                    <svg
                      className={open4 ? "PG-svg-2-open" : "PG-svg-2-closed"}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                </div>
                {open4 && <DescriptionOfProduct />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
