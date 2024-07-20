import { organizations } from "../../mock/organizations-data";
import Summary from "./Summary";

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
  return (
    <div>
      <h2 className="text-xl font-bold text-navy-blue">Modules</h2>
      <div className="grid grid-cols-2 gap-4 my-3 laptop:flex flex-wrap">
        {moduleArray.map((module: any) => {
          return <Summary key={module.id} {...module} data={organizations} />;
        })}
      </div>
    </div>
  );
};

export default ModuleSummary;

// flex flex-wrap gap-4 justify-center items-center
