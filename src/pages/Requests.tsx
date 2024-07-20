import RequestFilter from "../components/requests/RequestFilter";
import RequestReceived from "../components/requests/RequestReceived";

const Requests = () => {
  return (
    <div className="py-4 px-4 tablet:px-12">
      <RequestFilter />
      <RequestReceived />
    </div>
  );
};

export default Requests;
