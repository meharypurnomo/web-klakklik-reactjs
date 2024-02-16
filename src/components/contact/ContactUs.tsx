// ** Import Next
import Image from "next/image";

// ** Import Icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="px-5 space-y-8 lg:space-y-0 md:px-24 lg:grid grid-cols-2 gap-10 py-20">
      <div className="space-y-8">
        <div className="space-y-5">
          <h5 className="text-purple-600 font-medium">CONTACT US</h5>

          <h1 className="text-4xl md:text-6xl lg:max-w-md font-bold">
            We'd love to hear From you.
          </h1>

          <p className="text-gray-500 font-medium lg:max-w-md text-lg">
            While we're good with smoke signals, there are easier ways to get in
            touch.
          </p>
        </div>

        <div className="flex justify-between items-center max-w-sm">
          <div className="flex gap-2 md:gap-5 items-center">
            <FaFacebookF className="w-9 h-9 rounded-full border p-2 text-gray-500" />

            <FaLinkedin className="w-9 h-9 rounded-full border p-2 text-gray-500" />

            <FaInstagram className="w-9 h-9 rounded-full border p-2 text-gray-500" />
          </div>

          <Image
            src={"/contact/contact-us/contact-icon-sm-4.png"}
            alt="people"
            width={110}
            height={110}
          />
        </div>
      </div>

      <div className="space-y-8">
        <input
          type="text"
          className="py-4 px-5 border rounded-xl focus:outline-purple-600 w-full"
          placeholder="Full Name"
        />

        <input
          type="text"
          className="py-4 px-5 border rounded-xl focus:outline-purple-600 w-full"
          placeholder="Your Email"
        />

        <input
          type="text"
          className="py-4 px-5 border rounded-xl focus:outline-purple-600 w-full"
          placeholder="Phone Number"
        />

        <textarea
          placeholder="Message"
          cols={30}
          rows={5}
          className="border w-full rounded-lg py-4 px-5 focus:outline-purple-600"
        />

        <button className="bg-[#6211E4] text-center text-white rounded-lg py-2 px-5 md:px-9 md:py-3 w-full font-semibold ">
          Send Your Request
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
