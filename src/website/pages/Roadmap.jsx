import EmailInput from "../components/EmailInput";
import LeftImage from "../components/LeftImage";
import RoadmapSections from "../components/RoadmapSections";
import StepperHero from "../components/StepperHero";

function Roadmap() {
  return (
    <>
      <StepperHero />
      <LeftImage roadmap={true} />
      <RoadmapSections />
      <EmailInput roadmap={true} />
    </>
  );
}

export default Roadmap;
