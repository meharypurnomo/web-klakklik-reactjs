// ** Import Elements
import ChipBlog from "@/elements/ChipBlog";

// ** Import Next
import Image from "next/image";

const CardBlog = () => {
  return (
    <div className="border rounded-2xl bg-white">
      <Image
        src={"/blog/popular/blog-grid-1.jpg"}
        width={370}
        height={260}
        alt="blog"
        className="rounded-t-2xl w-full"
      />

      <div className="p-6 space-y-5">
        <div className="flex md:flex-col lg:flex-row gap-2 lg:items-center">
          <ChipBlog color="text-sky-600" fontSize="text-sm md:text-md">
            CRM SOFTWARE
          </ChipBlog>

          <span className="text-slate-500 hidden lg:block">&bull;</span>

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
  );
};

export default CardBlog;
