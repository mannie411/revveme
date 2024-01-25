const { fontFamily } = require("tailwindcss/defaultTheme");

// /** @type {import('tailwindcss').Config} */

const dark = {
  0: "#000",
  1: "#232323",
  2: "#1D1B20",
  3: "#5C5C5C",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["1rem", "1.25rem"],
      lg: ["1.5rem", "1.8rem"],
      xl: ["1.8rem", "2rem"],
      "2xl": ["2.5rem", "3rem"],
      "3xl": ["3.8rem", "4.5rem"],
      "4xl": ["4.5rem", "5rem"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        paytone: ["var(--font-paytone)", ...fontFamily.sans],
      },
      colors: {
        primary: "#4F0072",
        dark,
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },

      screens: {
        wide: "1440px",
      },
    },

    animation: {
      "slideIn-left": "slideIn-left .6s ease-in-out forwards var(--delay, 0)",
      scaleIn: "scaleIn .8s ease-in-out forwards var(--delay, 0)",
      wiggle: "wiggle 1s ease-in-out infinite",
    },
    keyframes: {
      "slideIn-left": {
        "0%": { opacity: 0, transform: "translateX(-100%)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
      },
      scaleIn: {
        "0%": { opacity: 0.5, transform: "scale(0.5)" },
        "100%": { opacity: 1, transform: "scale(1)" },
      },
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   presets: [require("@vercel/examples-ui/tailwind")],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@vercel/examples-ui/**/*.js",
//   ],
// };

// backgroundImage: {
//   hero: "url('assets/images/collection-background.svg')",
//   card: "url('assets/images/thumbnail-background.svg')",
// },
