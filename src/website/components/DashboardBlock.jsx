import dashboard from "../../assets/images/Dashboard.webp";

export default function DashboardBlock() {
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12">
          <p className="mb-2 font-base text-description-gray md:text-xl lg:text-2xl sm:px-16 xl:px-48">
            Real-time transactions on the Solana Blockchain
          </p>
          <h1 className="mb-10 text-3xl font-extrabold tracking-tight leading-none  md:text-4xl ">
            AlphaNeural AI is the Living Machine Learning Hub
          </h1>
          <img
            className="mx-auto mb-5 lg:mb-8 rounded-lg shadow-xl"
            src={dashboard}
            alt="dashboard overview"
          />
        </div>
      </section>
    </>
  );
}
