import { FaChevronRight } from "react-icons/fa6";

const TopOffer = () => {
  return (
    <div className="px-24 hidden md:flex md:justify-between">
      <div className="flex gap-2">
        <h1>
          Offer{" "}
          <span className="text-slate-700">
            is going on till Friday, $2.99/mo.
          </span>
        </h1>

        <FaChevronRight className="w-6 p-1 h-6 bg-sky-600 text-white rounded-full" />
      </div>

      <h1>
        <span className="text-slate-700">Get Support</span> : +806 (000) 888 99
      </h1>
    </div>
  );
};

export default TopOffer;
