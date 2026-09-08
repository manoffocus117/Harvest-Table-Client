import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Image_1 from "../assets/home/01.jpg";
import Image_2 from "../assets/home/02.jpg";
import Image_3 from "../assets/home/03.png";
import Image_4 from "../assets/home/04.jpg";
import Image_5 from "../assets/home/05.png";
import Image_6 from "../assets/home/06.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
      const prev_ref = useRef(null);
      const next_ref = useRef(null);
      const images = [
            {
                  id: 1,
                  name: "image_1",
                  image_url: Image_1,
            },
            {
                  id: 2,
                  name: "image_2",
                  image_url: Image_2,
            },
            {
                  id: 3,
                  name: "image_3",
                  image_url: Image_3,
            },
            {
                  id: 4,
                  name: "image_4",
                  image_url: Image_4,
            },
            {
                  id: 5,
                  name: "image_5",
                  image_url: Image_5,
            },
            {
                  id: 6,
                  name: "image_6",
                  image_url: Image_6,
            },
      ];
      return (
            <section className="">
                  <Helmet>
                        <title>Harvest Table | Home</title>
                  </Helmet>
                  <Swiper
                        navigation={{
                              prevEl: ".swiper-button-prev",
                              nextEl: ".swiper-button-next",
                        }}
                        pagination={true}
                        effect="fade"
                        autoplay
                        delay={3000}
                        loop
                        modules={[Navigation, Pagination, EffectFade, Autoplay]}
                  >
                        {images.map((image) => (
                              <SwiperSlide>
                                    <figure key={image.id}>
                                          <img
                                                src={image.image_url}
                                                alt={image.name}
                                          />
                                    </figure>
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </section>
      );
};

export default Home;
