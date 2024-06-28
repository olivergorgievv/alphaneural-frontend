export default function CenteredHero() {
  return (
    <section>
      <div className=" px-4 pt-24 pb-8 md:pb-10 mx-auto max-w-screen-xl text-center lg:pt-32 lg:px-12">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl">
          AlphaNeural AI Tokenomics A Detailed Blueprint
        </h1>
        <p className="mb-8 text-lg font-normal text-description-gray lg:text-xl sm:px-16 xl:px-48 ">
          Welcome to AlphaNeural AI, where cutting-edge AI meets blockchain
          technology. Our diligent designed tokenomics underpin the sustainable
          growth and long-term viability of our platform, driven by our SPL
          token,
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button className="flex items-center text-lg justify-center gap-2 rounded-full bg-primary px-20 md:px-14 py-2">
            Roadmap
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.97 6.20146L12.72 1.68739C12.4996 1.5656 12.2518 1.50171 12 1.50171C11.7482 1.50171 11.5004 1.5656 11.28 1.68739L3.03 6.20333C2.7944 6.33224 2.59772 6.52204 2.46052 6.75292C2.32331 6.98379 2.25061 7.24727 2.25 7.51583V16.4821C2.25061 16.7506 2.32331 17.0141 2.46052 17.245C2.59772 17.4759 2.7944 17.6657 3.03 17.7946L11.28 22.3105C11.5004 22.4323 11.7482 22.4962 12 22.4962C12.2518 22.4962 12.4996 22.4323 12.72 22.3105L20.97 17.7946C21.2056 17.6657 21.4023 17.4759 21.5395 17.245C21.6767 17.0141 21.7494 16.7506 21.75 16.4821V7.51677C21.7499 7.24773 21.6774 6.98367 21.5402 6.75225C21.403 6.52084 21.206 6.3306 20.97 6.20146ZM12 11.2499L4.46719 7.12489L12 2.99989L19.5328 7.12489L12 11.2499ZM12.75 20.5911V12.5465L20.25 8.44208V16.4821L12.75 20.5911Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
