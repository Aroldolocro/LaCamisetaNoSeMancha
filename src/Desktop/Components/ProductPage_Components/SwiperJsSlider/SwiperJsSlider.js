import "./SwiperJsSlider.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const SwiperJsSlider = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = doc(db, "Productos", productId);
    getDoc(dbcollection).then((res) => setData({ id: res.id, ...res.data() }));
  }, [productId]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const SOSdbImageLoader = (
    <div
      className={
        Loaded
          ? "SOSdbImageLoader-background-notdisplayed"
          : "SOSdbImageLoader-background"
      }
    ></div>
  );

  return (
    <div className="SOS-background">
      <div className="SOS-content">
        <div className={Loaded ? "SOS-C-B1" : "SOS-C-B1-notdisplayed"}>
          <Swiper
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="SS-background">
                <img
                  src={data.imagen1}
                  className="SS-img-1"
                  alt=""
                  onLoad={() => setLoaded(true)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SS-background">
                <img
                  src={data.imagen2}
                  className="SS-img-1"
                  alt=""
                  onLoad={() => setLoaded(true)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SS-background">
                <img
                  src={data.imagen3}
                  className="SS-img-1-v2"
                  alt=""
                  onLoad={() => setLoaded(true)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SS-background">
                <img
                  src={data.imagen4}
                  className="SS-img-1-v2"
                  alt=""
                  onLoad={() => setLoaded(true)}
                />
              </div>
            </SwiperSlide>
            {data.imagen5 ? (
              <SwiperSlide>
                <div className="SS-background">
                  <img
                    src={data.imagen5}
                    className="SS-img-1-v2"
                    alt=""
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </SwiperSlide>
            ) : null}
            {data.imagen6 ? (
              <SwiperSlide>
                <div className="SS-background">
                  <img
                    src={data.imagen6}
                    className="SS-img-1-v2"
                    alt=""
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </SwiperSlide>
            ) : null}
          </Swiper>
        </div>
        {SOSdbImageLoader}
        <div className={Loaded ? "SOS-C-B2" : "SOS-C-B2-notdisplayed"}>
          <div className="SOS-C-B2B1 prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="SOS-svg-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <div className="SOS-C-B2B2">
            <Swiper
              onSwiper={setThumbsSwiper}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="SS-background">
                  <img
                    src={data.imagen1}
                    className="SS-img-2"
                    alt=""
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SS-background">
                  <img
                    src={data.imagen2}
                    className="SS-img-2"
                    alt=""
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SS-background">
                  <img
                    src={data.imagen3}
                    className="SS-img-2"
                    alt=""
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SS-background">
                  <img
                    src={data.imagen4}
                    className="SS-img-2"
                    alt=""
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </SwiperSlide>
              {data.imagen5 ? (
                <SwiperSlide>
                  <div className="SS-background">
                    <img
                      src={data.imagen5}
                      className="SS-img-2"
                      alt=""
                      onLoad={() => setLoaded(true)}
                    />
                  </div>
                </SwiperSlide>
              ) : null}
              {data.imagen6 ? (
                <SwiperSlide>
                  <div className="SS-background">
                    <img
                      src={data.imagen6}
                      className="SS-img-2"
                      alt=""
                      onLoad={() => setLoaded(true)}
                    />
                  </div>
                </SwiperSlide>
              ) : null}
            </Swiper>
          </div>
          <div className="SOS-C-B2B3 next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="SOS-svg-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        {SOSdbImageLoader}
      </div>
    </div>
  );
};

export default SwiperJsSlider;
