import "./MobileSeguimientoPage.css";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { analytics } from "../../../Firebase/firebase";
import { logEvent } from "firebase/analytics";

const MobileSeguimientoPage = () => {
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState({});
  const [FoundOrder, setFoundOrder] = useState(false);
  const [NotFoundOrder, setNotFoundOrder] = useState(false);
  const [Searcher, setSearcher] = useState(true);
  const [loading, setLoading] = useState(false);
  const [EmailInput, setEmailInput] = useState("");
  const [OrderId, setOrderId] = useState();

  const EmailInputFunction = (event) => {
    const word = event.target.value;
    setEmailInput(word.toLowerCase());
  };

  const OrderIdInputFunction = (event) => {
    const word = event.target.value;
    setOrderId(word);
  };

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "Orders");
    getDocs(dbcollection).then((res) =>
      setData2(res.docs.map((order) => order.id))
    );
  }, []);

  const DBordersId = data2;

  useEffect(() => {
    if (DBordersId.includes(OrderId)) {
      const db = getFirestore();
      const dbobject = doc(db, "Orders", OrderId);
      getDoc(dbobject).then((res) => setData3(res.get("Comprador")));
      getDoc(dbobject).then((res) => setData4({ id: res.id }));
      getDoc(dbobject).then((res) => setData5(res.get("Productos")));
      getDoc(dbobject).then((res) => setData6(res.get("RoadMap")));
    }
  }, [OrderId, DBordersId]);

  const EmailOrder = data3.Email;

  const SearchOrder = () => {
    setSearcher(false);
    setLoading(true);
    setTimeout(() => {
      if (DBordersId.includes(OrderId) & (EmailInput === EmailOrder)) {
        setLoading(false);
        setSearcher(false);
        setFoundOrder(true);
      } else if (!DBordersId.includes(OrderId) || EmailInput !== EmailOrder) {
        setLoading(false);
        setSearcher(false);
        setNotFoundOrder(true);
        logEvent(analytics, `Error al hacer seguimiento de orden`);
      }
    }, 1000);
  };

  const RenderOfMobileSearcher = (
    <div className="MobileSearcher-background">
      <div className="MobileSearcher-content">
        <div className="MobileSearcher-INP-DIV">
          <input
            className="MobileSearcher-inp"
            placeholder=" "
            type={"text"}
            onChange={EmailInputFunction}
          />
          <label className="MobileSearcher-label">Email</label>
        </div>
        <div className="MobileSearcher-INP-DIV">
          <input
            className="MobileSearcher-inp"
            placeholder=" "
            type={"text"}
            onChange={OrderIdInputFunction}
          />
          <label className="MobileSearcher-label">Número de orden</label>
        </div>
        <button className="MobileSearcher-btn" onClick={() => SearchOrder()}>
          Seguir orden
        </button>
      </div>
    </div>
  );

  const RenderOfMobileLoader = <div className="MobileLoader-Loader"></div>;

  const RenderOfMobileProductsOrdered = data5.map((product, index) => (
    <Link
      to={`/producto/${product.Id}`}
      target="_blank"
      className="RenderOfMobileProductsOrdered-background"
      key={index}
    >
      <div className="RenderOfMobileProductsOrdered-content">
        <div className="RenderOfMobileProductsOrdered-C-B1">
          <p className="RenderOfMobileProductsOrdered-txt-1">
            {product.Producto}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="RenderOfMobileProductsOrdered-svg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            />
          </svg>
        </div>
        <p className="RenderOfMobileProductsOrdered-txt-2">
          {" "}
          Precio:{" "}
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(product.Precio)}
        </p>
        <p className="RenderOfMobileProductsOrdered-txt-2">
          Cantidad: {product.Cantidad}
        </p>
      </div>
    </Link>
  ));

  const RenderOfMobileRoadMap = (
    <div className="RenderOfMobileRoadMap-background">
      <div className="RenderOfMobileRoadMap-B1">
        <div
          className={
            data6.Step1
              ? "RenderOfMobileRoadMap-circle RenderOfMobileRoadMap-circle-black"
              : "RenderOfMobileRoadMap-circle"
          }
        ></div>
        <p
          className={
            data6.Step1
              ? "RenderOfMobileRoadMap-txt-1 RenderOfMobileRoadMap-txt-1-black"
              : "RenderOfMobileRoadMap-txt-1"
          }
        >
          Esperando el pago
        </p>
      </div>
      <div className="RenderOfMobileRoadMap-B1">
        <div
          className={
            data6.Step2
              ? "RenderOfMobileRoadMap-circle RenderOfMobileRoadMap-circle-black"
              : "RenderOfMobileRoadMap-circle"
          }
        ></div>
        <p
          className={
            data6.Step2
              ? "RenderOfMobileRoadMap-txt-1 RenderOfMobileRoadMap-txt-1-black"
              : "RenderOfMobileRoadMap-txt-1"
          }
        >
          Pago acreditado
        </p>
      </div>
      <div className="RenderOfMobileRoadMap-B1">
        <div
          className={
            data6.Step3
              ? "RenderOfMobileRoadMap-circle RenderOfMobileRoadMap-circle-black"
              : "RenderOfMobileRoadMap-circle"
          }
        ></div>
        <p
          className={
            data6.Step3
              ? "RenderOfMobileRoadMap-txt-1 RenderOfMobileRoadMap-txt-1-black"
              : "RenderOfMobileRoadMap-txt-1"
          }
        >
          Productos en camino
        </p>
      </div>
      <div className="RenderOfMobileRoadMap-B1">
        <div
          className={
            data6.Step4
              ? "RenderOfMobileRoadMap-circle RenderOfMobileRoadMap-circle-black"
              : "RenderOfMobileRoadMap-circle"
          }
        ></div>
        <p
          className={
            data6.Step4
              ? "RenderOfMobileRoadMap-txt-1 RenderOfMobileRoadMap-txt-1-black"
              : "RenderOfMobileRoadMap-txt-1"
          }
        >
          Productos entregados
        </p>
      </div>
    </div>
  );

  const RenderOfMobilePendingOrApprovedOrder = (
    <div className="RenderOfMobilePendingOrApprovedOrder-background">
      <div className="RenderOfMobilePendingOrApprovedOrder-content">
        <p className="RenderOfMobilePendingOrApprovedOrder-txt-1">
          Encontramos tu orden <b>{data4.id}</b>
        </p>
        <div className="RenderOfMobilePendingOrApprovedOrder-C-B1">
          <p className="RenderOfMobilePendingOrApprovedOrder-txt-2">
            • Nombre y apellido: {data3.Nombre} {data3.Apellido}
          </p>
          <p className="RenderOfMobilePendingOrApprovedOrder-txt-2">
            • Contacto: {data3.Email}
          </p>
          <p className="RenderOfMobilePendingOrApprovedOrder-txt-2">
            • Dirección de entrega: {data3.Direccion} {data3.Direccion2}{" "}
            {data3.Compañia}
          </p>
        </div>
        <div className="RenderOfMobilePendingOrApprovedOrder-C-B2">
          {RenderOfMobileProductsOrdered}
        </div>
        <div className="RenderOfMobilePendingOrApprovedOrder-C-B3">
          {RenderOfMobileRoadMap}
        </div>
        <button
          className="RenderOfMobilePendingOrApprovedOrder-btn"
          onClick={() => setFoundOrder(false) & setSearcher(true)}
        >
          Volver
        </button>
      </div>
    </div>
  );

  const RenderOfMobileNotFoundOrder = (
    <div className="RenderOfMobileNotFoundOrder-background">
      <div className="RenderOfMobileNotFoundOrder-B1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="RenderOfMobileNotFoundOrder-svg"
          viewBox="0 0 16 16"
        >
          <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z" />
        </svg>
        <p className="RenderOfMobileNotFoundOrder-txt-1">
          <b>Oops...</b> Parece que no pudimos encontrar tu orden
        </p>
      </div>
      <div className="RenderOfMobileNotFoundOrder-B2">
        <p className="RenderOfMobileNotFoundOrder-txt-1">
          • Recuerda que debes hacer una compra previamente para poder acceder
          al seguimiento de la misma.
        </p>
        <p className="RenderOfMobileNotFoundOrder-txt-1">
          • El Email ingresado debe coincidir con el que se realizó la compra.
        </p>
      </div>
      <button
        className="RenderOfMobileNotFoundOrder-btn"
        onClick={() => setNotFoundOrder(false) & setSearcher(true)}
      >
        Volver
      </button>
    </div>
  );

  return (
    <div className="MobileSeguimientoPage-background">
      <div className="MobileSeguimientoPage-content">
        <div className="MobileSeguimientoPage-C-B1"></div>
        <div className="MobileSeguimientoPage-C-B2">
          <div className="MobileSeguimientoPage-C-B2B1">
            {Searcher && RenderOfMobileSearcher}
            {loading && RenderOfMobileLoader}
            {FoundOrder && RenderOfMobilePendingOrApprovedOrder}
            {NotFoundOrder && RenderOfMobileNotFoundOrder}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSeguimientoPage;
