const CardSide = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="border space-y-10 rounded-3xl pt-7 pb-10 px-9">
      <div className="space-y-3">
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>

        <hr />
      </div>

      {children}
    </div>
  );
};

export default CardSide;
