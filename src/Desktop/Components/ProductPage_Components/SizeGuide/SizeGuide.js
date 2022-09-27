import "./SizeGuide.css";
import { AppContext } from "../../../../Context/Appcontext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const SizeGuide = () => {
  const { productId } = useParams();

  const [data, setData] = useState({});
  const [data2, setData2] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Productos", productId);
    getDoc(dbcollection).then((res) => setData({ id: res.id, ...res.data() }));
  }, [productId]);

  const { setAbrir5 } = useContext(AppContext);

  const [CamisetaGridCondition, setCamisetaGridCondition] = useState(false);
  const [ShortGridCondition, setShortGridCondition] = useState(false);
  const [CamisetaEquivalenceCondition, setCamisetaEquivalenceCondition] =
    useState(false);
  const [ShortEquivalenceCondition, setShortEquivalenceCondition] =
    useState(false);
  const [CamisetaGridExplain, setCamisetaGridExplain] = useState(false);
  const [ShortGridExplain, setShortGridExplain] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Productos", productId, "talles", "subtalles");
    getDoc(dbcollection).then((res) => setData2({ id: res.id, ...res.data() }));
  }, [productId]);

  const RenderOfCamisetaGrid = (
    <div className="ROCG-background">
      <div className="ROCG-B1">TALLE</div>
      <div className="ROCG-B1">PECHO</div>
      <div className="ROCG-B1">TORSO</div>
      <div className="ROCG-B1">HOMBRO</div>
      <div className="ROCG-B1">MANGA</div>
      <div className="ROCG-B2">S</div>
      <div className="ROCG-B2">{data2.talleSpecho}</div>
      <div className="ROCG-B2">{data2.talleStorso}</div>
      <div className="ROCG-B2">{data2.talleShombro}</div>
      <div className="ROCG-B2-v2">{data2.talleSmanga}</div>
      <div className="ROCG-B3">M</div>
      <div className="ROCG-B3">{data2.talleMpecho}</div>
      <div className="ROCG-B3">{data2.talleMtorso}</div>
      <div className="ROCG-B3">{data2.talleMhombro}</div>
      <div className="ROCG-B3-v2">{data2.talleMmanga}</div>
      <div className="ROCG-B2">L</div>
      <div className="ROCG-B2">{data2.talleLpecho}</div>
      <div className="ROCG-B2">{data2.talleLtorso}</div>
      <div className="ROCG-B2">{data2.talleLhombro}</div>
      <div className="ROCG-B2-v2">{data2.talleLmanga}</div>
      <div className="ROCG-B3">XL</div>
      <div className="ROCG-B3">{data2.talleXLpecho}</div>
      <div className="ROCG-B3">{data2.talleXLtorso}</div>
      <div className="ROCG-B3">{data2.talleXLhombro}</div>
      <div className="ROCG-B3-v2">{data2.talleXLmanga}</div>
      <div className="ROCG-B4">XXL</div>
      <div className="ROCG-B4">{data2.talleXXLpecho}</div>
      <div className="ROCG-B4">{data2.talleXXLtorso}</div>
      <div className="ROCG-B4">{data2.talleXXLhombro}</div>
      <div className="ROCG-B4-v2">{data2.talleXXLmanga}</div>
    </div>
  );

  const RenderOfShortGrid = (
    <div className="ROSG-background">
      <div className="ROSG-B1">TALLE</div>
      <div className="ROSG-B1">CINTURA</div>
      <div className="ROSG-B1">LARGO</div>
      <div className="ROSG-B1">ANCHO DE PIERNA</div>
      <div className="ROSG-B2">S</div>
      <div className="ROSG-B2">{data2.talleScintura}</div>
      <div className="ROSG-B2">{data2.talleSlargo}</div>
      <div className="ROSG-B2-v2">{data2.talleSadp}</div>
      <div className="ROSG-B3">M</div>
      <div className="ROSG-B3">{data2.talleMcintura}</div>
      <div className="ROSG-B3">{data2.talleMlargo}</div>
      <div className="ROSG-B3-v2">{data2.talleMadp}</div>
      <div className="ROSG-B2">L</div>
      <div className="ROSG-B2">{data2.talleLcintura}</div>
      <div className="ROSG-B2">{data2.talleLlargo}</div>
      <div className="ROSG-B2-v2">{data2.talleLadp}</div>
      <div className="ROSG-B3">XL</div>
      <div className="ROSG-B3">{data2.talleXLcintura}</div>
      <div className="ROSG-B3">{data2.talleXLlargo}</div>
      <div className="ROSG-B3-v2">{data2.talleXLadp}</div>
      <div className="ROSG-B4">XXL</div>
      <div className="ROSG-B4">{data2.talleXXLcintura}</div>
      <div className="ROSG-B4">{data2.talleXXLlargo}</div>
      <div className="ROSG-B4-v2">{data2.talleXXLadp}</div>
    </div>
  );

  const RenderOfCamisetaEquivalence = (
    <div className="ROCE-background">
      <div className="ROCE-B1">S = 38</div>
      <div className="ROCE-B1">M = 40</div>
      <div className="ROCE-B1">L = 42</div>
      <div className="ROCE-B1">XL = 44 </div>
      <div className="ROCE-B1">XXL = 46</div>
    </div>
  );

  const RenderOfShortEquivalence = (
    <div className="ROCE-background">
      <div className="ROCE-B1">S = 48</div>
      <div className="ROCE-B1">M = 50</div>
      <div className="ROCE-B1">L = 52</div>
      <div className="ROCE-B1">XL = 54 </div>
      <div className="ROCE-B1">XXL = 56</div>
    </div>
  );

  const RenderOfCamisetaGridExplain = (
    <div className="ROCGE-background">
      <div className="ROCGE-B1">
        Los productos de nuestra tienda fueron medidos precisamente, aun así las
        medidas de cada producto son diferente del resto:
      </div>
      <div className="ROCGE-B2">
        1. Pecho: es el ancho medido más precisamente por debajo de las mangas
        de un extremo al otro de la camiseta/buzo.
      </div>
      <div className="ROCGE-B2">
        2. Torso: es el largo medido desde el hombro hasta el extremo inferior
        de la camiseta/buzo.
      </div>
      <div className="ROCGE-B2">
        3. Hombro: es el ancho medido desde el extremo de un hombro al otro.
      </div>
      <div className="ROCGE-B2">
        4. Manga: es el ancho medido entre el extremo del hombro hasta el
        extremo de la manga.
      </div>
    </div>
  );

  const RenderOfShortGridExplain = (
    <div className="ROSGE-background">
      <div className="ROSGE-B1">
        Los productos de nuestra tienda fueron medidos precisamente, aun así las
        medidas de cada producto son diferente del resto:
      </div>
      <div className="ROSGE-B2">
        1. Cintura: es el ancho medido desde el extremo superior derecho al
        izquierdo del short.
      </div>
      <div className="ROSGE-B2">
        2. Largo: es el largo medido desde el extremo superior al inferior del
        short.
      </div>
      <div className="ROSGE-B2">
        3. Ancho de pierna: es el ancho medido desde un extremo inferior de una
        pierna al otro extremo inferior de la misma.
      </div>
    </div>
  );

  useEffect(() => {
    if (data.categoria === "CAMISETA" || data.categoria === "BUZO") {
      setCamisetaGridCondition(true);
      setCamisetaEquivalenceCondition(true);
      setCamisetaGridExplain(true);
    } else if (data.categoria === "SHORT") {
      setShortGridCondition(true);
      setShortEquivalenceCondition(true);
      setShortGridExplain(true);
    }
  }, [data.categoria]);

  return (
    <div className="SG-background">
      <div className="SG-content">
        <div className="SG-C-B1">
          <div className="SG-C-B1B1" onClick={() => setAbrir5(false)}>
            <svg
              className="SG-svg-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>
        <div className="SG-C-B2">
          <div className="SG-C-B2B1">
            <p className="SG-txt-1">
              {data.categoria} {data.nombre}
            </p>
          </div>
          <div className="SG-C-B2B2">
            {CamisetaGridCondition && RenderOfCamisetaGrid}
            {ShortGridCondition && RenderOfShortGrid}
          </div>
          <div className="SG-C-B2B3">
            <div className="SG-C-B2B3B1">
              <p className="SG-txt-2">
                (Las medidas mostradas anteriormente están expresadas en cm)
              </p>
            </div>
            <div className="SG-C-B2B3B2">
              <p className="SG-txt-2">
                A continuación podrás ver las equivalencias de los talles
                expresados en números a su expresión tradicional en letras:
              </p>
            </div>
            <div className="SG-C-B2B3B3">
              {CamisetaEquivalenceCondition && RenderOfCamisetaEquivalence}
              {ShortEquivalenceCondition && RenderOfShortEquivalence}
            </div>
          </div>
          <div className="SG-C-B2B4">
            {CamisetaGridExplain && RenderOfCamisetaGridExplain}
            {ShortGridExplain && RenderOfShortGridExplain}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
