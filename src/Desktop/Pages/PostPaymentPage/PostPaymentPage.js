import "./PostPaymentPage.css";
import { useContext, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import MercadoPago from "../../Components/PostPaymentPage_Components/Mercado Pago/MercadoPago";
import TransferenciaBancaria from "../../Components/PostPaymentPage_Components/Transferencia Bancaria/TransferenciaBancaria";
import NullPaymentMethod from "../../Components/PostPaymentPage_Components/NullPaymentMethod/NullPaymentMethod";
import MobileTransferenciaBancaria from "../../../Mobile/Components/Desktop_PostPaymentPage_Components/MobileTransferenciaBancaria/MobileTransferenciaBancaria";
import MobileMercadoPago from "../../../Mobile/Components/Desktop_PostPaymentPage_Components/MobileMercadoPago/MobileMercadoPago";
import { AppContext } from "../../../Context/Appcontext";

const PostPaymentPage = () => {
  const {
    orderId,
    MpOrderGenerated,
    GenerarOrdenMercadoPago,
    setMpOrderGenerated,
  } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState({});
  const [OrderExist, setOrderExist] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [MercadoPagoState, setMercadoPagoState] = useState(false);
  const [TransferenciaState, setTransferenciaState] = useState(false);
  const [NullPaymentMethodState, setNullPaymentMethodState] = useState(false);

  useEffect(() => {
    if (MpOrderGenerated) {
      GenerarOrdenMercadoPago();
      setMpOrderGenerated(false);
    }
    setTimeout(() => {
      sessionStorage.clear();
    }, 2000);
  }, [MpOrderGenerated, GenerarOrdenMercadoPago, setMpOrderGenerated]);

  useEffect(() => {
    setTimeout(() => {
      if (orderId !== null) {
        const db = getFirestore();
        const dbcollection = collection(db, "Orders");
        getDocs(dbcollection).then((res) =>
          setData(res.docs.map((order) => order.id))
        );
      }
    }, 2000);
  }, [orderId]);

  useEffect(() => {
    if ((orderId !== null) & (data.length !== 0) & data.includes(orderId)) {
      setOrderExist(true);
    } else if (
      (orderId !== null) &
      (data.length !== 0) &
      !data.includes(orderId)
    ) {
      setLoading(false);
      setNullPaymentMethodState(true);
    }
  }, [data, orderId]);

  useEffect(() => {
    if (OrderExist) {
      const db = getFirestore();
      const dbobject = doc(db, "Orders", orderId);
      getDoc(dbobject).then((res) => setData2(res.get("Orden")));
    }
  }, [orderId, OrderExist]);

  const FirebasePaymentMethod = data2.Metodo_De_Pago;

  useEffect(() => {
    if (FirebasePaymentMethod !== undefined) {
      if (FirebasePaymentMethod === "Mercado Pago") {
        setTransferenciaState(false);
        setLoading(false);
        setMercadoPagoState(true);
      } else if (FirebasePaymentMethod === "Transferencia bancaria") {
        setMercadoPagoState(false);
        setLoading(false);
        setTransferenciaState(true);
      }
    }
  }, [OrderExist, FirebasePaymentMethod, data, orderId]);

  const RenderOfLoader = <div className="PostPayment-Loader"></div>;

  return (
    <div className="PP-background">
      <div className="PP-content">
        <div className="PP-C-B1"></div>
        <div className="PP-C-B2">
          {Loading && RenderOfLoader}
          {MercadoPagoState && (
            <>
              <MercadoPago />
              <MobileMercadoPago />
            </>
          )}
          {TransferenciaState && (
            <>
              <TransferenciaBancaria />
              <MobileTransferenciaBancaria />
            </>
          )}
          {NullPaymentMethodState && <NullPaymentMethod />}
        </div>
      </div>
    </div>
  );
};

export default PostPaymentPage;
