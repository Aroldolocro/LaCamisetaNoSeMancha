import "./SectionTwo.css";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const SectionTwo = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Productos", productId);
    getDoc(dbcollection).then((res) => setData({ id: res.id, ...res.data() }));
  }, [productId]);

  return (
    <div className="SectionTwo-background">
      <div className="SectionTwo-content">
        <div className="SectionTwo-C-B1">
          <p className="SectionTwo-txt-1">Home</p>
          <p className="SectionTwo-txt-2">/</p>
          <p className="SectionTwo-txt-2">{data.nombre}</p>
        </div>
        <div className="SectionTwo-C-B2">
          <div className="SectionTwo-C-B2B1">
            <p className="SectionTwo-txt-3">{data.nombre}</p>
            <p className="SectionTwo-txt-4">{data.categoria}</p>
          </div>
          <div className="SectionTwo-C-B2B2">
            <p className="SectionTwo-txt-5">TALLE</p>
            <select className="SectionTwo-select">
              <option className="SectionTwo-option">S</option>
              <option className="SectionTwo-option">M</option>
              <option className="SectionTwo-option">L</option>
              <option className="SectionTwo-option">XL</option>
              <option className="SectionTwo-option">XXL</option>
              <option className="SectionTwo-option">XXXL</option>
            </select>
          </div>
        </div>
        <div className="SectionTwo-C-B3">
          <div className="SectionTwo-C-B3B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="SectionTwo-svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <p className="SectionTwo-txt-6">Guía de talles</p>
          </div>
          <button className="SectionTwo-btn1"></button>
          <button className="SectionTwo-btn2"></button>
        </div>
        <div className="SectionTwo-C-B4"></div>
      </div>
    </div>
  );
};

export default SectionTwo;
