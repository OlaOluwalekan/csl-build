import { useDispatch, useSelector } from "react-redux";
import { OrganizationProps } from "../../types/admin.interface";
import Heading2 from "../ui/headings/Heading2";
import Request from "./Request";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { getOrgRequests } from "../../features/requestsSlice";
import SectionLoading from "../loading/SectionLoading";
import { moduleMap } from "../../data/module";

const RequestReceived = () => {
  const { isLoading, organizations, filter } = useSelector(
    (store: RootState) => store.requests
  );
  const [requests, setRequests] = useState<OrganizationProps[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOrgRequests());
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const res: OrganizationProps[] = organizations.filter((org) => {
        return org.status !== "verified";
      });

      if (filter.field === "all") {
        setRequests(res);
      } else if (filter.field === "module") {
        setRequests(res.filter((org) => org.module === filter.value));
      } else if (filter.field === "status") {
        setRequests(res.filter((org) => org.status === filter.value));
      } else if (filter.field === "search") {
        setRequests(
          res.filter(
            (org) =>
              org.organisationName
                .toLowerCase()
                .includes(filter.value.toLowerCase()) ||
              org.email.toLowerCase().includes(filter.value.toLowerCase())
          )
        );
      }
    }
  }, [organizations, filter]);

  return (
    <div className="my-6">
      <Heading2 text="Request Received" />
      {isLoading ? (
        <SectionLoading />
      ) : requests.length === 0 ? (
        <div className="text-center py-4">
          {filter.field === "all" && <p>You haven't received any request</p>}
          {filter.field === "module" && (
            <p>No {moduleMap[filter.value]} requests yet</p>
          )}
          {filter.field === "status" && <p>No {filter.value} requests yet</p>}
          {filter.field === "search" && <p>No request matches your search</p>}
        </div>
      ) : (
        <div className="flex flex-col gap-4 my-3">
          {requests.map((org) => {
            return <Request key={org._id} data={org} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RequestReceived;
