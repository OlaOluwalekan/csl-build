import { useDispatch, useSelector } from "react-redux";
import { AdminProfileProps } from "../../types/admin.interface";
import Heading3 from "../ui/headings/Heading3";
import Info from "./Info";
import ProfileWrapper from "./ProfileWrapper";
import { RootState } from "../../store";
import AccountDetailsForm from "./AccountDetailsForm";
import OutlineButton from "../ui/buttons/OutlineButton";
import { setEditBankDetails } from "../../features/adminSlice";

const AccountDetails = ({ data }: { data: AdminProfileProps | null }) => {
  const { editBankDetails } = useSelector((store: RootState) => store.admin);
  const dispatch = useDispatch();

  return (
    <ProfileWrapper>
      <div>
        <Heading3 text="Account Details" styleClass="text-lg mb-3" />
        <div className="tablet:flex tablet:gap-5 laptop:flex-col laptop:gap-3 desktop:flex-row desktop:gap-20">
          <div className="flex flex-col gap-2 mb-2">
            <Info
              label="Bank Name"
              value={data?.bankName ? data.bankName : "N/A"}
            />
            <Info
              label="Account Name"
              value={data?.accountName ? data.accountName : "N/A"}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Info
              label="Account Number"
              value={data?.accountNumber ? data?.accountNumber : "N/A"}
            />
            <Info
              label="Account Type"
              value={data?.accountType ? data.accountType : "N/A"}
            />
          </div>
        </div>
        <article className="flex justify-end my-5">
          <OutlineButton
            type="button"
            text="Edit"
            classStyles="px-10"
            onClick={() => dispatch(setEditBankDetails(true))}
          />
        </article>
        {editBankDetails && <AccountDetailsForm />}
      </div>
    </ProfileWrapper>
  );
};

export default AccountDetails;
