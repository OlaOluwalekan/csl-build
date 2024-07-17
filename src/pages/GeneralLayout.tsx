import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";

const GeneralLayout = () => {
  return (
    <div>
      <Header />
      <div className="h-[calc(100vh-55px)] bg-base-main tablet:flex tablet:h-[calc(100vh-70px)]">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default GeneralLayout;
