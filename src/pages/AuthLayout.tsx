import { Outlet } from "react-router-dom";
import HeroCarousel from "../components/layout/HeroCarousel";
import AuthHeader from "../components/layout/AuthHeader";

const AuthLayout = () => {
  return (
    <div>
      <AuthHeader />
      <HeroCarousel />
      <div className="min-h-[calc(150vh-150px)] bg-base-main relative">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
