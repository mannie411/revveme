const { fontFamily } = require("tailwindcss/defaultTheme");

// /** @type {import('tailwindcss').Config} */

const dark = {
  0: "#000",
  1: "#232323",
  2: "#1D1B20",
  3: "#5C5C5C",
  4: "#979797",
  5: "#4C4D50",
  6: "#1D1D1D",
  7: "#1B1B1B",
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
      "3xl": ["3.8rem", "4.75rem"],
      "4xl": ["4.5rem", "5rem"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        "dm-sans": ["var(--font-dm-sans)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
        paytone: ["var(--font-paytone)", ...fontFamily.sans],
      },
      colors: {
        primary: "#76448A",
        secondary: "#4F0072",
        dark,
        accent: "#6019800A",
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
      "slideIn-left": "slideIn-left .6s ease-in-out forwards var(--delay, 0s)",
      "slideIn-top":
        "slideIn-top var(--duration, 0.3s) ease-in-out forwards var(--delay, 0s)",
      scaleIn: "scaleIn .8s ease-in-out forwards var(--delay, 0s)",
      "shake-vertical":
        "shake-vertical 8s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.4s infinite both",
      wiggle: "wiggle 1s ease-in-out infinite",
      "wobble-right": "wobble-right 1.8s  infinite both var(--delay, 0.3s)",
      "wobble-left": " wobble-left 1.8s  infinite both var(--delay, 0.3s)",
    },

    keyframes: {
      "slideIn-left": {
        "0%": { opacity: 0, transform: "translateX(-100%)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
      },
      "slideIn-top": {
        "0%": { opacity: 0, transform: "translateY(-100%)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      scaleIn: {
        "0%": { opacity: 0.5, transform: "scale(0.5)" },
        "100%": { opacity: 1, transform: "scale(1)" },
      },

      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      "shake-vertical": {
        "0%,100%": {
          transform: "translateY(0)",
        },
        "10%,30%,50%,70%": {
          transform: "translateY(-8px)",
        },
        "20%,40%,60%": {
          transform: "translateY(8px)",
        },
        "80%": {
          transform: "translateY(6.4px)",
        },
        "90%": {
          transform: "translateY(-6.4px)",
        },
      },
      "wobble-right": {
        "0%,100%": {
          transform: "translateY(0) rotate(0)",
          "transform-origin": "50% 50%",
        },
        "15%": {
          transform: "translateY(-30px) rotate(6deg)",
        },
        "30%": {
          transform: "translateY(15px) rotate(-6deg)",
        },
        "45%": {
          transform: " translateY(-15px) rotate(3.6deg)",
        },
        "60%": {
          transform: "translateY(9px) rotate(-2.4deg)",
        },
        "75% ": {
          transform: "translateY(-6px) rotate(1.2deg)",
        },
      },
      "wobble-left": {
        "0%,100%": {
          transform: "translateY(0) rotate(0)",

          "transform-origin": "50% 50%",
        },
        "15%": {
          transform: "translateY(-30px) rotate(-6deg)",
        },
        "30%": {
          transform: "translateY(15px) rotate(6deg)",
        },
        "45%": {
          transform: "translateY(-15px) rotate(-3.6deg)",
        },
        "60%": {
          transform: "translateY(9px) rotate(2.4deg)",
        },
        "75%": {
          transform: "translateY(-6px) rotate(-1.2deg)",
        },
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
