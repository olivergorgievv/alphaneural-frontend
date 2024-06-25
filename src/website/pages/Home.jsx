import Herosection from "../components/Herosection";
import LeftImage from "../components/LeftImage";
import ModelsListed from "../components/ModelsListed";
import EmailInput from "../components/EmailInput";
import DashboardBlock from "../components/DashboardBlock";

function Home() {
  return (
    <>
      <Herosection />
      <LeftImage />
      <ModelsListed />
      <EmailInput />
      <DashboardBlock />
    </>
  );
}

export default Home;
