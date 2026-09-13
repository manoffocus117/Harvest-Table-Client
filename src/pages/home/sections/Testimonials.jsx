import React, { useEffect, useState } from "react";
import Title from "./../../../components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { RiDoubleQuotesL } from "@remixicon/react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
      // state for testimonials data
      const [testimonials, set_testimonials] = useState([]);
      // loading testimonials data
      useEffect(() => {
            fetch("reviews.json")
                  .then((res) => res.json())
                  .then((data) => set_testimonials(data));
      }, []);

      return (
            <section>
                  <Title
                        sub_title={"What our clients say"}
                        title={"testimonials"}
                  />
                  <Swiper
                        className="h-100! md:h-96!"
                        navigation={true}
                        autoplay={{
                              delay: 3000,
                        }}
                        modules={[Navigation, Autoplay]}
                  >
                        {testimonials.map((item) => (
                              <SwiperSlide
                                    key={item._id}
                                    className="h-100! md:h-96! flex! flex-col! items-center! justify-center!"
                              >
                                    <div className="flex flex-col items-center justify-center gap-5">
                                          <Rating
                                                style={{ maxWidth: 180 }}
                                                value={item.rating}
                                                readOnly
                                          />
                                          <RiDoubleQuotesL className="w-12 md:w-24 h-12 md:h-24" />
                                          <p className="text-md md:text-xl w-10/12 md:w-8/12">
                                                {item.details}
                                          </p>
                                          <h1 className="text-3xl text-primary">
                                                {item.name}
                                          </h1>
                                    </div>
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </section>
      );
};

export default Testimonials;
