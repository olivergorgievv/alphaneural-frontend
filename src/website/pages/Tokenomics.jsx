import CenteredHero from "../components/CenteredHero";
import ImageStepper from "../components/ImageStepper";
import PieChart from "../components/PieChart";
import Features from "../components/Features";
import ImageTextBlock from "../components/ImageTextBlock";

// Images

import Icosphere from "../../assets/images/Icosphere.webp";
import Layered from "../../assets/images/Layered.webp";
import EmailInput from "../components/EmailInput";

export default function Tokenomics() {
  return (
    <>
      <CenteredHero />
      <ImageStepper />
      <PieChart />
      <Features rows="3" />
      <ImageTextBlock
        direction="left"
        image={Icosphere}
        title="Utility and Participation"
        description="ALPHAI tokens empower users within the AlphaNeural AI ecosystem to: Engage in transactions within the AI Marketplace. Access exclusive services and premium features. Earn rewards for contributions to data and model development. Influence the platform's direction through governance participation."
      />
      <ImageTextBlock
        direction="right"
        image={Layered}
        title="Economic and Supply Dynamics"
        description="Our economic model is engineered to stimulate demand via: Increasing utilization of AI services and marketplace transactions. Reward systems that promote holding and active ecosystem participation. Fixed supply and token burn strategies to enhance token value over time.
"
      />
      <EmailInput />
    </>
  );
}
