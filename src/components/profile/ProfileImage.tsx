import clsx from "clsx";

const ProfileImage = ({
  url,
  styleClass,
}: {
  url: string;
  styleClass?: string;
}) => {
  return (
    <img
      src={url ? url : "/images/default-male.jpg"}
      alt="Profile Image"
      className={clsx(
        "rounded-full aspect-square object-cover object-center",
        styleClass
      )}
    />
  );
};

export default ProfileImage;
