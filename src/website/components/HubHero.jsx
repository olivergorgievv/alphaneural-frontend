export default function HubHero() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 pt-32 pb-18 max-w-screen-xl relative z-10">
        <div className="flex flex-col items-center mb-[100px] md:flex-row">
          <div className="w-full mb-8 md:mb-0">
            <div className="max-w-md md:ml-0">
              <p className="text-md text-primary font-medium">INTRODUCTION</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Decentralized AI Marketplace
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-[-200px] w-1/2 h-full">
        <img
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-w-full min-h-full object-cover"
          src="https://alphaneural.io/assets/img/three-cubes.webp"
          alt="Three cubes"
        />
      </div>
    </div>
  );
}
