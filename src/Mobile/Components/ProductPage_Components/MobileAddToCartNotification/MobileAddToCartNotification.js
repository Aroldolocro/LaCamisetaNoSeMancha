import "./MobileAddToCartNotification.css";
import { AppContext } from "../../../../Context/Appcontext";
import { useContext } from "react";

const MobileAddToCartNotification = () => {
  const { notificationproduct, setAbrir3, setAbrir } = useContext(AppContext);
  return (
    <div className="MobileAddToCartNotification-background">
      <div className="MobileAddToCartNotification-content">
        <div className="MobileAddToCartNotification-C-B1">
          <p className="MobileAddToCartNotification-txt-1">
            {notificationproduct.nombre} {notificationproduct.categoria} SE
            AGREGÓ AL CARRITO
          </p>
        </div>
        <div className="MobileAddToCartNotification-C-B2">
          <div className="MobileAddToCartNotification-C-B2B1">
            <svg
              className="MobileAddToCartNotification-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              viewBox="0 0 16 16"
              onClick={() => setAbrir3(false)}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
          <div className="MobileAddToCartNotification-C-B2B2">
            <img
              src={notificationproduct.imagen}
              className="MobileAddToCartNotification-img"
              alt=""
            />
          </div>
          <div className="MobileAddToCartNotification-C-B2B3">
            <p
              className="MobileAddToCartNotification-txt-2"
              onClick={() => setAbrir(true)}
            >
              VER CARRITO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAddToCartNotification;
