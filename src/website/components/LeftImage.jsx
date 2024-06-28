/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import spiderweb from "../../assets/spiderweb.svg";

export default function LeftImage({ roadmap }) {
  return (
    <>
      <section>
        <div
          className={`gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-20 sm:py-16 lg:px-6 ${
            roadmap ? "md:grid md:grid-cols-5" : "md:flex md:flex-row"
          }`}
        >
          {!roadmap && (
            <div className="border-2 flex flex-col py-12 px-12 rounded-3xl border-primary/20 bg-custom-radial relative overflow-hidden md:w-1/2">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                Introducing the SPL22 NFT
              </h2>
              <p className="mb-6 font-normal md:text-base text-description-gray">
                Solana will soon enable SPL22 NFTs, which will act as a gateway
                to a Collaborative AI Ecosystem on AlphaNeural. Join us, and
                shape the future of AI together.
              </p>
              <a href="#" className="underline text-lg z-10">
                Learn more about SPL22 NFTs
              </a>
              <img
                src={spiderweb}
                className="absolute right-[-60px] bottom-[-140px]"
              />
            </div>
          )}

          {roadmap && (
            <div className="border-2 flex flex-col gap-3 py-12 px-12 rounded-3xl border-primary/20 bg-custom-radial relative overflow-hidden md:col-span-2">
              <svg
                width="72"
                height="61"
                viewBox="0 0 72 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M71.3346 48.1987L59.6296 60.2717C59.3765 60.5339 59.0699 60.7432 58.7289 60.8864C58.388 61.0296 58.02 61.1037 57.648 61.104H2.16173C1.89709 61.1039 1.63823 61.0295 1.41686 60.89C1.19549 60.7505 1.0212 60.552 0.91535 60.3187C0.809498 60.0853 0.77667 59.8274 0.820886 59.5764C0.865102 59.3254 0.984443 59.0923 1.1643 58.9055L12.856 46.8326C13.1092 46.5704 13.4158 46.3611 13.7568 46.2179C14.0977 46.0747 14.4657 46.0006 14.8377 46.0002H70.3239C70.591 45.9949 70.8537 46.0657 71.0791 46.2037C71.3044 46.3417 71.4823 46.5407 71.5903 46.7757C71.6984 47.0107 71.7317 47.2712 71.6862 47.5244C71.6407 47.7777 71.5184 48.0123 71.3346 48.1987ZM59.6296 23.8813C59.3755 23.6203 59.0687 23.4118 58.728 23.2687C58.3872 23.1256 58.0197 23.0508 57.648 23.0489H2.16173C1.89709 23.0491 1.63823 23.1235 1.41686 23.263C1.19549 23.4024 1.0212 23.601 0.91535 23.8343C0.809498 24.0677 0.77667 24.3256 0.820886 24.5766C0.865102 24.8276 0.984443 25.0607 1.1643 25.2475L12.856 37.3268C13.1102 37.5878 13.417 37.7962 13.7577 37.9394C14.0984 38.0825 14.4659 38.1573 14.8377 38.1591H70.3239C70.588 38.1578 70.846 38.0825 71.0663 37.9425C71.2867 37.8026 71.46 37.6039 71.565 37.3709C71.6701 37.1378 71.7023 36.8803 71.6579 36.6299C71.6135 36.3795 71.4942 36.147 71.3148 35.9606L59.6296 23.8813ZM2.16173 15.2079H57.648C58.02 15.2076 58.388 15.1335 58.7289 14.9903C59.0699 14.8471 59.3765 14.6378 59.6296 14.3755L71.3346 2.30258C71.4718 2.16305 71.5752 1.99609 71.6376 1.81362C71.6999 1.63116 71.7196 1.4377 71.6951 1.24707C71.6707 1.05645 71.6028 0.873375 71.4963 0.710929C71.3898 0.548483 71.2473 0.410681 71.0789 0.307373C70.8536 0.169459 70.5909 0.098715 70.3239 0.10404H14.8377C14.4657 0.104416 14.0977 0.178522 13.7568 0.321736C13.4158 0.464949 13.1092 0.674199 12.856 0.936436L1.1643 13.0094C0.984443 13.1961 0.865102 13.4292 0.820886 13.6802C0.77667 13.9312 0.809498 14.1892 0.91535 14.4225C1.0212 14.6558 1.19549 14.8544 1.41686 14.9939C1.63823 15.1334 1.89709 15.2078 2.16173 15.2079Z"
                  fill="url(#paint0_linear_1_1586)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1586"
                    x1="6.78558"
                    y1="62.5591"
                    x2="62.4534"
                    y2="-2.68233"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.08" stop-color="#9945FF" />
                    <stop offset="0.3" stop-color="#8752F3" />
                    <stop offset="0.5" stop-color="#5497D5" />
                    <stop offset="0.6" stop-color="#43B4CA" />
                    <stop offset="0.72" stop-color="#28E0B9" />
                    <stop offset="0.97" stop-color="#19FB9B" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="font-normal md:text-lg text-description-gray">
                Powering tools and integrations from compaines all around the
                world, the best place for us.
              </p>
              <a href="#" className="underline text-lg z-10">
                Learn More
              </a>
            </div>
          )}

          <div
            className={`mt-16 md:mt-0 ${
              roadmap ? "md:col-span-3" : "md:w-1/2"
            }`}
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
              Elevating AI Accessibility and Innovation
            </h2>
            <p className="mb-6 font-normal md:text-base text-description-gray">
              AlphaNeural AI redefines AI development by leveraging the power of
              decentralization. Our platform allows seamless collaboration
              between developers, data scientists and companies, allowing them
              to tap into the collective wisdom of AI. <br />
              <br />
              Whether you’re an individual, a startup looking to innovate or an
              established company exploring AI integration, our tools and
              community are engineered to help your projects forward while
              incentivizing everyone with our token economy.
            </p>
            {roadmap && (
              <div className="sm:flex-wrap gap-4 flex justify-between items-center">
                <div className="flex flex-col items-center border px-4 py-4 sm:px-8 sm:py-3 rounded-2xl bg-custom-radial border-primary/20">
                  <h3 className="text-sm sm:text-3xl font-bold">300M+</h3>
                  <p className="text-[8px] sm:text-xs">NFTS MINTED</p>
                </div>
                <div className="flex flex-col items-center border px-4 py-4 sm:px-8 sm:py-3 rounded-2xl bg-custom-radial border-primary/20">
                  <h3 className="text-sm sm:text-3xl font-bold">300M+</h3>
                  <p className="text-[8px] sm:text-xs">NFTS MINTED</p>
                </div>
                <div className="flex flex-col items-center border px-4 py-4 sm:px-8 sm:py-3 rounded-2xl bg-custom-radial border-primary/20">
                  <h3 className="text-sm sm:text-3xl font-bold">300M+</h3>
                  <p className="text-[8px] sm:text-xs">NFTS MINTED</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
