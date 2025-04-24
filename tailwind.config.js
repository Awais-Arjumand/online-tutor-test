// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a435f0",
        secondary: "#1F1D0D",
        borderColor: "#f3e6fc",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
