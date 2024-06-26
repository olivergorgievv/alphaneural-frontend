import Herosection from "../components/Herosection";
import LeftImage from "../components/LeftImage";
import ModelsListed from "../components/ModelsListed";
import EmailInput from "../components/EmailInput";
import DashboardBlock from "../components/DashboardBlock";
import Features from "../components/Features";
import LeftImageCTA from "../components/LeftImageCTA";
import RightImage from "../components/RightImage";

import { PrimaryFeatures } from "../components/AppFeaturesStepper";

function Home() {
  return (
    <>
      <Herosection />
      <LeftImage />
      <ModelsListed />
      <EmailInput />
      <DashboardBlock />
      <PrimaryFeatures />
      <Features />
      <LeftImageCTA />
      <RightImage />
    </>
  );
}

export default Home;
