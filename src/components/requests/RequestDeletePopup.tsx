import { BsExclamationTriangle } from "react-icons/bs";
import SmallRoundedButton from "../ui/buttons/SmallRoundedButton";
import OutlineSmallRoundedButton from "../ui/buttons/OutlineSmallRoundedButton";
import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { deleteRequestedOrgAccount } from "../../features/requestsSlice";
import OverlayLoading from "../loading/OverlayLoading";
import { toast } from "react-toastify";

const RequestDeletePopup = ({
  id,
  orgName,
  setDeleteIsOpen,
}: {
  id: string;
  orgName: string;
  setDeleteIsOpen: (isOpen: boolean) => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { deletingAccount } = useSelector((store: RootState) => store.requests);

  const handleDelete = (id: string) => {
    dispatch(deleteRequestedOrgAccount(id)).then((res) => {
      if (res.payload.success) {
        setDeleteIsOpen(false);
        toast.success("Account deleted successfully!");
      } else {
        toast.error(res.payload.message);
      }
    });
  };

  const handleOverlayClicked = (e: MouseEvent<HTMLDivElement>) => {
    setDeleteIsOpen(false);
    e.stopPropagation();
  };

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 bg-base-grey/50 flex justify-center items-center z-50"
      onClick={handleOverlayClicked}
    >
      <div
        className="w-[350px] h-fit py-5 px-7 bg-base-white shadow-md flex flex-col justify-center items-center rounded-lg"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <span className="flex justify-center items-center w-[40px] aspect-square bg-error/70 rounded-full text-2xl text-base-white">
          <BsExclamationTriangle />
        </span>
        <h3 className="my-4">Are you sure?</h3>
        <p className="text-xs text-center my-3">
          This action cannot be undone. All data associated with{" "}
          <span>{orgName}</span> will be lost
        </p>
        <article className="flex flex-col gap-2 w-full">
          <SmallRoundedButton
            text="Delete Account"
            type="button"
            styleClass="w-full text-xs"
            onClick={() => handleDelete(id)}
          />
          <OutlineSmallRoundedButton
            text="cancel"
            type="button"
            styleClass="w-full text-xs"
            onClick={() => setDeleteIsOpen(false)}
          />
        </article>
      </div>
      {deletingAccount && (
        <OverlayLoading text={`Deleting ${orgName}'s account...`} />
      )}
    </div>
  );
};

export default RequestDeletePopup;
