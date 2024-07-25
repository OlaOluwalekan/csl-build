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
          location.pathname === "/register"
            ? "h-[calc(130vh-150px)] tall:h-[650px] short:h-[calc(160vh-150px)]"
            : location.pathname == "/login"
            ? "h-[calc(120vh-150px)] tall:h-[600px] short:h-[calc(140vh-150px)]"
            : "h-[calc(110vh-150px)] tall:h-[500px] short:h-[calc(120vh-150px)]"
        )}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
