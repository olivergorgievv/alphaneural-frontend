/* eslint-disable react/prop-types */
export default function HubHero({ text, image, paragraph }) {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 pt-32 pb-18 max-w-screen-xl relative z-10">
        <div className="flex flex-col items-start mb-[100px] md:flex-row">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <div className="max-w-2xl">
              <p className="text-md text-primary mb-4 font-medium">
                INTRODUCTION
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {text}
              </h1>
              <p className="text-lg text-description-gray mt-4">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden absolute top-[40px] right-[-50px] w-[30%] sm:block">
        <img
          className="w-full h-full object-contain object-right-top"
          src={image}
          alt="Decorative cubes"
        />
      </div>
    </div>
  );
}
