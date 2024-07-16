import { Outlet } from "react-router-dom";
import HeroCarousel from "../components/layout/HeroCarousel";
import Header from "../components/layout/Header";

const GeneralLayout = () => {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <div className="min-h-[calc(150vh-150px)] bg-base-main relative">
        <Outlet />
      </div>
    </div>
  );
};

export default GeneralLayout;
