/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2D60FF',
        'secondary-blue': '#718EBF',
        'hover-blue': '#2249c2',
        'primary-red': '#FF4B4A',
        'primary-green': '#41D4A8',
        'secondary-green': '#16DBCC',
        'primary-orange': '#FCAA0B',
        'primary-bg': '#F5F7FA',
        'gray-text': '#B1B1B1',
        'border-gray': '#E6EFF5',
        'overlay-color': 'rgba(0, 0, 0, .5)',
        'gradient-start': '#4C49ED',
        'gradient-end': '#0A06F4',
        'secondary-white': 'rgba(255, 255, 255, .15)',
      },
      height: {
        'block-height': 'calc(100% - 48px)',
      },
    },
  },
  plugins: [],
};
