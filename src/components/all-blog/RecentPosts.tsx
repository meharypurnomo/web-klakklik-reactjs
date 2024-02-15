// ** Import Elements
import CardSide from "@/elements/CardSide";

// ** Import Next
import Image from "next/image";

const RecentPosts = () => {
  return (
    <CardSide title="Recent Post">
      <div className="space-y-7">
        <div className="flex gap-5 items-center">
          <Image
            src={"/blog/popular-list/blog-list-avata-1.jpg"}
            width={75}
            height={74}
            alt="post"
            className="rounded-xl"
          />

          <div className="space-y-1 font-medium">
            <h5>Is slower team communication is a bad thing</h5>

            <p className="text-slate-700">4 March 2022</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <Image
            src={"/blog/popular-list/blog-list-avata-1.jpg"}
            width={75}
            height={74}
            alt="post"
            className="rounded-xl"
          />

          <div className="space-y-1 font-medium">
            <h5>Is slower team communication is a bad thing</h5>

            <p className="text-slate-700">4 March 2022</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <Image
            src={"/blog/popular-list/blog-list-avata-1.jpg"}
            width={75}
            height={74}
            alt="post"
            className="rounded-xl"
          />

          <div className="space-y-1 font-medium">
            <h5>Is slower team communication is a bad thing</h5>

            <p className="text-slate-700">4 March 2022</p>
          </div>
        </div>
      </div>
    </CardSide>
  );
};

export default RecentPosts;
