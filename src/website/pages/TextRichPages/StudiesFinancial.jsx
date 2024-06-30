import HubHero from "../../components/HubHero";
import TextHeavy from "../../components/TextHeavy";
import EmailInput from "../../components/EmailInput";

import oring from "../../../assets/images/studies-ring.webp";
import ImageTextBlock from "../../components/ImageTextBlock";
import Prism from "../../../assets/images/prism.webp";

function StudiesFinancial() {
  const textHeavySections = [
    {
      title: `Revolutionizing Financial Insights with GDPR-like Data Analysis Industries Focus: Web3 Sector`,
      title2: `Objective`,
      paragraph:
        "In an ambitious project within our Decentralized AI Marketplace, AlphaNeural AI sought to leverage GDPR data dumps from centralized cryptocurrency exchanges as a rich source of insights into trading patterns, preferences, and behaviors. The goal was to create a series of AI models that could analyze this data in-depth, providing valuable insights into market trends, user behaviors, and potential regulatory impacts, all while maintaining the utmost respect for user privacy through the implementation of zkML technology.",
      space: "mb-20",
    },
    {
      title: "Methodology",
      paragraph: `Data Collection: Users were incentivized with ALPHAI tokens to upload their GDPR data dumps. These files contain comprehensive logs of users' interactions with exchanges, including transaction histories, currency preferences, and timestamps, all crucial for understanding trading behaviors.
Privacy-Preservation: Leveraging zkML technology, we ensured that the data was anonymized and encrypted, enabling data analysis without compromising individual privacy. This process allowed the platform to verify the integrity and authenticity of the data without ever accessing the raw data itself.
Community-Driven Model Development: Utilizing the crowdsourced AI training framework, community members from diverse backgrounds contributed their computational resources to train AI models on this encrypted data. The process was facilitated by the Solana blockchain, which provided a scalable and efficient infrastructure for managing contributions and rewards.
Geographical and Cryptocurrency Segmentation: Models were trained to segment data based on geographical locations and types of cryptocurrencies, aiming to uncover localized trends and preferences that could influence market dynamics.`,
      space: "mb-20",
    },
    {
      title: "Outcomes",
      paragraph: `Advanced Diagnostic AI Models: The project successfully developed AI models capable of identifying early indicators of rare diseases from complex datasets, outperforming existing models in both speed and accuracy.
Breakthrough in Privacy-Preserving AI Development: The initiative showcased a viable model for utilizing sensitive health data in AI development without compromising privacy, setting a new standard in the field.
Empowered Research and Diagnosis: Medical institutions and researchers were provided with tools that could detect rare diseases much earlier than was previously possible, significantly improving the prognosis for affected patients.`,
      space: "mb-20",
    },
    {
      title: "Implications",
      paragraph: `This case study demonstrates the transformative potential of combining decentralized AI marketplaces with privacy-preserving technologies like zkML and the computational efficiency of the Solana blockchain.
It showcases how AlphaNeural AI can harness the collective power of its user base to unlock deep market insights from sensitive data sources, all while upholding strict privacy standards.
The success of this project paves the way for further exploration into other data-rich domains where privacy concerns have previously limited the use of AI, setting a new benchmark for responsible and effective data analysis in the digital age.
`,
      space: "mb-0",
    },
  ];

  return (
    <>
      <HubHero
        text="Real-World Success and Innovations"
        image={oring}
        paragraph="Our case studies section showcases the tangible impacts of our decentralized AI marketplaces and crowdsourced AI training initiatives. Through detailed narratives, we illustrate how these technologies are being applied in the Web3 sector, highlighting successes, the challenges overcome, and the strategic advantages gained."
      />
      <ImageTextBlock
        direction="left"
        image={Prism}
        title="Integrating AI with Web3"
        description="Our case studies section showcases the tangible impacts of our decentralized AI marketplaces and crowdsourced AI training initiatives. Through detailed narratives, we illustrate how these technologies are being applied in the Web3 sector, highlighting successes, the challenges overcome, and the strategic advantages gained."
      />
      <TextHeavy sections={textHeavySections} />
      <EmailInput alignment="left" />
    </>
  );
}

export default StudiesFinancial;
