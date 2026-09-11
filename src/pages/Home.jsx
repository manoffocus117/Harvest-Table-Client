import React from "react";
import { Helmet } from "react-helmet-async";
import Image_1 from "../assets/home/01.jpg";
import Image_2 from "../assets/home/02.jpg";
import Image_3 from "../assets/home/03.png";
import Image_4 from "../assets/home/04.jpg";
import Image_5 from "../assets/home/05.png";
import Image_6 from "../assets/home/06.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Category from "../components/Category";
import Banner from "../components/Banner";
import Title from "../components/Title";

const Home = () => {
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
                        pagination={{
                              clickable: true,
                              dynamicBullets: true,
                        }}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                        }}
                        loop
                        modules={[Pagination, EffectFade, Autoplay]}
                        className="swiper"
                  >
                        {images.map((image) => (
                              <SwiperSlide key={image.id}>
                                    <figure className="m-0 w-full h-full">
                                          <img
                                                src={image.image_url}
                                                alt={image.name}
                                                className="rounded-xl w-full h-full object-cover"
                                          />
                                    </figure>
                              </SwiperSlide>
                        ))}
                  </Swiper>
                  <Title
                        sub_title={"---From 11:00am to 10:00pm---"}
                        title={"ORDER ONLINE"}
                  />
                  <Category />
                  <Banner />
            </section>
      );
};

export default Home;
