import shield from "../../assets/icons/shield.svg";
import key from "../../assets/icons/key.svg";
import gpt from "../../assets/icons/gpt.svg";
import aistar from "../../assets/icons/ai-star.svg";
import cube from "../../assets/icons/cube.svg";
import worldstar from "../../assets/icons/world-star.svg";
import tower from "../../assets/icons/tower.svg";
import shieldstar from "../../assets/icons/shield-star.svg";
import chip from "../../assets/icons/chip.svg";

// eslint-disable-next-line react/prop-types
export default function Features({ rows }) {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-lg mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            {rows === "6"
              ? "   We provide the Ecosystem where Innovation meets Security"
              : "Key Release Schedule Features"}
          </h2>
          {rows === "6" && (
            <p className="text-description-gray sm:text-xl">
              Whether you need specific datasets to train your AI model or you
              have datasets to contribute. AlphaNeural AI allows you to monetize
              your data in a reliable and legitimate way.
            </p>
          )}
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100">
              <img src={rows === "3" ? tower : shield} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#AF95FE]">
              Privacy-Preserved Data Contribution
            </h3>
            <p className="text-description-gray">
              Your data remains protected with advanced Zero-Knowledge Machine
              Learning technologies.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100">
              <img src={rows === "3" ? shieldstar : key} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#B197FF]">
              Open Innovation
            </h3>
            <p className="text-description-gray">
              Access a marketplace where fresh ideas meet real-world
              applications and community-driven enhancements.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100">
              <img src={rows === "3" ? chip : gpt} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#825BE5]">
              Scalable Technology
            </h3>
            <p className="text-description-gray ">
              Utilize a robust, scalable infrastructure capable of supporting
              large-scale AI model training and deployment.
            </p>
          </div>
          {rows === "6" && (
            <>
              <div>
                <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100">
                  <img src={aistar} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#468DC6]">
                  Dynamic Pricing
                </h3>
                <p className="text-description-gray">
                  Utilizing Solana for dynamic pricing ensures that the cost of
                  accessing and using AI models is fair, transparent, and
                  market-responsive.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100">
                  <img src={cube} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#B197FF]">
                  Decentralized Governance
                </h3>
                <p className="text-description-gray ">
                  Participate in a democratic ecosystem where every member has a
                  voice in shaping the future of the platform.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100">
                  <img src={worldstar} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#825BE5]">
                  Token Utility & Incentives
                </h3>
                <p className="text-description-gray ">
                  Benefit from a token-based system that rewards contributions
                  and ensures fair revenue distribution.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
