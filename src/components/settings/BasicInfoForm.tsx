import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../profile/ProfileImage";
import FormOverlay from "./FormOverlay";
import FormWrapper from "./FormWrapper";
import { AppDispatch, RootState } from "../../store";
import { PiNotePencilBold } from "react-icons/pi";
import { TbTrash } from "react-icons/tb";
import LabelledInput from "../ui/inputs/LabelledInput";
import { ChangeEvent, useEffect, useState } from "react";
import SelectInput from "../ui/inputs/SelectInput";
import DateInput from "../ui/inputs/DateInput";
import OutlineButton from "../ui/buttons/OutlineButton";
import {
  setEditBasicInfo,
  updateAdminBasicInfo,
} from "../../features/adminSlice";
import OverlayLoading from "../loading/OverlayLoading";
import { toast } from "react-toastify";

interface BasicInfoFormDataProps {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  dateOfBirth: string | Date;
  address: string;
}

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "others", label: "Other" },
];

const BasicInfoForm = () => {
  const { adminProfile, isLoading } = useSelector(
    (store: RootState) => store.admin
  );
  const [basicInfo, setBasicInfo] = useState<BasicInfoFormDataProps>({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    dateOfBirth: "",
    address: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  // console.log(adminProfile);

  useEffect(() => {
    setBasicInfo({
      firstName: adminProfile?.firstName || "",
      lastName: adminProfile?.lastName || "",
      gender: adminProfile?.gender || "",
      phoneNumber: adminProfile?.phoneNumber || "",
      dateOfBirth: adminProfile?.dateOfBirth || "",
      address: adminProfile?.address || "",
    });
  }, [adminProfile]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreviewUrl(URL.createObjectURL(file));
    }
  };

  // console.log(formData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setBasicInfo({ ...basicInfo, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setBasicInfo({ ...basicInfo, gender: value });
  };

  const handleDateChange = (date: Date | null) => {
    setBasicInfo({ ...basicInfo, dateOfBirth: date?.toISOString() || "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("phoneNumber", basicInfo.phoneNumber);
    formData.append("dateOfBirth", basicInfo.dateOfBirth as string);
    formData.append("address", basicInfo.address);
    formData.append("gender", basicInfo.gender);
    // for (const key in basicInfo) {
    //   formData.append(key, (basicInfo as any)[key]);
    // }
    if (imageFile) {
      formData.append("profileUrl", imageFile);
    }

    dispatch(
      updateAdminBasicInfo({ id: adminProfile?._id, data: formData })
    ).then((res) => {
      console.log(res);

      if (res.payload.success) {
        dispatch(setEditBasicInfo(false));
        toast.success(res.payload.data.message);
      } else {
        toast.error(res.payload.data.message);
      }
    });
  };

  return (
    <FormOverlay>
      <FormWrapper text="Basic Information">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 items-center">
            <ProfileImage
              url={
                imagePreviewUrl
                  ? imagePreviewUrl
                  : (adminProfile?.profileUrl as string)
              }
              styleClass="w-[140px]"
            />
            <section className="flex flex-col gap-2">
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="profileImage"
                className="flex items-center gap-2 bg-indigo-red text-base-white px-4 py-1.5 text-xs rounded-full cursor-pointer"
              >
                <PiNotePencilBold className="text-sm" />{" "}
                <span className="hidden tablet:block">Change Picture</span>
              </label>
              <button
                type="button"
                className="flex items-center gap-2 bg-indigo-red text-base-white px-4 py-1.5 text-xs rounded-full cursor-pointer"
              >
                <TbTrash />
                <span className="hidden tablet:block">Delete Picture</span>
              </button>
            </section>
          </div>

          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-2 mb-2">
            <LabelledInput
              type="text"
              value={basicInfo.firstName}
              label="First Name"
              placeholder="Input your first name"
              id="firstName"
              name="firstName"
              handleChange={handleChange}
              readonly={true}
            />
            <LabelledInput
              type="text"
              value={basicInfo.lastName}
              label="Last Name"
              placeholder="Input your last name"
              id="lastName"
              name="lastName"
              handleChange={handleChange}
              readonly={true}
            />
          </div>

          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-2 mb-2">
            <LabelledInput
              type="text"
              value={basicInfo.phoneNumber}
              label="Phone Number"
              placeholder="Input your phone number"
              id="phoneNumber"
              name="phoneNumber"
              handleChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-2 mb-2">
            <SelectInput
              id="gender"
              name="gender"
              value={basicInfo.gender}
              label="Gender"
              options={genderOptions}
              onChange={handleSelectChange}
            />
            <DateInput
              value={basicInfo.dateOfBirth as string}
              label="Date of Birth"
              id="dateOfBirth"
              onDateChange={handleDateChange}
              placeholder="Select your date of birth"
            />
          </div>

          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-1 mb-2">
            <LabelledInput
              type="text"
              value={basicInfo.address}
              label="Address"
              placeholder="Input your address"
              id="address"
              name="address"
              handleChange={handleChange}
              // styleClass="w-full"
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

export default BasicInfoForm;
