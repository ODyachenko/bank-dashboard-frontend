/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2D60FF',
        'primary-red': '#FF4B4A',
        'primary-green': '#41D4A8',
        'secondary-green': '#16DBCC',
        'primary-orange': '#FCAA0B',
        'primary-bg': '#F5F7FA',
        'gray-text': '#B1B1B1',
      },
    },
  },
  plugins: [],
};
