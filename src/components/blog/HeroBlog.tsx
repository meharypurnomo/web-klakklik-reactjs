// ** Import Next
import Image from "next/image";

// ** Import Icons
import { FaChevronRight } from "react-icons/fa6";

const HeroBlog = () => {
  return (
    <div className="bg-[#6211E4] w-full px-5 md:px-24 py-10 text-white">
      <div className="md:mt-20 md:flex w-full justify-between items-center">
        <div className="space-y-5">
          <h1 className="font-semibold text-4xl md:text-7xl">Read our blogs</h1>

          <div className="flex items-center gap-2 text-lg md:text-xl">
            <h5 className="text-slate-300">Home</h5>
            <FaChevronRight className="w-4 h-4 text-slate-300" />
            <h5 className="font-medium">Blog</h5>
          </div>
        </div>

        <Image
          src={"/blog/hero/breadcrumb-3.png"}
          width={230}
          height={230}
          alt="hero"
          className="mt-10 mx-auto md:mt-0 md:mx-0"
        />
      </div>
    </div>
  );
};

export default HeroBlog;
