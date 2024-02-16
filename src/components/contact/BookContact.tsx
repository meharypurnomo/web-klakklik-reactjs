// ** Import Next
import Image from "next/image";

const BookContact = () => {
  return (
    <div className="px-5 mt-0 mb-16 md:px-24 md:mt-14 md:mb-32 space-y-10">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-semibold text-slate-900">Book Demo !</h1>

        <p className="text-lg text-gray-500 font-medium">
          We will contact again after receive your request in 24h
        </p>
      </div>

      <div className="space-y-5 lg:space-y-0 lg:flex justify-center gap-1">
        <div className="bg-gray-200 p-10 flex items-center gap-3 rounded-xl lg:rounded-l-full">
          <Image
            src={"/contact/book/contact-icon-sm-1.png"}
            alt="contact"
            width={50}
            height={50}
          />

          <h5 className="text-xl text-gray-500 font-medium ">
            contact@softuch.com
          </h5>
        </div>

        <div className="bg-gray-200 p-10 flex items-center gap-3 rounded-xl lg:rounded-none">
          <Image
            src={"/contact/book/contact-icon-sm-2.png"}
            alt="contact"
            width={50}
            height={50}
          />

          <h5 className="text-xl text-gray-500 font-medium">+1-202-555-0144</h5>
        </div>

        <div className="bg-gray-200 p-10 flex items-center gap-3 rounded-xl lg:rounded-r-full">
          <Image
            src={"/contact/book/contact-icon-sm-3.png"}
            alt="contact"
            width={30}
            height={30}
          />

          <h5 className="text-xl text-gray-500 font-medium">
            35Park Avenue, Uk
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BookContact;
