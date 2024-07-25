import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";

const GeneralLayout = () => {
  return (
    <div>
      <Header />
      <div className="bg-base-main">
        <section className="font-bold text-xl font-lato text-center text-navy-blue laptop:hidden">
          Admin Board
        </section>
        <div className="h-[calc(100vh-55px)] tablet:flex tablet:h-[calc(100vh-70px)]">
          <SideBar />
          <div className="overflow-auto w-full h-full scrollbar-none">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
