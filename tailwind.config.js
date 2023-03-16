/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   spaceg: ["var(--font-spaceg"],
      //   sans: ["var(--font-spaceg)"],
      // },
      backgroundImage: {
        "hero-pattern": "url('/img/hero.jpg')",
      },
      colors: {
        primary: "#4EE1A0",
        grey: "#d9d9d9",
        // black: {
        //   800: "#151515",
        //   900: "#242424",
        // },
      },
    },
  },
  plugins: [],
};
