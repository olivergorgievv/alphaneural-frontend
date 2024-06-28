/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWrapper = ({ data, options, onClick }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <Pie ref={chartRef} data={data} options={options} onClick={onClick} />;
};

export default function PieChart() {
  const [chartKey, setChartKey] = useState(Date.now());

  const chartData = {
    labels: [
      "Advisors",
      "Liquidity Pool and Exchange Listings",
      "Community and Developer Grants ",
      "Reserve / Contingency Fund",
      "Research and Development ",
      "Team",
      "Partnerships and Ecosystem",
      "Community Rewards ",
      "Public Sale",
    ],
    datasets: [
      {
        data: [10, 5, 5, 5.25, 15, 15, 10, 20, 15],
        backgroundColor: [
          "#B4A4E6",
          "#66549F",
          "#FF79B1",
          "#F765A3",
          "#FF207E",
          "#16BFD6",
          "#38227F",
          "#6852B0",
        ],
        borderColor: ["#22173E"],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 30,
        bottom: 30,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    // Force re-render of chart on component mount
    setChartKey(Date.now());
  }, []);

  return (
    <>
      <section>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-24 sm:py-16 lg:px-6 md:grid md:grid-cols-5">
          <div className="border-2 flex flex-col gap-3 py-12 px-12 rounded-3xl border-primary/20 bg-custom-radial relative overflow-hidden md:col-span-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl tracking-tight text-center font-extrabold">
                Total parts based on info and data.
              </h2>
              <div className="flex flex-col items-center justify-center">
                <p className="font-base md:text-normal text-description-gray">
                  Updated 9th July
                </p>
                <p className="font-bold md:text-xl">Alpha Neural Tokenomics </p>
              </div>
              <div style={{ height: "350px", width: "100%" }}>
                <ChartWrapper
                  key={chartKey}
                  data={chartData}
                  options={chartOptions}
                />
              </div>
              <h2 className="text-xl md:text-2xl tracking-tight font-extrabold">
                List tokenomics
              </h2>
              <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#66549F]"></div>
                      <p>Advisors</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#FF79B1]"></div>
                      <p>Community</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#F765A3]"></div>
                      <p>Development</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#16BFD6]"></div>
                      <p>Partnerships</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#6852B0]"></div>
                      <p>Public Sale</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#66549F]"></div>
                      <p>Liquidity</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#F765A3]"></div>
                      <p>Reserve</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#FF207E]"></div>
                      <p>Team</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#38227F]"></div>
                      <p>Rewards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 md:mt-0 md:col-span-3">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
              Elevating AI Accessibility and Innovation
            </h2>
            <p className="mb-6 font-normal md:text-base text-description-gray">
              Public Sale - 15% (150 Million ALPHAI Tokens) Initiate your
              journey with AlphaNeural AI through our public sale, designed for
              wide accessibility, laying the groundwork for a robust and engaged
              community from the outset. <br />
              <br />
              Team - 15% (150 Million ALPHAI Tokens) Compensating the visionary
              minds and diligent hands crafting AlphaNeural AI. This allocation
              incorporates a 6-month cliff, followed by 36 months of gradual
              vesting, aligning our core team&apos;s motivations with the
              ecosystem&apos;s enduring prosperity.
              <br />
              <br />
              Advisors - 10% (100 Million ALPHAI Tokens) Acknowledging the
              strategic acumen of our advisors with a tailored allocation.
              Subject to the same 6-month cliff and 36-month vesting schedule,
              this ensures sustained guidance and collaboration.
              <br /> <br />
              Community Rewards - 20% (200 Million ALPHAI Tokens) A tribute to
              our community&apos;s engagement, participation, and contributions.
              This pool is dedicated to rewarding the active involvement in data
              sharing, model development, and governance processes that fuel our
              ecosystem&apos;s growth.
              <br /> <br />
              Research and Development - 15% (150 Million ALPHAI Tokens) Driving
              relentless innovation with tokens earmarked for research and
              development, ensuring AlphaNeural AI remains at the forefront of
              AI and blockchain advancements.
              <br />
              Partnerships and Ecosystem - 10% (100 Million ALPHAI Tokens)
              Allocated for nurturing strategic alliances and expanding our
              ecosystem, facilitating seamless integration with the broader
              blockchain and AI sectors.
              <br /> <br />
              Liquidity Pool and Exchange Listings - 5% (50 Million ALPHAI
              Tokens) Enhancing the ALPHAI token&apos;s market presence and
              accessibility through strategic liquidity provisions and
              partnerships with key exchanges.
              <br /> <br />
              Community and Developer Grants - 5% (50 Million ALPHAI Tokens)
              Empowering developers and community initiatives that drive
              innovation within the AlphaNeural AI ecosystem, fostering a
              culture of collaboration and creativity.
              <br /> <br />
              Reserve / Contingency Fund - 5% (50 Million ALPHAI Tokens)
              Reserved for unforeseen opportunities and challenges, this
              strategic fund ensures AlphaNeural AI remains adaptable and
              resilient in the ever-evolving tech landscape.
              <br /> <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
