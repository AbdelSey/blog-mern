/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "500px",
      // => @media (min-width: 500px) { ... }

      lg: "765px",
      // => @media (min-width: 765px) { ... }

      xl: "900px",
      // => @media (min-width: 900px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      transformOrigin: {
        0: "0%",
      },
      backgroundImage: {
        mainBG: "url('./src/assets/images/mainBG.svg')",
        loginBG: "url('./src/assets/images/loginBG.svg')",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    variants: {
      borderColor: ["responsive", "hover", "focus", "focus-within"],
    },
  },

  plugins: [require("daisyui")],
};
