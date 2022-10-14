import "./MobilePayment.css";
import { AppContext } from "../../../../Context/Appcontext";
import { useContext, useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import image1 from "../../../../Images/imagesPaymentMethods/image1.png";
import image2 from "../../../../Images/imagesPaymentMethods/image2.png";
import image3 from "../../../../Images/imagesPaymentMethods/image3.png";
import image4 from "../../../../Images/imagesPaymentMethods/image4.png";
import image5 from "../../../../Images/imagesPaymentMethods/image5.png";
import image7 from "../../../../Images/imagesPaymentMethods/image7.png";

const MobilePayment = () => {
  window.scrollTo(0, 0);
  const {
    setAbrir6,
    setAbrir7,
    EmailInput,
    AdressInput,
    Adress2Input,
    CompanyInput,
    SubTotalPriceConstFormat,
    ShippingMinimum,
    ShippingPriceOnCurrencyFormat,
    Payment1,
    setPayment1,
    Payment2,
    setPayment2,
    GenerarOrdenTransferencia,
    OrderPriceAfterShippingCalculationOnNumberFormat,
    setPaymentMethod,
    setMpOrderGenerated,
  } = useContext(AppContext);

  const [backendData, setbackendData] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const montoo = OrderPriceAfterShippingCalculationOnNumberFormat;
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ montoo }),
    })
      .then((response) => response.json())
      .then((data) => {
        setbackendData(data.preference_id);
      });
  }, [OrderPriceAfterShippingCalculationOnNumberFormat]);

  useEffect(() => {
    if (Payment1) {
      const form = document.getElementById("MOBILE_FORM_ID");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", backendData);
      if (backendData) {
        form.appendChild(script);
      }
    }
  }, [Payment1, backendData]);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "PaymentData", "Transferencia bancaria");
    getDoc(dbcollection).then((res) => setData({ id: res.id, ...res.data() }));
  }, []);

  useEffect(() => {
    if ((Payment1 === true) & (Payment2 === false)) {
      setPaymentMethod("Mercado Pago");
    } else {
      setPaymentMethod("Transferencia bancaria");
    }
  }, [Payment1, Payment2, setPaymentMethod]);

  const RenderOfMobileCoveredMethod = (
    <div className="RenderOfMobileCoveredMethod-background">
      <p className="RenderOfMobileCoveredMethod-txt-1">ENVIO A DOMICILIO</p>
      <p className="RenderOfMobileCoveredMethod-txt-2">
        {ShippingPriceOnCurrencyFormat}
      </p>
      <p className="RenderOfMobileCoveredMethod-txt-3">Gratis</p>
    </div>
  );

  const RenderOfMobileNotCoveredMethod = (
    <div className="RenderOfMobileNotCoveredMethod-background">
      <p className="RenderOfMobileNotCoveredMethod-txt-1">ENVIO A DOMICILIO</p>
      <p className="RenderOfMobileNotCoveredMethod-txt-2">
        {ShippingPriceOnCurrencyFormat}
      </p>
    </div>
  );

  return (
    <div className="MobilePayment-background">
      <div className="MobilePayment-content">
        <div className="MobilePayment-C-B1">
          <div className="MobilePayment-C-B1B1">
            <div className="MobilePayment-C-B1B1B1">
              <p className="MobilePayment-txt-1">Contacto</p>
              <p className="MobilePayment-txt-2">{EmailInput}</p>
            </div>
            <p
              className="MobilePayment-txt-3"
              onClick={() => setAbrir6(true) & setAbrir7(false)}
            >
              Cambiar
            </p>
          </div>
          <div className="MobilePayment-C-B1B2">
            <div className="MobilePayment-C-B1B1B1">
              <p className="MobilePayment-txt-1">Enviar a</p>
              <p className="MobilePayment-txt-2">
                {AdressInput} {Adress2Input} {CompanyInput}
              </p>
            </div>
            <p
              className="MobilePayment-txt-3"
              onClick={() => setAbrir6(true) & setAbrir7(false)}
            >
              Cambiar
            </p>
          </div>
          <div className="MobilePayment-C-B1B3">
            <p className="MobilePayment-txt-1">Método</p>
            {SubTotalPriceConstFormat >= ShippingMinimum
              ? RenderOfMobileCoveredMethod
              : RenderOfMobileNotCoveredMethod}
          </div>
        </div>
        <a
          href="/preguntas_frecuentes/pagos"
          target={"_blank"}
          className="MobilePayment-C-B2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="MobilePayment-svg-1"
            viewBox="0 0 16 16"
          >
            <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
          </svg>
          <p className="MobilePayment-txt-4">
            ¿Como procesamos los pagos en nuestra tienda?
          </p>
        </a>
        <div className="MobilePayment-C-B3">
          <div
            className="MobilePayment-C-B3B1"
            onClick={() => setPayment1(true) & setPayment2(false)}
          >
            <div className="MobilePayment-C-B3B1B1">
              <div
                className={
                  Payment1
                    ? "MobilePayment-check MobilePayment-check-checked"
                    : "MobilePayment-check"
                }
              ></div>
              <p className="MobilePayment-txt-5">Mercado Pago</p>
            </div>
            <div className="MobilePayment-C-B3B1B2">
              <img src={image1} className="MobilePayment-img" alt="" />
              <img src={image2} className="MobilePayment-img" alt="" />
              <img src={image3} className="MobilePayment-img" alt="" />
              <img src={image4} className="MobilePayment-img" alt="" />
              <p className="MobilePayment-txt-6">y más...</p>
            </div>
          </div>
          <div
            className={
              Payment1
                ? "MobilePayment-C-B3B2"
                : "MobilePayment-C-B3B2-notdisplayed"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="MobilePayment-svg-2"
              viewBox="0 0 16 16"
            >
              <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
              <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
            <p className="MobilePayment-txt-7">
              Despues de clickear "Pagar", una ventana de Mercado Pago se abrirá
              para que puedas procesar tu pago.
            </p>
            {Payment1 && (
              <form
                id="MOBILE_FORM_ID"
                onClick={() => setMpOrderGenerated(true)}
              />
            )}
          </div>
          <div
            className={
              Payment1
                ? "MobilePayment-C-B3B3 MobilePayment-C-B3B3-NoBorder"
                : "MobilePayment-C-B3B3"
            }
            onClick={() => setPayment1(false) & setPayment2(true)}
          >
            <div className="MobilePayment-C-B3B3B1">
              <div
                className={
                  Payment2
                    ? "MobilePayment-check MobilePayment-check-checked"
                    : "MobilePayment-check"
                }
              ></div>
              <p className="MobilePayment-txt-5">Transferencia bancaria</p>
            </div>
            <div className="MobilePayment-C-B3B3B2">
              <img src={image7} className="MobilePayment-img" alt="" />
              <img src={image5} className="MobilePayment-img" alt="" />
            </div>
          </div>
          <div
            className={
              Payment2
                ? "MobilePayment-C-B3B4"
                : "MobilePayment-C-B3B4-notdisplayed"
            }
          >
            <div className="MobilePayment-C-B3B4B1">
              <img src={data.imagen1} className="MobilePayment-img-2" alt="" />
            </div>
            <div className="MobilePayment-C-B3B4B2">
              <p className="MobilePayment-txt-8">
                Propietario: <strong>{data.destinatario}</strong>
              </p>
              <p className="MobilePayment-txt-8">
                Banco: <strong>{data.banco}</strong>
              </p>
              <p className="MobilePayment-txt-8">
                CBU/CVU: <strong>{data.cbu}</strong>
              </p>
              <p className="MobilePayment-txt-8">
                Alias: <strong>{data.alias}</strong>
              </p>
            </div>
            <Link
              className="MobilePayment-btn-1"
              to={"/postpayment"}
              onClick={() => GenerarOrdenTransferencia()}
            >
              Ya pagué
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePayment;
