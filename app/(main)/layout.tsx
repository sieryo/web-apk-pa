import { Navbar } from "@/components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="p-3">{children}</div>
    </div>
  );
};

export default MainLayout;
