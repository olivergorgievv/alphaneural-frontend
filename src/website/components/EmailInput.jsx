export default function EmailInput() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
            Be Part of the Future
          </h2>
          <p className="mb-6 font-normal md:text-base text-description-gray">
            Join the AlphaNeural AI revolution, where innovative AI solutions
            are made accessible through blockchain technology. With ALPHAI
            tokens, you&apos;re not just investing in a token; you&apos;re
            becoming part of a movement towards a smarter, more connected world.
          </p>
          {/* <form action="#" className="mx-auto max-w-screen-sm">
            <div className="flex items-center mb-3">
              <div className="relative mr-3 w-full">
                <label
                  for="member_email"
                  className="hidden mb-2 text-sm font-medium"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm bg-gray-900 rounded-2xl border border-primary/40 focus:ring-primary focus:border-primary  "
                  placeholder="Enter your email"
                  type="email"
                  name="member[email]"
                  id="member_email"
                  required=""
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Subscribe"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-2xl cursor-pointer bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                  name="member_submit"
                  id="member_submit"
                />
              </div>
            </div>
          </form> */}
          <form>
            <div className="flex">
              <div className="relative w-full max-w-lg mx-auto">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-4 placeholder-white placeholder-base pl-10 w-full text-sm bg-accent-dark rounded-full border border-primary/30 focus:ring-primary focus:border-primary"
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-2 right-3 bottom-2 px-8 text-sm font-medium text-white bg-primary rounded-full focus:ring-4 focus:outline-none focus:ring-primary  flex items-center justify-center"
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
