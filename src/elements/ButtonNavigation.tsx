"use client";

const ButtonNavigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-[#6211E4] text-center text-white rounded-full py-2 px-5 md:px-5 md:py-3 font-semibold md:text-lg">
      {children}
    </button>
  );
};

export default ButtonNavigation;
