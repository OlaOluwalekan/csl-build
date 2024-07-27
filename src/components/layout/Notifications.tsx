import { CiBellOn } from "react-icons/ci";

const Notifications = () => {
  return (
    <div>
      <button className="relative text-base-black">
        <CiBellOn className="text-3xl" />
        {/* <span className="block w-1 h-1 rounded-full bg-red-700 absolute top-1.5 right-2 animate-pulse"></span> */}
      </button>
    </div>
  );
};

export default Notifications;
