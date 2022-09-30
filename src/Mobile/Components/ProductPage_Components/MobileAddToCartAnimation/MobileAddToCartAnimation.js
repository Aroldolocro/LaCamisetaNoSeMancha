import "./MobileAddToCartAnimation.css";
import { useState, useEffect } from "react";

const MobileAddToCartAnimation = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const loader = (
    <div className="MobileAddToCartAnimation-Loader-background">
      <div className="MobileAddToCartAnimation-Loader-content"></div>
    </div>
  );

  const succes = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="MobileAddToCartAnimation-svg"
      viewBox="0 0 16 16"
    >
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
    </svg>
  );
  return (
    <div className="MobileAddToCartAnimation-background">
      {loading ? loader : succes}
    </div>
  );
};

export default MobileAddToCartAnimation;
