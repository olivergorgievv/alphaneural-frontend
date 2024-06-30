import HubHero from "../../components/HubHero";
import TextHeavy from "../../components/TextHeavy";
import EmailInput from "../../components/EmailInput";

import ring from "../../../assets/images/hub-ring.webp";

function HubDecentralized() {
  const textHeavySections = [
    {
      title: "Empowering the Future with Decentralized Intelligence",
      paragraph:
        "AlphaNeural HUB's Decentralized AI Marketplace isn't just a platform; it's a transformative ecosystem designed to democratize AI by enabling seamless interaction between data contributors, AI developers, and end-users. Our vision is to create a marketplace where anyone, regardless of their technical expertise or geographical location, can contribute to and benefit from AI advancements. This is achieved through a unique integration of blockchain technology, specifically leveraging the high-performance capabilities of the Solana blockchain to ensure transactions are not only fast but also cost-effective, allowing for real-time interactions and exchanges.",
      space: "mb-20",
    },
    {
      title: "Privavy and Participation Hand in Hand",
      paragraph: `At the heart of our marketplace is the commitment to privacy, realized through the integration of Zero-Knowledge Machine Learning (zkML).
      This innovative approach allows users to contribute data without exposing sensitive information, thereby ensuring privacy and security without compromising the quality of AI models developed.
      This is particularly crucial in an era where data privacy concerns are paramount. zkML technology enables us to build a platform where trust is built into the system, encouraging wider participation and fostering a rich, diverse dataset essential for the nuanced development of AI models.`,
      space: "mb-0",
    },
  ];

  return (
    <>
      <HubHero
        text="Crowdsourced AI Training"
        image={ring}
        paragraph="Empowering the Future with Decentralized Intelligence"
      />
      <TextHeavy sections={textHeavySections} />
      <EmailInput alignment="left" />
    </>
  );
}

export default HubDecentralized;
