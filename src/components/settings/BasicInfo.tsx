import { AdminProfileProps } from "../../types/admin.interface";
import OutlineButton from "../ui/buttons/OutlineButton";
import Heading3 from "../ui/headings/Heading3";
import Info from "./Info";
import ProfileWrapper from "./ProfileWrapper";
import BasicInfoForm from "./BasicInfoForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import ProfileImage from "../profile/ProfileImage";
import { setEditBasicInfo } from "../../features/adminSlice";
import { simpleDateFormatting } from "../../utils/helpers";

const BasicInfo = ({ data }: { data: AdminProfileProps | null }) => {
  const { editBasicInfo } = useSelector((store: RootState) => store.admin);
  const dispatch = useDispatch();

  return (
    <ProfileWrapper>
      <div>
        <Heading3 text="Basic Information" styleClass="text-lg" />
        <div className="tablet:flex tablet:gap-5 laptop:flex-col laptop:gap-3 desktop:flex-row desktop:gap-20">
          <section className="flex items-center gap-3">
            <ProfileImage
              url={data?.profileUrl as string}
              styleClass="w-[120px] tablet:w-[190px]"
            />
            <div className="flex flex-col gap-2">
              <Info
                label="Name"
                value={`${data?.firstName} ${data?.lastName}`}
              />
              <Info
                label="Email"
                value={data?.email}
                styleClass="hidden tablet:flex"
              />
              <Info
                label="Phone"
                value={data?.phoneNumber ? data.phoneNumber : "N/A"}
                styleClass="hidden tablet:flex"
              />
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <Info
              label="Email"
              value={data?.email}
              styleClass="flex tablet:hidden"
            />
            <Info
              label="Phone"
              value={data?.phoneNumber ? data.phoneNumber : "N/A"}
              styleClass="flex tablet:hidden"
            />
            <Info label="Gender" value={data?.gender ? data.gender : "N/A"} />
            <Info
              label="Date of Birth"
              value={
                data?.dateOfBirth
                  ? simpleDateFormatting(data.dateOfBirth)
                  : "N/A"
              }
              // styleClass="hidden tablet:flex"
            />
            <Info
              label="Address"
              value={data?.address ? data.address : "N/A"}
              // styleClass="hidden tablet:flex"
            />
          </section>
        </div>
        <article className="flex justify-end my-5">
          <OutlineButton
            type="button"
            text="Edit"
            classStyles="px-10"
            onClick={() => dispatch(setEditBasicInfo(true))}
          />
        </article>
        {editBasicInfo && <BasicInfoForm />}
      </div>
    </ProfileWrapper>
  );
};

export default BasicInfo;
