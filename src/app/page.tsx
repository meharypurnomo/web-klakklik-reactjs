// ** Import Components
import Navbar from "@/components/navbar/Navbar";
import AboutHome from "@/components/home/AboutHome";
import Client from "@/components/home/Client";
import Features from "@/components/home/Features";
import HeroHome from "@/components/home/HeroHome";
import Sales from "@/components/home/Sales";
import Services from "@/components/home/Services";
import TopOffer from "@/components/home/TopOffer";
import Work from "@/components/home/Work";

export default function Home() {
  return (
    <div className="sm:pt-8 relative mb-20">
      <TopOffer />

      <Navbar />

      <HeroHome />

      <Features />

      <AboutHome />

      <Services />

      <Work />

      <Client />

      <Sales />
    </div>
  );
}
