import React from "react";
import Slide_1 from "../assets/home/slide1.jpg";
import Slide_2 from "../assets/home/slide2.jpg";
import Slide_3 from "../assets/home/slide3.jpg";
import Slide_4 from "../assets/home/slide4.jpg";
import Slide_5 from "../assets/home/slide2.jpg";
import Slide_6 from "../assets/home/slide3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const Category = () => {
      const slides = [
            {
                  id: 1,
                  name: "Salad",
                  image: Slide_1,
            },
            {
                  id: 2,
                  name: "Pizza",
                  image: Slide_2,
            },
            {
                  id: 3,
                  name: "Soup",
                  image: Slide_3,
            },
            {
                  id: 4,
                  name: "Dessert",
                  image: Slide_4,
            },
            {
                  id: 5,
                  name: "Pizza",
                  image: Slide_5,
            },
            {
                  id: 6,
                  name: "Soup",
                  image: Slide_6,
            },
      ];
      return (
            <section>
                  <Swiper
                        pagination={{
                              clickable: true,
                        }}
                        autoplay={{
                              delay: 3000,
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                              640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                              },
                              768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                              },
                              1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                              },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="swiper h-140!"
                  >
                        {slides.map((slide) => (
                              <SwiperSlide
                                    key={slide.id}
                                    className="category-swiper-slide h-full hover:image-full"
                              >
                                    <figure className="relative">
                                          <img
                                                src={slide.image}
                                                alt={slide.name}
                                                className="rounded-xl w-full h-full object-cover"
                                          />
                                    </figure>
                                    <h3 className="absolute top-[80%] left-[32%] text-2xl text-center text-white bg-primary px-8 py-2 rounded">
                                          {slide.name}
                                    </h3>
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </section>
      );
};

export default Category;
