import Thunderbolt from "../../assets/Thunderbolt.svg";
import { clients } from "./data/partners";

export default function Herosection() {
  return (
    <section className="pt-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <a
          href="#"
          className="mb-7 inline-flex items-center justify-between gap-3 rounded-full px-1 py-1 pr-4 text-sm"
          role="alert"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.1176"
              cy="10.5099"
              r="10.0851"
              fill="#7F6ECA"
              // eslint-disable-next-line react/no-unknown-property
              fill-opacity="0.31"
            ></circle>
            <circle
              cx="10.1173"
              cy="10.5097"
              r="6.01113"
              fill="#7F6ECA"
            ></circle>
          </svg>
          <span className="text-sm font-medium">
            App v1.0 Demo is here. Check it out!
          </span>
        </a>
        <div className="flex items-center justify-center">
          <h1 className="mb-4 flex flex-wrap items-center justify-center md:gap-4 text-4xl font-extrabold text-white md:flex md:items-center md:text-5xl lg:text-6xl">
            The Decentralized
            <img src={Thunderbolt} className="block w-14 md:w-20" />
            AI Community
          </h1>
        </div>

        <p className="lg:text-md mb-8 text-lg font-normal text-description-gray sm:px-16 xl:px-48">
          AlphaNeural AI is your hub for collaborative AI innovation. Join our
          global community to develop, share, and monetize AI technologies in a
          secure yet open ecosystem.
        </p>
        <div className="mb-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          <button className="flex items-center justify-center gap-4 rounded-full bg-primary px-20 md:px-10 py-2">
            Lets Build!
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
          <button className="items-center justify-center gap-4 rounded-full border-2 border-primary/50 px-20 md:px-10 py-2 text-description-gray md:flex">
            Launch App
          </button>
        </div>

        <div className="overflow-hidden py-8">
          <div className="flex animate-mobile md:animate-left">
            <div className="mr-4 flex w-max gap-4 ">
              {clients.map((client, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex w-[13rem] items-center justify-center rounded-xl p-6 shadow-md hover:brightness-150 transition-all"
                >
                  <img
                    src={client.logo}
                    className="h-full w-full object-contain"
                  />
                </a>
              ))}
            </div>
            <div className="flex w-max gap-4">
              {clients.map((client, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex w-[13rem] items-center justify-center rounded-xl p-6 shadow-md"
                >
                  <img
                    src={client.logo}
                    className="h-full w-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
