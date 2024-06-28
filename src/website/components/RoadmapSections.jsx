import roadmapImage from "../../assets/icons/roadmap-line.svg";
import { useCheckMobileScreen } from "../utils/isMobile";

export default function RoadmapSections() {
  const isMobile = useCheckMobileScreen();
  const sections = [
    {
      title: "Phase 1: Foundation and Initial DEX Offering (IDO)",
      content: [
        "Release the technical whitepaper detailing platform architecture, integration of the SPL22 and zkML technology.",
        "Finalize platform architecture design on Solana, focusing on high throughput and efficiency.",
        "Assemble the initial development team with expertise in Solana blockchain development and AI.",
        "Begin building a community within the Solana ecosystem through leadership and engagement initiatives.",
        "Prepare for the Initial DEX Offering (IDO) on the Solana blockchain.",
      ],
    },
    {
      title: "Phase 2: Platform Development & Beta Testing",
      content: [
        "Develop and deploy smart contracts using Anchor to support tokenomics and manage zkML interactions.",
        "Establish protocols for secure and efficient data sharing and AI model training.",
        "Launch an alpha version of the platform for limited early adopter testing, focusing on core functionalities of AI model training and data sharing.",
        "Establish and solidify partnerships within the Solana ecosystem to enrich the platform's offerings.",
        "Conduct necessary security audits and compliance checks to ensure the platform's readiness for public release.",
      ],
    },
    {
      title: "Phase 3: Public Launch and Ecosystem Expansion",
      content: [
        "Publicly launch the decentralized AI marketplace on Solana with integrated zkML technology.",
        "Enhance the utility of ALPHAI tokens using the Solana SPL Token standard for transactions, staking, and governance.",
        "Introduce a blockchain-based AI model certification program to authenticate model integrity.",
        "Initiate a marketing campaign to highlight the integration with Solana and the platform's unique features.",
      ],
    },
    {
      title: "Phase 4: Growth and Diversification",
      content: [
        "Monitor and optimize the live platform, incorporating user feedback to continuously improve functionality and user experience.",
        "Expand the range of AI services and applications, exploring new use cases that leverage the privacy and efficiency of the zkML technology within the Solana ecosystem.",
        "Increase the ecosystem incentives and rewards program to motivate ongoing community contributions and enhance data sharing and AI model training activities.",
        "Continue to forge and deepen strategic partnerships and integration efforts within the Solana ecosystem to broaden the platform's capabilities and reach.",
      ],
    },
    {
      title: "Phase 5: Scaling and Diversification",
      content: [
        "Enhance platform scalability to support a growing user base and more complex AI applications, maintaining performance and cost-effectiveness.",
        "Diversify AI service offerings to cover additional industries and sectors, creating tailored solutions that meet specific needs and regulatory requirements.",
        "Introduce more advanced zkML functionalities and improved blockchain integrations to keep up with technological advancements and market demands.",
        "Develop and promote a global outreach program to attract international users and stakeholders, expanding the platform's footprint and reinforcing its position in the market.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-32 pb-18 max-w-screen-xl relative">
      {!isMobile && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <img src={roadmapImage} className="h-full object-contain" />
        </div>
      )}

      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-[100px] ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div
              className={`max-w-md mx-auto ${
                index % 2 === 0 ? "md:ml-0" : "md:mr-0"
              }`}
            >
              <h1 className="text-3xl font-bold mb-6">{section.title}</h1>
              <ul>
                {section.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-base text-description-gray mb-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
