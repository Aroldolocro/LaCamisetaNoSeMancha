import "./Payment.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../Context/Appcontext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import image1 from "../../../../Images/imagesPaymentMethods/image1.png";
import image2 from "../../../../Images/imagesPaymentMethods/image2.png";
import image3 from "../../../../Images/imagesPaymentMethods/image3.png";
import image4 from "../../../../Images/imagesPaymentMethods/image4.png";
import image5 from "../../../../Images/imagesPaymentMethods/image5.png";
import image7 from "../../../../Images/imagesPaymentMethods/image7.png";

const Payment = () => {
  const {
    setAbrir6,
    setAbrir7,
    Payment1,
    setPayment1,
    Payment2,
    setPayment2,
    EmailInput,
    AdressInput,
    Adress2Input,
    SubTotalPriceConstFormat,
    ShippingMinimum,
    ShippingPriceOnCurrencyFormat,
    OrderPriceAfterShippingCalculationOnNumberFormat,
    GenerarOrdenTransferencia,
    setPaymentMethod,
    setMpOrderGenerated,
  } = useContext(AppContext);
  const [backendData, setbackendData] = useState(null);

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
      const form = document.getElementById("FORM_ID");
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

  const [data, setData] = useState([]);

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

  const RenderOfPayment1 = (
    <div className="ROP1-background">
      <div className="ROP1-content">
        <div className="ROP1-C-B1">
          <div className="ROP1-C-B1B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ROP1-svg"
              viewBox="0 0 16 16"
            >
              <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
              <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          <div className="ROP1-C-B1B2">
            Despues de clickear "Pagar", una ventana de Mercado Pago se abrirá
            para que puedas procesar tu pago.
          </div>
        </div>
        <div className="ROP1-C-B2">
          {Payment1 && (
            <form id="FORM_ID" onClick={() => setMpOrderGenerated(true)} />
          )}
        </div>
      </div>
    </div>
  );

  const RenderOfPayment2 = (
    <div className="ROP2-background">
      <div className="ROP2-content">
        <div className="ROP2-C-B1">
          <div className="ROP2-C-B1B1">
            <img src={data.imagen1} className="ROP2-img" alt="" />
          </div>
          <div className="ROP2-C-B1B2">
            <div className="ROP2-C-B1B2B1">
              <p className="ROP2-C-txt-1">
                Propietario: <strong>{data.destinatario}</strong>
              </p>
              <p className="ROP2-C-txt-1">
                Banco: <strong>{data.banco}</strong>
              </p>
              <p className="ROP2-C-txt-1">
                CBU/CVU: <strong>{data.cbu}</strong>
              </p>
              <p className="ROP2-C-txt-1">
                Alias: <strong>{data.alias}</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="ROP2-C-B2">
          <Link
            to={"/postpayment"}
            className="ROP2-button"
            onClick={() => GenerarOrdenTransferencia()}
          >
            Ya pagué
          </Link>
        </div>
      </div>
    </div>
  );

  const RenderOfCoveredMethod = (
    <div className="ROCM-background">
      ENVIO A DOMICILIO&nbsp;&nbsp;-&nbsp;&nbsp;
      <p className="ROCM-txt-1">
        <strong>{ShippingPriceOnCurrencyFormat}</strong>
      </p>
      &nbsp;&nbsp;
      <p className="ROCM-txt-2">Gratis</p>
    </div>
  );

  const RenderOfNotCoveredMethod = (
    <div className="RONCM-background">
      ENVIO A DOMICILIO -&nbsp;<strong>{ShippingPriceOnCurrencyFormat}</strong>
    </div>
  );

  return (
    <div className="CheckoutPayment-background">
      <div className="CheckoutPayment-content">
        <div className="CheckoutPayment-C-B1">
          <div className="CheckoutPayment-C-B1B1">
            <div className="CheckoutPayment-C-B1B1B1">
              <div className="CheckoutPayment-C-B1B1B1B1">
                <div className="CheckoutPayment-C-B1B1B1B1B1">Contacto</div>
                <div className="CheckoutPayment-C-B1B1B1B1B2">{EmailInput}</div>
                <div className="CheckoutPayment-C-B1B1B1B1B3">
                  <p
                    className="CheckoutPayment-txt-1"
                    onClick={() => setAbrir6(true) & setAbrir7(false)}
                  >
                    Cambiar
                  </p>
                </div>
              </div>
            </div>
            <div className="CheckoutPayment-C-B1B1B1">
              <div className="CheckoutPayment-C-B1B1B1B1">
                <div className="CheckoutPayment-C-B1B1B1B1B1">Enviar a</div>
                <div className="CheckoutPayment-C-B1B1B1B1B2">
                  {AdressInput} {Adress2Input}
                </div>
                <div className="CheckoutPayment-C-B1B1B1B1B3">
                  <p
                    className="CheckoutPayment-txt-1"
                    onClick={() => setAbrir6(true) & setAbrir7(false)}
                  >
                    Cambiar
                  </p>
                </div>
              </div>
            </div>
            <div className="CheckoutPayment-C-B1B1B2">
              <div className="CheckoutPayment-C-B1B1B1B1">
                <div className="CheckoutPayment-C-B1B1B1B1B1">Método</div>
                <div className="CheckoutPayment-C-B1B1B1B1B2">
                  {SubTotalPriceConstFormat >= ShippingMinimum
                    ? RenderOfCoveredMethod
                    : RenderOfNotCoveredMethod}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CheckoutPayment-C-B2">
          <div className="CheckoutPayment-C-B2B1">
            <div className="CheckoutPayment-C-B2B1B1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="CheckoutPayment-svg-1"
                viewBox="0 0 16 16"
              >
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
              </svg>
            </div>
            <div className="CheckoutPayment-C-B2B1B2">
              ¿Como procesamos los pagos en nuestra tienda?
            </div>
          </div>
        </div>
        <div className="CheckoutPayment-C-B3">
          <div className="CheckoutPayment-C-B3B1">
            <div className="CheckoutPayment-C-B3B1B1">
              <div className="CheckoutPayment-C-B3B1B1B1">
                <p className="CheckoutPayment-txt-2">Pago</p>
              </div>
              <div className="CheckoutPayment-C-B3B1B1B1">
                <p className="CheckoutPayment-txt-3">
                  Todos los pagos son directamente procesados por la entidad
                  financiera elegida a continuación:
                </p>
              </div>
            </div>
          </div>
          <div className="CheckoutPayment-C-B3B2">
            <div className="CheckoutPayment-C-B3B2B1">
              <div
                className="CheckoutPayment-C-B3B2B1B1"
                onClick={() => setPayment1(true) & setPayment2(false)}
              >
                <div className="CheckoutPayment-C-B3B2B1B1B1">
                  <div className="CheckoutPayment-C-B3B2B1B1B1B1">
                    <div
                      className={
                        Payment1
                          ? "CheckoutPayment-CircleCheck-background2"
                          : "CheckoutPayment-CircleCheck-background"
                      }
                    ></div>
                  </div>
                  <div className="CheckoutPayment-C-B3B2B1B1B1B2">
                    Mercado Pago
                  </div>
                  <div className="CheckoutPayment-C-B3B2B1B1B1B3">
                    <img
                      src={image1}
                      alt=""
                      className="CheckoutPayment-img-1"
                    />
                    <img
                      src={image2}
                      alt=""
                      className="CheckoutPayment-img-1"
                    />
                    <img
                      src={image3}
                      alt=""
                      className="CheckoutPayment-img-1"
                    />
                    <img
                      src={image4}
                      alt=""
                      className="CheckoutPayment-img-1"
                    />
                    <p className="CheckoutPayment-txt-4">y más...</p>
                  </div>
                </div>
              </div>
              {Payment1 && RenderOfPayment1}
              <div
                className="CheckoutPayment-C-B3B2B1B2"
                onClick={() => setPayment1(false) & setPayment2(true)}
              >
                <div className="CheckoutPayment-C-B3B2B1B1B1">
                  <div className="CheckoutPayment-C-B3B2B1B1B1B1">
                    <div
                      className={
                        Payment2
                          ? "CheckoutPayment-CircleCheck-background2"
                          : "CheckoutPayment-CircleCheck-background"
                      }
                    ></div>
                  </div>
                  <div className="CheckoutPayment-C-B3B2B1B1B1B2">
                    Transferencia bancaria
                  </div>
                  <div className="CheckoutPayment-C-B3B2B1B1B1B3-v2">
                    <img
                      src={image7}
                      alt=""
                      className="CheckoutPayment-img-1"
                    />
                    <img
                      src={image5}
                      alt=""
                      className="CheckoutPayment-img-1"
                    />
                  </div>
                </div>
              </div>
              {Payment2 && RenderOfPayment2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
