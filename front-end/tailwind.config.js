/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myVioletColor: "#5964E0",
        myLightVioletColor: "#939Bf4",
        myVeryDarkBlueColor: "#19202D",
        myMidnightColor: "#121721",
        myWhiteColor: "#FFFFFF",
        myLightGreyColor: "#F4F6F8",
        myGrayColor: "#9DAEC2",
        myDarkGrayColor: "#6E8098",
      },
    },
  },
  plugins: [],
};
