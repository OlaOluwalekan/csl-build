import { organizations } from "../../mock/organizations-data";
import { OrganizationProps } from "../../types/admin.interface";
import Heading2 from "../ui/headings/Heading2";
import Request from "./Request";

const RequestReceived = () => {
  const res: OrganizationProps[] = organizations.filter((org) => {
    return org.status !== "verified";
  });

  return (
    <div>
      <Heading2 text="Request Received" />
      <div className="flex flex-col gap-4 my-3">
        {res.map((org) => {
          return <Request key={org._id} data={org} />;
        })}
      </div>
    </div>
  );
};

export default RequestReceived;
