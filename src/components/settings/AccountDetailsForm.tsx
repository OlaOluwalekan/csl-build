import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FormOverlay from "./FormOverlay";
import FormWrapper from "./FormWrapper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import LabelledInput from "../ui/inputs/LabelledInput";
import OutlineButton from "../ui/buttons/OutlineButton";
import OverlayLoading from "../loading/OverlayLoading";
import {
  setEditBankDetails,
  updateAccountDetails,
} from "../../features/adminSlice";
import { toast } from "react-toastify";

interface AccountDetailsFormDataProps {
  bankName: string;
  accountName: string;
  accountType: string;
  accountNumber: string;
}

const AccountDetailsForm = () => {
  const { adminProfile, isLoading } = useSelector(
    (store: RootState) => store.admin
  );
  const [accountInfo, setAccountInfo] = useState<AccountDetailsFormDataProps>({
    bankName: "",
    accountName: "",
    accountNumber: "",
    accountType: "",
  });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setAccountInfo({
      bankName: adminProfile?.bankName || "",
      accountName: adminProfile?.accountName || "",
      accountNumber: adminProfile?.accountNumber || "",
      accountType: adminProfile?.accountType || "",
    });
  }, [adminProfile]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in accountInfo) {
      formData.append(key, (accountInfo as any)[key]);
    }

    dispatch(
      updateAccountDetails({ id: adminProfile?._id, data: formData })
    ).then((res) => {
      if (res.payload.success) {
        dispatch(setEditBankDetails(false));
        toast.success(res.payload.data.message);
      } else {
        toast.error(res.payload.data.message);
      }
    });
  };

  return (
    <FormOverlay>
      <FormWrapper
        text="Basic Information"
        styleClass="top-0 bottom-0 my-auto max-w-[800px]"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-1 mb-2">
            <LabelledInput
              type="text"
              value={accountInfo.bankName}
              label="Bank Name"
              placeholder="Input your bank name"
              id="bankName"
              name="bankName"
              handleChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-1 mb-2">
            <LabelledInput
              type="text"
              value={accountInfo.accountName}
              label="Account Name"
              placeholder="Input your account name"
              id="accountName"
              name="accountName"
              handleChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-2 mb-2">
            <LabelledInput
              type="text"
              value={accountInfo.accountNumber}
              label="Account Number"
              placeholder="Input your account number"
              id="accountNumber"
              name="accountNumber"
              handleChange={handleChange}
            />
            <LabelledInput
              type="text"
              value={accountInfo.accountType}
              label="Account Type"
              placeholder="Select your account type"
              id="accountType"
              name="accountType"
              handleChange={handleChange}
              // readonly={true}
            />
          </div>
          <article className="flex justify-end">
            <OutlineButton
              text="Update"
              type="submit"
              classStyles="px-10 my-3"
            />
          </article>
        </form>
        {isLoading && <OverlayLoading text="Updating..." />}
      </FormWrapper>
    </FormOverlay>
  );
};

export default AccountDetailsForm;
