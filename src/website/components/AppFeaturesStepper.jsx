import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

import d2 from "../../assets/images/Dashboard-feature-2.webp";
import d3 from "../../assets/images/Dashboard-feature-3.webp";
import d4 from "../../assets/images/Dashboard-feature-4.webp";
import d1 from "../../assets/images/Dashboard-feature.webp";

const features = [
  {
    title: "Analytics",
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: d1,
  },
  {
    title: "Marketplace",
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: d2,
  },
  {
    title: "Movers",
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: d3,
  },
  {
    title: "Models",
    description:
      "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    image: d4,
  },
];

export function PrimaryFeatures() {
  const [loadedImages, setLoadedImages] = useState({});

  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [src]: true }));
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }
  useEffect(() => {
    features.forEach((feature) => {
      preloadImage(feature.image);
    });
  }, []);

  const [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden  pb-28 pt-20 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Product Sneak-Peek
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Explore AI innovation, where your data crafts customized models in
            our decentralized ecosystem.
          </p>
        </div> */}
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          <Tab.List className="flex overflow-x-auto md:flex-col pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            {features.map((feature) => (
              <Tab
                key={feature.title}
                className={({ selected }) =>
                  clsx(
                    "group relative rounded-2xl px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 outline-none", // Added outline-none
                    selected
                      ? "bg-[#2c2041] lg:bg-[#1A1327]  border-none" // Added border-none
                      : "hover:bg-[#181123]"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <h3
                      className={clsx(
                        "font-display text-left text-lg",
                        selected
                          ? "text-primary lg:text-white"
                          : "hover:text-white lg:text-white"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={clsx(
                        "mt-2 hidden text-left text-sm lg:block max-w-md",
                        selected
                          ? "text-white"
                          : "text-blue-100 group-hover:text-white"
                      )}
                    >
                      {feature.description}
                    </p>
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="lg:col-span-7">
            {features.map((feature) => (
              <Tab.Panel key={feature.title}>
                <div className="relative sm:px-6 lg:hidden">
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-10 w-[45rem] overflow-hidden rounded-xl shadow-2xl shadow-blue-900/40 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <div className="relative" style={{ paddingBottom: "56.25%" }}>
                    {" "}
                    {/* 16:9 aspect ratio */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                        loadedImages[feature.image]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
