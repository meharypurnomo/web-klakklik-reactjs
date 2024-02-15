// ** Import Components
import PopularSide from "@/components/blog/PopularSide";
import ContentDetailBlog from "@/components/detail-blog/ContentDetailBlog";
import HeroDetailBlog from "@/components/detail-blog/HeroDetailBlog";
import Related from "@/components/detail-blog/Related";

const DetailBlog = () => {
  return (
    <main>
      <HeroDetailBlog />

      <div className="lg:grid md:grid-cols-3 gap-20 items-start px-5 md:px-24 mt-14 md:mt-20 space-y-10">
        <ContentDetailBlog />

        <PopularSide />
      </div>

      <Related />
    </main>
  );
};

export default DetailBlog;
