import { Link } from "react-router-dom";
import { organizations } from "../../mock/organizations-data";
import { OrganizationProps } from "../../types/admin.interface";
import Heading2 from "../ui/headings/Heading2";
import TrialLevelBar from "./TrialLevelBar";
import { FaArrowRight } from "react-icons/fa6";

const ClientTrialLevel = () => {
  const res: OrganizationProps[] = organizations.filter((org) => {
    return org.isActive && !org.isPaid;
  });

  const displayedOrgs = res.length <= 4 ? res : res.slice(0, 4);

  return (
    <div className="mt-8">
      <Heading2 text="Client Trial Level" />
      <div className="flex flex-col gap-2 my-3">
        {displayedOrgs.map((org) => {
          return <TrialLevelBar key={org._id} data={org} />;
        })}
      </div>
      <article className="w-full flex justify-end">
        <Link to="/client-profile" className="flex items-center gap-2 text-xs">
          View more <FaArrowRight />
        </Link>
      </article>
    </div>
  );
};

export default ClientTrialLevel;
