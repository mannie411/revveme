import localFont from "next/font/local";
import { Inter, Paytone_One } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const paytone = Paytone_One({
  variable: "--font-paytone",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

export const fontMapper = {
  "font-inter": inter.variable,
  "font-paytone": paytone.variable,
};
