"use client";

import Image from "next/image";
import Link from "next/link";
// ** Import Next
import { useState } from "react";

const ContentProduct = () => {
  const [active, setActive] = useState("All");

  const itemActive = () => {
    return itemProducts.filter((prod) => {
      if (active === "All") {
        return itemProducts;
      }

      return prod.categoris === active;
    });
  };

  return (
    <div className="px-5 py-16 md:px-24 md:py-20 space-y-10">
      <div className="flex flex-wrap justify-center gap-5">
        {navProducts.map((prod) => (
          <button
            onClick={() => setActive(prod)}
            className={`${
              active === prod
                ? "bg-[#6211E4] text-white border-none duration-500"
                : "border text-slate-500 bg-transparent duration-500 hover:border-[#6211E4]"
            } px-3   md:px-8 py-2 rounded-full  font-medium flex-grow-0`}
          >
            {prod}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-2 md:space-y-0">
        {itemActive().map((prod) => (
          <Link
            href={`/product/${prod.title}`}
            className="border rounded-3xl p-3 space-y-10"
          >
            <Image
              src={prod.image}
              alt={prod.title}
              width={350}
              height={320}
              className="rounded-3xl w-full"
            />

            <div className="space-y-3 px-3 pb-5">
              <h5 className="text-purple-600 text-sm font-medium">
                {prod.categoris}
              </h5>

              <h1 className="text-2xl lg:text-3xl font-semibold">
                {prod.title}
              </h1>

              <p className="text-slate-500 lg:text-lg font-medium">
                {prod.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContentProduct;

const navProducts = [
  "All",
  "Design Work",
  "Branding",
  "Development",
  "Illustration",
  "App Design",
];

const itemProducts = [
  {
    image: "/product/nav/project-inner-2.jpg",
    categoris: "Design Work",
    title: "Airbnb Upgrade",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    image: "/product/nav/project-inner-2.jpg",
    categoris: "Development",
    title: "Mobile App Design ",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    image: "/product/nav/project-inner-2.jpg",
    categoris: "Branding",
    title: "Branding & Identity",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    image: "/product/nav/project-inner-2.jpg",
    categoris: "Branding",
    title: "Branding & Identity",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    image: "/product/nav/project-inner-2.jpg",
    categoris: "Illustration",
    title: "Illustration",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    image: "/product/nav/project-inner-2.jpg",
    categoris: "Illustration",
    title: "Illustration",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    image: "/product/nav/project-inner-2.jpg",
    categoris: "App Design",
    title: "Mobile Design",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
];
