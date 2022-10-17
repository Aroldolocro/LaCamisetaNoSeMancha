import "./TransferenciaBancaria.css";
import { AppContext } from "../../../../Context/Appcontext";
import { useContext, useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const TransferenciaBancaria = () => {
  const { orderId, CleanLocalStorage, setProductlist } = useContext(AppContext);
  const [PendingOrder, setPendingOrder] = useState(false);
  const [ApprovedOrder, setApprovedOrder] = useState(false);
  const [CancelledOrder, setCancelledOrder] = useState(false);
  const [data, setData] = useState({});
  const [data2, setData2] = useState([]);
  const [ComprobanteState, setComprobanteState] = useState(true);

  const SendEmail = () =>
    (window.location = "mailto:soporte@lacamisetanosemancha.com");

  useEffect(() => {
    setProductlist([]);
  }, [setProductlist]);

  useEffect(() => {
    if (orderId) {
      const db = getFirestore();
      const dbcollection = doc(db, "Orders", orderId);
      getDoc(dbcollection).then((res) => setData(res.get("Orden")));
      getDoc(dbcollection).then((res) => setData2(res.get("Productos")));
    }
  }, [orderId]);

  useEffect(() => {
    if (data.Estado === "pendiente") {
      setPendingOrder(true);
    } else if (data.Estado === "aprobada") {
      setApprovedOrder(true);
    } else if (data.Estado === "cancelada") {
      setCancelledOrder(true);
    }
  }, [data.Estado]);

  const RenderOfComprobanteSender = (
    <div className="RenderOfComprobanteSender-background">
      <div className="RenderOfComprobanteSender-content">
        <div className="RenderOfComprobanteSender-C-B1">
          <p className="RenderOfComprobanteSender-txt-1">
            Envíanos tu comprobante de pago
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="RenderOfComprobanteSender-svg-1"
            viewBox="0 0 16 16"
            onClick={() => setComprobanteState(false)}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="RenderOfComprobanteSender-C-B2">
          <p className="RenderOfComprobanteSender-txt-2">
            Deberás enviarnos el comprobante de pago junto al ID de tu orden
            por:
          </p>
          <div className="RenderOfComprobanteSender-C-B2B1">
            <div
              className="RenderOfComprobanteSender-C-B2B1B1"
              onClick={() => SendEmail()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="RenderOfComprobanteSender-svg-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <p className="RenderOfComprobanteSender-txt-3">
                soporte@lacamisetanosemancha.com
              </p>
            </div>
            <a
              className="RenderOfComprobanteSender-C-B2B1B1"
              href={"https://wa.me/5493874064060"}
              target={"_blank"}
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="RenderOfComprobanteSender-svg-2"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <p className="RenderOfComprobanteSender-txt-3">
                +54 9-387-4064060
              </p>
            </a>
          </div>
          <p className="RenderOfComprobanteSender-txt-3">
            Si preferís enviarnos el comprobante más tarde podrás enviárnoslo
            yendo a la sección{" "}
            <b className="RenderOfComprobanteSender-txt-4">Contacto</b>.
          </p>
        </div>
      </div>
    </div>
  );

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
    <div className="RenderOfPendingOrder-background">
      {ComprobanteState && RenderOfComprobanteSender}
      <div className="RenderOfPendingOrder-content">
        <div className="RenderOfPendingOrder-C-B1">
          <div className="RenderOfPendingOrder-C-B1B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="RenderOfPendingOrder-svg"
              viewBox="0 0 16 16"
            >
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          </div>
          <div className="RenderOfPendingOrder-C-B1B2">
            <p className="RenderOfPendingOrder-txt-1">
              ¡Gracias! Tu orden:{" "}
              <b className="RenderOfPendingOrder-txt-2">{orderId}</b> está
              siendo procesada.
            </p>
          </div>
        </div>
        <div className="RenderOfPendingOrder-C-B3">
          <div className="RenderOfPendingOrder-C-B3B1">
            <p className="RenderOfPendingOrder-txt-3">
              Detalles de tu compra{" "}
              <b className="RenderOfPendingOrder-txt-2">{orderId}</b>
            </p>
          </div>
          <div className="RenderOfPendingOrder-C-B3B2">
            {RenderOfProductsOrdered}
          </div>
        </div>
        <div className="RenderOfPendingOrder-C-B4">
          <p className="RenderOfPendingOrder-txt-4">
            Tu pago realizado por transferencia bancaría está siendo procesado.
            Puede tardar entre 5 a 15 minutos en ver el estado de tu compra como
            "Aprobada".
            <br />
            Podrás hacer el seguimiento de tu compra, ingresando el número de
            orden asignado previamente, en la sección <b>EXPLORAR</b> y luego{" "}
            <b>SEGUÍ TU ORDEN</b>.
          </p>
        </div>
        <div className="RenderOfPendingOrder-C-B5">
          <Link
            className="RenderOfPendingOrder-btn-1"
            onClick={() => setComprobanteState(true)}
          >
            ENVÍA EL COMPROBANTE
          </Link>
          <Link
            to={"/seguimiento"}
            className="RenderOfPendingOrder-btn-2"
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
            Tu pago realizado por transferencia bancaría ha sido aprobado.
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
            Tu pago realizado por transferencia bancaría ha sido rechazado.
            <br />
            Tu orden ha sido cancelada debido a que no recibimos tu
            transferencia bancaria. Recuerda que dispones de 48 horas para hacer
            el pago una vez emitida la orden de compra. Si no tu orden será
            cancelada y deberás hacer una nueva.
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
    <div className="TB-background">
      {PendingOrder && RenderOfPendingOrder}
      {ApprovedOrder && RenderOfApprovedOrder}
      {CancelledOrder && RenderOfCancelledOrder}
    </div>
  );
};

export default TransferenciaBancaria;
