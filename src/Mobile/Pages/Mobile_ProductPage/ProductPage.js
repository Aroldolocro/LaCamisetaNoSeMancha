import "./ProductPage.css";

import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import ProductPageMobile from "./ProductPageMobile/ProductPageMobile";

const ProdcutPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="productpage-background">
      <SectionOne />
      <SectionTwo />
      <ProductPageMobile />
    </div>
  );
};

export default ProdcutPage;
