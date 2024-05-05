/** @type {import('tailwindcss').Config} */
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightAccent: "#574ae2",
        darkAccent: "#32B6E0",
      },
      animation: {
        fly: "fly 20s linear infinite",
        ufo: "ufo 30s linear infinite",
        grow: "grow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        flicker: "flicker 3s infinite alternate-reverse",
      },
      keyframes: {
        fly: {
          "0%": {
            transform: "translateX(0px) translateY(0px) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(2500px) translateY(-300px) rotate(360deg)",
          },
        },
        ufo: {
          "0%": {
            transform: "translateX(0px) translateY(0px) ",
          },
          "5%": {
            transform: "translateX(-20px) translateY(100px)",
          },
          "12%": {
            transform: "translateX(-20px) translateY(100px)",
          },
          "16%": {
            transform: "translateX(-700px) translateY(0px)",
          },
          "20%": {
            transform: "translateX(-0) translateY(0px)",
          },
        },
        grow: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
        flicker: {
          "0%": {
            "box-shadow":
              "1px 1px 8px #ff448c, -1px -1px 8px #ff448c,1px 1px 8px #ff448c inset, -1px -1px 8px #ff448c inset ",
          },
          "70%": {
            "box-shadow":
              "0px 0px 0px #ff448c, -0px -0px 0px #ff448c,0px 0px 0px #ff448c inset, -0px -0px 0px #ff448c inset ",
          },
          "100%": {
            "box-shadow":
              "1px 1px 8px #ff448c, -1px -1px 8px #ff448c,1px 1px 8px #ff448c inset, -1px -1px 8px #ff448c inset ",
          },
        },
      },
    },
  },
  plugins: [react(), svgr()],
  darkMode: "class",
};
