import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

// import { Container } from "@/components/Container";
// import backgroundImage from "@/images/background-features.jpg";
// import screenshotExpenses from "@/images/screenshots/expenses.png";
// import screenshotPayroll from "@/images/screenshots/payroll.png";
// import screenshotReporting from "@/images/screenshots/reporting.png";
// import screenshotVatReturns from "@/images/screenshots/vat-returns.png";

const features = [
  {
    title: "Payroll",
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image:
      "https://images.weserv.nl/?url=https://prod-dropshipping-s3.s3.fr-par.scw.cloud/2024/06/Frame-3922628-1-8205e237-783.jpg&q=90&fit=cover&output=webp",
  },
  {
    title: "Claim expenses",
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image:
      "https://images.weserv.nl/?url=https://prod-dropshipping-s3.s3.fr-par.scw.cloud/2024/06/Frame-3922630-309d0fce-4dc.jpg&q=90&fit=cover&output=webp",
  },
  {
    title: "VAT handling",
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image:
      "https://images.weserv.nl/?url=https://prod-dropshipping-s3.s3.fr-par.scw.cloud/2024/06/Frame-3922630-309d0fce-4dc.jpg&q=90&fit=cover&output=webp",
  },
  {
    title: "Reporting",
    description:
      "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    image:
      "https://images.weserv.nl/?url=https://prod-dropshipping-s3.s3.fr-par.scw.cloud/2024/06/Frame-3922630-309d0fce-4dc.jpg&q=90&fit=cover&output=webp",
  },
];

export function PrimaryFeatures() {
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
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to run your books.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you aren&apos;t that picky about minor
            details like tax compliance.
          </p>
        </div>
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
                    "group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                    selected
                      ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                      : "hover:bg-white/10 lg:hover:bg-white/5"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <h3
                      className={clsx(
                        "font-display text-lg",
                        selected
                          ? "text-blue-600 lg:text-white"
                          : "text-blue-100 hover:text-white lg:text-white"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={clsx(
                        "mt-2 hidden text-sm lg:block",
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
                <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <img src={feature.image} />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
