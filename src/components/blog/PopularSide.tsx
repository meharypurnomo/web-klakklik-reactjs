// ** Import Components
import SearchBlog from "../all-blog/SearchBlog";
import RecentPosts from "../all-blog/RecentPosts";
import Categories from "../all-blog/Categories";
import TagCloud from "../all-blog/TagCloud";

const PopularSide = () => {
  return (
    <div className="space-y-10">
      <SearchBlog />

      <RecentPosts />

      <Categories />

      <TagCloud />
    </div>
  );
};

export default PopularSide;
