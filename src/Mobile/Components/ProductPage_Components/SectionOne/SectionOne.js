import "./SectionOne.css";
import ProductPageSwiperJsSlider from "../ProductPageSwiperJsSlider/ProductPageSwiperJsSlider";

const SectionOne = () => {
  return (
    <div className="SectionOne-background">
      <div className="SectionOne-content">
        <div className="SectionOne-C-B1"></div>
        <div className="SectionOne-C-B2">
          <ProductPageSwiperJsSlider />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
