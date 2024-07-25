import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Summary = ({
  id,
  label,
  icon,
  data,
}: {
  id: string;
  label: string;
  icon: string;
  data: any;
}) => {
  const { isLoading } = useSelector((store: RootState) => store.requests);

  const res = data.filter((item: any) => {
    return item.module === id;
  });

  return (
    <div className="bg-navy-blue text-base-white w-[calc(50vw-60px)] relative rounded-xl overflow-hidden laptop:w-[100%] desktop:w-[200px] large:w-[calc(25%-12px)] large:aspect-[4/2] large:min-h-[150px]">
      <div className="w-[150%] aspect-square absolute bg-indigo-red/30 rounded-full top-0 bottom-0 m-auto left-[70%]"></div>
      <div className="w-[200%] aspect-square absolute bg-indigo-red/30 rounded-full right-[-50%] top-[45%]"></div>
      <div className="py-5 px-4 flex flex-col gap-5 h-full large:justify-between">
        <article>
          <img src={icon} alt={label} className="w-6" />
          <h2 className="my-2">{label}</h2>
        </article>
        <article className="flex justify-between items-center">
          <p className="text-sm w-1/2">Total Registered</p>
          <h3 className="text-2xl font-bold">{isLoading ? "0" : res.length}</h3>
        </article>
      </div>
    </div>
  );
};

export default Summary;
