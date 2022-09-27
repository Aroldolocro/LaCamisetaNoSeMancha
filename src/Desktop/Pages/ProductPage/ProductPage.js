import "./ProductPage.css";

import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";

const ProdcutPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="productpage-background">
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default ProdcutPage;
