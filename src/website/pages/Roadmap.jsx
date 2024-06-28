import StepperHero from "../components/StepperHero";
import LeftImage from "../components/LeftImage";
import RoadmapSections from "../components/RoadmapSections";

function Roadmap() {
  return (
    <>
      <StepperHero />
      <LeftImage roadmap={true} />
      <RoadmapSections />
    </>
  );
}

export default Roadmap;
