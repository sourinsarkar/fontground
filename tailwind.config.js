/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        toolbarDropdownShadow: ['0px 2px 3px 0px rgba(0, 0, 0, 0.25)'],
      },
      width: {
        "pg": "calc(100vh - 20%)",
      }
    },
  },
  plugins: [],
}

