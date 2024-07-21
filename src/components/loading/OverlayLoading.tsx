import ReactLoading from "react-loading";

const OverlayLoading = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen fixed top-0 left-0 bg-base-black/70 z-30">
      <ReactLoading type="spin" color="#CCC6D2" />
      <p className="text-base-white">{text}</p>
    </div>
  );
};

export default OverlayLoading;
