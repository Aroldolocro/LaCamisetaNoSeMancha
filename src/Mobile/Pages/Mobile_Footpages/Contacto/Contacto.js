import "./Contacto.css";
import { Link } from "react-router-dom";

const Contacto = () => {
  window.scrollTo(0, 0);

  const SendEmail = () =>
    (window.location = "mailto:soporte@lacamisetanosemancha.com");

  const ContactoPage1 = (
    <div className="ContactoPage1-background">
      <div className="ContactoPage1-B1">
        <p className="Contacto-txt-6">Preguntas frecuentes</p>
      </div>
      <div className="ContactoPage1-B2"></div>
    </div>
  );

  return (
    <div className="Contacto-background">
      <div className="Contacto-content">
        <div className="Contacto-C-B1"></div>
        <div className="Contacto-C-B2">
          <div className="Contacto-C-B2B1">
            <div className="Contacto-C-B2B1B1">
              <p className="Contacto-txt-1">CONTACTANOS</p>
            </div>
            <div className="Contacto-C-B2B1B2">
              <p className="Contacto-txt-2">LA CAMISETA NO SE MANCHA</p>
              <p className="Contacto-txt-3">SOPORTE</p>
            </div>
          </div>
          <div className="Contacto-C-B2B2">
            <div className="Contacto-C-B2B2B1">
              <p className="Contacto-txt-4">¿En que podemos ayudarte hoy?</p>
            </div>
            <div className="Contacto-C-B2B2B2">
              <div className="Contacto-C-B2B2B2B1" onClick={() => SendEmail()}>
                <div className="Contacto-C-B2B2B2B1B1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="Contacto-svg-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div>
                <p className="Contacto-txt-5">Contactanos por Email</p>
              </div>
              <Link to={"/seguimiento"} className="Contacto-C-B2B2B2B1">
                <div className="Contacto-C-B2B2B2B1B1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="Contacto-svg-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                    />
                  </svg>
                </div>
                <p className="Contacto-txt-5">Segui el estado de tu orden</p>
              </Link>
              <div className="Contacto-C-B2B2B2B1">
                <div className="Contacto-C-B2B2B2B1B1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="Contacto-svg-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                <p className="Contacto-txt-5">Llamanos @ +54 9 387-4064060</p>
              </div>
            </div>
          </div>
          <div className="Contacto-C-B2B3">{ContactoPage1}</div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
