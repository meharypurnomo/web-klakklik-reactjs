// ** Import Elements
import ButtonNavigation from "@/elements/ButtonNavigation";
import Chip from "@/elements/Chip";

// ** Import Next
import Image from "next/image";

// ** Import React
import { MdDone } from "react-icons/md";

const AboutHome = () => {
  return (
    <div className="px-5 mt-12 md:mt-20 lg:mt-0 md:px-24 lg:grid grid-cols-2 justify-center items-start md:space-y-9 lg:space-y-0">
      <div className="relative">
        <Image
          width={500}
          height={500}
          src={"/home/about/about-bg-shape.png"}
          alt="background"
        />

        <div className="absolute top-10">
          <div className="border p-2 rounded-2xl bg-white">
            <Image
              width={200}
              height={200}
              className="hidden lg:block"
              src={"/home/about/about-3.jpg"}
              alt="background"
            />
          </div>
        </div>

        <div className="absolute -top-28 left-10 md:-top-28 md:left-40 lg:-top-10 lg:left-24">
          <div className="border p-2 mt-40 rounded-2xl bg-white">
            <Image
              width={350}
              height={300}
              src={"/home/about/about-2.jpg"}
              alt="background"
            />
          </div>
        </div>

        <div className="absolute top-20 right-48">
          <div className="border p-2 mt-40 rounded-2xl bg-white">
            <Image
              width={200}
              height={200}
              className="hidden lg:block"
              src={"/home/about/about-1.jpg"}
              alt="background"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0">
          <Image
            width={120}
            height={120}
            className="hidden lg:block"
            src={"/home/about/about-5.png"}
            alt="background"
          />
        </div>
      </div>

      <div className="space-y-9">
        <div className="space-y-2 md:space-y-5">
          <Chip>Over 150k+ CLIENT</Chip>

          <h1 className="text-3xl md:text-5xl font-semibold">
            We Offer Real Time Data Solutions
          </h1>

          <p className="md:text-xl max-w-xl">
            Excepteur sint occaecat cupidatat officia non proident sunt in culpa
            qui deserunt.!
          </p>
        </div>

        <div className="space-y-7">
          <div className="flex gap-2 items-center">
            <MdDone className="bg-[#FF3C82] p-1 text-white w-6 h-6 rounded-full" />

            <p>Various analysis options.</p>
          </div>

          <div className="flex gap-2 items-center">
            <MdDone className="bg-[#FF3C82] p-1 text-white w-6 h-6 rounded-full" />

            <p>Page Load (time, size, number of requests).</p>
          </div>

          <div className="flex gap-2 items-center">
            <MdDone className="bg-[#FF3C82] p-1 text-white w-6 h-6 rounded-full" />

            <p>Big data analysis.</p>
          </div>
        </div>

        <ButtonNavigation>About Us</ButtonNavigation>
      </div>
    </div>
  );
};

export default AboutHome;
