"use client";

// ** Import Icons
import { RiMessage2Line } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  return (
    <div className="bg-[#000229] text-white px-5 md:px-24 py-10 md:py-16">
      <div className="space-y-5 lg:space-y-0 lg:flex justify-between items-center">
        <h1 className="font-medium text-xl md:text-2xl md:max-w-full lg:max-w-[15rem]">
          Get Our Latest's News & Updates
        </h1>

        <form className="relative">
          <input
            type="text"
            placeholder="Business Email Address"
            className="bg-white text-black py-4 rounded-full w-full md:w-[38rem] pl-16 pr-48 focus:outline-none"
          />

          <RiMessage2Line className="w-6 h-6 text-slate-400 absolute top-[15px] left-6" />

          <button className="bg-sky-600 px-2 py-2 font-semibold text-white  absolute right-6 rounded-full top-2.5 hover:bg-slate-900">
            <GoArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>

      <hr className="mt-14" />

      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 items-start gap-10 mt-10 space-y-10 md:space-y-0">
        <div className="space-y-5">
          <div className="space-y-2">
            <h1>Logo</h1>
            <p>
              Our highly skilled development teams specialized in data analysis.
            </p>
          </div>

          <div className="flex gap-4">
            <FaInstagram className="border w-8  h-8 rounded-full px-1 py-1 text-slate-200" />
            <FaLinkedin className="border w-8  h-8 rounded-full px-1 py-1 text-slate-200" />
            <FaTwitter className="border w-8  h-8 rounded-full px-1 py-1 text-slate-200" />
            <FaFacebookF className="border w-8  h-8 rounded-full px-1 py-1 text-slate-200" />
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-semibold">What We Do</h1>

          <ul className="space-y-3 text-gray-400">
            <li>Business</li>
            <li>Technology</li>
            <li>Online Marketing</li>
            <li>Advertising Strategy</li>
            <li>Strategy</li>
            <li>Development</li>
          </ul>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-semibold">Other Pages</h1>

          <ul className="space-y-3 text-gray-400">
            <li>About</li>
            <li>Services</li>
            <li>How it Works</li>
            <li>Pricing Plan</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-semibold">Contact Us</h1>

          <ul className="space-y-3 text-gray-400">
            <li className="flex gap-2 items-center">
              <BsTelephoneOutbound className="w-5 h-5" />
              <span className="text-lg text-white">+806 (000) 88 99</span>
            </li>

            <li className="flex gap-2 items-center">
              <MdOutlineMail className="w-5 h-5" />
              <span className="text-lg text-white">Contact@info.com</span>
            </li>

            <li className="flex gap-1 md:gap-2 items-center">
              <CiLocationOn className="w-6 h-6 md:w-9 md:h-9" />
              <span className="text-lg text-white">
                123 North Avenue Luke Lane, South Bend
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
