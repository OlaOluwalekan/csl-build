import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import ProfileWrapper from "./ProfileWrapper";
import Heading3 from "../ui/headings/Heading3";
import Info from "./Info";
import OutlineButton from "../ui/buttons/OutlineButton";
import { setEditPassword } from "../../features/adminSlice";
import ChangePasswordForm from "./ChangePasswordForm";

const AccountSecurity = () => {
  const { editPassword } = useSelector((store: RootState) => store.admin);
  const dispatch = useDispatch();

  return (
    <ProfileWrapper>
      <div>
        <Heading3 text="Security" styleClass="text-lg mb-3" />
        <div className="tablet:flex tablet:gap-5 laptop:flex-col laptop:gap-3 desktop:flex-row desktop:gap-20">
          <div className="flex flex-col gap-2 mb-2">
            <Info label="Account Name" value="CSL Hospitality" />
            <Info label="Password" value="********" />
          </div>
        </div>
        <article className="flex justify-end my-5">
          <OutlineButton
            type="button"
            text="Edit"
            classStyles="px-10"
            onClick={() => dispatch(setEditPassword(true))}
          />
        </article>
        {editPassword && <ChangePasswordForm />}
      </div>
    </ProfileWrapper>
  );
};

export default AccountSecurity;
