import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../profile/ProfileImage";
import Notifications from "./Notifications";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { getAdminProfile } from "../../features/adminSlice";

const HeaderRowLast = () => {
  const { adminProfile } = useSelector((store: RootState) => store.admin);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAdminProfile());
  }, []);

  return (
    <section className="flex items-center gap-2">
      <Notifications />

      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-9 rounded-full">
            <ProfileImage url={adminProfile?.profileUrl as string} />
          </div>
        </div>
        <p className="font-semibold text-navy-blue text-base hidden laptop:block">
          {adminProfile?.firstName}
        </p>
      </div>
    </section>
  );
};

export default HeaderRowLast;
