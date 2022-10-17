import "./MercadoPago.css";
import { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { AppContext } from "../../../../Context/Appcontext";

const MercadoPago = () => {
  const { orderId, CleanLocalStorage } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const [EstadoDePago, setEstadoDePago] = useState();
  const [PaymentId, setPaymentId] = useState();
  const [PendingOrder, setPendingOrder] = useState(false);
  const [ApprovedOrder, setApprovedOrder] = useState(false);
  const [CancelledOrder, setCancelledOrder] = useState(false);
  const [data, setData] = useState({});
  const [data2, setData2] = useState([]);

  useEffect(() => {
    setEstadoDePago(searchParams.get("status"));
    setPaymentId(searchParams.get("payment_id"));
  }, [searchParams, setPaymentId]);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Orders", orderId);
    getDoc(dbcollection).then((res) => setData(res.get("Estado")));
  }, [orderId]);

  const DbPaymentStatus = data.Estado_De_Pago;

  const Db_Mercado_Pago_PaymentId = data.Payment_Id;

  useEffect(() => {
    if (DbPaymentStatus === null) {
      const EstadoObject = {
        Estado: {
          Estado_De_Pago: EstadoDePago,
          Payment_Id: PaymentId,
        },
      };
      const db = getFirestore();
      const dbobject = doc(db, "Orders", orderId);
      updateDoc(dbobject, EstadoObject);
      setTimeout(() => {
        window.location.reload(false);
      }, 2000);
    }
  }, [orderId, PaymentId, searchParams, EstadoDePago, DbPaymentStatus]);

  useEffect(() => {
    if (DbPaymentStatus !== null) {
      if (DbPaymentStatus === "approved") {
        setApprovedOrder(true);
        const RoadMapObject = {
          RoadMap: {
            Step1: true,
            Step2: true,
            Step3: false,
            Step4: false,
          },
        };
        const db = getFirestore();
        const dbobject = doc(db, "Orders", orderId);
        updateDoc(dbobject, RoadMapObject);
      } else if (DbPaymentStatus === "failure") {
        setCancelledOrder(true);
      } else if (DbPaymentStatus === "pending") {
        setPendingOrder(true);
      }
    }
  }, [DbPaymentStatus, orderId]);

  useEffect(() => {
    if (orderId) {
      const db = getFirestore();
      const dbcollection = doc(db, "Orders", orderId);
      getDoc(dbcollection).then((res) => setData2(res.get("Productos")));
    }
  }, [orderId]);

  const RenderOfProductsOrdered = data2.map((product, index) => (
    <Link
      to={`/producto/${product.Id}`}
      target={"_blank"}
      className="ROPO-background"
      key={index}
    >
      <div className="ROPO-B1">
        <img className="ROPO-img" src={product.Imagen_de_producto} alt="" />
      </div>
      <div className="ROPO-B2">
        <p className="ROPO-txt-1">{product.Producto}</p>
        <p className="ROPO-txt-2">{product.Categoria}</p>
        <p className="ROPO-txt-2">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(product.Precio)}{" "}
          x {product.Cantidad} Unidad/es
        </p>
      </div>
    </Link>
  ));

  const RenderOfPendingOrder = (
    <div className="ROFO-background">
      <div className="ROFO-content">
        <div className="ROFO-C-B1">
          <div className="ROFO-C-B1B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ROFO-svg"
              viewBox="0 0 16 16"
            >
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          </div>
          <div className="ROFO-C-B1B2">
            <p className="ROFO-txt-1">
              ¡Gracias! Tu orden: <b className="ROFO-txt-2">{orderId}</b> está
              siendo procesada.
            </p>
          </div>
          <div className="ROFO-C-B1B3">
            <p className="ROFO-txt-1">
              Tu número de referencia de pago de Mercado Pago:{" "}
              <b className="ROFO-txt-2">{Db_Mercado_Pago_PaymentId}</b>
            </p>
          </div>
        </div>
        <div className="ROFO-C-B3">
          <div className="ROFO-C-B3B1">
            <p className="ROFO-txt-3">
              Detalles de tu compra <b className="ROFO-txt-2">{orderId}</b>
            </p>
          </div>
          <div className="ROFO-C-B3B2">{RenderOfProductsOrdered}</div>
        </div>
        <div className="ROFO-C-B4">
          <p className="ROFO-txt-4">
            Tu pago realizado por Mercado Pago está siendo procesado. El tiempo
            que puede tardar en que veas tu orden como "Aprobada" o "Cancelada"
            dependerá del mediador de pago ( Pago fácil o Rapipago )
            <br />
            Podrás hacer el seguimiento de tu compra, ingresando el número de
            orden asignado previamente, en la sección <b>EXPLORAR</b> y luego{" "}
            <b>SEGUÍ TU ORDEN</b>.
          </p>
        </div>
        <div className="ROFO-C-B5">
          <Link
            to={"/seguimiento"}
            className="ROFO-btn"
            onClick={() => CleanLocalStorage()}
          >
            SEGUÍ TU ORDEN
          </Link>
        </div>
      </div>
    </div>
  );

  const RenderOfApprovedOrder = (
    <div className="ROFO-background">
      <div className="ROFO-content">
        <div className="ROFO-C-B1">
          <div className="ROFO-C-B1B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ROFO-svg"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <div className="ROFO-C-B1B2">
            <p className="ROFO-txt-1">
              ¡Gracias! Tu orden: <b className="ROFO-txt-2">{orderId}</b> ha
              sido aprobada.
            </p>
          </div>
          <div className="ROFO-C-B1B3">
            <p className="ROFO-txt-1">
              Tu número de referencia de pago de Mercado Pago:{" "}
              <b className="ROFO-txt-2">{Db_Mercado_Pago_PaymentId}</b>
            </p>
          </div>
        </div>
        <div className="ROFO-C-B3">
          <div className="ROFO-C-B3B1">
            <p className="ROFO-txt-3">
              Detalles de tu compra <b className="ROFO-txt-2">{orderId}</b>
            </p>
          </div>
          <div className="ROFO-C-B3B2">{RenderOfProductsOrdered}</div>
        </div>
        <div className="ROFO-C-B4">
          <p className="ROFO-txt-4">
            Tu pago realizado por Mercado Pago ha sido aprobado.
            <br />
            Podrás hacer el seguimiento de tu compra, ingresando el número de
            orden asignado previamente, en la sección <b>EXPLORAR</b> y luego{" "}
            <b>SEGUÍ TU ORDEN</b>.
          </p>
        </div>
        <div className="ROFO-C-B5">
          <Link
            to={"/seguimiento"}
            className="ROFO-btn"
            onClick={() => CleanLocalStorage()}
          >
            SEGUÍ TU ORDEN
          </Link>
        </div>
      </div>
    </div>
  );

  const RenderOfCancelledOrder = (
    <div className="ROFO-background">
      <div className="ROFO-content">
        <div className="ROFO-C-B1">
          <div className="ROFO-C-B1B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ROFO-svg"
              viewBox="0 0 16 16"
            >
              <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z" />
            </svg>
          </div>
          <div className="ROFO-C-B1B2">
            <p className="ROFO-txt-1">
              Tu orden: <b className="ROFO-txt-2">{orderId}</b> ha sido
              cancelada.
            </p>
          </div>
          <div className="ROFO-C-B1B3">
            <p className="ROFO-txt-1">
              Tu número de referencia de pago de Mercado Pago:{" "}
              <b className="ROFO-txt-2">{Db_Mercado_Pago_PaymentId}</b>
            </p>
          </div>
        </div>
        <div className="ROFO-C-B3">
          <div className="ROFO-C-B3B1">
            <p className="ROFO-txt-3">
              Detalles de tu compra <b className="ROFO-txt-2">{orderId}</b>
            </p>
          </div>
          <div className="ROFO-C-B3B2">{RenderOfProductsOrdered}</div>
        </div>
        <div className="ROFO-C-B4">
          <p className="ROFO-txt-4">
            Tu pago realizado por Mercado Pago ha sido rechazado.
            <br />
            Tu orden ha sido cancelada por Mercado Pago, ya sea que no dispones
            de fondo o por motivos de seguridad
          </p>
        </div>
        <div className="ROFO-C-B5">
          <Link
            to={"/"}
            className="ROFO-btn"
            onClick={() => CleanLocalStorage()}
          >
            VOLVER A LA TIENDA
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="MP-background">
      {PendingOrder && RenderOfPendingOrder}
      {ApprovedOrder && RenderOfApprovedOrder}
      {CancelledOrder && RenderOfCancelledOrder}
    </div>
  );
};

export default MercadoPago;
