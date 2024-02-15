// ** Import Elements
import CardSide from "@/elements/CardSide";

// ** Import Icons
import { CiSearch } from "react-icons/ci";

const SearchBlog = () => {
  return (
    <CardSide title="Search">
      <form className="relative">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="border rounded-xl py-5 pl-5 pr-[66px] w-full focus:outline-[#6211E4]"
        />

        <CiSearch className="w-7 h-7 absolute top-[17px] right-6" />
      </form>
    </CardSide>
  );
};

export default SearchBlog;
