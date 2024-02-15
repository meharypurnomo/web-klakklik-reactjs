// ** Import Next
import Image from "next/image";

// ** Import Elements
import ButtonArrow from "@/elements/ButtonArrow";
import { services } from "@/constant";

const Services = () => {
  return (
    <div className="space-y-10 px-5 mt-12 md:px-16 md:mt-24 lg:px-24">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-6xl font-semibold">
          Explore Our Data Services
        </h1>
        <p className="md:text-xl">
          More than 15,000 companies trust and choose Itech
        </p>
      </div>

      <div className=" flex justify-center items-center">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-24 gap-6 space-y-5 md:space-y-0">
          {services.map((service, key) => (
            <div
              key={key}
              className="border p-14 bg-white rounded-3xl space-y-7"
            >
              <Image
                width={50}
                height={50}
                src={service.image}
                alt={service.title}
              />

              <div className="space-y-2">
                <h1 className="font-semibold text-2xl">{service.title}</h1>

                <p>{service.description}</p>
              </div>

              <ButtonArrow />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
