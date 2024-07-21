import { Outlet, useLocation } from "react-router-dom";
import HeroCarousel from "../components/layout/HeroCarousel";
import AuthHeader from "../components/layout/AuthHeader";
import clsx from "clsx";

const AuthLayout = () => {
  const location = useLocation();
  return (
    <div>
      <AuthHeader />
      <HeroCarousel />
      <div
        className={clsx(
          "bg-base-main relative py-6",
          location.pathname === "/register" || location.pathname == "/login"
            ? "h-[calc(130vh-150px)] tall:h-[700px]"
            : "h-[calc(115vh-150px)] tall:h-[600px]"
        )}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
