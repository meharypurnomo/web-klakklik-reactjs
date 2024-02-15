// ** Import Components
import Navbar from "@/components/navbar/Navbar";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
