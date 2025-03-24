const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "aqua-deep": "#4343FC", // Replaced with Iris Core blue
      "neon-carrot": "#DF60FF", // Replaced with Magenta Core
      "boston-blue": "#00C600", // Replaced with Green Core
      "soltitude": "#F7F7FF", // Replaced with Frost Gray
    },
  },
  plugins: [],
};
