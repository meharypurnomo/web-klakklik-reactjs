import Image from "next/image";

const HeroContact = () => {
  return (
    <div className="bg-[#6211E4] relative pt-8 pb-14 px-5 md:pt-10 md:pb-10 lg:pt-28 md:px-24 lg:mb-20 md:flex justify-between items-center text-white space-y-10 md:space-y-20 lg:space-y-3">
      <div className="lg:px-16 space-y-2 text-6xl lg:text-8xl font-semibold">
        <h5>Get In</h5>
        <h5>Touch</h5>
      </div>

      <Image
        src={"/contact/hero/banner.png"}
        alt="hero"
        width={500}
        height={500}
      />
    </div>
  );
};

export default HeroContact;
