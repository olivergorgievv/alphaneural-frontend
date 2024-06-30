import EmailInput from "../../components/EmailInput";
import HubHero from "../../components/HubHero";
import TextHeavy from "../../components/TextHeavy";
// Image
import cubes from "../../../assets/images/3-cubes.webp";

const textHeavySections = [
  {
    title: `Revolutionizing AI Model Training and Inference through Collective Effort`,
    paragraph: `The AlphaNeural HUB takes a novel approach to AI model training by crowdsourcing computational power through the aggregation of many decentralized GPU providers globally. This method democratizes the model training process, allowing individuals around the world to contribute their computing resources to aid in the development of sophisticated AI models. This not only accelerates the training process but also reduces the cost and energy consumption associated with traditional AI model development methods.`,
    space: "mb-20",
  },
  {
    title: `A Synergy of Technologies for Enhanced Efficiency`,
    paragraph: `The integration of Solana blockchain into this process underscores our commitment to efficiency and scalability. By facilitating rapid, low-cost transactions, Solana enables us to reward contributors in real-time, making the crowdsourcing process not only viable but also attractive to a global pool of participants. The addition of zkML technology ensures that the data used in training is handled with the utmost privacy, allowing for sensitive or proprietary data to be utilized without risk of exposure.`,
    space: "mb-0",
  },
];

export default function HubCrowdsourced() {
  return (
    <>
      <HubHero
        text="Decentralized AI Marketplace"
        image={cubes}
        paragraph="Revolutionizing AI Model Training and Inference through Collective Effort"
      />
      <TextHeavy sections={textHeavySections} />
      <EmailInput alignment="left" />
    </>
  );
}
