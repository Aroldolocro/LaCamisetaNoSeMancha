import "./SectionOne.css";
import "./SectionOneQuery.css";
import { AppContext } from "../../../../Context/Appcontext";
import { useContext } from "react";

const SectionOne = () => {
  const { scollToRef } = useContext(AppContext);
  return (
    <div className="S1-background">
      <div className="S1-content">
        <div className="S1-C-B1"></div>
        <div className="S1-C-B2"></div>
        <div className="S1-C-B3">
          <div
            className="S1-C-B3B1"
            onClick={() => scollToRef.current.scrollIntoView()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="S1-svg"
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

export default SectionOne;
