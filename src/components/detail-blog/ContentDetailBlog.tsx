// ** Import Elements
import ChipBlog from "@/elements/ChipBlog";

// ** Import Next
import Image from "next/image";

// ** Import Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const ContentDetailBlog = () => {
  return (
    <aside className="col-span-2 space-y-10">
      <div className="space-y-16">
        <article>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              The History Of Web Design
            </h1>

            <div className="text-gray-500 font-medium tracking-tight space-y-5 text-lg leading-relaxed mt-6">
              <p>
                While you want your sales team to be spending most of their time
                prospecting and selling, making sure they have the time and
                space to keep the CRM up to date is critical. Remember to factor
                in time for these tasks when setting goals and benchmarks for
                them. Provide sales support where you can to ensure your sales
                team is spending.
              </p>

              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day going forward, a new
                normal that has evolved.!
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-14">
            <div className="flex gap-3 items-center">
              <IoCheckmarkCircleSharp className="w-7 h-7" />
              <p className="text-lg font-medium">Say goodbye to bank fees.</p>
            </div>

            <div className="flex gap-3 items-center">
              <IoCheckmarkCircleSharp className="w-7 h-7" />
              <p className="text-lg font-medium">
                Leverage agile frameworks to provide
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <IoCheckmarkCircleSharp className="w-7 h-7" />
              <p className="text-lg font-medium">
                Capitalize on low hanging fruit
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <IoCheckmarkCircleSharp className="w-7 h-7" />
              <p className="text-lg font-medium">
                Deposit funds easily, securely.
              </p>
            </div>
          </div>
        </article>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            How to Update your Theme
          </h1>

          <div className="text-gray-500 font-medium tracking-tight space-y-5 text-lg leading-relaxed mt-6">
            <p>
              Felis morbi ut tristique pretium libero. Eget purus, enim, orci,
              quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui
              congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor
              sed turpis odio vitae sem lobortis.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-10">
            <Image
              src={"/detail-blog/content/blog-details-2.jpg"}
              alt="content"
              width={375}
              height={500}
              className="rounded-lg w-full"
            />
            <Image
              src={"/detail-blog/content/blog-details-2.jpg"}
              alt="content"
              width={375}
              height={500}
              className="rounded-lg w-full"
            />
          </div>

          <div className="text-gray-500 font-medium tracking-tight space-y-5 text-lg leading-relaxed mt-6">
            <p>
              Felis morbi ut tristique pretium libero. Eget purus, enim, orci,
              quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui
              congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor
              sed turpis odio vitae sem lobortis.
            </p>
          </div>

          <div className="text-gray-500 font-medium tracking-tight space-y-5 text-lg leading-relaxed mt-6">
            <p>
              Ex erat referrentur vis. Vim ad consul molestie, eu malorum
              aliquando referrentur pro, erroribus gloriatur sed at. Eu illud
              saepe impetus ius. Cum graece libris abhorreant id, eu veri aeque
              ubique vel. Ut his malis similique. Ei vim blandit nominavi, quo
              elaboraret quaerendum et. At animal fabellas pericula est, ut cibo
              lobortis delicatissimi vel, cum ex putant probatus petentium.
              Elitr laboramus mel id. Admodum adolescens id eam, omnes
              reformidans comprehensam no vim, ex omnes alienum liberavisse usu.
              Mandamus tincidunt cu pro, vocent corrumpit no per. Vis ad malorum
              tacimates adipiscing. Elitr laboramus mel id.
            </p>
          </div>
        </article>
      </div>

      <div className="space-y-16 md:space-y-24">
        <div className="space-y-20">
          <div className="flex flex-wrap gap-3 md:gap-5 items-center">
            <h5 className="font-semibold text-slate-800 text-lg">Tags : </h5>

            <ChipBlog color="text-gray-400">Envanto</ChipBlog>
            <ChipBlog color="text-gray-400">Development</ChipBlog>
            <ChipBlog color="text-gray-400">Technology</ChipBlog>
            <ChipBlog color="text-gray-400">Wordpress</ChipBlog>
          </div>

          <div className="flex flex-col items-center gap-14 md:justify-between md:gap-0 md:flex-row">
            <div className="flex items-center gap-5">
              <Image
                src={"/detail-blog/navigation/navigation-2.png"}
                alt="content"
                width={90}
                height={90}
                className="rounded-lg"
              />

              <div className="space-y-2">
                <div className="flex gap-3 items-center text-gray-500 text-sm">
                  <FaArrowLeft className="w-4 h-4" />
                  <h5 className="font-medium">PREVIOUS PAGE</h5>
                </div>
                <h1 className="text-xl font-semibold text-slate-800">
                  Leveraging Feedback...
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="space-y-2">
                <div className="flex gap-3 items-center text-gray-500 text-sm">
                  <h5 className="font-medium">NEXT PAGE</h5>
                  <FaArrowRight className="w-4 h-4" />
                </div>
                <h1 className="text-xl font-semibold text-slate-800">
                  Typing Tutorial For...
                </h1>
              </div>

              <Image
                src={"/detail-blog/navigation/navigation-2.png"}
                alt="content"
                width={90}
                height={90}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-200 w-full space-y-5 md:space-y-0 md:flex items-center gap-5 p-10 md:p-14 rounded-xl">
            <Image
              alt="author"
              src={"/detail-blog/author/blog-details-avata-1.jpg"}
              width={100}
              height={100}
              className="rounded-full"
            />

            <div className="space-y-2">
              <h5 className="text-2xl font-semibold">Dianne Ameter</h5>
              <p className="text-lg font-medium text-gray-500">
                Ex erat referrentur vis. Vim ad consul molestie, eu malorum
                aliquando referrentur pro, erroribus gloriatur sed at.!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-3xl font-semibold text-slate-800">3 Comments</h1>

          <div className="space-y-10">
            <div className="flex items-start gap-5 mt">
              <Image
                src={"/detail-blog/hero/blog-avata-1.png"}
                alt="people"
                width={48}
                height={48}
                className="rounded-full"
              />

              <div className="space-y-4 md:space-y-2">
                <div className="space-y-1 md:space-y-0 md:flex items-center gap-2">
                  <h5 className="font-semibold text-slate-900 text-lg">
                    Justin Case
                  </h5>
                  <p className="text-slate-500 font-medium">
                    April 8, 2022 at 7:38
                  </p>
                </div>

                <p className="text-slate-600  text-lg font-medium">
                  Patient Comments are a collection of comments submitted by
                  viewers in response to a question posed by a MedicineNet
                  doctor.
                </p>
              </div>
            </div>

            <hr className="border" />

            <div className="flex items-start gap-5 mt">
              <Image
                src={"/detail-blog/hero/blog-avata-1.png"}
                alt="people"
                width={48}
                height={48}
                className="rounded-full"
              />

              <div className="space-y-4 md:space-y-2">
                <div className="space-y-1 md:space-y-0 md:flex items-center gap-2">
                  <h5 className="font-semibold text-slate-900 text-lg">
                    Justin Case
                  </h5>
                  <p className="text-slate-500 font-medium">
                    April 8, 2022 at 7:38
                  </p>
                </div>

                <p className="text-slate-600  text-lg font-medium">
                  Patient Comments are a collection of comments submitted by
                  viewers in response to a question posed by a MedicineNet
                  doctor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-slate-800">
            Leave A Comment
          </h1>

          <form className="space-y-7">
            <div className="space-y-7 md:space-y-0 md:grid grid-cols-2 gap-10">
              <input
                type="text"
                className="py-4 px-5 border rounded-xl focus:outline-purple-600 w-full"
                placeholder="Your Name"
              />

              <input
                type="text"
                className="py-4 px-5 border rounded-xl focus:outline-purple-600 w-full"
                placeholder="Your Email"
              />
            </div>

            <textarea
              placeholder="Your Comment"
              cols={30}
              rows={10}
              className="border w-full rounded-lg py-4 px-5 focus:outline-purple-600"
            />

            <button className="bg-[#6211E4] text-center text-white rounded-full py-2 px-5 md:px-9 md:py-3 font-semibold md:text-lg">
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default ContentDetailBlog;
