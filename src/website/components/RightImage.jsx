import spiderweb from "../../assets/spiderweb.svg";
import cube from "../../assets/images/Cube.webp";

export default function RightImage() {
  return (
    <>
      <section>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-20 md:grid md:grid-cols-2 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
              Revolutionizing AI with Your Data
            </h2>
            <p className="mb-6 font-normal md:text-base text-description-gray">
              Whether you need specific datasets to train your AI model or you
              have datasets to contribute. AlphaNeural AI allows you to monetize
              your data in a reliable and legitimate way. <br />
              <br />
              Both synthetic and non-synthetic data are useful for AI model
              training on AlphaNeural AI. Data contributors receive an NFT after
              their data is hashed on the blockchain.
            </p>
          </div>

          <img src={cube} />
        </div>
      </section>
    </>
  );
}
