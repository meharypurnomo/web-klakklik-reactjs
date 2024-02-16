// ** Import Elements
import ChipBlog from "@/elements/ChipBlog";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const Popular = () => {
  return (
    <div className="px-5 md:px-24 mt-10 space-y-5 md:mt-20 md:space-y-10">
      <h1 className="text-2xl font-semibold text-center">Our New Post</h1>

      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href={"/blog/1"}>
          <div className="rounded-2xl">
            <Image
              src={"/blog/popular/blog-grid-1.jpg"}
              width={370}
              height={260}
              alt="blog"
              className="rounded-t-2xl w-full"
            />

            <div className="border rounded-b-2xl p-6 space-y-5">
              <div className="flex md:flex-col lg:flex-row gap-2 lg:items-center">
                <ChipBlog color="text-sky-600" fontSize="text-sm md:text-md">
                  CRM SOFTWARE
                </ChipBlog>

                <span className="text-slate-500 block md:hidden lg:block">
                  &bull;
                </span>

                <h5 className="text-slate-500 font-medium">28 April, 2023</h5>
              </div>

              <h1 className="text-2xl font-semibold text-slate-800">
                2023 Professional Year In Review
              </h1>

              <div className="flex items-center gap-2">
                <Image
                  src={"/blog/popular/avata-2.png"}
                  width={40}
                  height={40}
                  alt="user"
                />

                <div>
                  <h5 className="font-medium ">Hilary Ouse</h5>
                  <h5 className="text-xs font-medium text-gray-500">
                    Founder & CEO Dulalix
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/blog/1"} className=" rounded-2xl">
          <div className="  rounded-2xl">
            <Image
              src={"/blog/popular/blog-grid-1.jpg"}
              width={370}
              height={260}
              alt="blog"
              className="rounded-t-2xl w-full"
            />

            <div className="border rounded-b-2xl p-6 space-y-5">
              <div className="flex md:flex-col lg:flex-row gap-2 lg:items-center">
                <ChipBlog color="text-sky-600" fontSize="text-sm md:text-md">
                  CRM SOFTWARE
                </ChipBlog>

                <span className="text-slate-500 block md:hidden lg:block">
                  &bull;
                </span>

                <h5 className="text-slate-500 font-medium">28 April, 2023</h5>
              </div>

              <h1 className="text-2xl font-semibold text-slate-800">
                2023 Professional Year In Review
              </h1>

              <div className="flex items-center gap-2">
                <Image
                  src={"/blog/popular/avata-2.png"}
                  width={40}
                  height={40}
                  alt="user"
                />

                <div>
                  <h5 className="font-medium ">Hilary Ouse</h5>
                  <h5 className="text-xs font-medium text-gray-500">
                    Founder & CEO Dulalix
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/blog/1"} className="rounded-2xl">
          <div className="rounded-2xl">
            <Image
              src={"/blog/popular/blog-grid-1.jpg"}
              width={370}
              height={260}
              alt="blog"
              className="rounded-t-2xl w-full"
            />

            <div className="border rounded-b-2xl p-6 space-y-5">
              <div className="flex md:flex-col lg:flex-row gap-2 lg:items-center">
                <ChipBlog color="text-sky-600" fontSize="text-sm md:text-md">
                  CRM SOFTWARE
                </ChipBlog>

                <span className="text-slate-500 block md:hidden lg:block">
                  &bull;
                </span>

                <h5 className="text-slate-500 font-medium">28 April, 2023</h5>
              </div>

              <h1 className="text-2xl font-semibold text-slate-800">
                2023 Professional Year In Review
              </h1>

              <div className="flex items-center gap-2">
                <Image
                  src={"/blog/popular/avata-2.png"}
                  width={40}
                  height={40}
                  alt="user"
                />

                <div>
                  <h5 className="font-medium ">Hilary Ouse</h5>
                  <h5 className="text-xs font-medium text-gray-500">
                    Founder & CEO Dulalix
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Popular;
