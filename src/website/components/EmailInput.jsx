/* eslint-disable react/prop-types */
export default function EmailInput({ roadmap, alignment = "center" }) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className={`max-w-screen-md ${alignmentClasses[alignment]}`}>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            {roadmap
              ? "Long-Term Vision and Innovation"
              : "Be Part of the Future"}
          </h2>
          <p className="mb-6 font-normal md:text-base text-description-gray">
            {roadmap
              ? "AlphaNeural AI is committed to maintaining its role as a leader in the decentralized AI market through ongoing innovation and strategic growth. Our focus will be on enhancing the platform's technological capabilities and expanding its use cases to meet the diverse needs of a global audience. We will continue to invest in research and development, adapting to new technologies and market trends while fostering strong community engagement and forming strategic collaborations. This approach will ensure that AlphaNeural AI remains at the forefront of AI and blockchain integration, delivering robust, privacy-centric solutions across various industries."
              : "Join the AlphaNeural AI revolution, where innovative AI solutions are made accessible through blockchain technology. With ALPHAI tokens, you're not just investing in a token; you're becoming part of a movement towards a smarter, more connected world."}
          </p>
          <form>
            <div
              className={`flex ${alignment === "left" ? "" : "justify-center"}`}
            >
              <div
                className={`relative w-full ${
                  alignment === "left" ? "max-w-lg" : "max-w-lg mx-auto"
                }`}
              >
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-4 placeholder-white placeholder-base pl-10 w-full text-sm bg-accent-dark rounded-full border border-primary/30 focus:ring-primary focus:border-primary"
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-2 right-3 bottom-2 px-8 text-sm font-medium text-white bg-primary rounded-full focus:ring-4 focus:outline-none focus:ring-primary flex items-center justify-center"
                >
                  Stay in touch!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
