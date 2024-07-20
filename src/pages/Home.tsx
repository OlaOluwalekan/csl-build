import ClientTrialLevel from "../components/home/ClientTrialLevel";
import ModuleSummary from "../components/home/ModuleSummary";

const Home = () => {
  return (
    <div className="py-4 px-4 tablet:px-12">
      <ModuleSummary />
      <ClientTrialLevel />
    </div>
  );
};

export default Home;
