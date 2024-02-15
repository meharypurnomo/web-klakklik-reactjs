"use client";

// ** Import Elements
import { GoArrowRight } from "react-icons/go";

// ** Import Library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Client = () => {
  return (
    <div className="space-y-10 px-5  lg:px-0 mt-12 md:mt-28">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          World From Our Client
        </h1>

        <p>More than 15,000 companies trust and choose Itech</p>
      </div>

      <Swiper spaceBetween={50} slidesPerView={1} loop>
        <SwiperSlide>
          <div className="h-full mx-auto w-full lg:w-[70rem] md:rounded-3xl md:space-y-10 cursor-pointer md:grid grid-cols-2 items-stretch shadow-2xl md:border">
            <div className="bg-[#5B58EB] h-full p-5 md:p-16 rounded-tl-2xl rounded-bl-2xl rounded-tr-[5rem] text-white space-y-8 shadow-xl">
              <div className="space-y-6">
                <h1 className="text-2xl font-semibold">Name</h1>

                <p className="md:text-xl">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia cumque, at atque neque qui saepe nisi cupiditate
                  quisquam harum possimus non
                </p>
              </div>

              <div>
                <h5 className="font-semibold md:text-lg">Benjamin Evalent</h5>
                <p>WR Developer</p>
              </div>
            </div>

            <div className="p-6 border border-t-0 md:border-none md:p-16 md:flex justify-center items-center text-black shadow-2xl md:shadow-none">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-7xl font-semibold">83%</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, nam.
                </p>

                <div className="text-[#5B58EB] flex gap-2 items-center">
                  <h5 className="md:text-lg font-semibold">Read Case Study</h5>

                  <GoArrowRight className="w-6 h-6 " />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full mx-auto w-full lg:w-[70rem] md:rounded-3xl md:space-y-10 cursor-pointer md:grid grid-cols-2 items-stretch shadow-2xl md:border">
            <div className="bg-[#5B58EB] h-full p-5 md:p-16 rounded-tl-2xl rounded-bl-2xl rounded-tr-[5rem] text-white space-y-8 shadow-xl">
              <div className="space-y-6">
                <h1 className="text-2xl font-semibold">Name</h1>

                <p className="md:text-xl">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia cumque, at atque neque qui saepe nisi cupiditate
                  quisquam harum possimus non
                </p>
              </div>

              <div>
                <h5 className="font-semibold md:text-lg">Benjamin Evalent</h5>
                <p>WR Developer</p>
              </div>
            </div>

            <div className="p-6 border border-t-0 md:border-none md:p-16 md:flex justify-center items-center text-black shadow-2xl md:shadow-none">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-7xl font-semibold">83%</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, nam.
                </p>

                <div className="text-[#5B58EB] flex gap-2 items-center">
                  <h5 className="md:text-lg font-semibold">Read Case Study</h5>

                  <GoArrowRight className="w-6 h-6 " />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Client;
