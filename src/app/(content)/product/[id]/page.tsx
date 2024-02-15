// ** Import Components
import ContentDetailProduct from "@/components/detail-product/ContentDetailProduct";
import HeroDetailProduct from "@/components/detail-product/HeroDetailProduct";
import Work from "@/components/home/Work";

export default function DetailProduct() {
  return (
    <main>
      <HeroDetailProduct />

      <ContentDetailProduct />

      <Work />
    </main>
  );
}
