import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "swiper/css";
import "./SwiperJsSlider.css";

const SectionThreeSlider = () => {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbDoc = doc(db, "EquiposData", "boca-juniors");
    const dbDoc1 = doc(db, "EquiposData", "club-atletico-independiente");
    const dbDoc2 = doc(db, "EquiposData", "racing-club");
    getDoc(dbDoc).then((res) => setData({ id: res.id, ...res.data() }));
    getDoc(dbDoc1).then((res) => setData2({ id: res.id, ...res.data() }));
    getDoc(dbDoc2).then((res) => setData3({ id: res.id, ...res.data() }));
  }, []);

  const SectionThreeSliderImageLoader = (
    <div
      className={
        Loaded
          ? "SectionThreeSliderImageLoader-background-notdisplayed"
          : "SectionThreeSliderImageLoader-background"
      }
    ></div>
  );

  return (
    <>
      <Swiper
        className="mySwiper-HP"
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Link
            to={`/equipos/${data.EquipoNombre2}`}
            className={
              Loaded
                ? "mySwiper-background"
                : "mySwiper-background-notdisplayed"
            }
          >
            <img
              src={data.HP_section3_image}
              className="mySwiper-img"
              alt=""
              onLoad={() => setLoaded(true)}
            />
            <div className="mySwiper-B1">{data.EquipoNombre}</div>
          </Link>
          {SectionThreeSliderImageLoader}
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={`/equipos/${data2.EquipoNombre2}`}
            className="mySwiper-background"
          >
            <img
              src={data2.HP_section3_image}
              className="mySwiper-img"
              alt=""
              onLoad={() => setLoaded(true)}
            />
            <div className="mySwiper-B1">{data2.EquipoNombre}</div>
          </Link>
          {SectionThreeSliderImageLoader}
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={`/equipos/${data3.EquipoNombre2}`}
            className="mySwiper-background"
          >
            <img
              src={data3.HP_section3_image}
              className="mySwiper-img"
              alt=""
              onLoad={() => setLoaded(true)}
            />
            <div className="mySwiper-B1">{data3.EquipoNombre}</div>
          </Link>
          {SectionThreeSliderImageLoader}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SectionThreeSlider;
