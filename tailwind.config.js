/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "hsl(235, 21%, 11%);",
        light: "hsl(236, 33%, 92%);",
        darkcardcolor: "hsl(235, 24%, 19%);",
        lightcardcolor: "hsl(0, 0%, 98%);",
        inactivedarkcolor: "hsl(234, 11%, 52%);",
        activecolor: "#3a7bfd;",
      },
      boxShadow: {
        darker:
          "1px 8px 10px hsla(0, 0%, 7%, 0.877), 2px 5px 7px hsla(0, 0%, 7%, 0.877), 1px 7px 4px hsla(0, 0%, 7%, 0.877)",
        lighter:
          "1px 8px 10px hsla(240, 5%, 85%, 0.603), 2px 5px 7px hsla(240, 5%, 85%, 0.603), 1px 7px 4px hsla(240, 5%, 85%, 0.603)",
      },
    },
  },
  plugins: [],
};
