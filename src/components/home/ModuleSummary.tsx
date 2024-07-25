import { useDispatch, useSelector } from "react-redux";
import Heading2 from "../ui/headings/Heading2";
import Summary from "./Summary";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { getOrgRequests } from "../../features/requestsSlice";
import { moduleArray } from "../../data/module";

const ModuleSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { organizations } = useSelector((store: RootState) => store.requests);

  useEffect(() => {
    dispatch(getOrgRequests());
  }, []);

  return (
    <div>
      <Heading2 text="Modules" />
      <div className="grid grid-cols-2 gap-4 my-3 desktop:flex flex-wrap large:grid-cols-1">
        {moduleArray.map((module: any) => {
          return <Summary key={module.id} {...module} data={organizations} />;
        })}
      </div>
    </div>
  );
};

export default ModuleSummary;
