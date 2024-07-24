import { useDispatch, useSelector } from "react-redux";
import Heading2 from "../ui/headings/Heading2";
import BasicInfo from "./BasicInfo";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { getAdminProfile } from "../../features/adminSlice";
import AccountDetails from "./AccountDetails";
import AccountSecurity from "./AccountSecurity";

const AdminSettings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { adminProfile } = useSelector((store: RootState) => store.admin);

  useEffect(() => {
    dispatch(getAdminProfile());
  }, []);

  return (
    <div>
      <Heading2 text="Settings" />
      <BasicInfo data={adminProfile} />
      <AccountDetails data={adminProfile} />
      <AccountSecurity />
    </div>
  );
};

export default AdminSettings;
