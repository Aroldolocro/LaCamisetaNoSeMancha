import "./MobileHomePage.css";
import MobileSectionOne from "./MobileSectionOne/MobileSectionOne";
import MobileSecitonTwo from "./MobileSectionTwo/MobileSectionTwo";
// import MobileSectionThree from "./MobileSectionThree/MobileSectionThree";
// import MobileSectiFour from "./MobileSectionFour/MobileSectionFour";

const MobileHomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="MobileHomePage-background">
      <MobileSectionOne />
      <MobileSecitonTwo />
      {/* <MobileSectionThree />
      <MobileSectiFour /> */}
    </div>
  );
};

export default MobileHomePage;
