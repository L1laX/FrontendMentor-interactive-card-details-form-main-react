/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        bgMobile: "url('./src/assets/images/bg-main-mobile.png')",
        bgDesktop: "url('./src/assets/images/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
};
