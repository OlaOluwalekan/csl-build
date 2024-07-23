import ClientsFilter from "../components/clients/ClientsFilter";
import ClientsList from "../components/clients/ClientsList";

const ClientProfile = () => {
  return (
    <div className="py-4 px-4 tablet:px-12">
      <ClientsFilter />
      <ClientsList />
    </div>
  );
};

export default ClientProfile;
