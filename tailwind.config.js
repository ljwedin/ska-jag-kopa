/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ['Alegreya', 'serif']
      },
      colors: {
        brownie: '#402711'
      }
    }
  },
  plugins: []
}
