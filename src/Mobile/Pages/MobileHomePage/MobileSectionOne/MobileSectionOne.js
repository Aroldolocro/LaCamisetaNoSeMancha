import "./MobileSectionOne.css";
import { AppContext } from "../../../../Context/Appcontext";
import { useContext } from "react";

const MobileSectionOne = () => {
  const { MobilescollToRef } = useContext(AppContext);
  return (
    <div className="MobileSectionOne-background">
      <div className="MobileSectionOne-content">
        <div className="MobileSectionOne-C-B1"></div>
        <div className="MobileSectionOne-C-B2"></div>
        <div className="MobileSectionOne-C-B3">
          <div
            className="MobileSectionOne-C-B3B1"
            onClick={() => MobilescollToRef.current.scrollIntoView()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="MobileSectionOne-svg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSectionOne;
