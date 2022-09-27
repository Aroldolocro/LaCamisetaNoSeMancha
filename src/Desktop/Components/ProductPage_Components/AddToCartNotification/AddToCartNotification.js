import "./AddToCartNotification.css";

import { AppContext } from "../../../../Context/Appcontext";
import { useContext } from "react";

const AddToCartNotification = () => {
  const { notificationproduct, setAbrir3, setAbrir } = useContext(AppContext);

  return (
    <div className="Notification-background">
      <div className="Notification-content">
        <div className="Notification-C-B1">
          <p className="Notification-txt-1">
            {notificationproduct.nombre} {notificationproduct.categoria} SE
            AGREGÓ AL CARRITO
          </p>
        </div>
        <div className="Notification-C-B2">
          <div className="Notification-C-B2B1">
            <div className="Notification-C-B2B1B1">
              <div
                className="Notification-C-B2B1B1B1"
                onClick={() => setAbrir3(false)}
              >
                <svg
                  className="Notification-svg-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
            </div>
            <div className="Notification-C-B2B1B2">
              <div className="Notification-C-B2B1B2B1">
                <img
                  src={notificationproduct.imagen}
                  className="Notification-img"
                  alt=""
                />
              </div>
            </div>
            <div className="Notification-C-B2B1B3">
              <div
                className="Notification-C-B2B1B3B1"
                onClick={() => setAbrir(true)}
              >
                <p className="Notification-txt-1">VER CARRITO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartNotification;
