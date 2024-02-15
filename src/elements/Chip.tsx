import React from "react";

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-200 font-semibold w-48 text-center px-5 rounded-full py-2 text-sky-600">
      {children}
    </div>
  );
};

export default Chip;
