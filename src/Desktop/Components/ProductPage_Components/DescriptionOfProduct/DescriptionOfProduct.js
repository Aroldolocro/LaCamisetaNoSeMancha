import "./DescriptionOfProduct.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DescriptionOfProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Productos", productId);
    getDoc(dbcollection).then((res) => setData({ id: res.id, ...res.data() }));
  }, [productId]);

  const DD4dbDescripcion = <p className="DD4-txt-1">{data.descripcion}</p>;

  const DD4dbDescripcionLoader = (
    <div className="DD4dbDescripcionLoader-background"></div>
  );

  return (
    <div className="DD4-background">
      {data.descripcion ? DD4dbDescripcion : DD4dbDescripcionLoader}
    </div>
  );
};

export default DescriptionOfProduct;
