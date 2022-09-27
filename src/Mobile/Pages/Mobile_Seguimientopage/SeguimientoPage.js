import "./SeguimientoPage.css";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const SeguimientoPage = () => {
  window.scrollTo(0, 0);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState({});
  const [Searcher, setSearcher] = useState(true);
  const [FoundOrder, setFoundOrder] = useState(false);
  const [NotFoundOrder, setNotFoundOrder] = useState(false);
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
      }
    }, 1000);
  };

  const RenderOfSearcher = (
    <div className="SP-C-B2B1B1">
      <div className="SP-C-B2B1B1B1">
        <div className="SP-INPUT-B1">
          <input
            className="SP-INPUT-inp"
            maxLength="70"
            placeholder=" "
            onChange={EmailInputFunction}
          />
          <label className="SP-INPUT-label">Email</label>
        </div>
      </div>
      <div className="SP-C-B2B1B1B2">
        <div className="SP-INPUT-B1">
          <input
            className="SP-INPUT-inp"
            maxLength="70"
            placeholder=" "
            onChange={OrderIdInputFunction}
          />
          <label className="SP-INPUT-label">Número de orden</label>
        </div>
      </div>
      <div className="SP-C-B2B1B1B3">
        <button className="SP-btn" onClick={() => SearchOrder()}>
          Seguir orden
        </button>
      </div>
    </div>
  );

  const RenderOfLoader = <div className="SP-Loader"></div>;

  const RenderOfProductsOrdered = data5.map((product, index) => (
    <div key={index} className="SP-RenderOfProductsOrdered-background">
      <Link
        to={`/producto/${product.Id}`}
        className="SP-RenderOfProductsOrdered-B1"
        target="_blank"
      >
        <p className="SP-RenderOfProductsOrdered-txt-1">{product.Producto}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="SP-RenderOfProductsOrdered-svg"
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
      </Link>
      <div className="SP-RenderOfProductsOrdered-B2">
        <p className="SP-RenderOfProductsOrdered-txt-2">
          Precio:{" "}
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(product.Precio)}
        </p>
      </div>
      <div className="SP-RenderOfProductsOrdered-B3">
        <p className="SP-RenderOfProductsOrdered-txt-2">
          Cantidad: {product.Cantidad}
        </p>
      </div>
    </div>
  ));

  const RenderOfRoadMap = (
    <div className="RenderOfRoadMap-background">
      <div className="RenderOfRoadMap-B1">
        <div className="RenderOfRoadMap-B1B1">
          <p
            className={
              data6.Step1
                ? "RenderOfRoadMap-txt-1-black"
                : "RenderOfRoadMap-txt-1"
            }
          >
            Esperando el pago
          </p>
        </div>
        <div className="RenderOfRoadMap-B1B2"></div>
        <div className="RenderOfRoadMap-B1B3">
          <p
            className={
              data6.Step3
                ? "RenderOfRoadMap-txt-1-black"
                : "RenderOfRoadMap-txt-1"
            }
          >
            Productos en camino
          </p>
        </div>
        <div className="RenderOfRoadMap-B1B4"></div>
      </div>
      <div className="RenderOfRoadMap-B2">
        <div className="RenderOfRoadMap-B2B1">
          <div
            className={
              data6.Step1
                ? "RenderOfRoadMap-Line-1-black"
                : "RenderOfRoadMap-Line-1"
            }
          ></div>
          <div
            className={
              data6.Step1
                ? "RenderOfRoadMap-Circle-1-black"
                : "RenderOfRoadMap-Circle-1"
            }
          ></div>
        </div>
        <div className="RenderOfRoadMap-B2B2">
          <div
            className={
              data6.Step2
                ? "RenderOfRoadMap-Line-2-black"
                : "RenderOfRoadMap-Line-2"
            }
          ></div>
          <div
            className={
              data6.Step2
                ? "RenderOfRoadMap-Line-3-black"
                : "RenderOfRoadMap-Line-3"
            }
          ></div>
          <div
            className={
              data6.Step2
                ? "RenderOfRoadMap-Circle-2-black"
                : "RenderOfRoadMap-Circle-2"
            }
          ></div>
        </div>
        <div className="RenderOfRoadMap-B2B3">
          <div
            className={
              data6.Step3
                ? "RenderOfRoadMap-Line-4-black"
                : "RenderOfRoadMap-Line-4"
            }
          ></div>
          <div
            className={
              data6.Step3
                ? "RenderOfRoadMap-Line-5-black"
                : "RenderOfRoadMap-Line-5"
            }
          ></div>
          <div
            className={
              data6.Step3
                ? "RenderOfRoadMap-Circle-3-black"
                : "RenderOfRoadMap-Circle-3"
            }
          ></div>
        </div>
        <div className="RenderOfRoadMap-B2B4">
          <div
            className={
              data6.Step4
                ? "RenderOfRoadMap-Line-6-black"
                : "RenderOfRoadMap-Line-6"
            }
          ></div>
          <div
            className={
              data6.Step4
                ? "RenderOfRoadMap-Circle-4-black"
                : "RenderOfRoadMap-Circle-4"
            }
          ></div>
        </div>
      </div>
      <div className="RenderOfRoadMap-B3">
        <div className="RenderOfRoadMap-B3B1"></div>
        <div className="RenderOfRoadMap-B3B2">
          <p
            className={
              data6.Step2
                ? "RenderOfRoadMap-txt-1-black"
                : "RenderOfRoadMap-txt-1"
            }
          >
            Pago acreditado
          </p>
        </div>
        <div className="RenderOfRoadMap-B3B3"></div>
        <div className="RenderOfRoadMap-B3B4">
          <p
            className={
              data6.Step4
                ? "RenderOfRoadMap-txt-1-black"
                : "RenderOfRoadMap-txt-1"
            }
          >
            Productos recibidos
          </p>
        </div>
      </div>
    </div>
  );

  const RenderOfPendigOrApprovedOrder = (
    <div className="RenderOfPendigOrApprovedOrder-background">
      <div className="RenderOfPendigOrApprovedOrder-content">
        <div className="RenderOfPendigOrApprovedOrder-C-B1">
          <p className="RenderOfPendigOrApprovedOrder-txt-1">
            Encontramos tu orden <b>{data4.id}</b>
          </p>
        </div>
        <div className="RenderOfPendigOrApprovedOrder-C-B2">
          <p className="RenderOfPendigOrApprovedOrder-txt-2">
            • Nombre y apellido: {data3.Nombre} {data3.Apellido}
          </p>
          <p className="RenderOfPendigOrApprovedOrder-txt-2">
            • Contacto: {data3.Email}
          </p>
          <p className="RenderOfPendigOrApprovedOrder-txt-2">
            • Direccion de entrega: {data3.Direccion} {data3.Direccion2}{" "}
            {data3.Compañia}
          </p>
        </div>
        <div className="RenderOfPendigOrApprovedOrder-C-B3">
          {RenderOfProductsOrdered}
        </div>
        <div className="RenderOfPendigOrApprovedOrder-C-B4">
          {RenderOfRoadMap}
        </div>
        <div className="RenderOfPendigOrApprovedOrder-C-B5">
          <button
            className="RenderOfNotFoundOrder-btn"
            onClick={() => setFoundOrder(false) & setSearcher(true)}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );

  const RenderOfNotFoundOrder = (
    <div className="RenderOfNotFoundOrder-background">
      <div className="RenderOfNotFoundOrder-content">
        <div className="RenderOfNotFoundOrder-C-B1">
          <div className="RenderOfNotFoundOrder-C-B1B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="RenderOfNotFoundOrder-svg"
              viewBox="0 0 16 16"
            >
              <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z" />
            </svg>
          </div>
          <div className="RenderOfNotFoundOrder-C-B1B2">
            <p className="RenderOfNotFoundOrder-txt-1">
              <b>Oops...</b> Parece que no pudimos encontrar tu orden
            </p>
          </div>
        </div>
        <div className="RenderOfNotFoundOrder-C-B2">
          <div className="RenderOfNotFoundOrder-C-B2B1">
            <p className="RenderOfNotFoundOrder-txt-2">
              • Recuerda que debes hacer una compra previamente para poder
              acceder al seguimiento de la misma.
            </p>
            <p className="RenderOfNotFoundOrder-txt-2">
              • El Email ingresado debe coincidir con el que se realizó la
              compra.
            </p>
          </div>
        </div>
        <div className="RenderOfNotFoundOrder-C-B3">
          <button
            className="RenderOfNotFoundOrder-btn"
            onClick={() => setNotFoundOrder(false) & setSearcher(true)}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="SP-background">
      <div className="SP-content">
        <div className="SP-C-B1"></div>
        <div className="SP-C-B2">
          <div className="SP-C-B2B1">
            {Searcher && RenderOfSearcher}
            {loading && RenderOfLoader}
            {FoundOrder && RenderOfPendigOrApprovedOrder}
            {NotFoundOrder && RenderOfNotFoundOrder}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeguimientoPage;
