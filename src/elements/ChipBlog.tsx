const ChipBlog = ({
  children,
  color,
  borderColor,
  fontSize,
}: {
  children: React.ReactNode;
  color?: string;
  borderColor?: string;
  fontSize?: string;
}) => {
  return (
    <button
      className={`border ${borderColor} px-2 md:px-3 py-1 font-medium ${fontSize} rounded-full ${color} text-center`}
    >
      {children}
    </button>
  );
};

export default ChipBlog;
