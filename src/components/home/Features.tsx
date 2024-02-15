// ** Import Next
import Image from "next/image";

// ** Import Elements
import ButtonArrow from "@/elements/ButtonArrow";

// ** Import Other
import { features } from "@/constant";

const Features = () => {
  return (
    <div className="space-y-36 mt-12 lg:mt-0">
      <div className="text-center space-y-2 md:space-y-3">
        <h1 className="text-3xl md:text-6xl font-semibold lg:mt-[45rem]">
          Our Exciting Features
        </h1>
        <p className="md:text-xl">
          More than 15,000 companies trust and choose Itech
        </p>
      </div>

      <div className="relative">
        <Image
          width={1500}
          height={500}
          className="w-full hidden lg:block"
          alt="backgorund"
          src={"/home/features/fea-bg-shape-1.png"}
        />

        <div className="lg:absolute -mt-24 top-0 left-0 right-0 flex justify-center items-center">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 px-5 md:px-24 gap-6 space-y-5 md:space-y-0">
            {features.map((feature, key) => (
              <div
                key={key}
                className="border p-14 bg-white rounded-3xl space-y-7 "
              >
                <Image width={60} height={60} src={feature.image} alt="icon1" />

                <h1 className="font-semibold text-2xl">{feature.title}</h1>

                <ButtonArrow />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
