// ** Import Next
import Image from "next/image";

// ** Import Icons
import { RiMessage2Line } from "react-icons/ri";

const HeroHome = () => {
  return (
    <div className="md:px-10">
      <div className="bg-gradient-to-r from-[#FAD9D6] to-[#A5A8ED] py-8 md:py-0 md:rounded-3xl px-5 md:mt-5 md:px-14 md:h-[40rem] lg:h-screen md:flex items-center justify-center flex-col gap-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl text-center">
          The Leading Customer Data Platform
        </h1>

        <div className="space-y-5 mt-10">
          <form className="relative">
            <input
              type="text"
              placeholder="Business Email Address"
              className="bg-white py-3 md:py-5 rounded-full w-full md:w-[42rem] pl-16 pr-5 md:pr-48 focus:outline-none"
            />

            <RiMessage2Line className="w-6 h-6 md:w-7 md:h-7 text-slate-400 absolute top-3 md:top-[18px] left-6" />

            <button className="bg-sky-600 px-10 py-3 font-semibold text-white hidden md:block absolute right-3 rounded-full top-2 hover:bg-slate-900">
              Get A Demo
            </button>

            {/* Mobile */}
            <button className="bg-sky-600 px-7 py-2 font-semibold text-white md:hidden rounded-full hover:bg-slate-900 flex justify-center items-center mx-auto mt-5">
              Get A Demo
            </button>
          </form>

          <p className="text-sm text-center font-medium text-slate-900/50">
            We are not going to save your data
          </p>
        </div>

        <Image
          width={120}
          height={120}
          src={"/home/hero/hero-shape-1.png"}
          alt="Icon"
          className="hidden md:absolute left-4 bottom-5 animate-bounce "
        />

        <div className="hidden lg:block backdrop-blur-md bg-white/30 w-[70rem] h-[40rem] absolute -bottom-[35rem] rounded-2xl px-11 shadow-2xl">
          <div className="relative w-full h-full">
            <div className="absolute -top-16 w-full h-full">
              <div className="p-2 bg-white border border-slate-300 w-full h-full rounded-2xl">
                <div className="px-16 bg-[#F1EFF4] w-full h-full flex items-center rounded-2xl">
                  <div className="flex gap-8 justify-between">
                    <div className="space-y-6">
                      <Image
                        width={700}
                        height={500}
                        src={"/home/hero/hero-sm-1.jpg"}
                        alt="hero 1"
                      />

                      <div className="flex items-stretch gap-5">
                        <Image
                          width={200}
                          height={50}
                          src={"/home/hero/hero-sm-3.png"}
                          alt="hero 3"
                        />

                        <Image
                          width={380}
                          height={900}
                          src={"/home/hero/hero-sm-4.jpg"}
                          alt="hero 4"
                        />
                      </div>
                    </div>

                    <Image
                      width={300}
                      height={500}
                      src={"/home/hero/hero-sm-2.jpg"}
                      alt="hero 1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          width={120}
          height={120}
          src={"/home/hero/hero-shape-2.png"}
          alt="Icon"
          className="hidden lg:absolute right-20 -bottom-[35rem] animate-bounce"
        />
      </div>
    </div>
  );
};

export default HeroHome;
