import "./ProductPageSwiperJsSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const ProductPageSwiperJsSlider = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Productos", productId);
    getDoc(dbcollection).then((res) => setData({ id: res.id, ...res.data() }));
  }, [productId]);

  const ProductPageSwiperJsSlider_Loader = (
    <div
      className={
        Loaded
          ? "ProductPageSwiperJsSlider_Loader-background-notdisplayed"
          : "ProductPageSwiperJsSlider_Loader-background"
      }
    ></div>
  );

  return (
    <div className="ProductPageSwiperJsSlider-background">
      <Swiper
        className={
          Loaded
            ? "ProductPageSwiperJsSlider-Swiper"
            : "ProductPageSwiperJsSlider-Swiper-notdisplayed"
        }
        pagination={true}
        modules={[Pagination]}
        loop={true}
        spaceBetween={10}
      >
        <SwiperSlide>
          <div className="ProductPageSwiperJsSlider-B1">
            <img
              src={data.imagen1}
              className="ProductPageSwiperJsSlider-img-1"
              alt=""
              onLoad={() => setLoaded(true)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ProductPageSwiperJsSlider-B1">
            <img
              src={data.imagen2}
              className="ProductPageSwiperJsSlider-img-1"
              alt=""
              onLoad={() => setLoaded(true)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ProductPageSwiperJsSlider-B1">
            <img
              src={data.imagen3}
              className="ProductPageSwiperJsSlider-img-2"
              alt=""
              onLoad={() => setLoaded(true)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ProductPageSwiperJsSlider-B1">
            <img
              src={data.imagen4}
              className="ProductPageSwiperJsSlider-img-2"
              alt=""
              onLoad={() => setLoaded(true)}
            />
          </div>
        </SwiperSlide>
        {data.imagen5 ? (
          <SwiperSlide>
            <div className="ProductPageSwiperJsSlider-B1">
              <img
                src={data.imagen5}
                className="ProductPageSwiperJsSlider-img-2"
                alt=""
                onLoad={() => setLoaded(true)}
              />
            </div>
          </SwiperSlide>
        ) : null}
        {data.imagen6 ? (
          <SwiperSlide>
            <div className="ProductPageSwiperJsSlider-B1">
              <img
                src={data.imagen6}
                className="ProductPageSwiperJsSlider-img-2"
                alt=""
                onLoad={() => setLoaded(true)}
              />
            </div>
          </SwiperSlide>
        ) : null}
      </Swiper>
      {ProductPageSwiperJsSlider_Loader}
    </div>
  );
};

export default ProductPageSwiperJsSlider;
