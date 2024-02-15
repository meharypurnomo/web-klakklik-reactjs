// ** Import Elements
import ButtonNavigation from "@/elements/ButtonNavigation";
import ChipBlog from "@/elements/ChipBlog";

// ** Import Next
import Image from "next/image";

const PopularList = () => {
  return (
    <div className="col-span-2 space-y-16">
      <div className="space-y-8">
        <Image
          src={"/blog/popular-list/blog-list-1.jpg"}
          width={770}
          height={400}
          alt="post"
          className="rounded-3xl"
        />

        <div className="text-slate-500 flex items-center gap-2 font-medium">
          <ChipBlog>Resources</ChipBlog>
          <h5>April 12, 2023</h5>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold">
            Typing Tutorials For Kids And Beginners
          </h1>

          <p className="text-slate-500 max-w-3xl">
            From publishing content and hoping to acquire leads to gaining
            audience insights and making personalized content, content
            marketing.
          </p>
        </div>

        <ButtonNavigation>Read more</ButtonNavigation>
      </div>

      <div className="space-y-8">
        <Image
          src={"/blog/popular-list/blog-list-1.jpg"}
          width={770}
          height={400}
          alt="post"
          className="rounded-3xl"
        />

        <div className="text-slate-500 flex  items-center gap-2 font-medium">
          <ChipBlog>Resources</ChipBlog>
          <h5>April 12, 2023</h5>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold">
            Typing Tutorials For Kids And Beginners
          </h1>

          <p className="text-slate-500 max-w-3xl">
            From publishing content and hoping to acquire leads to gaining
            audience insights and making personalized content, content
            marketing.
          </p>
        </div>

        <ButtonNavigation>Read more</ButtonNavigation>
      </div>

      <div className="space-y-8">
        <Image
          src={"/blog/popular-list/blog-list-1.jpg"}
          width={770}
          height={400}
          alt="post"
          className="rounded-3xl"
        />

        <div className="text-slate-500 flex items-center gap-2 font-medium">
          <ChipBlog>Resources</ChipBlog>
          <h5>April 12, 2023</h5>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold">
            Typing Tutorials For Kids And Beginners
          </h1>

          <p className="text-slate-500 max-w-3xl">
            From publishing content and hoping to acquire leads to gaining
            audience insights and making personalized content, content
            marketing.
          </p>
        </div>

        <ButtonNavigation>Read more</ButtonNavigation>
      </div>
    </div>
  );
};

export default PopularList;
