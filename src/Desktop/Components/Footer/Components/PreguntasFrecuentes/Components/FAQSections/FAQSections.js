import "./FAQSections.css";
import { useParams } from "react-router-dom";
import { Elementos } from "../FAQElements";

const FAQSections = () => {
  window.scrollTo(0, 0);
  const { faqindice } = useParams();

  const RenderOfFaqSection = Elementos.filter(
    (item) => item.Indice === faqindice
  ).map((article) => (
    <div className="RenderOfFaqSection-background">
      <p className="RenderOfFaqSection-txt-1">{article.Tema}</p>
      <p className="RenderOfFaqSection-txt-2">{article.Descripcion}</p>
    </div>
  ));

  return (
    <div className="FAQSections-background">
      <div className="FAQSections-content">
        <div className="FAQSections-C-B1"></div>
        <div className="FAQSections-C-B2">
          <p className="FAQSections-txt-1">{faqindice}</p>
          <div className="FAQSections-C-B2B1">{RenderOfFaqSection}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQSections;
