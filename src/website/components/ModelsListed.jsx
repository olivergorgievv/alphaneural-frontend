import cohere from "../../assets/icons/cohere.svg";
import mistralai from "../../assets/icons/mistralai.svg";
import xai from "../../assets/icons/xai.svg";
import downloadIcon from "../../assets/icons/download-icon.svg";

export default function ModelsListed() {
  return (
    <>
      <section>
        <div className="gap-8 flex flex-col items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-20 lg:grid lg:grid-cols-12 sm:py-16 lg:px-6">
          <div className="col-span-7 mt-4 md:mt-0">
            <h2 className="mb-4 text-3xl tracking-tight font-bold ">
              Empowering Personalization with Zero-Knowledge Machine Learning
            </h2>
            <p className="mb-6 font-normal md:text-base text-description-gray">
              AlphaNeural AI redefines personalized AI through privacy and
              decentralization. By embedding Zero-Knowledge Machine Learning
              (zkML) from the start, we ensure your data contributions remain
              confidential, setting the stage for a new era of secure,
              personalized AI applications.
            </p>
            <button className="flex items-center justify-center gap-4 rounded-full bg-primary px-10 py-2">
              Let&apos;s Build!
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6323 0.918449L0.492828 10.0009C-0.133546 10.5685 0.218789 11.6157 1.06048 11.694L8.97823 12.4574L4.2315 19.0735C4.01618 19.3769 4.04554 19.7977 4.30979 20.062C4.6034 20.3556 5.0634 20.3654 5.3668 20.0816L15.5062 10.9992C16.1326 10.4315 15.7803 9.38428 14.9386 9.30598L7.02082 8.54259L11.7676 1.92652C11.9829 1.62312 11.9535 1.20227 11.6893 0.938023C11.5509 0.796712 11.3625 0.715461 11.1648 0.711799C10.967 0.708137 10.7758 0.782358 10.6323 0.918449Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-5 border-2 px-4 flex flex-col py-10 gap-2 md:px-10 rounded-3xl border-primary/10 relative overflow-hidden bg-custom-radial">
            <div className="absolute inset-0 bg-gradient-to-t from-[#080214] to-transparent pointer-events-none"></div>
            <div className="flex flex-col gap-10 px-5 justify-between border-[1.5px] items-center border-primary/30 rounded-2xl py-4 bg-[#190E2E] w-[300px] sm:w-[400px] mx-auto md:w-[400px] lg:w-full">
              <div className="flex gap-6 justify-between md:w-full">
                <img src={cohere} alt="Cohere" />
                <div className="flex flex-col gap-2 justify-between w-full">
                  <div className="flex justify-between w-full">
                    <p className="text-base">CohereForAI</p>
                    <p className="text-primary text-sm">100 ALPHAI</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-description-gray text-base">
                      text-to-image
                    </p>
                    <p className="text-description-gray text-base flex items-center gap-2">
                      <img src={downloadIcon} />
                      36.8k
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-5 justify-between border-[1.5px] items-center border-primary/30 rounded-2xl py-4 bg-[#190E2E] w-[300px] sm:w-[400px] mx-auto md:w-[400px] lg:w-full">
              <div className="flex gap-6 justify-between md:w-full">
                <img src={mistralai} alt="Cohere" />
                <div className="flex flex-col gap-2 justify-between w-full">
                  <div className="flex justify-between w-full">
                    <p className="text-base">mistralai</p>
                    <p className="text-primary text-sm">100 ALPHAI</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-description-gray text-base">
                      text-to-image
                    </p>
                    <p className="text-description-gray text-base flex items-center gap-2">
                      <img src={downloadIcon} />
                      874k
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-5 justify-between border-[1.5px] items-center border-primary/30 rounded-2xl py-4 bg-[#190E2E] w-[300px] sm:w-[400px] mx-auto md:w-[400px] lg:w-full">
              <div className="flex gap-6 justify-between md:w-full">
                <img src={xai} alt="Cohere" />
                <div className="flex flex-col gap-2 justify-between w-full">
                  <div className="flex justify-between w-full">
                    <p className="text-base">xai-org/grok-1</p>
                    <p className="text-primary text-sm">100 ALPHAI</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-description-gray text-base">
                      text-to-image
                    </p>
                    <p className="text-description-gray text-base flex items-center gap-2">
                      <img src={downloadIcon} />
                      34k
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
