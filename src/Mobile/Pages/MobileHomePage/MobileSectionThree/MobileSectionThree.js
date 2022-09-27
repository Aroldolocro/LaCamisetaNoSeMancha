import "./MobileSectionThree.css";
import SwiperJsSlider from "../../../Components/HomePage_Components/SwiperJsSlider/SwiperJsSlider";

const MobileSectionThree = () => {
  return (
    <section className="MobileSectionThree-background">
      <div className="MobileSectionThree-content">
        <div className="MobileSectionThree-C-B1"></div>
        <div className="MobileSectionThree-C-B2">
          <SwiperJsSlider />
        </div>
      </div>
    </section>
  );
};

export default MobileSectionThree;
