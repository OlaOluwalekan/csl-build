import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { OrganizationProps } from "../../types/admin.interface";
import { getOrgRequests } from "../../features/requestsSlice";
import Heading2 from "../ui/headings/Heading2";
import SectionLoading from "../loading/SectionLoading";
import Client from "./Client";
import { moduleMap } from "../../data/module";

const ClientsList = () => {
  const { isLoading, organizations } = useSelector(
    (store: RootState) => store.requests
  );
  const { filter } = useSelector((store: RootState) => store.clients);
  const [clients, setClients] = useState<OrganizationProps[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOrgRequests());
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const res: OrganizationProps[] = organizations.filter((org) => {
        return org.status === "verified";
      });

      if (filter.field === "all") {
        setClients(res);
      } else if (filter.field === "module") {
        setClients(res.filter((org) => org.module === filter.value));
      } else if (filter.field === "status") {
        setClients(res.filter((org) => org.status === filter.value));
      } else if (filter.field === "isActive") {
        setClients(res.filter((org) => org.isActive === filter.value));
      } else if (filter.field === "isPublish") {
        setClients(res.filter((org) => org.isPublish === filter.value));
      } else if (filter.field === "isPaid") {
        setClients(res.filter((org) => org.isPaid === filter.value));
      } else if (filter.field === "search") {
        setClients(
          res.filter(
            (org) =>
              org.organisationName
                .toLowerCase()
                .includes((filter.value as string).toLowerCase()) ||
              org.email
                .toLowerCase()
                .includes((filter.value as string).toLowerCase())
          )
        );
      }
    }
  }, [organizations, filter]);

  return (
    <div className="my-6">
      <Heading2 text="Clients Profile" />
      {isLoading ? (
        <SectionLoading />
      ) : clients.length === 0 ? (
        <div className="text-center py-4">
          {filter.field === "all" && <p>You haven't got any client</p>}
          {filter.field === "module" && (
            <p>No {moduleMap[filter.value as string]} clients yet</p>
          )}
          {filter.field === "isActive" && (
            <p>No {filter.value ? "Active" : "Non Active"} clients yet</p>
          )}
          {filter.field === "isPublish" && (
            <p>No {filter.value ? "Published" : "Unpublished"} clients yet</p>
          )}
          {filter.field === "isPaid" && (
            <p>No {filter.value ? "Paid" : "Unpaid"} clients yet</p>
          )}
          {filter.field === "search" && <p>No client match your search</p>}
        </div>
      ) : (
        <div className="flex flex-col gap-4 my-3">
          {clients.map((org) => {
            return <Client key={org._id} data={org} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ClientsList;
