import "./MobileProductPage.css";
import SectionOne from "../../Components/ProductPage_Components/SectionOne/SectionOne";
import SectionTwo from "../../Components/ProductPage_Components/SectionTwo/SectionTwo";

const MobileProductPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="MobileProductPage-background">
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default MobileProductPage;
