"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import CardBlog from "../all-blog/CardBlog";
import "swiper/css";

const Related = () => {
  return (
    <div className="mt-20 bg-gray-100 px-5 py-20 md:px-24 space-y-20">
      <h1 className="text-3xl font-semibold text-center">Related Posts</h1>

      <div className="hidden md:hidden lg:block">
        <Swiper spaceBetween={50} slidesPerView={3} loop>
          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="hidden md:block lg:hidden">
        <Swiper spaceBetween={50} slidesPerView={2} loop>
          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="block md:hidden">
        <Swiper spaceBetween={50} slidesPerView={1} loop>
          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>

          <SwiperSlide>
            <CardBlog />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Related;
