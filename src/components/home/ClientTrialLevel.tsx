import { Link } from "react-router-dom";
// import { organizations } from "../../mock/organizations-data";
import { OrganizationProps } from "../../types/admin.interface";
import Heading2 from "../ui/headings/Heading2";
import TrialLevelBar from "./TrialLevelBar";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import SectionLoading from "../loading/SectionLoading";

const ClientTrialLevel = () => {
  const { organizations, isLoading } = useSelector(
    (store: RootState) => store.requests
  );
  const [onTrials, setOnTrials] = useState<OrganizationProps[]>([]);

  useEffect(() => {
    if (!isLoading) {
      const res: OrganizationProps[] = organizations.filter((org) => {
        return org.isActive && !org.isPaid;
      });

      const displayedOrgs = res.length <= 4 ? res : res.slice(0, 4);

      setOnTrials(displayedOrgs);
    }
  }, [organizations]);

  return (
    <div className="mt-8">
      <Heading2 text="Client Trial Level" />
      {isLoading ? (
        <SectionLoading />
      ) : (
        <>
          {onTrials.length === 0 ? (
            <div className="flex justify-center items-center py-5">
              No request received yet
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2 my-3">
                {onTrials.map((org) => {
                  return <TrialLevelBar key={org._id} data={org} />;
                })}
              </div>
              <article className="w-full flex justify-end">
                <Link
                  to="/requests"
                  className="flex items-center gap-2 text-xs text-navy-blue"
                >
                  View more <FaArrowRight />
                </Link>
              </article>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ClientTrialLevel;
