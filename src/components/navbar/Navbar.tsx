"use client";

// ** Import React
import { useEffect, useState } from "react";

// ** Import Next
import { usePathname } from "next/navigation";
import Link from "next/link";

// ** Import Icon
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { GrBlog } from "react-icons/gr";
import { FaProductHunt } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import "./styleNavbar.css";

const Navbar = () => {
  // ** Local State
  const [scroll, setScroll] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [childOpen, setChildOpen] = useState<number>(0);

  const pathname = usePathname();

  const isHome = pathname === "/";

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleChild = (id: number) => {
    setChildOpen(id);
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`hidden md:fixed w-full z-50  px-24 md:flex md:justify-between md:items-center ${
          scroll > 5
            ? "bg-white border-b duration-1000 py-6 top-0"
            : `{bg-transparent ${
                !isHome
                  ? "py-6 text-white border-b border-slate-200/20"
                  : "py-16"
              }  duration-1000}`
        }`}
      >
        <h1 className="text-2xl font-medium">Logo</h1>

        <div className="flex items-center gap-10">
          <ul className="flex gap-12 font-medium cursor-pointer">
            <Link href={"/"}>Home</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/product"}>Product</Link>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Mobile Version */}
      <nav
        className={`px-5 sticky top-0 z-20 flex items-center justify-between border-b py-5 md:hidden ${
          !isHome
            ? scroll > 5
              ? "bg-white shadow-md border-slate-200/20"
              : "bg-[#6211E4] border-slate-200/40 text-white duration-1000"
            : "bg-white shadow-md "
        }`}
      >
        <h1 className="text-2xl font-semibold">Logo</h1>

        <div onClick={handleNav}>
          <RxHamburgerMenu className="w-7 h-7 cursor-pointer" />
        </div>
      </nav>

      <div
        className={`z-30 bg-[#000229] md:hidden ${
          isOpen
            ? "right-0 duration-500 border-l"
            : "-right-[9999px] duration-500"
        } z-10 top-0 w-[75%] overflow-scroll no-scrollbar scr text-white h-full fixed`}
      >
        <div className="flex justify-end px-5">
          <AiOutlineClose
            onClick={handleNav}
            className="w-8 h-8 mt-5 cursor-pointer border rounded-lg"
          />
        </div>

        <div className="py-4 flex flex-col justify-between h-full px-6">
          <div className="space-y-9">
            <h1 className="text-2xl font-semibold text-center">Logo</h1>

            <ul className="space-y-4">
              <li onClick={() => setIsOpen(false)}>
                <Link href={"/"} className="space-y-2 flex justify-between">
                  <h5 className="font-medium text-lg">Home</h5>

                  <FaHome className="w-5 h-5" />
                </Link>
              </li>

              <hr />

              <li onClick={() => setIsOpen(false)}>
                <Link
                  href={"/blog"}
                  className="space-y-2 flex justify-between items-center"
                >
                  <h5 className="font-medium text-lg">Blog</h5>

                  <GrBlog className="w-5 h-5" />
                </Link>
              </li>

              <hr />

              <li onClick={() => setIsOpen(false)}>
                <Link
                  href={"/product"}
                  className="space-y-2 flex justify-between items-center"
                >
                  <h5 className="font-medium text-lg">Product</h5>

                  <FaProductHunt className="w-5 h-5" />
                </Link>
              </li>

              <hr />

              <li onClick={() => setIsOpen(false)}>
                <Link
                  href={"/contact"}
                  className="space-y-2 flex justify-between items-center"
                >
                  <h5 className="font-medium text-lg">Contact</h5>

                  <MdContacts className="w-5 h-5" />
                </Link>
              </li>
              <hr />
            </ul>
          </div>

          <div className="space-y-2 text-center mb-12">
            <h1 className="text-lg font-semibold ">We are here</h1>

            <p className="font-light text-slate-400">
              27 Division St, New York, NY 100002, USA
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
