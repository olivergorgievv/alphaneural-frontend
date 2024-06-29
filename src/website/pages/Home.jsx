import Herosection from "../components/Herosection";
import LeftImage from "../components/LeftImage";
import ModelsListed from "../components/ModelsListed";
import EmailInput from "../components/EmailInput";
import DashboardBlock from "../components/DashboardBlock";
import Features from "../components/Features";
import LeftImageCTA from "../components/ChartBlock";
import ImageTextBlock from "../components/ImageTextBlock";
import BlogSection from "../components/Articles";

// Images

import cube from "../../assets/images/Cube.webp";

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
      <Features rows="6" />
      <LeftImageCTA />
      <ImageTextBlock
        direction="right"
        image={cube}
        title="Revolutionizing AI with Your Data"
        description="Whether you need specific datasets to train your AI model or you have datasets to contribute. AlphaNeural AI allows you to monetize your data in a reliable and legitimate way. Both synthetic and non-synthetic data are useful for AI model training on AlphaNeural AI. Data contributors receive an NFT after their data is hashed on the blockchain."
      />
      <BlogSection />
    </>
  );
}

export default Home;
