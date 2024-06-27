/* eslint-disable react/no-unknown-property */
export default function StepperHero() {
  return (
    <section className="py-8 px-4 sm:py-24 lg:px-6">
      <div className="gap-8 flex flex-col items-center mx-auto max-w-screen-xl xl:gap-20 lg:grid lg:grid-cols-12">
        <div className="col-span-7 mt-4 md:mt-0">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold ">
            AlphaNeural AI Roadmap Our Journey to Decentralizing AI
          </h2>
          <p className="mb-6 font-normal md:text-base text-description-gray">
            Welcome to AlphaNeural AI, where cutting-edge AI meets blockchain
            technology. Our meticulously designed tokenomics underpin the
            sustainable growth and long-term viability of our platform,
            facilitated by our native token, ALPHAI.
          </p>
          <button className="flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-2">
            Explore
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

        <div className="col-span-5 flex flex-col py-10 gap-5 px-3 lg:px-10 rounded-3xl relative overflow-hidden w-full">
          <ol className="relative border-s-2 border-primary/40 border-dashed">
            <li className="mb-10 ms-10 flex items-center">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-[17px] ">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.7212"
                    cy="12.3467"
                    r="11.1274"
                    fill="#0C041B"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle
                    cx="12.721"
                    cy="12.3468"
                    r="6.77888"
                    fill="white"
                    stroke="white"
                  />
                </svg>
              </span>
              <h3 className="font-medium text-description-gray text-xs md:text-sm leading-tight">
                <span className="font-bold text-normal lg:text-base text-white text-nowrap">
                  Phase 1
                </span>{" "}
                Foundation and Initial DEX Offering (IDO)
              </h3>
            </li>
            <li className="mb-10 ms-10 flex items-center">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-[17px] ">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10.7215"
                    cy="10.9027"
                    r="9.5765"
                    fill="#0C041B"
                    stroke="#B092E7"
                    stroke-width="3"
                  />
                </svg>
              </span>
              <h3 className="font-medium text-description-gray text-xs md:text-sm leading-tight">
                <span className="font-bold text-normal lg:text-base text-white text-nowrap">
                  Phase 2
                </span>{" "}
                Platform Development and Beta Testing
              </h3>
            </li>
            <li className="mb-10 ms-10 flex items-center">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-[17px] ">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10.7215"
                    cy="10.9027"
                    r="9.5765"
                    fill="#0C041B"
                    stroke="#B092E7"
                    stroke-width="3"
                  />
                </svg>
              </span>
              <h3 className="font-medium text-description-gray text-xs md:text-sm leading-tight">
                <span className="font-bold text-normal lg:text-base text-white text-nowrap">
                  Phase 3
                </span>{" "}
                Public Launch and Ecosystem Expansion
              </h3>
            </li>
            <li className="ms-10 flex items-center">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-[17px] ">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10.7215"
                    cy="10.9027"
                    r="9.5765"
                    fill="#0C041B"
                    stroke="#B092E7"
                    stroke-width="3"
                  />
                </svg>
              </span>
              <h3 className="font-medium text-description-gray text-xs md:text-sm leading-tight">
                <span className="font-bold text-normal lg:text-base text-white text-nowrap">
                  Phase 4
                </span>{" "}
                Growth and Diversification
              </h3>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
