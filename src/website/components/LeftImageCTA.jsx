/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartWrapper = ({ data, options, onClick }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <Bar ref={chartRef} data={data} options={options} onClick={onClick} />;
};

export default function LeftImageCTA() {
  const [chartKey, setChartKey] = useState(Date.now());
  const chartData = {
    labels: ["Jun", "Jul", "Aug", "Aug", "Aug", "Aug"],
    datasets: [
      {
        id: 1,
        data: [2, 7, 6, 3, 8, 5, 10],
        backgroundColor: ["rgb(128, 105, 210)"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, // This hides just the labels on the x-axis
        },
        grid: {
          display: false, // This hides the vertical grid lines
        },
      },
      y: {
        ticks: {
          display: false, // This hides just the labels on the y-axis
        },
        grid: {
          display: false, // This hides the horizontal grid lines
        },
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
        <div className="gap-8 py-2 px-4 mx-auto max-w-screen-xl xl:gap-20 sm:py-16 lg:px-6 md:grid md:grid-cols-2 md:items-center">
          <div className="border-2 flex flex-col py-8 px-12 rounded-3xl border-primary/20 bg-custom-radial relative overflow-hidden">
            <div className="flex flex-col">
              <h2 className=" text-xl md:text-3xl tracking-tight font-extrabold">
                Introducing the SPL22 NFT
              </h2>
              <p className="font-base md:text-normal text-description-gray">
                ALPHAI
              </p>
              <div className="" style={{ height: "200px", width: "100%" }}>
                <ChartWrapper
                  key={chartKey}
                  data={chartData}
                  options={chartOptions}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col place-self-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
              Earn as you provide the world and AI more value
            </h2>
            <p className="mb-6 font-normal md:text-base text-description-gray">
              In an era where privacy is paramount, AlphaNeural AI stands out by
              offering a Solana-powered platform that leverages zkML for the
              ultimate in data protection and model integrity.
            </p>
            <div className="mb-8 gap-4 flex items-start sm:space-y-0 lg:mb-16">
              <button className="flex text-sm lg:text-base items-center justify-center gap-4 rounded-full bg-primary px-10 py-2">
                Learn more
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
              <button className="items-center text-sm lg:text-base justify-center gap-4 rounded-full border-2 border-primary/50 px-10 py-2 text-description-gray md:flex">
                Read docs
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
