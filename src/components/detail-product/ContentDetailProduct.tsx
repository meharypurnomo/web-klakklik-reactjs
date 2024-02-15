// ** Import Next
import Image from "next/image";

const ContentDetailProduct = () => {
  return (
    <div className="px-5 mt-10 lg:mt-0 md:px-24 md:max-w-7xl font-medium space-y-16">
      <div className=" space-y-5">
        <h1 className="text-3xl md:text-4xl text-slate-900">
          Duis aute irure dolor in reprehenderit
        </h1>

        <p className="text-lg text-slate-600">
          Posuere nibh vestibulum, velit pulvinar interdum sed in. Magnis netus
          magna urna, in tempor magna. Tortor vel vitae vel mi. Leo pellentesque
          eget pellentesque magnis. Pellentesque molestie sem massa nibh
          suspendisse ante eget. Sit dolor arcu scelerisque sit nibh nunc,
          vulputate cursus. Feugiat in tortor non mauris, sit. Hac adipiscing
          dui sit magna. Integer elementum et amet hac turpis. Sagittis magna
          nulla ut gravida integer pellentesque.
        </p>
      </div>

      <div className="space-y-14">
        <div className="space-y-10">
          <h1 className="text-3xl md:text-4xl text-slate-900">Overview</h1>

          <ul className="list-disc px-5 text-slate-600 space-y-3 text-lg">
            <li>Create & Save your notes with multi-media</li>
            <li>Complete note editor with rich text options</li>
            <li>Automatically sync in real time </li>
            <li>Web Clipper Extension</li>
          </ul>

          <p className="text-lg text-slate-600">
            Felis morbi ut tristique pretium libero. Eget purus, enim, orci,
            quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui
            congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor
            sed turpis odio vitae sem lobortis. Lobortis enim non eu a.
          </p>
        </div>

        <div className="space-y-10 md:grid grid-cols-2 items-start md:gap-10">
          <Image
            src={"/detail-product/content/solution-1.jpg"}
            alt="content"
            width={400}
            height={400}
            className="rounded-3xl w-full"
          />

          <Image
            src={"/detail-product/content/solution-1.jpg"}
            alt="content"
            width={400}
            height={400}
            className="rounded-3xl w-full"
          />
        </div>
      </div>

      <div className="space-y-5 lg:flex items gap-10">
        <h1 className="text-3xl md:text-4xl text-slate-900">
          Solution & Result
        </h1>

        <div className="text-slate-600 font-medium text-lg space-y-8">
          <p>
            Felis morbi ut tristique pretium libero. Eget purus, enim, orci,
            quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui
            congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor
            sed turpis odio vitae sem lobortis. Lobortis enim non eu a. In
            gravida velit pretium commodo odio ridiculus odio enim.Tincidunt
            eget tellus pellentesque nulla.
          </p>

          <p>
            Sed morbi dignissim odio enim volutpat. Viverra facilisi aliquet sed
            purus id ornare nunc, sit ipsum.Risus amet non eget velit nunc,
            libero vitae. Arcu maecenas in montes, tincidunt pulvinar euismod ac
            proin
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailProduct;
