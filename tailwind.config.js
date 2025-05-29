// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This is the critical setting for dark mode
  theme: {
    extend: {
      colors: {
        // You can customize your theme colors here
      },
    },
  },
  plugins: [],
}