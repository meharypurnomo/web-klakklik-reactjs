// ** Import Components
import HeroBlog from "@/components/blog/HeroBlog";
import Pagination from "@/components/blog/Pagination";
import Popular from "@/components/blog/Popular";
import PopularList from "@/components/blog/PopularList";
import PopularSide from "@/components/blog/PopularSide";

export default function Blog() {
  return (
    <main className="mb-20">
      <HeroBlog />

      <Popular />

      <div className="lg:grid grid-cols-3 gap-5 items-start px-5 md:px-24 mt-20 space-y-10 md:space-y-0">
        <PopularList />

        <PopularSide />
      </div>

      <Pagination />
    </main>
  );
}
