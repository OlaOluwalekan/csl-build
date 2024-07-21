import { useDispatch, useSelector } from "react-redux";
// import { organizations } from "../../mock/organizations-data";
import Heading2 from "../ui/headings/Heading2";
import Summary from "./Summary";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { getOrgRequests } from "../../features/requestsSlice";

const moduleArray = [
  {
    id: "hotel",
    label: "Hotel",
    icon: "/images/hotel.svg",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    icon: "/images/restaurant.svg",
  },
  {
    id: "spa",
    label: "Spa",
    icon: "/images/spa.svg",
  },
  {
    id: "crm",
    label: "CRM",
    icon: "/images/crm.svg",
  },
];

const ModuleSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { organizations } = useSelector((store: RootState) => store.requests);

  useEffect(() => {
    dispatch(getOrgRequests());
  }, []);

  return (
    <div>
      <Heading2 text="Modules" />
      <div className="grid grid-cols-2 gap-4 my-3 laptop:flex flex-wrap large:grid-cols-1">
        {moduleArray.map((module: any) => {
          return <Summary key={module.id} {...module} data={organizations} />;
        })}
      </div>
    </div>
  );
};

export default ModuleSummary;

// flex flex-wrap gap-4 justify-center items-center
