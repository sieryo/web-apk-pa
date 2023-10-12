import { redirect } from "next/navigation";

const MainPage = () => {
  return (
    <div>
      <div>Home page</div>
      {redirect("/anggarandasar")}
    </div>
  );
};
export default MainPage;
