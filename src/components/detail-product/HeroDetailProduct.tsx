// ** Import Next
import Image from "next/image";

const HeroDetailProduct = () => {
  return (
    <div className="bg-[#6211E4] relative lg:h-screen pt-8 pb-14 px-5 md:pt-32 md:pb-16 lg:py-40 md:px-24 text-white lg:mb-[29rem] space-y-20 md:space-y-20 lg:space-y-5">
      <div className="lg:px-16 space-y-14">
        <div className="space-y-3">
          <h5 className="text-slate-400 text-xl font-semibold">Development</h5>

          <h1 className="font-bold text-5xl lg:text-7xl">Mobile App Design</h1>
        </div>

        <div className="space-y-6 md:space-y-0 md:grid grid-cols-3 items-start gap-5 md:max-w-5xl ">
          <div>
            <h5 className="text-gray-400 font-semibold">CLIENT</h5>

            <h1 className="text-xl font-semibold">
              Microsoft App Holing Ltd, Australia Area
            </h1>
          </div>

          <div>
            <h5 className="text-gray-400 font-semibold">Services</h5>

            <h1 className="text-xl font-semibold">
              Design, Branding, App, Development
            </h1>
          </div>

          <div>
            <h5 className="text-gray-400 font-semibold">Project Date</h5>

            <h1 className="text-xl font-semibold">
              October 23th, 2022 Release Started
            </h1>
          </div>
        </div>
      </div>

      <Image
        src={"/detail-product/hero/pd-img-1.jpg"}
        alt="detail blog"
        width={1170}
        height={660}
        className="lg:translate-y-14 w-full rounded-3xl left-0 right-0 mx-auto"
      />
    </div>
  );
};

export default HeroDetailProduct;
