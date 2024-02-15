// ** Import Elements
import ChipBlog from "@/elements/ChipBlog";

// ** Import Next
import Image from "next/image";

// ** Import Icons
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const HeroDetailBlog = () => {
  return (
    <div className="bg-[#6211E4] relative md:h-screen pt-8 pb-14 px-5 md:py-40 md:px-24 text-white space-y-8 md:space-y-20 lg:space-y-0">
      <div className="space-y-8">
        <ChipBlog
          color="text-white"
          fontSize="text-lg"
          borderColor="border-gray-400"
        >
          Resource
        </ChipBlog>

        <h1 className="text-5xl md:text-7xl font-semibold max-w-4xl">
          Developing Privacy User Centric Apps
        </h1>

        <div className="space-y-6 md:space-y-0 md:flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={"/detail-blog/hero/blog-avata-1.png"}
              width={48}
              height={48}
              alt="user"
            />

            <div>
              <h5 className="font-medium text-lg">Hilary Ouse</h5>
              <p className="font-medium text-gray-300">
                CEO Dulalix • April 24, 2022
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="border border-gray-400/50 rounded-full p-2">
              <FaFacebookF className="w-5 h-5" />
            </div>

            <div className="border border-gray-400/50 rounded-full p-2">
              <FaTwitter className="w-5 h-5" />
            </div>

            <div className="border border-gray-400/50 rounded-full p-2">
              <FaLinkedinIn className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={"/detail-blog/hero/blog-details-1.jpg"}
        alt="detail blog"
        width={1170}
        height={660}
        className="lg:translate-y-14 w-full rounded-3xl mx-auto"
      />
    </div>
  );
};

export default HeroDetailBlog;
