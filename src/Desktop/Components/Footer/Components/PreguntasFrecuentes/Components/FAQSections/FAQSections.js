import "./FAQSections.css";
import { useParams } from "react-router-dom";
import { Elementos } from "../FAQElements";
import { useEffect, useState } from "react";

const FAQSections = () => {
  window.scrollTo(0, 0);
  const { faqindice } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    Elementos.filter((item) => item.Indice === faqindice).map((item2) =>
      setData({ ...item2 })
    );
  }, [faqindice, setData]);

  const RenderOfFaqSection = Elementos.filter(
    (item) => item.Indice === faqindice
  ).map((article, index) => (
    <div className="RenderOfFaqSection-background" key={index}>
      <p className="RenderOfFaqSection-txt-1">{article.Tema}</p>
      <p className="RenderOfFaqSection-txt-2">{article.Descripcion}</p>
    </div>
  ));

  return (
    <div className="FAQSections-background">
      <div className="FAQSections-content">
        <div className="FAQSections-C-B1"></div>
        <div className="FAQSections-C-B2">
          <p className="FAQSections-txt-1">{data.Indice2}</p>
          <div className="FAQSections-C-B2B1">{RenderOfFaqSection}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQSections;
