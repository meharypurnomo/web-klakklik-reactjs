// ** Import Elements
import CardSide from "@/elements/CardSide";
import ChipBlog from "@/elements/ChipBlog";

const TagCloud = () => {
  return (
    <CardSide title="Tag Cloud">
      <div className="flex flex-wrap md:grid grid-cols-3 gap-3 font-medium text-lg">
        <ChipBlog
          color="text-slate-700"
          fontSize="text-lg md:text-sm
        "
        >
          Envanto
        </ChipBlog>
        <ChipBlog
          color="text-slate-700"
          fontSize="md:text-sm
        "
        >
          Envanto
        </ChipBlog>
        <ChipBlog
          color="text-slate-700"
          fontSize="md:text-sm
        "
        >
          Envanto
        </ChipBlog>
        <ChipBlog
          color="text-slate-700"
          fontSize="md:text-sm
        "
        >
          Envanto
        </ChipBlog>
        <ChipBlog
          color="text-slate-700"
          fontSize="md:text-sm
        "
        >
          Envanto
        </ChipBlog>
      </div>
    </CardSide>
  );
};

export default TagCloud;
