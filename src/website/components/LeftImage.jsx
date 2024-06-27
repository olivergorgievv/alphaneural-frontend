/* eslint-disable react/prop-types */
import spiderweb from "../../assets/spiderweb.svg";

export default function LeftImage({ roadmap }) {
  return (
    <>
      <section>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-20 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="border-2 flex flex-col  py-12 px-12 rounded-3xl border-primary/20 bg-custom-radial relative overflow-hidden">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Introducing the SPL22 NFT
            </h2>
            <p className="mb-6 font-normal md:text-base text-description-gray">
              Solana will soon enable SPL22 NFTs, which will act as a gateway to
              a Collaborative AI Ecosystem on AlphaNeural. Join us, and shape
              the future of AI together.
            </p>
            <a href="#" className="underline text-lg z-10">
              Learn more about SPL22 NFTs
            </a>
            <img
              src={spiderweb}
              className="absolute right-[-60px] bottom-[-140px]"
            />
          </div>
          <div className="mt-16 md:mt-0">
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
