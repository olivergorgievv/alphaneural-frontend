/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Sphere from "../../assets/images/SphereTokens.webp";

import circle from "../../assets/icons/circle-roadmap.svg";
import cube from "../../assets/icons/cube-roadmap.svg";

export default function LeftImageStepper() {
  return (
    <>
      <section>
        <div className="gap-8 py-2 px-4 mx-auto max-w-screen-xl xl:gap-20 sm:py-16 lg:px-6 md:grid md:grid-cols-2 md:items-center">
          <div className="flex flex-col place-self-center">
            <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold ">
              Token Essentials
            </h2>
            <p className="mb-6 font-normal md:text-base text-description-gray">
              In an era where privacy is paramount, AlphaNeural AI stands out by
              offering a Solana-powered platform that leverages zkML for the
              ultimate in data protection and model integrity.
            </p>
            <div className="flex flex-col gap-2 ">
              <div className="mb-8 gap-4 flex items-center sm:space-y-0 ">
                <img src={cube} />
                <p className="max-w-md text-description-gray">
                  Token Type: Utility token on the Solana blockchain, renowned
                  for its robust security and extensive ecosystem.
                </p>
              </div>
              <div className="mb-8 gap-4 flex items-center sm:space-y-0 ">
                <img src={circle} />
                <p className="max-w-md text-description-gray">
                  Token Type: Utility token on the Solana blockchain, renowned
                  for its robust security and extensive ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={Sphere}></img>
          </div>
        </div>
      </section>
    </>
  );
}
