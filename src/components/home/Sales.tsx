// ** Import Elements
import ButtonNavigation from "@/elements/ButtonNavigation";
import Chip from "@/elements/Chip";

// ** Import Next
import Image from "next/image";

const Sales = () => {
  return (
    <div className="px-5 md:pl-24 md:pr-56 mt-12 md:mt-28 lg:flex justify-between space-y-10 lg:space-y-0">
      <div className="space-y-7">
        <Chip>KEY BENEFITS</Chip>

        <h1 className="text-2xl md:text-5xl max-w-sm font-semibold">
          Get more sales by Improving Results
        </h1>

        <ButtonNavigation>Explore More</ButtonNavigation>
      </div>

      <div className="hidden lg:block lg:relative">
        <Image
          width={400}
          height={400}
          src={"/home/results/rank-bg-shape.png"}
          alt="background"
        />

        <div className="bg-[#7775F3] w-[8rem] mx-auto text-center h-[15rem] absolute top-0 -left-10 z-10 flex justify-between flex-col rounded-2xl">
          <h1 className="mt-20 text-white text-5xl">
            <span className="text-gray-200 text-2xl">#</span>1
          </h1>

          <div className="text-white space-y-1 mb-5">
            <h5>Logo</h5>

            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xs">2.4View</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl w-[8rem] mx-auto text-center h-[15rem] absolute top-8 left-16 flex justify-between flex-col rounded-2xl">
          <h1 className="mt-20 text-black text-5xl">
            <span className="text-gray-200 text-2xl">#</span>2
          </h1>

          <div className="text-black space-y-1 mb-5">
            <h5>Logo</h5>

            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xs">2.4View</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl w-[8rem] mx-auto text-center h-[15rem] absolute top-14 left-44 z-10 flex justify-between flex-col rounded-2xl">
          <h1 className="mt-20 text-black text-5xl">
            <span className="text-gray-200 text-2xl">#</span>3
          </h1>

          <div className="text-black space-y-1 mb-5">
            <h5>Logo</h5>

            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xs">2.4View</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl w-[8rem] mx-auto text-center h-[15 rem] absolute top-0 left-72 flex justify-between flex-col rounded-2xl">
          <h1 className="mt-20 text-black text-5xl">
            <span className="text-gray-200 text-2xl">#</span>4
          </h1>

          <div className="text-black space-y-1 mb-5">
            <h5>Logo</h5>

            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xs">2.4View</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-36 lg:hidden">
        <div className="bg-[#7775F3] w-[9rem] md:w-[8rem] text-center h-[15rem]  flex justify-between flex-col rounded-2xl">
          <h1 className="mt-20 text-white text-5xl">
            <span className="text-gray-200 text-2xl">#</span>1
          </h1>

          <div className="text-white space-y-1 mb-5">
            <h5>Logo</h5>

            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xs">2.4View</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl w-[9rem] md:w-[8rem] text-center h-[15rem] left-16 flex justify-between flex-col rounded-2xl">
          <h1 className="mt-20 text-black text-5xl">
            <span className="text-gray-200 text-2xl">#</span>2
          </h1>

          <div className="text-black space-y-1 mb-5">
            <h5>Logo</h5>

            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xs">2.4View</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl w-[9rem] md:w-[8rem] text-center h-[15rem] left-16 flex justify-between flex-col rounded-2xl">
          <h1 className="mt-20 text-black text-5xl">
            <span className="text-gray-200 text-2xl">#</span>2
          </h1>

          <div className="text-black space-y-1 mb-5">
            <h5>Logo</h5>

            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xs">2.4View</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl w-[9rem] md:w-[8rem] text-center h-[15rem] left-16 flex justify-between flex-col rounded-2xl">
          <h1 className="mt-20 text-black text-5xl">
            <span className="text-gray-200 text-2xl">#</span>2
          </h1>

          <div className="text-black space-y-1 mb-5">
            <h5>Logo</h5>

            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xs">2.4View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
