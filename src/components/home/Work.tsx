"use client";

// ** Import Elements
import ButtonArrow from "@/elements/ButtonArrow";

// ** Import Library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Work = () => {
  return (
    <div className="bg-[#F6F5FA] px-5 md:px-24 py-20 mt-14 md:mt-36 space-y-10">
      <h1 className="text-3xl md:text-5xl max-w-xl font-semibold">
        Check Some Of Our Recent Work.
      </h1>

      <div className="hidden lg:block">
        <Swiper spaceBetween={50} slidesPerView={2} loop>
          <SwiperSlide>
            <div className="h-full bg-white w-full p-10 rounded-3xl space-y-10 cursor-pointer ">
              <div className="flex flex-col items-stretch gap-5">
                <h1 className="font-semibold text-2xl">Logo</h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  consequatur nisi cupiditate commodi blanditiis neque illo
                  quasi ab mollitia facilis accusamus ipsa, vitae sit omnis
                  minima saepe iusto, placeat fuga!
                </p>
              </div>

              <hr />

              <div className="space-y-5 md:flex md:justify-between md:items-center gap-10 md:space-y-0">
                <div>
                  <h5 className="font-medium text-slate-600">Client Name</h5>
                  <p className="text-xl font-medium">Philip Anthropy</p>
                </div>

                <div>
                  <h5 className="font-medium text-slate-600">Budget</h5>
                  <p className="text-xl font-medium">$200-250k</p>
                </div>

                <div className="hidden md:block">
                  <ButtonArrow />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full bg-white w-full p-10 rounded-3xl space-y-10 cursor-pointer ">
              <div className="flex flex-col items-stretch gap-5">
                <h1 className="font-semibold text-2xl">Logo</h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  consequatur nisi cupiditate commodi blanditiis neque illo
                  quasi ab mollitia facilis accusamus ipsa, vitae sit omnis
                  minima saepe iusto, placeat fuga!
                </p>
              </div>

              <hr />

              <div className="space-y-5 md:flex md:justify-between md:items-center gap-10 md:space-y-0">
                <div>
                  <h5 className="font-medium text-slate-600">Client Name</h5>
                  <p className="text-xl font-medium">Philip Anthropy</p>
                </div>

                <div>
                  <h5 className="font-medium text-slate-600">Budget</h5>
                  <p className="text-xl font-medium">$200-250k</p>
                </div>

                <div className="hidden md:block">
                  <ButtonArrow />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full bg-white w-full p-10 rounded-3xl space-y-10 cursor-pointer ">
              <div className="flex flex-col items-stretch gap-5">
                <h1 className="font-semibold text-2xl">Logo</h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  consequatur nisi cupiditate commodi blanditiis neque illo
                  quasi ab mollitia facilis accusamus ipsa, vitae sit omnis
                  minima saepe iusto, placeat fuga!
                </p>
              </div>

              <hr />

              <div className="space-y-5 md:flex md:justify-between md:items-center gap-10 md:space-y-0">
                <div>
                  <h5 className="font-medium text-slate-600">Client Name</h5>
                  <p className="text-xl font-medium">Philip Anthropy</p>
                </div>

                <div>
                  <h5 className="font-medium text-slate-600">Budget</h5>
                  <p className="text-xl font-medium">$200-250k</p>
                </div>

                <div className="hidden md:block">
                  <ButtonArrow />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="lg:hidden">
        <Swiper spaceBetween={50} slidesPerView={1} loop>
          <SwiperSlide>
            <div className="h-full bg-white w-full p-10 rounded-3xl space-y-10 cursor-pointer ">
              <div className="flex flex-col items-stretch gap-5">
                <h1 className="font-semibold text-2xl">Logo</h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  consequatur nisi cupiditate commodi blanditiis neque illo
                  quasi ab mollitia facilis accusamus ipsa, vitae sit omnis
                  minima saepe iusto, placeat fuga!
                </p>
              </div>

              <hr />

              <div className="space-y-5 md:flex md:justify-between md:items-center gap-10 md:space-y-0">
                <div>
                  <h5 className="font-medium text-slate-600">Client Name</h5>
                  <p className="text-xl font-medium">Philip Anthropy</p>
                </div>

                <div>
                  <h5 className="font-medium text-slate-600">Budget</h5>
                  <p className="text-xl font-medium">$200-250k</p>
                </div>

                <div className="hidden md:block">
                  <ButtonArrow />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full bg-white w-full p-10 rounded-3xl space-y-10 cursor-pointer ">
              <div className="flex flex-col items-stretch gap-5">
                <h1 className="font-semibold text-2xl">Logo</h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  consequatur nisi cupiditate commodi blanditiis neque illo
                  quasi ab mollitia facilis accusamus ipsa, vitae sit omnis
                  minima saepe iusto, placeat fuga!
                </p>
              </div>

              <hr />

              <div className="space-y-5 md:flex md:items-start gap-10 md:space-y-0">
                <div>
                  <h5 className="font-medium text-slate-600">Client Name</h5>
                  <p className="text-xl font-medium">Philip Anthropy</p>
                </div>

                <div>
                  <h5 className="font-medium text-slate-600">Budget</h5>
                  <p className="text-xl font-medium">$200-250k</p>
                </div>

                {/* <ButtonArrow /> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full bg-white w-full p-10 rounded-3xl space-y-10 cursor-pointer ">
              <div className="flex flex-col items-stretch gap-5">
                <h1 className="font-semibold text-2xl">Logo</h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  consequatur nisi cupiditate commodi blanditiis neque illo
                  quasi ab mollitia facilis accusamus ipsa, vitae sit omnis
                  minima saepe iusto, placeat fuga!
                </p>
              </div>

              <hr />

              <div className="space-y-5 md:flex md:items-start gap-10 md:space-y-0">
                <div>
                  <h5 className="font-medium text-slate-600">Client Name</h5>
                  <p className="text-xl font-medium">Philip Anthropy</p>
                </div>

                <div>
                  <h5 className="font-medium text-slate-600">Budget</h5>
                  <p className="text-xl font-medium">$200-250k</p>
                </div>

                {/* <ButtonArrow /> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Work;
