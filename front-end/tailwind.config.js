/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myVioletColor: "var(--myVioletColor)",
        myLightVioletColor: "var(--myLightVioletColor)",
        myVeryDarkBlueColor: "var(--myVeryDarkBlueColor)",
        myMidnightColor: "var(--myMidnightColor)",
        myWhiteColor: "var(--myWhiteColor)",
        myLightGreyColor: "var(--myLightGreyColor)",
        myGrayColor: "var(--myGrayColor)",
        myDarkGrayColor: "var(--myDarkGrayColor)",
      },
    },
  },
  plugins: [],
};
