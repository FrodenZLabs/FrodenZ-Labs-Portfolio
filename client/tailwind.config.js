const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#50344C",
        secondary: "#E07727",
        background: "#F5F2F0",
    },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}