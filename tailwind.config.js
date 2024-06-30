import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        nav: "900px",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(130.44% 143.46% at 48.15% 107.07%, #2C1459 0%, #170A2F 15.15%, #0B0319 44.82%)",
      },
      colors: {
        "footer-elements": "#96A0B5",
        "accent-dark": "#140C24",
        "description-gray": "#B7C1D6",
        primary: "#8069D2",
        "outline-purple": "#1D1039",
        "primary-red": "#F03D5F",
        "primary-hover": "#BA2C42",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
