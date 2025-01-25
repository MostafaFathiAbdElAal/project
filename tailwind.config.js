/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '600px',
        'md': '720px',
        'lg': '960px',
        'xl': '1220px',
        '2xl': '1380px',
      }
    },
    extend: {
      fontFamily: {
        cairo: "Cairo Variable , sans-serif",
        Poppins: "Poppins"
      }
    },
  },
  plugins: [],
}

